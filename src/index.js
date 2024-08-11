// require('dotenv').config({ path:"./env"})
import dotenv from 'dotenv';
import express from "express";
import DB_CONNECT from './db/index.js';
dotenv.config({path:"./env"});
DB_CONNECT();

// const app = express();

// ;( async ()=>{
//     try {
//         const connect = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_Name}`);
//         app.on("error",(error)=>{
//         console.log(`Error: ${error}`);
//         throw(error);
//         })

//         app.listen(process.env.PORT, ()=>{
//             console.log(`App is listening on port: ${process.env.PORT}`);
//         })
        
//     } catch (error) {
//         console.log(`Database cannot be connected ${error}`);
//     }

// })() 