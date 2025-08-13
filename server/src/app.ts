import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv"


const app= express()


dotenv.config()

app.use(cors())
app.use(express.json())

// Database Connection

const mongoUrl=`mongodb+srv://${process.env.BUCKET}:${process.env.BUCKET_SECRET}@cluster0.lyiobzh.mongodb.net/JobAssement_LMS?retryWrites=true&w=majority&appName=Cluster0`

mongoose.connect(mongoUrl as string).then(()=>console.log("Connect to MongoDB")
).catch(err=>console.error("MongoDB error in connecting:",err)
)

// Route
app.get('/',(req,res)=>{
    res.send("LWS is Running")
})



export default app