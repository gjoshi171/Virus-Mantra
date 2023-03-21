const express = require('express');
require('dotenv').config()
require("./userDetails")

const app = express()
app.use(express.json())
const mongoose = require('mongoose');
const cors= require("cors");

app.use(cors());

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser:true, useUnifiedTopology:true}).then(()=> {
    console.log('Database is connected')
}).catch(err=> console.log(err.message))


app.listen(8080, () =>{
    console.log("port is working");
});

// app.get('/', (req, res) => {
//     res.send('<h1>Hi there! </h1>')
// })

// app.post('/post', async(req, res)=>{
//     console.log(req.body);
//     const {data} = req.body;

//     try{
//    if(data == "gaurav"){
//     res.send({status: "OK"})
//    }
//     else{
//         res.send({status : "user not found"});
//     }}
//     catch(error){
//         res.send({status : "Some thing happend, try again"})
//     }
//});

const User = mongoose.model("userInfo")
app.post("/register", async(req, res)=>{
    const {fname,lname, email, password} = req.body;
    try{
        await User.create({
            fname,
            lname,
            email,
            password,
        });
        res.send({status:"OK"})
    } catch (error){
        res.send({status:"error"})
    }
});

