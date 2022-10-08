import React from 'react';
import { Link } from 'react-router-dom';
import "./Cart.css"

const Cart = ({ cart, handleRemoveItem }) => {
    let message;
    if (cart.length === 0) {
        message= <p>Please buy first.</p>
    } else if (cart.length === 1) {
        message = 
          <div>
            <h3>
              If you want something else. <Link to="/">go here</Link>
            </h3>
          </div>
        
    } else {
      message = <p>Thanks for Buying</p>;
    }

    
  return (
    <div>
      <h3 className={cart.length>0 ? 'green': 'orange'}>Order Summery</h3>
      <h4 className={`bold ${cart.length>=3 && 'yellow'}`}>{cart.length}</h4>
      {cart.map((tshirt) => (
        <p key={tshirt._id}>
          {tshirt.name}
          <button onClick={() => handleRemoveItem(tshirt._id)}>X</button>
        </p>
      ))}
          {
              message 
          }

          {
              cart.length >=3 ? <p>Ok 3 items thats enough.</p>:<p>Check if you need to buy more.</p> 
          }
          <p>And operator</p>
          {
              cart.length===2 && <h4>if you buy more you will get discount</h4>
          }
          <p>Or operator</p>
          {
              cart.length===4 || <h2>r ektu kino</h2>
          }
    </div>
  );
};

export default Cart;