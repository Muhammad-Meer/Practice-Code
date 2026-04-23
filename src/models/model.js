const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "username is required"]
  },


  email: {
    type: String,
    required: [true, "account is already exist"],
    unique: [true, "account is already exist"]
  },


  password: {
    type: String,
    required: [true, "password is required"]
  },


  username: {
    type: String,
    required: [true, "username is required"]
  },
})