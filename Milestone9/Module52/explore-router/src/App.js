import logo from './logo.svg';
import './App.css';
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About';
import Products from './components/Products/Products';
import Main from './layout/Main';
import Friends from './components/Friends/Friends';
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      // element: <div>Default page</div>,
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "about",
          // element: <div>About page</div>,
          element: <About></About>,
        },
        {
          path: "home",
          // element: <div>home page</div>,
          element: <Home></Home>,
        },
        {
          path: "products",
          element: <Products></Products>,
        },
        {
          path: "friends",
          loader: async() => {
            return fetch("https://jsonplaceholder.typicode.com/users");
          },
          element: <Friends></Friends>,
        },
      ],
    },
    {
      path: "*",
      element: <div>404 not found.</div>
    },
    // {
    //   path: "about",
    //   // element: <div>About page</div>,
    //   element:<About></About>
    // },
    // {
    //   path: "home",
    //   // element: <div>home page</div>,
    //   element: <Home></Home>
    // },
    // {
    //   path: "products",
    //   element: <Products></Products>
    // }
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
