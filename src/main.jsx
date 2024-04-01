import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './Pages/Home/Home.jsx';
import Error from './Pages/Error/Error.jsx';
import About from './Pages/About/About.jsx';
import ToLate from './Pages/To-Late/ToLate.jsx';
import Profile from './Pages/Profile/Profile.jsx';
import Land from './Pages/Land/Land.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path:"/",
        element: <Home></Home>
      },
      {
        path:"/*",
        element: <Error></Error>
      },
      {
        path:"/about",
        element: <About></About>
      },
      {
        path:"/to-late",
        element: <ToLate></ToLate>
      },
      {
        path:"/profile",
        element: <Profile></Profile>
      },
      {
        path:"/land",
        element: <Land></Land>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
