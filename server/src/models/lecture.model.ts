import mongoose,{Document} from "mongoose";
import { type } from "os";


export interface ILecture extends Document{
    title:string;
    vedioUrl:string;
    pdfNote:string[];
    module:mongoose.Types.ObjectId;
    order:Number;
}

const lectureSchema= new mongoose.Schema({
    title:{type:String,required:true},
    vedioUrl:{type:String,required:true},
    pdfNote:[{type:String}],
    module:{type:mongoose.Schema.Types.ObjectId,ref:'Module',require:true},
    order:{type:Number,require:true}

})

export default mongoose.model<ILecture>("Lecture",lectureSchema)
