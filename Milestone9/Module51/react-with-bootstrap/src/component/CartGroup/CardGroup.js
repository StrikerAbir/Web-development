import React from "react";
import Card from "../Card/Card";

const CardGroup = () => {
  const product = [
    { id: 1, name: "mac book1", price: 100000 },
    { id: 2, name: "mac book2", price: 100000 },
    { id: 3, name: "mac book2", price: 100000 },
  ];
  return (
    <div className="card-group">
      {product.map((product) => (
        <Card product={product}></Card>
      ))}
    </div>
  );
};

export default CardGroup;
