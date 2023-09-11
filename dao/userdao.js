const pool = require('../db');
 

class userdao{
    async adduser(fname, lname, email, password){
        console.log("userdao...",fname, lname, email, password)
        try{
            const user = await pool.query("INSERT INTO user_master (fname,lname,email,password) VALUES($1,$2,$3,$4) RETURNING * ",
            [ fname, lname, email, password]);
            console.log("user dao=====>", fname, lname, email, password);
            return user.rows[0];
        }catch(error){
            console.log("user insert dao erro====>",error);
        }

    }
    async getbyemail(email){
        try{
           
            const user = await pool.query("SELECT * FROM user_master WHERE email = $1",[email])
            console.log("user dao email get====>",user.rows)
            return user.rows[0]
        }
        catch(error){
            console.log("user dao get email====>",error)
        }
    }

    




}
module.exports = new userdao();
