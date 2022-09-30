const User = require ("../models/user-model.js")

const tokenUtils = require("../token/token");

//roles sera un tableau qui contient tous les roles qui ont accès à la route
const identification= (roles) =>{
    return async(req,res,next)=>{

        const identHeader=req.headers['authorization'];

        const token= identHeader ? identHeader.split(' ')[1]: false;

        //Si pas récupéré de token
        if (!token) {
            
            return res.sendStatus(401) 
            
             //non autorisée à accéder à cette route
        }
        
        
        //si token récup
        let decodedToken;
        try {
            decodedToken = await tokenUtils.decode(token);
        } catch (error) {
            return res.sendStatus(403)
        }

        if (roles) {
            const userDataBase= await User.findById(decodedToken.id);

            const userDataBaseRole=userDataBase.role;

            if (!roles.includes(userDataBaseRole)) 
            {
                return res.sendStatus(403) //Pas les droit d'acces
            }
        }
        req.user = decodedToken;
        next();
    }
}

module.exports = identification;