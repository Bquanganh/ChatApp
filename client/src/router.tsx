import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "./Pages/layouts/AuthLayout";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";

export const router = createBrowserRouter([
    {
        element: <AuthLayout/>,
        children:[
            {path: 'login', element: <Login/>},
            {path: 'signUp', element: <SignUp/>},
        ]
    }
])