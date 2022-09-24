import logo from './logo.svg';
import './App.css';
import Cosmo from './component/Cosmo/Cosmo';
import Shoes from './component/Shoes/Shoes';

function App() {
  return (
    <div className="App">
      <h1>Just now</h1>
      <Cosmo></Cosmo>
      <Shoes></Shoes>
    </div>
  );
}

export default App;
