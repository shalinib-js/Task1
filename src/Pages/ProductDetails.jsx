import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { OrbitProgress } from "react-loading-indicators";
import "../Components/productDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
  fetch(`http://localhost:5000/api/products/${id}`)
    .then((res) => {
      if (!res.ok) throw new Error("Product not found");
      return res.json();
    })
    .then((data) => setProduct(data))
    .catch(() => setProduct(null))
    .finally(() => setIsLoading(false));
}, [id]);

  if (isLoading) {
    return <div className="loading"><OrbitProgress color="black" size="medium" /></div>;
  }

  if (!product) {
    return <h3>Product not found</h3>;
  }

  return (
    <Card className="single-product-wrapper">
      <section className="single-product-card">
      <div className="single-product-image-wrapper">
        <Card.Img
          variant="top"
          src={product.image}
          alt={product.title}
          className="single-product-image"
        />
      </div>

      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text className="single-product-description">{product.description}</Card.Text>
      </Card.Body>

      <Card.Footer className="single-product-footer">
        <span className="single-product-price">$ {product.price}</span>
        <Button className="single-product-buy-button" variant="outline-dark">Buy Now</Button>
      </Card.Footer>
      </section>
    </Card>
  );
};

export default ProductDetails;
