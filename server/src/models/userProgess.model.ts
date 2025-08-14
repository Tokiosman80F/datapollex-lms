import mongoose,{Document} from "mongoose";


export interface IUserProgress extends Document{
    user:mongoose.Types.ObjectId;
    lecture:mongoose.Types.ObjectId;
    completed:boolean;
    completedAt:Date;
}

const userProgressSchema=new mongoose.Schema({
    user:{type:mongoose.Schema.Types.ObjectId,ref:'User',required:true},
    lecture:{type:mongoose.Schema.Types.ObjectId,ref:"Lecture",required:true},
    completed:{type:Boolean, default:false},
    completedAt:{type:Date}
})

export default mongoose.model<IUserProgress>("UserPrgress",userProgressSchema)