import React, { useEffect, useState } from 'react';
import Country from './Country/Country';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data=>setCountries(data))
    }, [])
    console.log(countries);
    return (
        <div>
            <h2>Countries in other file.</h2>
            <h2>Total countries: {countries.length}</h2>
            {
                countries.map(country => console.log(country))
            }
        </div>
    );
};

export default Countries;