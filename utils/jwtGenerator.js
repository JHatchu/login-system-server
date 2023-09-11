const jwt = require('jsonwebtoken');
require ("dotenv").config({path:__dirname+'/../.env'})

function jwtGenerator(user){
    const {uid,fname,lname,email} = user

    const payload = {
        user:{         
            id:uid,
            userName:fname+" "+lname,
            email:email
        }
       
    }
    return jwt.sign(payload, process.env.jwtSecret, {
        expiresIn: '1h' 
      });
}
module.exports = jwtGenerator;
