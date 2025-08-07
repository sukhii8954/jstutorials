export const getUserProfile = async (req,res)=> {
      const user = await User.findById(req.user.id);
      res.json(user);
};





/*
import User from "../models/userModel.js"; // Make sure this file exists and exports User model

export const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (err) {
    console.error("Error fetching user profile:", err);
    res.status(500).json({ message: "Server error" });
  }
};
*/