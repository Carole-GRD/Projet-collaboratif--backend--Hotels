


const bodyValidation =  (yupValidator)  => {

    return async (req,res,next) => {
        
        try{
            
            
            
            const valiData = await yupValidator.noUnknown().validate(req.body,
                {
                    abortEarly : false
                })
                
                req.body = valiData;
                
                next();
        }
        
        catch(e) {
            console.log(e);
            return  res.sendStatus(400).json(e); 
        }

    }

}

module.exports = bodyValidation;