
const {Schema, model, Types} = require('mongoose');
const Hotel = require('./hotel-model');


const chambreSchema = new Schema ({
    nom : {
        type : String,
        required : true,
        trim:true,
    },
    descriptionCourte:{
        type : String,
        required : true,
        trim : true
    },
    descriptionLongue : {
        type : String,
        required : true,
        trim : true
    },
    hotel : {
        type : Types.ObjectId,
        required : true,
        ref:Hotel
    },
    type : {
        type : String,
        required : true,
        trim : true
    },
    nombreDePersonnes:{
        type:Number,
        required:true,
    },
    prix:{
        type:Number,
        required:true,
    },
    salleDeBain : {
        type:Number,
        required:true,
    },
    nombreDeWc : {
        type:Number,
        required : true ,
    },
    options : {
        balcon: {type : Boolean, default:false},
        airConditione : {type : Boolean, default:false},
        wifi : {type : Boolean, default:false},
        minibar : {type : Boolean, default:false},
        animaux : {type : Boolean, default:false},
        tv : {type : Boolean, default:false},
        dejeuner : {type : Boolean, default:false},
        disponible : {type : Boolean, default:false}

    },
    chambrestatus:{
        type:Boolean,
        default : true
        
    },
    chambreReservation:[{
        dateDebut :{
            type :String,
            required: true,
            trim:true
        } ,
        dateFin :{
            type :String,
            trim : true
        } 
    }],
    image : {
        type : String
    }


},{
    collection : 'Chambre',
    timestamps : true
}
);

const Chambre = model('Chambre', chambreSchema);
module.exports = Chambre;