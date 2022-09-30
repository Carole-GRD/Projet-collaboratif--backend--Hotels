
const chambreRouter = require("./chambreRouter");
const hotelRouter = require("./hotel-router");
const userRouter = require("./user-router")
const authRouter = require ("./auth-router")



const router = require('express').Router();



router.use('/user',userRouter)
router.use('/hotels',hotelRouter) //Attention avec Axios 
router.use('/chambres',chambreRouter) //Attention avec Axios
router.use('/auth',authRouter)



module.exports = router;