// src/services/ai.service.js
const OpenAI = require("openai");
const z = require("zod");
const { zodToJsonSchema } = require("zod-to-json-schema");

const groq = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
});

const InterviewReportSchema = z.object({
  matchScore: z.number().min(0).max(100),
  technicalQuestions: z.array(z.object({
    question: z.string(),
    intention: z.string(),
    answer: z.string(),
  })),
  behavioralQuestions: z.array(z.object({
    question: z.string(),
    intention: z.string(),
    answer: z.string(),
  })),
  skillGraph: z.array(z.object({
    skill: z.string(),
    severity: z.enum(["Low", "Medium", "High"]),
  })),
  preparationPlan: z.array(z.object({
    day: z.number(),
    focus: z.string(),
    tasks: z.string(),
  })),
});

async function generateInterviewReport(resume, selfDescription, jobDescription) {
  const schemaExample = {
    matchScore: 85,
    technicalQuestions: [
      { question: "...", intention: "...", answer: "..." }
    ],
    behavioralQuestions: [
      { question: "...", intention: "...", answer: "..." }
    ],
    skillGraph: [
      { skill: "React", severity: "High" }
    ],
    preparationPlan: [
      { day: 1, focus: "...", tasks: "..." }
    ]
  };

  const prompt = `
You are an expert career coach and technical interviewer.

Analyze the resume, self-description, and job description.

**STRICT RULES:**
- Return ONLY valid JSON. No explanation, no markdown, no extra text.
- Follow the exact schema structure.
- All arrays must have at least 2-3 items.
- matchScore must be a number between 0-100.
- Never return null or undefined for any field.

Schema Example:
${JSON.stringify(schemaExample, null, 2)}

Resume:
${resume || "Not provided"}

Self Description:
${selfDescription || "Not provided"}

Job Description:
${jobDescription || "Not provided"}
`;

  let retries = 3;

  while (retries > 0) {
    try {
      const response = await groq.chat.completions.create({
        model: "llama-3.1-8b-instant",
        // model: "llama-3.3-70b-versatile",   // Better results (uncomment if needed)
        messages: [
          {
            role: "system",
            content: "You are a strict JSON output generator. Always respond with clean, valid JSON matching the requested structure. Do not add any text outside the JSON object."
          },
          { role: "user", content: prompt },
        ],
        response_format: { type: "json_object" },
        temperature: 0.3,
        max_tokens: 3000,
      });

      let content = response.choices[0].message.content.trim();

      // Clean common issues
      content = content.replace(/^```json\s*|\s*```$/g, '').trim();

      let parsedData;
      try {
        parsedData = JSON.parse(content);
      } catch (e) {
        throw new Error("Failed to parse JSON from model");
      }

      // Zod validation with safe parsing
      const validated = InterviewReportSchema.safeParse(parsedData);

      if (!validated.success) {
        console.error("Zod Validation Failed:", validated.error.issues);
        throw new Error("Model returned invalid structure");
      }

      return validated.data;
    } catch (error) {
      console.error("Groq Error:", error.message);

      if (error.status === 429 || error.code?.includes("rate_limit")) {
        retries--;
        if (retries === 0) throw new Error("Rate limit exceeded. Try later.");
        await new Promise(r => setTimeout(r, 8000));
      } else {
        retries--;
        if (retries === 0) throw error;
        await new Promise(r => setTimeout(r, 5000));
      }
    }
  }
}

module.exports = { generateInterviewReport };