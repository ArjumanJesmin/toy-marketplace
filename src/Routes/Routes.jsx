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
        element: <MyToys />
      },
      {
        path: '/addAToys',
        element: <AddAToys />
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
        path: '/details/:id',
        element: <Details />,
        loader: ({ params }) => fetch(`http://localhost:5000/toysOne/${params.id}`)
      },
      {
        path: '/detailsTwo/:id',
        element: <DetailsTwo />,
        loader: ({ params }) => fetch(`http://localhost:5000/toysTwo/${params.id}`)
      },
      {
        path:'/btnDetails/:id',
        element:<BtnDetails/>,
        loader:({params}) =>fetch(`http://localhost:5000/toysThree/${params.id}`)
      }

    ]
  },
 
  {
    path: '/*',
    element: <NotFound />
  }

]);

export default router;