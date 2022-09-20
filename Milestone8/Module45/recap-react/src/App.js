import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const products = [
    { name:"laptop", price:'63000' },
    { name:"phone", price:'6300' },
    { name:"watch", price:'630' },
    { name:"tab", price:'6350' },
  ];
  return (
    <div className="App">
      {/* <Product name="laptop" price='63000'></Product>
      <Product name="phone" price='6300'></Product> */}
      {/* {
        products.map((product) => <Product name={product.name} price={product.price}></Product>)
      } */}

      {/* <Counter></Counter> */}

      <ExternalUsers></ExternalUsers>

    </div>
  );
}

function ExternalUsers() {
  // step1
  const [users, setUsers] = useState([]);

  // step2
  useEffect(() => {
    // step3
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data=> setUsers(data))
  }, [])
  
  return (
    <div>
      <h2>External users</h2>
      {
        users.map(user => <User name={user.name} email={user.email}></User>)
      }
    </div>
  )
}

function User(props) {
  return (
    <div style={{ border: '2px solid black', margin:'20px'}}>
      <h3>Name: {props.name}</h3>
      <p>email: {props.email}</p>
  </div>
)}

function Product(props) {
  return (
    <div className='product'>
      <h3>Name:{ props.name} </h3>
      <p>Price:{ props.price} </p>
    </div>
  )
}

function Counter() {
  const [initial, setInitial] = useState(0);
  const increaseCount = () => setInitial(initial + 1);
  const decreaseCount = () => setInitial(initial - 1);

  return (
    <div>
      <h1>Count : { initial }</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  )
}
export default App;
