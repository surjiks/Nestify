import express, {json} from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import { router } from './Routes/LoginRoute.js';
import user from './Routes/UserRoute.js';
import authenticate from './Middleware/auth.js';
import admin from './Routes/AdminRoute.js';

dotenv.config();
const app = express();

app.listen(process.env.PORT,()=>{
    console.log(`Server is listening to port ${process.env.PORT}`);
})

mongoose.connect("mongodb://localhost:27017/NESTIFY").then(()=>{
    console.log("MongoDB connected Sucessfully to NESTIFY");
})
.catch((error)=>{
    console.log("MongoDB Connection failed", error);})

    app.use(json())
    app.use('/',router)
    app.use('/',authenticate,user)
    app.use('/',authenticate,admin)