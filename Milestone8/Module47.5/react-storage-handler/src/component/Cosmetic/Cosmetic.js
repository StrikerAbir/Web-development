import React from 'react';
import { addToDb, deleteShoppingCart, removeFromDb } from '../../Utilities/fakedb';
import './Cosmetic.css'
const Cosmetic = (props) => {
    const { age, name,id } = props.cosmetic
    const addToCart = (id)=>{
        // console.log('item added', id);
        addToDb(id);
    }
    const addPara = () => addToCart(id);

    const removeFromCart = (id) => {
        removeFromDb(id);
    }
    return (
        <div className='product'>
            <h1>Cosmetics</h1>
            <p>only for : {name} {age}</p>
            {/* <button onClick={addPara}>Add to Cart</button> */}
            {/* shortcut onclick with para */}
            <button onClick={()=>addToCart(id)}>Add to Cart</button>
            <button onClick={()=>removeFromCart(id)}>Remove From Cart</button>
            <button onClick={deleteShoppingCart}>Remove Cart</button>
            
        </div>
    );
};

export default Cosmetic;