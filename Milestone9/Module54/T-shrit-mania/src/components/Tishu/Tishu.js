import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Tishu = () => {
  // const ring = useContext(RingContext);
  const [house, setHouse] = useContext(RingContext);
    return (
        <div>
            <h2>Tishu</h2>
        <p>
          {/* <small>Gift: {ring}</small> */}
          Gift: {house}
        </p>
        <button onClick={()=>setHouse(house+1)}>Increase</button>
      </div>
    );
};

export default Tishu;