const mongoose = require('mongoose')

const idValidator = () => {

    return (req,res,next) => {
        const id = req.params.id;
       

        if(!mongoose.isValidObjectId(id)){
            res.sendStatus(400)
            console.log("L'id est inexistant ! Veuillez verifier si vous avez bien rentré ce dernier.")
            return;
        }   
        next()
    }
}

module.exports = idValidator;