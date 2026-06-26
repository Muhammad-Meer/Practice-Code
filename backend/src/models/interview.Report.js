const mongoose = require('mongoose');

const technicalQuestionSchema = new mongoose.Schema({
  question: { type: String, required: true },
  intention: { type: String, required: true },
  answer: { type: String, required: true }
}, { _id: false });

const behavioralQuestionSchema = new mongoose.Schema({
  question: { type: String, required: true },
  intention: { type: String, required: true },
  answer: { type: String, required: true }
}, { _id: false });

const SkillGraphSchema = new mongoose.Schema({
  skill: { type: String, required: true },
  severity: {
    type: String,
    enum: ["Low", "Medium", "High"],
    required: true
  }
}, { _id: false });

const PreparationPlanSchema = new mongoose.Schema({
  day: { type: Number, required: true },
  focus: { type: String, required: true },
  tasks: { type: String, required: true }
}, { _id: false });

const interviewReportSchema = new mongoose.Schema({
  jobDescription: { type: String, required: true },
  resume: String,
  selfDescription: [String],

  matchScore: {
    type: Number,
    min: 0,
    max: 100
  },

  technicalQuestions: [technicalQuestionSchema],
  behavioralQuestions: [behavioralQuestionSchema],
  skillGraph: [SkillGraphSchema],
  preparationPlan: [PreparationPlanSchema]

}, { timestamps: true });

module.exports = mongoose.model("InterviewReport", interviewReportSchema); 