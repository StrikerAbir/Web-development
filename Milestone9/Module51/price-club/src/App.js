import logo from './logo.svg';
import './App.css';
import NavBar from './component/NavBar/NavBar';
import Pricing from './component/Pricing/Pricing';
import AssignmentMark from './component/AssignmentMark/AssignmentMark';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <h1 className='text-4xl font-bold'>This is a big big header</h1>
      <p>just a para</p>
      <Pricing></Pricing>
      <AssignmentMark></AssignmentMark>
    </div>
  );
}

export default App;
