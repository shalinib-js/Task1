import {Router} from "express";

const router = Router();

router.post("/login", (req, res) => {
  const { name, email, password, terms } = req.body;

  
  if (!email || !password) {
    return res.status(400).json({
      message: "Missing required fields",
    });
  }

  console.log("Received data:", req.body);

 
  res.status(200).json({
    success: true,
    message: "Login successful",
    user: { name, email },
  });
});

export default router;

