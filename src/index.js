// require('dotenv').config({ path:""})
import mongoose from "mongoose";
import { databaseName } from "./constants";

;( async ()=>{
    try {
        const connect = await mongoose.connect(process.env.mongodb_URL/databaseName)
    } catch (error) {
        console.log("Database cannot be connected ");
    }

})()