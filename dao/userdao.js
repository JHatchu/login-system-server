const pool = require('../db');
 

class userdao{
    async adduser(user_id, fname, lname, email, password){
        try{
            const user = await pool.query("INSERT INTO user_master (user_id,fname,lname,email,password) VALUES($1,$2,$3,$4,$5) RETURNING * ",
            [user_id, fname, lname, email, password]);
            console.log("user dao=====>",user_id, fname, lname, email, password);
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

    async getbyuser_id(user_id){
        try{
           
            const user = await pool.query("SELECT * FROM user_master WHERE user_id = $1",[user_id])
            console.log("user dao user_id get====>",user.rows)
            return user.rows[0]
        }
        catch(error){
            console.log("user dao get userid====>",error)
        }
    }




}
module.exports = new userdao();