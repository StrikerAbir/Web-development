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
    </div>
  )
}

export default App;
