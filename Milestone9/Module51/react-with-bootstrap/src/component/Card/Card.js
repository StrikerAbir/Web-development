import React from 'react';

const Card = ({product}) => {
    return (
      <div className="card">
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
                <h5 className="card-title">{ product.name}</h5>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </p>
          <p className="card-text">
                    <small className="text-muted">{ product.price}</small>
          </p>
        </div>
      </div>
    );
};

export default Card;