import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  return (
    <div className="App">
      <Load></Load>
    </div>
  );
}

function Load() {
  const [countries, setCounters] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCounters(data))
  }, [])
  
  return (
    <div>
      <h1>Visiting Every Country</h1>
      <h3>Available countries : {countries.length}</h3>
      
      {

        countries.map(country => <Country name={country.name.common} population={country.population}></Country> )
      }
    </div>
  )
}
function Country(props) {
  return(
    <div>
      <h2>Name: {props.name}</h2>
      <p>Population: { props.population }</p>
    </div>
)
}

export default App;
