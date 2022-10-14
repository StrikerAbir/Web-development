import logo from "./logo.svg";
import "./App.css";
import app from "./firebase/firebase.init";
import { getAuth } from "firebase/auth";
import Register from "./components/Register/Register";
import RegisterReactBootstrap from "./components/RegisterReactBootstrap/RegisterReactBootstrap";
import RegisterBootstrap from "./components/RegisterBootstrap/RegisterBootstrap";

const auth = getAuth(app);

function App() {
  // easy way
  const handleRegister = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);
  };

  // another way with react handler
  const handleEmailChange = (event) => {
    console.log(event.target.value);
  };
  const handlePasswordChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <div className="">
      {/* <Register></Register> */}
      <RegisterReactBootstrap></RegisterReactBootstrap>
      <RegisterBootstrap></RegisterBootstrap>
    </div>
  );
}

export default App;
