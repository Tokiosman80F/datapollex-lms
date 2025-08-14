import mongoose,{Document} from "mongoose";


export interface IModule extends Document{
    title:string;
    moduleNumber:number;
    course:mongoose.Types.ObjectId
}

const moduleSchema= new mongoose.Schema({
    title:{type:String,required:true},
    moduleNumber:{type:Number,required:true},
    course:{type:mongoose.Schema.Types.ObjectId, ref:"Course",required:true}
})

export default mongoose.model<IModule>("Module",moduleSchema)