import express from "express";

const router = express.Router(); //allow us to define a specific routes and middleware for different parts  of an application


router.get("/profile", (req,res)=>{
    res.json({message : "User profile Data"});

});

export default router;