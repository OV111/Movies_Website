import React from 'react'
import {createBrowserRouter} from "react-router-dom" 
import MainLayout from './layouts/MainLayout'


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <></>,
        children: [

        ]
    },
    {}
])
export default router