const express = require('express');
const cors = require('cors');
const authRouter = require('./routes/auth.routes');
const interviewrouter = require('./routes/interview.routes');
const cookieparser = require('cookie-parser');




const app = express();


app.use(express.json());
app.use(cookieparser())


app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}))

app.use('/api/auth', authRouter)
app.use('/api/interview', interviewrouter )
app.post('/', (req, res) => {
  res.send("hello")
})

app.get('/', (req, res) => {
  res.send("hello")
})



module.exports = app;