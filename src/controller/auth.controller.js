const usermodel = require('../models/usermodel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const blacklistmodel = require('../models/blacklist.model');


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

    const hashpassword = await bcrypt.hash(password, 10)


    const newuser = await usermodel.create({
      username,
      email,
      password: hashpassword
    })

    const token = jwt.sign({ id: newuser._id }, process.env.SECRET_KEY, { expiresIn: '2d' })

    res.cookie('token', token,)


    return res.status(201).json({
      message: "User registered successfully",
      user: newuser
    })

  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}


async function userlogincntroller(req, res) {

  const { email, password } = req.body;

  try {

    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const user = await usermodel.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Invalid credentials user not found " });
    }

    const ismatch = await bcrypt.compare(password, user.password);

    if (!ismatch) {
      return res.status(400).json({ message: "Invalid credentials password not match " });
    }

    // ✅ token generate
    const token = jwt.sign(
      { id: user._id },
      process.env.SECRET_KEY,
      { expiresIn: '2d' }
    );

    res.cookie('token', token);

    return res.status(200).json({
      message: "Login successful",
      user
    });

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

}

async function userlogoutcontroller(req, res) {
  const token = req.cookies.token;

  try {
    if (token) {
      await blacklistmodel.create({ token });
      res.clearCookie('token');

      return res.status(200).json({ message: "Logout successful" });
    }


  } catch (error) {
     
  }

}
module.exports = {
  userregistercontroller,
  userlogincntroller,
  userlogoutcontroller
}