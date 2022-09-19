import logo from './logo.svg';
import './App.css';

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
      {
        products.map((product) => <Product name={product.name} price={product.price}></Product>)
      }
    </div>
  );
}

function Product(props) {
  return (
    <div className='product'>
      <h3>Name:{ props.name} </h3>
      <p>Price:{ props.price} </p>
    </div>
  )
}
export default App;
