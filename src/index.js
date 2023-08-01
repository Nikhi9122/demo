import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Contact from './Contact';
import Service from './Service';
import About from './About';


import { element } from 'prop-types';

var router=createBrowserRouter([

    {
        path:"/",
        element:<App></App>,
        children:[
            {
                path:"/contact",
                element:<Contact></Contact>
            },
            {
                path:"/service",
                element:<Service></Service>
            },
            {
                path:"/about",
                element:<About></About>
            },
          
          
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
