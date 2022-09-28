import React from "react";
import { useEffect, useState } from "react";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
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
    useEffect(() => {
        const storedCart = getStoredCart();
        const savedCart = [];
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id)
            // console.log(addedProduct);
            if (addedProduct) {
                const quantity = storedCart[id]
                console.log(quantity);
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
            setCart(savedCart)
        }

  },[products])
  const handleAddToCart = (selectedProduct) => {
      let newCart = [];
      const exist = cart.find(product => product.id === selectedProduct.id)
      if (exist) {
          const rest = cart.filter(product => product.id !== selectedProduct.id);
          exist.quantity += 1;
          newCart = [...rest, exist];
      } else {
          selectedProduct.quantity = 1;
          newCart = [...cart, selectedProduct];
      }
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
