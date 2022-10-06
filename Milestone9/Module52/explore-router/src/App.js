import logo from './logo.svg';
import './App.css';
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About';
import Products from './components/Products/Products';
import Main from './layout/Main';
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
      ],
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
