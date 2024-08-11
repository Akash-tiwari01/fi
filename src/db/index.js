import mongoose from "mongoose";
import {DB_Name} from "../constants.js";


const DB_CONNECT = async ()=>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_Name}`);
        console.log(`DB Connected !! :-) :-} :-0 ohohohohohho hurray `);
        console.log("\n"+ `Connection established in :${connectionInstance.connection.host}`);

    } catch (error) {
        console.log(`DB cannot be connected :-{] : ERROR : ${error}`);
        exit(0);
    }
}

export default DB_CONNECT;