import express from "express"
import Course from "../models/course.model"
import multer from 'multer'


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

// router.post("/")