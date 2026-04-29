const jwt = require('jsonwebtoken');
const tokenblacklistmodel = require('../models/blacklist.model');

const authuser = async (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "unauthorized" });
  }

 
  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    const tokenisblocklisted = await tokenblacklistmodel.findOne({ token });

    if (tokenisblocklisted) {
      return res.status(401).json({
        message: "token is blacklisted"
      });
    }

    req.user = decoded;
    next();

  } catch (error) {
    return res.status(401).json({ message: "invalid token" });
  }
};

module.exports = { authuser };