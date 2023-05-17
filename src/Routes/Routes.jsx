import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AllToys from "../Pages/AllToys/AllToys";
import MyToys from "../Pages/MyToys/MyToys";
import AddAToys from "../Pages/AddAToys/AddAToys";
import Blog from "../Pages/Blog/Blog";


  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/allToys',
          element:<AllToys/>
        },
        {
          path:'/myToys',
          element:<MyToys/>
        },
        {
          path:'/addAToys',
          element:<AddAToys/>
        },
        {
          path:'/blog',
          element:<Blog/>
        },
        {
          path:'/login',
          element:<Login />
        },
        {
          path:'/register',
          element:<Register/>
        },
       
      ]
    },
    
  ]);

  export default router;