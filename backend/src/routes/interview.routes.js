const express = require('express');
const { authuser } = require('../middleware/auth.middleware');
const {interviewcontroller} = require('../controller/interview.controller');
const upload = require('../middleware/multer.middelware');

const interviewrouter = express.Router();

interviewrouter.post(
  "/interview",
  upload.single("resume"),
  authuser,
  interviewcontroller
);

interviewrouter.post(
  "/interview",
  upload.single("resume"),
  authuser,
  interviewcontroller
);



interviewrouter.post(
  "/interview",
  upload.single("resume"),
  authuser,
  interviewcontroller
);


module.exports = interviewrouter;