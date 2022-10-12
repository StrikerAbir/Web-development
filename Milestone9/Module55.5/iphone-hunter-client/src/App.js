import logo from './logo.svg';
import './App.css';
import {RouterProvider,createBrowserRouter} from 'react-router-dom'
import Main from './layout/Main';
import Home from './components/Home/Home';
import Phone from './components/Phone/Phone';
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader: () => fetch("http://localhost:1000/phones"),
        },
        {
          path: "/phones/:id",
          element: <Phone></Phone>,
          loader: async({params}) => fetch(`http://localhost:1000/phones/${params.id}`)
        }
      ],
    },
  ]);
  return (
    <div className="App">
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
