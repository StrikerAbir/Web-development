import logo from './logo.svg';
import './App.css';
import app from './firebase/firebase.init';
import {getAuth} from 'firebase/auth';

const auth = getAuth(app);

function App() {
  return (
    <div className="App">
      <form action="">
        <input type="email" name="" id="" placeholder="Email" />
        <br />
        <input type="password" name="" id="" placeholder="Password" />
       </form>
    </div>
  );
}

export default App;
