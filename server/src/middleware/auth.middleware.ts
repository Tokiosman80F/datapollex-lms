
import { Request,Response,NextFunction } from "express";
import jwt from "jsonwebtoken";

export default function authMiddleware(req:Request,res:Response,next:NextFunction){
    const authHeader=req.headers.authorization
    if(!authHeader || !authHeader.startsWith('Bearer')){
        return res.status(401).json({error:"Authentication required"})
    }
    const token=authHeader.split(' ')[1];
    try{
        const decoded=jwt.verify(token,process.env.JWT_TOKEN as string) as any;
        (req as any).user={userId:decoded.userId, role:decoded.role}
        next();
    }catch(error){
        res.status(401).json({error:"Invalid or expired token"})
    }
}

export  function adminMiddleware(req:Request,res:Response,next:NextFunction){
    if((req as any).user.role!='admin'){
        return res.status(403).json({error:"Admin access required"})
    }
    next()
}