import React from 'react';
import './Country.css'
const Country = (props) => {
    return (
        <div className='country'>
            <h2>Country Name: {props.name}</h2>
            <p>Population: { props.population}</p>
            <p>Area: {props.area}</p>
            <img src={props.flag} alt="" />
        </div>
    );
};

export default Country;