
import mongoose from "mongoose";
import { User } from "../models/user.model.js";

//create some user data for login using postman
const createUsers=async(req,res,next)=>{
    try {
        const {username,password}=req.body
        const createUSer=await User.create({
              username,
              password
        })

        res.json({user:createUSer})
        
    } catch (error) {
        console.log(error)
    }
}

const userLogin=async(req,res,next)=>{
    console.log(req)
    try {
        const {username,password}=req.body
        console.log(username,password)

        if(!username){
            return res.status(400).json({ error: "Username is required" });
        }

        if(!password){
            return res.status(400).json({ error: "Password is required" });
        }

        const existUser= await User.findOne({username,password})
        if(!existUser){
            
            return res.status(401).json({ error: "Invalid username or password" });

        }
        console.log("completed")
        console.log(existUser)
      
        return res.json({
            success:true,
            user:existUser
        })
        



        
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: "Internal Server Error" });
    }
}


export{
    createUsers,
    userLogin
}
