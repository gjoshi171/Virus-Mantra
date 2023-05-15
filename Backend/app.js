const express = require('express');
require('dotenv').config()
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

const User = mongoose.model("userInfoPlasma")

app.post("/register", async(req, res)=>{
    const { fullName, email, password, 
    city,
    state,
    country,
    contactNo,
    fullAddress,
    bloodType} = req.body;
    //const {fname,lname, email, password} = req.body;
    try{
        const encryptedPassword = await bcrypt.hash(password, 10);
        const olduser = await User.findOne({email});
        if(olduser){
           return res.send({error: "User Exists"})
        }
        //const encryptedPassword = await bcrypt.hash(password, 10);
        await User.create({
            fullName,
            email,
            password: encryptedPassword, 
            city,
            state,
            country,
            contactNo,
            fullAddress,
            bloodType,
        });
        res.send({status:"OK"})
    } catch (error){
        res.send({status:"error"})
    }
});

app.get("/getDonar/:city", async(req, res)=>{
  fetchCity= req.params.city

  try {
   
      const allUser = await User.find({city: fetchCity});
      res.json(allUser)
      res.send({status:"OK", data: allUser})
  } catch (error){
      res.send({status:"error"})
   
  }
});

app.post("/login", async (req, res) => {
    const { email, password } = req.body;
  
    const user = await User1.findOne({ email });
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

