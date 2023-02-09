import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PrivateRoute from './components/common/PrivateRoute';
import OnError from './components/pages/error/OnError';
import Home from './components/pages/home/Home';
import Root from './components/pages/home/Root';
import SafePlace from './components/pages/home/SafePlace';
import SafePlaceDetail from './components/pages/home/SafePlaceDetail';
import Login from './components/pages/login/Login';
import Signup from './components/pages/signup/Signup';
import './components/style.css';
import classes from './components/style.module.css';
import { getMockData } from './controllers/mockDataController';

//TODO: change css modules to default
function App() {

  //children başında / varsa absolute path, yoksa parenta bağlı, relative path
  const router = createBrowserRouter([
    {
      path: '/',
      element: <PrivateRoute><Root /></PrivateRoute>,
      children: [
        {
          index: true,
          element: <Home />,
          loader: () => {
            return getMockData();
          }
        },
        { path: '/safe', element: <SafePlace /> },
        { path: '/safe/:id', element: <SafePlaceDetail /> }
      ],
      errorElement: <OnError />
    },
    { path: '/signup', element: <Signup /> },
    { path: '/login', element: <Login /> }
  ]);

  return (
    <div className={classes.app}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;