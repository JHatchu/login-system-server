const jwt = require('jsonwebtoken');
require ("dotenv").config({path:__dirname+'/../.env'})

function jwtGenerator(user){
    const {uid,user_id,firstName,lastName,email} = user

    const payload = {
        user:{
            id:uid,
            user_id:user_id,
            userName:firstName+" "+lastName,
            email:email
        }
       
    }
    return jwt.sign(payload, process.env.jwtSecret, {
        expiresIn: '1h' 
      });
}
module.exports = jwtGenerator;