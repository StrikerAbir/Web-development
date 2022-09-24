import React from 'react';

const Cosmetic = (props) => {
    const {age,name}= props.cosmetic
    return (
        <div>
            <h1>Cosmetics</h1>
            <p>only for : {name} { age }</p>
        </div>
    );
};

export default Cosmetic;