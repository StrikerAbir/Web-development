import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './component/Home/Home';
import AddUser from './component/AddUser/AddUser';
import Update from './component/Update/Update';

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
    {
      path: "/update/:id",
      element: <Update></Update>,
      loader: ({ params }) => fetch(`http://localhost:1000/user/${params.id}`),
    },
  ]);
  return (
    <div className="App">
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
