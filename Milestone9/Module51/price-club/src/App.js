import logo from './logo.svg';
import './App.css';
import NavBar from './component/NavBar/NavBar';
import Pricing from './component/Pricing/Pricing';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <h1 className='text-4xl font-bold'>this is a big big h1</h1>
      <p>just a para</p>
      <Pricing></Pricing>
    </div>
  );
}

export default App;
