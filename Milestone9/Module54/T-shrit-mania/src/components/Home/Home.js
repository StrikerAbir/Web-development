import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Tshirt from '../Tshirt/Tshirt';
import './Home.css'

const Home = () => {
    const tshirts = useLoaderData();
    const [cart, setCart] = useState([]);
    
    const handleAddToCart = (tshirt) => {
        const exist = cart.find(ts => ts._id === tshirt._id);
        if (exist) {
            alert('tshirt alrady added');
        } else {
            const newCart = [...cart, tshirt];
            setCart(newCart);
        }
        
    }

    const handleRemoveItem=(id)=> {
        const remaining = cart.filter(ts => ts._id !==id);
        setCart(remaining);
    }

    return (
      <div className="home-container">
        <div className="tshirt-container">
          {tshirts.map((tshirt) => (
            <Tshirt key={tshirt._id} tshirt={tshirt} handleAddToCart={handleAddToCart}></Tshirt>
          ))}
            </div>
            <div className="cart-container">
                <Cart cart={cart} handleRemoveItem={handleRemoveItem}></Cart>
            </div>
      </div>
    );
};

export default Home;