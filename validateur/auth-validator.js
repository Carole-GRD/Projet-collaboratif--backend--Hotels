const yup=require('yup')

const pwdRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W|_]).+$/;
const phoneRegex = /^([+]?\d{1,2}[-\s]?|)\d{3}[-\s]?\d{3}[-\s]?\d{4}$/;
// contient au moins un chiffre, une lettre minuscule, une lettre majuscule et un caractère spécial

const registerValid=yup.object({
    pseudo : yup.string().trim().required().min(3).max(50),
    firstname:yup.string().trim().required().min(2).max(110),
    lastname:yup.string().trim().required().min(2).max(100),
    password:yup.string().trim().required().matches(pwdRegex),
    email:yup.string().trim().required().max(255),
    country:yup.string().trim().required().max(50),
    phone:yup.string().trim().required().matches(phoneRegex)
});
const logValidator=yup.object({
    credential : yup.string().trim().required().max(255),
    password : yup.string().required()
});

module.exports={registerValid,logValidator}