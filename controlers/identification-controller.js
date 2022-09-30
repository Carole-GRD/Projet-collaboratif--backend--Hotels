const  User=require('../models/user-model');

const tokenUtils=require('../token/token')

const argon2=require('argon2');

const identificationController={
    login: async(req,res) => {
    //Pour se loger un identifiant et un mdp 

    const {credential,password}=req.body
    //req.body va contenir un objet qui ressemble à ceci :
        // {
        //  "credential" : "monIdentifiant"; 
        //  "password" : "monPassword"
        // }
        console.log(credential)
        const credentialFilter={
            $or :
            [{email:credential},
            {pseudo:credential} 
            ]                   }

        const user = await User.findOne(credentialFilter);
        //vérifie si on a récupérer un utilisateur
        if (!user) {
            return res.status(401).json({error:'non autorisée'}) //401 -> Unauthorized -> Pas les bonnes infos de login
        }
        const verifierPassword=await argon2.verify(user.password,password)

        if (!verifierPassword) {
            
            return res.status(401).json({error:'non autorisée'}) //401 -> Unauthorized -> Pas les bonnes infos de login
            
        }

    
        const token=await tokenUtils.generate(user);
        return res.status(200).json({token});
    },
    register:async(req,res)=>{ 
        
        const {pseudo,firstname, lastname,email,password,country,phone}=req.body;
        console.log(req.body);
        const hashPasword=await argon2.hash(password);
        // un nouvel utilisateur à partir des infos sur req.body



        const insertUser=User({
            pseudo,
            firstname,
            lastname,
            email,
            password:hashPasword,
            country,
            phone
        });
        await insertUser.save();
        
        const token=await tokenUtils.generate(insertUser);
        res.status(200).json({token});

    }
};

module.exports=identificationController;
