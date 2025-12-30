import dotenv from "dotenv";
import mongoose from "mongoose";



export const connectDB = async () => {
    try{
        await mongoose.connect(
            process.env.MONGO_URI
        );

        console.log("MongoDB CONNECTED SUCCESSFULLY");
    } 
    catch (error) {
        console.error("MongoDB CONNECTION ERROR:", error);
        process.exit(1);
    }
};
dotenv.config();
