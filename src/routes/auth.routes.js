const { Router } = require("express")
const userregistercontroller = require('../controller/auth.controller')




const authRouter = Router()



authRouter.post('/', userregistercontroller.userregistercontroller)


module.exports = authRouter




