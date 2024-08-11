// require('dotenv').config({ path:""})
import mongoose from "mongoose";
import { databaseName } from "./constants.js";
import express from "express";
const app = express();


;( async ()=>{
    try {
        const connect = await mongoose.connect(`${process.env.mongodb_URL}/${databaseName}?retryWrites=true&w=majority`);
        app.on("error",(error)=>{
        console.log(`Error: ${error}`);
        throw(error);
        })

        app.listen(process.env.PORT, ()=>{
            console.log(`App is listening on port: ${process.env.PORT}`);
        })
        
    } catch (error) {
        console.log(`Database cannot be connected ${error}`);
    }

})()