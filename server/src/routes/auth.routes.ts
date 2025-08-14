import express from 'express';
import brcypt from 'bcrypt'  ;
import jwt from 'jsonwebtoken';
import User from "../models/user.model"

const router=express.Router();

// Register 
router.post('/register',async(req,res)=>{
    try{
        const {username,email,password,role}=req.body;
        const hashedPassword= await brcypt.hash(password,10);

        const user= new User({username,email,password:hashedPassword,role})
        await user.save()
         
        res.status(201).json({message:"User created successfully "})

    }catch(error){
        res.status(500).json({message:"Internal Error: Failed to user"})
    }
})


// Login
// router.post('/login',async(req,res)=>{

//     try{
//         const {email,password}=req.body;
//         const user= await User.findOne({email})

//     }
//     catch(error){

//     }

// })

export default router;