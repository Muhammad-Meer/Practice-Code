const { Router } = require("express");
const userregistercontroller = require('../controller/auth.controller');
const authmiddleware = require('../middleware/auth.middleware');




const authRouter = Router()



authRouter.post('/register', userregistercontroller.userregistercontroller)
authRouter.post('/login', userregistercontroller.userlogincntroller)
authRouter.post('/logout', userregistercontroller.userlogoutcontroller)


// https://www.bsek.edu.pk/#/results





module.exports = authRouter




