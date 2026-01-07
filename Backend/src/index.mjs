import express from "express";
import cors from "cors";
import productRoutes from "../routes/productRoutes.js";
import auth from "../routes/auth.js";
import mongoose from "mongoose";



const app = express();

app.use(cors());
app.use(express.json());

const PORT = 5000;


// MongoDB connection
mongoose.connect('mongodb://localhost:27017/ProductsDB')
.then(() => {
    console.log("Connected to MongoDB");
})
.catch((err) => {
    console.error("Error connecting to MongoDB:", err);
});


app.use("/api/products",productRoutes);
app.use("/products",productRoutes);

app.use("/api/auth",auth);



app.listen(PORT, () => {
     console.log(`Server is running on port ${PORT}`);
     
});





