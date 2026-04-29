const mongoose = require('mongoose');

const connectDB = async () => {
    try {
      await mongoose.connect(process.env.MONGO_URI,)

      .then(() => {
      console.log("mongodbconnectd successfully")
      })

      .catch((err) => {
        console.log("mongodb connectionn failed", err)
      })
    } catch (error) {
      console.log("mongodb eroor", error)
    }
}

module.exports = connectDB;