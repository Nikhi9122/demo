import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Contact from './Contact';
import Service from './Service';
import About  from  './About';
import Products from './Products';
import { element } from 'prop-types';
import Countries from './Countries';
import Todolist from './Todolist';
var router=createBrowserRouter([

    {
        path:"/",
        element:<App></App>,
        children:[
          
            {
                path:'/products',
                element:<Products></Products>
            },
            {
                path:'/countries',
                element:<Countries></Countries>
            },
            {
                path:'/todolist',
                element:<Todolist></Todolist>
            }
          
          
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <RouterProvider router={router}></RouterProvider>
);






// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
