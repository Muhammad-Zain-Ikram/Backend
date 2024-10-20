import dotenv from "dotenv"
import connectDb from './db/index.js';

dotenv.config({
    path: './env'
})
connectDb()


// import express from "express"

// const app = express();
// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
//     app.on("error",(error)=>{
//         console.log("error found in database",error);
//         throw error
//     })

//     app.listen(process.env.PORT, ()=>{
//         console.log(`App listen on this url http://localhost:${process.env.PORT}/`);
        
//     })
//   } catch (error) {
//     console.log("Error", error);
//   }

// })();
