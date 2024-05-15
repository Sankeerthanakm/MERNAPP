import express  from "express";
import dotenv from 'dotenv';
import cors from 'cors'
import bodyParser from 'body-parser'
import connectDB from "./db/dbConnect.js";
import router from './routes/index.js'



dotenv.config({
    path:'./.env'
})


const app=express()
const PORT=process.env.PORT

connectDB()

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.json())
app.use(router)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

app.listen(PORT,()=>{
    console.log(`server is running on port number ${PORT}`)
})