const { Router } = require("express")
const userregistercontroller = require('../controller/auth.controller')




const authRouter = Router()



authRouter.post('/register', userregistercontroller.userregistercontroller)


module.exports = authRouter




