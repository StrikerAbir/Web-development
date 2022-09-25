import React from 'react';
import { addToDb } from '../../Utilities/fakedb';
import './Cosmetic.css'
const Cosmetic = (props) => {
    const { age, name,id } = props.cosmetic
    const addToCart = (id)=>{
        // console.log('item added', id);
        addToDb(id);
    }
    const addPara = () => addToCart(id);
    return (
        <div className='product'>
            <h1>Cosmetics</h1>
            <p>only for : {name} {age}</p>
            {/* <button onClick={addPara}>Add to Cart</button> */}
            {/* shortcut onclick with para */}
            <button onClick={()=>addToCart(id)}>Add to Cart</button>
            
        </div>
    );
};

export default Cosmetic;