const yup = require('yup');

const idRegex = /^[a-f\d]{24}$/i;

const chambreValidator = yup.object({
    nom : yup.string().trim().required().min(1).max(50),
    descriptionCourte: yup.string().trim().required().min(10).max(200),
    descriptionLongue : yup.string().trim().required().min(200).max(700),
    hotel: yup.string().required().matches(idRegex),
    type: yup.string().trim().required().trim(),
    nombreDePersonnes: yup.number().required().positive(),
    prix:yup.number().required().positive(),
    salleDeBain:yup.number().required().positive(),
    nombreDeWc:yup.number().required().positive(),
    options:yup.object({
        balcon:yup.boolean(),
        airConditione: yup.boolean(),
        wifi:yup.boolean(),
        minibar : yup.boolean(),
        animaux : yup.boolean(),
        tv : yup.boolean(),
        dejeuner: yup.boolean(),
        disponible: yup.boolean(),

    }),
    chambreStatus:yup.boolean(),

    chambreReservation:yup.array().of(yup.object({
        dateDebut:yup.string().required().trim(),
        dateFin:yup.string().trim()
    })),
    image:yup.string()


})



module.exports = chambreValidator;