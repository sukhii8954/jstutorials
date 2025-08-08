import express from "express";
import { getUserProfile, registerUser } from "../controllers/controllers";

const router = express.Router(); //allow us to define a specific routes and middleware for different parts  of an application


router.post("/register", registerUser);
router.get("/profile", getUserProfile);


export default router;