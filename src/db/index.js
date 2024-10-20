import mongoose, { Error } from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDb = async ()=>{
    try {
        const db = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`\n db connected !! db host:${db.connection.host}`);
    } catch (error) {
        console.log("Error found in DB connection",error);
        process.exit(1)
    }
}

export default connectDb