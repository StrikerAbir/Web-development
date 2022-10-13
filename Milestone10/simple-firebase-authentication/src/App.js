import logo from './logo.svg';
import './App.css';
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import app from './firebase/firebase.init';

const auth = getAuth(app);
const handleGoogleSignIn = () => {
  console.log('google coming soon');
}
function App() {
const provider=new GoogleAuthProvider()
  return (
    <div className="App">
      <button onClick={handleGoogleSignIn}>Google sign in</button>
    </div>
  );
}

export default App;
