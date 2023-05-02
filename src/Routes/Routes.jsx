import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout';
import Blog from '../Pages/Blog';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import ErrorPage from '../Pages/ErrorPage';
import Home from '../Pages/Home/Home';
import Recipes from '../Pages/Recipes';

const router = createBrowserRouter([
    {
      path: "/",
      loader: () => fetch('/data/combined.json'),
      errorElement: <ErrorPage></ErrorPage>,
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:'/',
            element: <Home></Home>
        },
        {
            path:'/blog',
            element: <Blog></Blog>
        },
        {
            path:'/login',
            element: <Login></Login>
        },
        {
            path:'/register',
            element: <Register></Register>
        },
        {
            path:'/:id',
            element: <Recipes></Recipes>
        }
      ]
    },
  ]);

export default router;