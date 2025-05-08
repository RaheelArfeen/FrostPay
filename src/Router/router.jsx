import {
    createBrowserRouter,
} from "react-router";
import Root from "../Root/Root";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";
import Bills from "../Pages/Bills";
import Profile from "../Pages/Profile";
import UpdateProfile from "../Pages/UpdateProfile";
import { ProtectedRoute } from "../Provider/ProtectedRoute";
import BillsDetail from "../Pages/BillsDetail";
import AddBalance from "../Pages/AddBalance";
import BlogDetails from "../Pages/BlogDetail";
  
  const billsLoader = async () => {
    const response = await fetch('/bills.json');
    const data = await response.json();
    return { bills: data };
  };
  
  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/bills', loader: billsLoader, element: <ProtectedRoute><Bills /></ProtectedRoute> },
        { path: '/profile', element: <ProtectedRoute><Profile /></ProtectedRoute> },
        { path: '/update-profile', element: <ProtectedRoute><UpdateProfile /></ProtectedRoute> },
        { path: '/add-balance', element: <ProtectedRoute><AddBalance /></ProtectedRoute> },
        { path: '/bills/:id', element: <ProtectedRoute><BillsDetail /></ProtectedRoute>, loader: billsLoader, },
        { path: '/blog/:id', element: <ProtectedRoute><BlogDetails /></ProtectedRoute> },
        { path: '/login', element: <Login /> },
        { path: '/register', element: <Register /> },
      ]
    },
  ]);
  