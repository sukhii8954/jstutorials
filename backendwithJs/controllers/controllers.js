import User from "../models/userModel.js";

// export const getUserProfile = async (req,res)=> {
//       const user = await User.findById(req.user.id);
//       res.json(user);
// };

// @desc   we are going to  register a new user
// @route   POST /api/users/register
// @access  Public

//  creating user to register in our Db

export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const ifexist = await User.findOne({ email });
    if (ifexist) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = await User.create({
      name,
      email,
      password,
    });

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } catch (error) {
    console.error("registration error", error);
    res.status(500).json({message:"server error"});
  }
};

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
