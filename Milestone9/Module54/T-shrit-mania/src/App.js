

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Order from './components/Orders/Order';
import Main from './Layouts/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element:<Home></Home>
        },
        {
          path: '/orders',
          element:<Order></Order>
        }
      ]
    }
  ])
  return (
    <div className='App'>
        <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
