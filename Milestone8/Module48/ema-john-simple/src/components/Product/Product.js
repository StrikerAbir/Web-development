import React from 'react';
import './product.css'
const Product = (props) => {
    const {img, name, price, seller, ratings}=props.product
    return (
      <div className="product">
        <img src={img} alt="" />
        <div className="product-info">
          <p className="product-name">{name}</p>
          <p>Price: ${price}</p>
          <p>
            <small>Seller: {seller} stars</small>
          </p>
          <p>
            <small>Ratings: {ratings} stars</small>
          </p>
        </div>
        <button className="btn-cart">
          <p>Add to Cart</p>
        </button>
      </div>
    );
};

export default Product;