import {
    createBrowserRouter,
} from "react-router";
import Root from "../Root/Root";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import HomePage from "../Pages/HomePage";
import ErrorPage from "../Pages/ErrorPage";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <ErrorPage/>,
        children: [
            {path: '/', Component: HomePage},
            {path: '/login', Component: Login},
            {path: '/register', Component: Register}
        ]
    },
]);