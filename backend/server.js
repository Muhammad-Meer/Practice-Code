const dotenv = require('dotenv').config();
const app = require('./src/app');
const { resume,selfDescription, jobDescription} = require('./src/services/temp');
const connectDB = require('./src/config/database')
 


connectDB();
const port = process.env.PORT || 3200;


app.listen(port, () => {
   console.log("server is runing http://localhost:" + port);
})
