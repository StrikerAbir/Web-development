import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Friend = () => {
    // const ring = useContext(RingContext);
    const [house,setHouse]=useContext(RingContext);
    return (
        <div>
            <h2>Friend</h2>
            {/* <p><small>{ ring }</small></p> */}
            <p>House: {house}</p>
            <button onClick={()=>setHouse(house-1)}>Reduce</button>
        </div>
    );
};

export default Friend;