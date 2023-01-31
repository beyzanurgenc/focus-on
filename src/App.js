import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import OnError from './components/pages/error/OnError';
import Home from './components/pages/home/Home';
import Root from './components/pages/home/Root';
import Test from './components/pages/home/Test';
import Login from './components/pages/login/Login';
import Signup from './components/pages/signup/Signup';
import { getMockData } from './controllers/mockDataController';

function App() {

  //children başında / varsa absolute path, yoksa parenta bağlı, relative path
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        {
          path: '/',
          element: <Home />,
          loader: () => {
            return getMockData();
          }
        }, //path: '/' yerine index: true da denebilirdi. Default child path.
        { path: '/test', element: <Test /> },
      ],
      errorElement: <OnError />
    },
    { path: '/signup', element: <Signup /> },
    { path: '/login', element: <Login /> }
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;