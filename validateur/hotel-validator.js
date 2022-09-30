const yup = require('yup');

const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;



const hotelValidator = yup.object({
    nom : yup.string().trim().required().min(2).max(50),
    etoiles : yup.number().required().positive(),
    adresse : yup.object({
        CP: yup.string().trim().required(),
        numero : yup.string().trim().required(),
        pays: yup.string().trim().required(),
    }),
    telephone: yup.string().trim().required().matches(phoneRegex),
    email:yup.string().trim().required().matches(emailRegex),
    nombreChambres: yup.number().required().positive(),
    piscine:yup.boolean(),
    voiturier:yup.boolean(),
    roomService:yup.boolean(),
    image:yup.string()

});

module.exports = hotelValidator;