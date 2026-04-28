const jwt = require('jsonwebtoken');

const authuser = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    req.user = decoded;

    next(); 

  } catch (error) {
    return res.status(401).json({ message: "invalid token" });
  }
}

module.exports = { authuser };