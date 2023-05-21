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
import NotFound from "../Pages/NotFound/NotFound";
import Details from "../Pages/Home/DollDetailsData/Details";
import DetailsTwo from "../Pages/Home/DollDetailsData/DetailsTwo";
import BtnDetails from "../Pages/Home/DollDetailsData/BtnDetails";
import PrivateRoute from "./PrivateRoute";
import CardToy from "../Pages/Home/SubCategory/CardToy";




const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/allToys',
        element: <AllToys />
      },
      {
        path: '/myToys',
        element: <PrivateRoute><MyToys /></PrivateRoute>
      },
      {
        path: '/addAToys',
        element: <PrivateRoute><AddAToys /></PrivateRoute>
      },
      {
        path: '/blog',
        element: <Blog />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/cardToy',
        element: <PrivateRoute><CardToy/></PrivateRoute>
      },
      {
        path: '/details/:id',
        element: <PrivateRoute><Details /></PrivateRoute>,
        loader: ({ params }) => fetch(`https://baby-doll-server-side.vercel.app/toysOne/${params.id}`)
      },
      {
        path: '/detailsTwo/:id',
        element: <PrivateRoute><DetailsTwo /></PrivateRoute>,
        loader: ({ params }) => fetch(`https://baby-doll-server-side.vercel.app/toysTwo/${params.id}`)
      },
      {
        path:'/btnDetails/:id',
        element:<PrivateRoute><BtnDetails/></PrivateRoute>,
        loader:({params}) =>fetch(`https://baby-doll-server-side.vercel.app/toysThree/${params.id}`)
      }

    ]
  },
 
  {
    path: '/*',
    element: <NotFound />
  }

]);

export default router;