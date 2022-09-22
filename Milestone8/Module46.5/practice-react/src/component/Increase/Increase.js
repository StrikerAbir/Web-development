import React, { useState } from 'react';


const Increase = () => {
   const [initial, setIni] = useState(0);
   const increase = () => setIni(initial + 1);
    return (
      <div>
        <button className="btn btn-primary" onClick={increase}>
          Select
        </button>
        <p>{initial}</p>
      </div>
      
    );
};


export default Increase;