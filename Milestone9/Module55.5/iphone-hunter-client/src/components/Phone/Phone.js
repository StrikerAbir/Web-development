import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Phone = () => {
    const phone= useLoaderData();
    return (
        <div>
            <h2>single phone</h2>
            <p>name: {phone.name}</p>
            <p>price: {phone.price}</p>
            <p>Description: { phone.description}</p>
        </div>
    );
};

export default Phone;