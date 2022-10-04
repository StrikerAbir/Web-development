import logo from './logo.svg';
import './App.css';
import { Button, Spinner } from 'react-bootstrap';
import GridExample from './component/GridCard/GridCard';

function App() {
  return (
    <div className="App">
      <button>Plain button</button>
      <Button>React button</Button>
      <Button variant="success">Success</Button>
      <Spinner animation="border" variant="success" />;
      <GridExample></GridExample>
    </div>
  );
}

export default App;
