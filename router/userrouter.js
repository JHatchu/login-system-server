const router = require('express').Router()
const userservice = require('../service/userservice');

router.post("/register",async(req,res) => {
    console.log("r1====",req.body)
    try{
        const result = await userservice.register(req.body)
        res.json(result)
    }catch(error){
        console.log(error)
    }
})




router.post('/login',async(req,res)=>{
    user = req.body
    try{
        const result = await userservice.login(user);
        console.log("router login result====>",result)
        res.json(result);

    }catch(error){
        console.log("router login===>",error)
    }
})
module.exports = router