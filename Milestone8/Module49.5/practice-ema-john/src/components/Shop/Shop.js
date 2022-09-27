import React from "react";
import { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Products from "../products/Products";
import "./Shop.css";
const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddToCart = (selectedProduct) => {
    console.log(selectedProduct);
  };
  return (
    <div className="shop-container">
      <div className="items-container">
        {products.map((product) => (
          <Products
            product={product}
            key={product.id}
            handleAddToCart={handleAddToCart}
          ></Products>
        ))}
      </div>
      <div className="cart-container">
        <h2>Order Summery</h2>
        <Cart></Cart>
      </div>
    </div>
  );
};

export default Shop;
