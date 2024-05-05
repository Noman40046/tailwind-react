import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter,RouterProvider,} from "react-router-dom";
import './index.css'
import Mainlayout from './components/Mainlayout.jsx';
import App from './App.jsx';
import Home from './components/Home.jsx';
import Portfolio from './components/Portfolio.jsx';
import Team from './components/Team.jsx';
import Contacts from './components/Contacts.jsx';
import Signup from './components/Signup.jsx';
import Login from './components/Login.jsx';





const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout/>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path:"/portfolio",
        element: <Portfolio />,
      },
      {
        path:"/team",
        element: <Team />,
      },
      {
        path:"/contacts",
        element: <Contacts />,
      },
      {
        path:"/signup",
        element: <Signup />,
      },
      {
        path:"/login",
        element: <Login />,
      },
     
      
    ],
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

<RouterProvider router={router} />
  </React.StrictMode>,
)
