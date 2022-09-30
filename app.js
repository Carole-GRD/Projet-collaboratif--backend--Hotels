

require("dotenv-flow").config()

const express =  require("express");

const cors = require("cors")

const {DB_CONNECTION,PORT} = process.env

console.log("Lancé en"  , PORT)



require('express-async-errors')

const mongoose = require('mongoose')

const app = express();

app.use(cors())


const router = require("./routes");


app.use(async(req,res,next) => {
    await mongoose.connect(DB_CONNECTION)
    
    console.log('Connection réussie ! ')
    next();
})


app.use(express.json())
app.use('/api',router)



app.listen(PORT,() => {
    console.log(`Server up sur le port  : ${PORT}`)
})

//! ADD cors
//! ADD cors
//! ADD cors
//! ADD cors
//! ADD cors 