const jwt = require('jsonwebtoken');
require("dotenv").config({path:__dirname+'/./../../.env'});

module.exports = function(req,res,next){
    const token = req.header("jwt_token");

    if(!token){
        return res.status(403).json({msg:"authorization denied"});
    }

    try{
        if(token){
            const verify = jwt.verify(token,process.env.jwtSecret);
            req.user= verify.user;
        }
        next();
    }
    catch(error){
        
        res.status(401).json({msg:"invalid token"});
        console.log("authorize====>",error)
    }
}
  