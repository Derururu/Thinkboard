import express from "express"
import notesRoutes from "./routes/notesRoutes.js";
import cors from "cors";

import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js"


dotenv.config();


//const express = require("express");
const app = express();
const PORT = process.env.PORT || 5001;


//middleware
app.use(cors({
    origin: "http://localhost:5173"
}));
app.use(express.json());
app.use(rateLimiter);


// app.use((req, res, next) => {
//     console.log(`Request Method: ${req.method}, Request URL: ${req.url}`);
//     next();
// })



app.use("/api/notes", notesRoutes)

connectDB().then(()=> {
    app.listen(5001, () => {
        console.log("Server is running on port: ", PORT);
    });
});










// app.get("/api/notes", (req,res) => {
//     res.send("you got 12 notes");
// });

// app.post("/api/notes", (req,res) => {
//     res.status(201).json({message:"post created successfully"});
// });


// app.put("/api/notes/:id", (req,res) => {
//     res.status(200).json({message:"Note updated successfully"});
// });

// app.delete("/api/notes/:id", (req,res) => {
//     res.status(200).json({message:"Note deleted successfully"});
// });



