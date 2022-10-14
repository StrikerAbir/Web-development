import logo from "./logo.svg";
import "./App.css";
import app from "./firebase/firebase.init";
import { getAuth } from "firebase/auth";
import Register from "./components/Register/Register";
import RegisterReactBootstrap from "./components/RegisterReactBootstrap/RegisterReactBootstrap";
import RegisterBootstrap from "./components/RegisterBootstrap/RegisterBootstrap";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Layout/Main";
import LoginBootstrap from "./components/LoginBootstrap/LoginBootstrap";

const auth = getAuth(app);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <RegisterReactBootstrap></RegisterReactBootstrap>,
      },
      {
        path: "/register",
        element: <RegisterReactBootstrap></RegisterReactBootstrap>,
      },
      {
        path: "/login",
        element: <LoginBootstrap></LoginBootstrap>
      },
    ],
  },
]);

function App() {
 

  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
      {/* <Register></Register> */}
      {/* <RegisterReactBootstrap></RegisterReactBootstrap> */}
      {/* <RegisterBootstrap></RegisterBootstrap> */}
    </div>
  );
}

export default App;
