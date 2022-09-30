const authController = require ("../controlers/identification-controller");
const bodyValidation = require ("../middlewares/bolyValidators")

const {registerValid,logValidator} = require ("../validateur/auth-validator")

const authRouter = require("express").Router();

authRouter.route ('/register') 
    .post( bodyValidation(registerValid),authController.register)

authRouter.route('/login')
    .post(bodyValidation(logValidator),authController.login)


module.exports = authRouter 