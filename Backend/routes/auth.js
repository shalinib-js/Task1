import express from "express";
import User from "../models/User.js";

const router = express.Router();


// LOGIN 
router.post("/login", async (req, res) => {
  try {
    console.log("Received data:", req.body);

    const { name, email, password, terms } = req.body;

    // check if user already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    // create new user
    const newUser = new User({
      name,
      email,
      password,
      terms,
    });

    // save to MongoDB
    await newUser.save();

    res.status(201).json({
      message: "Login saved successfully",
      user: newUser,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Server error",
    });
  }
});

export default router;
