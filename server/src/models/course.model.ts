import mongoose, { Document } from "mongoose";

export interface ICourse extends Document {
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  createdAt: Date;
}

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  thumbnail: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model<ICourse>("Course", courseSchema);
