import React, { useEffect, useState } from 'react';
import Country from './Country/Country';
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data=>setCountries(data))
    }, [])
    // console.log(countries);
    return (
        <div >
            <h2>Countries in World</h2>
            <h2>Total countries: {countries.length}</h2>
            <div className='countries-container'>
                {
                    countries.map(country => <Country
                        country={country}
                        key={country.cca3}
                    ></Country>)
                }
            </div>
            
        </div>
    );
};

export default Countries;