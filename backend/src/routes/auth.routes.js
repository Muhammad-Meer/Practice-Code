const { Router } = require("express");
const userregistercontroller = require('../controller/auth.controller');
const authmiddleware = require('../middleware/auth.middleware');




const authRouter = Router()



authRouter.post('/register', userregistercontroller.userregistercontroller)
authRouter.post('/login', userregistercontroller.userlogincontroller)
authRouter.post('/logout', userregistercontroller.userlogoutcontroller)


// https://www.bsek.edu.pk/#/results


authRouter.get('/get-me', authmiddleware.authuser, userregistercontroller.getmecontroller)




module.exports = authRouter




