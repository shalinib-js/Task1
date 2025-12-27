import express from "express";
import cors from "cors";
import productRoutes from "../routes/productRoutes.js";
import auth from "../routes/auth.js";



const app = express();

app.use(cors());
app.use(express.json());

const PORT = 5000;


//connecting product routes

app.use('/api/products', productRoutes);

app.use("/api/auth",auth);



app.listen(PORT, () => {
     console.log(`Server is running on port ${PORT}`);
     
});



//  Endpoints to test:
//  http://localhost:5000/api/products
//  http://localhost:5000/api/products?filter=category&value=electronics
//  http://localhost:5000/api/products/5

// http://localhost:5000/api/auth/login
