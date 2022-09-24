import React from 'react';
import { add } from '../../Utilities/calculate';
// import add from '../../Utilities/calculate';

const Cosmo = () => {
    const a = 55;
    const b = 33;
    const total= add(a,b)
    return (
        <div>
            <h2>COsmo</h2>
            <p>total: { total }</p>
        </div>
    );
};

export default Cosmo;