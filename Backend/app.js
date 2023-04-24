const express = require('express');
require('dotenv').config()
require("./userDetails")
require("./userDetailsPlasma")

const app = express()
app.use(express.json())
const mongoose = require('mongoose');
const cors= require("cors");
const bcrypt= require("bcryptjs");
const jwt = require("jsonwebtoken")

const JWT_SECRET= "eyJzdWIiOiIxMjM0NTY3fakjsf8feTl8f4j34of";

app.use(cors());

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser:true, useUnifiedTopology:true}).then(()=> {
    console.log('Database is connected')
}).catch(err=> console.log(err.message))


app.listen(8081, () =>{
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
        const encryptedPassword = await bcrypt.hash(password, 10);
        const olduser = await User.findOne({email});
        if(olduser){
           return res.send({error: "User Exists"})
        }
        //const encryptedPassword = await bcrypt.hash(password, 10);
        await User.create({
            fname,
            lname,
            email,
            password: encryptedPassword,
        });
        res.send({status:"OK"})
    } catch (error){
        res.send({status:"error"})
    }
});

app.post("/login", async (req, res) => {
    const { email, password } = req.body;
  
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ error: "User Doesn't Exist" });
    }
    if (await bcrypt.compare(password, user.password)) {
      const token = jwt.sign({}, JWT_SECRET, {
        //expiresIn: "15m",
      });
  
      if (res.status(201)) {
        return res.json({ status: "ok", data: token });
      } else {
        return res.json({ error: "error" });
      }
    }
    res.json({ status: "error", error: "InvAlid Password" });
  });

  const UserPlasma = mongoose.model("userInfoPlasma")
  app.post("/donate", async(req, res)=>{
      const {fname, lname, bloodType, city, state, country, contactNo, ConpleteAddress } = req.body;
      try{
          await UserPlasma.create({
              fname,
              lname,
              bloodType, 
              city, 
              state, 
              country, 
              contactNo, 
              ConpleteAddress,
          });
          res.send({status:"OK"})
      } catch (error){
          res.send({status:"error"})
      }
  });