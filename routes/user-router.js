const userController = require("../controlers/user-controller")

const bodyValidation = require("../middlewares/bolyValidators");
const idValidator = require("../middlewares/idValidator");
const userValidateur = require("../validateur/user-validator.js");

const authentification = require ('../middlewares/identification-token-middlewares')

const userRouter = require('express').Router();


userRouter.route('/')
    
    .get(authentification(["Admin"]),userController.getAll) // GetAll User avec la méthode GET
    // .get(userController.getAll) // GetAll User avec la méthode GET
    
    

userRouter.route('/:id')

    .get(idValidator(),userController.getByID) //GetById

    .put(bodyValidation(userValidateur), userController.update)

    .delete(idValidator(),userController.delete)
    






module.exports = userRouter;