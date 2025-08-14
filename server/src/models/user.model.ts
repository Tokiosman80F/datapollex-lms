import mongoose,{Document}  from "mongoose";

export interface IUser extends Document{
    username:string;
    email:string;
    password:string;
    role:"admin" | "user";
}

const userSchema= new mongoose.Schema({
    username:{type:String,required:true,unique:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    role:{type:String,required:true,enum:['admin','user'] },
})

export default mongoose.model<IUser>("User",userSchema)