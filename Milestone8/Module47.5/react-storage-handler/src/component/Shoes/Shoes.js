import React from 'react';
import { add, multi } from '../../Utilities/calculate';

const Shoes = () => {
    const a = 5;
    const b = 10;
    const result = multi(a, b);
    const sum = add(a, b);
    return (
        <div>
            <h2> this is shoes</h2>
            <p>result: { result }</p>
            <p>sum: { sum }</p>
        </div>
    );
};

export default Shoes;