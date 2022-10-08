import React from 'react';
import "./Tshirt.css"

const Tshirt = ({ tshirt}) => {
    const { picture, name, price } = tshirt;
    return (
        <div className='tshirt'>
            <img src={picture} alt="pic" />
            <h3>{name}</h3>
            <p>Price: ${price}</p>
            <button>Buy Now</button>
        </div>
    );
};

export default Tshirt;