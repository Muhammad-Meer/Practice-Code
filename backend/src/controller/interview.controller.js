const pdf = require('pdf-parse');
const  {generateInterviewReport}  = require("../services/ai.service");
const interviewReportmodel = require('../models/interview.Report');

async function interviewcontroller(req, res) {
  console.log("FILE:", req.file);
  console.log("BODY:", req.body);

  const data = await 
  (new pdf.PDFParse(Uint8Array.from(req.file.buffer)).getText());

  const { selfDescription , jobDescription } = req.body;

  const interviewReportByAi = await generateInterviewReport(
    data.text,
    selfDescription,
    jobDescription
  );

  const interviewReport = await interviewReportmodel.create({
    user: req.user._id,
    resume: data.text,
    selfDescription,
    jobDescription,
    ...interviewReportByAi
  });

  res.status(200).json({
    message: "interview report generated successfully",
    interviewReport
  });
}
module.exports = { interviewcontroller };