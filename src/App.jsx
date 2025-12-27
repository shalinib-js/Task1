import Home from "./Pages/Home.jsx";
import ProductDetails from "./Pages/productDetails.jsx";
import Login from "./Pages/Login.jsx";
import NavBar from "./Components/NavBar.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
