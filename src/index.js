import React  from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'     
import Home from './Header/Home';
import About from './Header/About';
import Rooms from './Header/Rooms';
import Gallary from './Header/Gallary';
import Contact from './Header/Contact';
import Services from './Header/Services';


var router=createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:"/home",  
                element:<Home></Home>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/services',
                element:<Services></Services>
            },
            {
                path:'/rooms',
                element:<Rooms></Rooms>
            },
            {
                path:'/gallary',
                element:<Gallary></Gallary>
            },
            {
                path:'/contact',
                element:<Contact></Contact>
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




