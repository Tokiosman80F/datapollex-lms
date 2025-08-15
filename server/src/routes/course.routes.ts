import express from "express"
import Course from "../models/course.model"
import multer from 'multer'
import authMiddleware from "../middleware/auth.middleware"
import { adminMiddleware } from "../middleware/auth.middleware"
const router=express.Router()
const upload=multer({dest:'uploads/'})

// Get all courses
router.get("/",async(req,res)=>{
    try{
        const courses=await Course.find().sort({createdAt:-1})
        res.json(courses)
    }
    catch(err){
        res.status(500).json({err:"Error fetching course"})
    }
})

// Create Course (admin only)

router.post("/",authMiddleware,adminMiddleware,upload.single('thumbnail'),async(req,res)=>{
    try{
        const {title,description,price}=req.body
        const thumbnail=req.file?.path
        
        const course= new Course({title,description,price,thumbnail})
        
        await course.save()
        res.status(201).json(course)
    }
    catch(error){
        res.status(500).json({error:"Error creating course"})
    }
})


export default router