const hotelRouter = require ('express').Router();
const hotelController = require("../controlers/hotel-controller.js")
const hotelValidator = require("../validateur/hotel-validator")

const bodyValidator = require ('../middlewares/bolyValidators')



hotelRouter.route('/')
    .get(hotelController.getAll)
    .post(bodyValidator(hotelValidator),hotelController.create)


hotelRouter.route('/:id')
    .get(hotelController.getById)
    .put( bodyValidator(hotelValidator), hotelController.update)
    .delete(hotelController.delete)



module.exports = hotelRouter;