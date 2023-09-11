const userdao = require('../dao/userdao')
const jwtGenerator = require('../utils/jwtGenerator')
const bcrypt = require('bcryptjs')

class userservice {
    async register(user){
       const{fname,lname,email,password} = user;
       console.log("userservice user---->",user);
       const salt = await bcrypt.genSalt(10);
       const bcryptpassword = await bcrypt.hash(password,salt);

       const existedUser = await userdao.getbyemail(email);

       if(existedUser){
           return{message:"user exists"}
       }

       let newUser = await userdao.adduser(fname,lname,email,bcryptpassword);
       console.log("newUser---->",newUser)
       const jwtToken = jwtGenerator(newUser);
       return{jwtToken}
    }

    async login(user){
       const {email, password} = user;
       console.log("login====>",user);
       let getUser;
try{       
      
           getUser = await userdao.getbyemail(email);
           console.log("getUser by email ===>", getUser);
           
      

       if(!getUser){
           return {message:"user not found"}
       }

       const validpassword = await bcrypt.compare(password, getUser.password);

       if(!validpassword){
           return{message:"invalid password!!"};
       }

       const jwtToken = jwtGenerator(getUser);
       return {jwtToken};
    }catch (error) {
       console.error("Error in login function:", error);
       return { message: "An error occurred." };
     }
   }
  
   
   
   
   
   
   

}module.exports = new userservice();
