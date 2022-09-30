const {Schema, model} = require('mongoose');

const hotelSchema = new Schema ({
    nom: {
        type: String,
        required : true , 
        trim : true
    },
    etoiles : {
        type : Number,
        required : true,
    },
    adresse : {
        CP :{type : String, required : true, trim : true},
        numero : {type: String , required : true , trim : true},
        rue:{type : String , required : true , trim : true },
        pays:{type:String,required:true,trim:true}
    },
    telephone:{
        type : String , 
        required : true,
        trim : true
    },
    email:{
        type : String , 
        required : true,
        trim : true,
        unique : true

    },
    nombreChambres:{
        type : Number , 
        required : true

    },
    piscine : {
        type : Boolean,
        default:false,
    },
    voiturier:{
        type : Boolean,
        default:false,

    },
    roomService : {
        type : Boolean,
        default:false,

    },
    image : {
        type : String    
    }
},{
    collection : 'Hotel',
    timestamps : true
});

const Hotel = model('Hotel',hotelSchema);

module.exports = Hotel;