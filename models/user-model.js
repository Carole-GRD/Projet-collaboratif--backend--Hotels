const{Schema,model}=require('mongoose');

//Création d'un schema par défaut

const userSchema=new Schema({
    pseudo:{
        type : String,
        required : true,
        unique : true,
        trim : true
    } ,
    firstname:{
        type:String,
        required:true,
        trim:true
    },
    lastname:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true,
        trim:true

    },
    phone:{
        type:String,
        required:true,
        trim:true
    },
    role:{
        type:String,
        enum:['User','Admin'],
        required:true,
        default:'User'
    }
},{
    collection:'User',
    timestamps:true
});
//model User à partir du userSchema
const User= model('User',userSchema);

module.exports=User;