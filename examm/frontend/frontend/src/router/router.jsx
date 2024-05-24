import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
} from "react-router-dom";
import Wishlist from "../Pages/Wishlist";
import AddPage from "../Pages/AddPage";
import Layout from "../Pages/Layout";
import Home from "../Pages/Home";
import FeauturedProd from "../Pages/FeauturedProd";
import Sections from "../Pages/Sections";


 export const router = createBrowserRouter([
  
    {
        path: "/",
        element: <Layout/>, children:[
            {
                path: "/wishlist",
                element: <Wishlist/>,
              },
              {
                path: "/",
                element: <Home/>,
              },
              {
                path: "/addPage",
                element: <AddPage/>,
              },
              {
                path: "/feauturedProd",
                element: <FeauturedProd/>,
              },
              {
                path: "/sections",
                element: <Sections/>,
              },
        ]
      },

  ]);