const { Router } = require("express")
const userregistercontroller = require('../controller/auth.controller')




const authRouter = Router()



authRouter.post('/register', userregistercontroller.userregistercontroller)
authRouter.post('/login', userregistercontroller.userlogincntroller)


module.exports = authRouter




