import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./db.js";
import userRoutes from "./routes/userRoutes.js";
dotenv.config();

const app = express();

app.use(cors()); // it allows cross-origin requests (frontend can talk to backend).
app.use(express.json());
// Parse incoming JSON body ,required when You're sending JSON data in POST/PUT requests from frontend or POSTMAN

app.use("/api/users",userRoutes);  // localhost:3000/api/users/profile


app.get("/", (req, res) => {
  res.send("Backend is running!");
});


const PORT = process.env.PORT || 3001;

const startServer = async () => {
    try{
        await connectDB();
         app.listen(PORT ,()=>{
        console.log(`server running at http://localhost:${PORT}`)
    })
    } catch (err){
        console.error("DB connection failed,",err);
    }
};

startServer();
