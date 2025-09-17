import { Router } from "express";
import jwt from 'jsonwebtoken'
import bcrypt from "bcrypt"
import { signup } from "../Models/model.js"

const router = Router();

router.post('/SignUp',async(req,res)=>{
    try{
    const {UserName,Email,Password} = req.body
    const existingUser = await signup.findOne({$or:[{userName: UserName},{email: Email}]})
    if(existingUser){
        res.status(404).json({msg:"User Already Exist"})
        console.log("User Already Exist");
    }else{
    const newPassword = await bcrypt.hash(Password,10)
    const newUser = new signup({
        userName:UserName,
        email:Email,
        password:newPassword,
        userRole:"user"
    });
    await newUser.save();
    res.status(200).json({msg:"sign up sucessfully"})
    console.log("saved");
    }
    }catch{
        res.status(500).json({msg:"Someting went wrong"})
    }
})

router.post('/Login',async (req,res)=>{
    try{
    const {UserName,Password} = req.body
    const result = await signup.findOne({userName:UserName})
    if(!result){
        res.status(404).json({msg:"User not found. Sign up to get started."})
    }
    const valid = await bcrypt.compare(Password,result.password)
    if(valid){
        const token = jwt.sign({UserName,UserRole:result.userRole},process.env.SECRET_KEY,{expiresIn:"5h"})
        if(token){
            res.cookie("authToken",token,{httpOnly:true})
            res.status(200).json({msg:"sucessfully loggedin" ,role: result.userRole})
        }else{
            res.status(400).json({msg:"something went wrong in token generation"})
        } 
    }else{
        res.status(400).json({msg:"Password Incorrect"})
    }
    }catch(err){
        res.status(500).json({msg:"someting went wrong/ Login failed"})
        console.log(err);
        
    }
})

router.post("/logout",(req,res)=>{
    res.clearCookie('authToken')
    res.status(200).json({msg:"log out sucessfully"})
})


export {router}