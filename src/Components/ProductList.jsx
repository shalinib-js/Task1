import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { OrbitProgress } from "react-loading-indicators";
import { useNavigate } from "react-router-dom";

const ProductList = ({ searchTerm = "", selectedCategory = "all" }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  // Fetch products
  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((response) => {
        if (!response.ok) throw new Error("GIVE A CORRECT URL");
        return response.json();
      })
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data); // initially show all
      })
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false));
  }, []);

  // Filter products based on search term and selected category
  useEffect(() => {
    let updatedProducts = [...products];

    // Category filter
    if (selectedCategory !== "all") {
      updatedProducts = updatedProducts.filter(
        (product) =>
          product.category?.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    // Search filter
    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase();
      updatedProducts = updatedProducts.filter((product) =>
        product.category?.toLowerCase().includes(term)
      );
    }

    setFilteredProducts(updatedProducts);
  }, [searchTerm, selectedCategory, products]);

  if (isLoading) {
    return (
      <div className="loading">
        <OrbitProgress color="black" size="medium" />
      </div>
    );
  }

  return (
    <div>
      <h3 className="product-heading">Discounts off 50%</h3>

      <section className="product-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Card
              key={product.id}
              className="product-card"
              onClick={() => navigate(`/product/${product.id}`)}
              style={{ cursor: "pointer" }}
            >
              <div className="product-img-wrapper">
                <Card.Img
                  variant="top"
                  src={product.image}
                  alt={product.title}
                  className="product-img"
                />
              </div>

              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text className="product-desc">
                  {product.description}
                </Card.Text>
              </Card.Body>

              <Card.Footer className="product-footer">
                <span className="product-price">$ {product.price}</span>
                <Button variant="outline-dark">Buy Now</Button>
              </Card.Footer>
            </Card>
          ))
        ) : (
          <h4 className="not-found-text">Product not found</h4>
        )}
      </section>

      {error && <p className="error-text">Error: {error}</p>}
    </div>
  );
};

export default ProductList;
