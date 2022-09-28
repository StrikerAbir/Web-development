import React from "react";
import { useEffect, useState } from "react";
import { addToDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Products from "../products/Products";
import "./Shop.css";

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddToCart = (selectedProduct) => {
      let newCart=[...cart,selectedProduct];
      setCart(newCart);
      addToDb(selectedProduct.id);
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
        
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
