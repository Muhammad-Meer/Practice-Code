const usermodel = require('../models/usermodel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


async function userregistercontroller(req, res) {

  const { username, email, password } = req.body

  try {
    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields are required" })
    }

    const useralredyexist = await usermodel.findOne({
      $or: [{ username }, { email }]
    })

    if (useralredyexist) {
      return res.status(400).json({ message: "User already exists" })
    }

    const hash = await bcrypt.hash(password, 10)


    const newuser = await usermodel.create({
      username,
      email,
      password
    })

    const token =  jwt.sign({ id: newuser._id }, process.env.SECRET_KEY, { expiresIn: '2d'})

    res.c


    return res.status(201).json({
      message: "User registered successfully",
      user: newuser
    })

  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}


async function userlogincntroller(req, res) {


}

module.exports = {
  userregistercontroller
}
