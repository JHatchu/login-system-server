const express = require('express')
const cors = require('cors')
const userrouter = require('./router/userrouter')

const app = express();

app.use(cors({methods:['GET','POST','DELETE','UPDATE','PUT','PATCH']}));
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("api")
});

app.listen(4250,()=>{
    console.log("port started in 4250");    
})
app.use("/user",userrouter);

