import React from 'react';

const Cart = ({ cart, handleRemoveItem }) => {
  return (
    <div>
      <h3>Order Summery</h3>
      <h4>{cart.length}</h4>
      {cart.map((tshirt) => (
        <p key={tshirt._id}>
          {tshirt.name}
          <button onClick={() => handleRemoveItem(tshirt._id)}>X</button>
        </p>
      ))}
    </div>
  );
};

export default Cart;