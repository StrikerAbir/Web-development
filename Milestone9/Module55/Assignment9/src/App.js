import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Topics from './components/Topics/Topics';
import Departments from './components/Departments/Departments';
import Blog from './components/Blog/Blog';
import ReChart from './components/ReChart/ReChart';
import NotFound from './components/NotFound/NotFound';
import Quiz from './components/Quiz/Quiz';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: () => {
            return fetch("https://openapi.programming-hero.com/api/quiz");
          },
          element: <Topics></Topics>,
          errorElement: <NotFound></NotFound>,
        },
        {
          path: "/departments",
          element: <Departments></Departments>,
        },
        {
          path: "/blog",
          element: <Blog></Blog>,
        },
        {
          path: "/chart",
          loader: () => {
            return fetch("https://openapi.programming-hero.com/api/quiz");
          },
          element: <ReChart></ReChart>,
          errorElement: <NotFound></NotFound>,
        },
        {
          path: "/topics/quiz/:id",
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`);
          },
          element: <Quiz></Quiz>,
        },
      ],
    },

    {
      path: "*",
      element: <NotFound></NotFound>,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
