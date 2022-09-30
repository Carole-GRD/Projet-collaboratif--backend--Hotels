
const chambreRouter = require('express').Router();

// const identification = require ('../middlewares/identification-token-middlewares') //!

const chambreController = require('../controlers/chambre-controller.js');


chambreRouter.route('/')

.get (chambreController.getAll)



.post(chambreController.create)

chambreRouter.route('/:id')

    .get(chambreController.getById)

    // .put(identification("Admin"),chambreController.update)
    .put(chambreController.update)


    .delete(chambreController.delete)


chambreRouter.route('/active/:id')


.put(chambreController.desactive)

chambreRouter.route('/reservation')

.put(chambreController.reservation)



    

module.exports = chambreRouter;