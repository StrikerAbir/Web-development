import React from 'react';
import './Cart.css'
const Cart = ({ cart }) => {
    console.log(cart);
    const quantity = cart.reduce((prev, cur) => prev + cur.quantity, 0);
    const priceTotal = cart.reduce((prev, cur) => prev + cur.price*cur.quantity, 0);
    const shippingTotal = cart.reduce((prev, cur) => prev + cur.shipping*cur.quantity, 0);
    const tax = (priceTotal * 0.1).toFixed(2);
    const grandTotal= priceTotal+shippingTotal+parseFloat(tax)
    return (
      <div className='cart-details'>
        <h2>Order Summery</h2>
        <p>Selected item: {quantity}</p>
        <p>Total Price: {priceTotal}</p>
        <p>Total Shipping: {shippingTotal}</p>
        <p>Tax: $ {tax}</p>
        <h5>Grand Total: {grandTotal.toFixed(2)}</h5>
      </div>
    );
};

export default Cart;