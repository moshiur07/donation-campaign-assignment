import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root';
import Home from './Pages/Home/Home';
import Donation from './Pages/Donation/Donation';
import Statistics from './Pages/Statistics/Statistics';
import SingleCard from './Pages/SingleCard/SingleCard';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
    {
      path:'/',
      loader: ()=> fetch('/content.json'),
      element:<Home></Home>
    },
    {
      path:'/donation',
      element:<Donation></Donation>
    },
    {
      path:'/statistics',
      element:<Statistics></Statistics>
    },
    {
      path:'/card/:id',
      loader: () => fetch('/content.json'),
      element:<SingleCard></SingleCard>
    }
  ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
