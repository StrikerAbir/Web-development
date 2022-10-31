import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './component/Home/Home';
import AddUser from './component/AddUser/AddUser';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
      loader: () => fetch("http://localhost:1000/users"),
    },
    {
      path: "/user/add",
      element: <AddUser></AddUser>,
    },
  ]);
  return (
    <div className="App">
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
