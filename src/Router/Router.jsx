import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import Donation from "../pages/Donation/Donation";
import Statistics from "../pages/Statistics/Statistics";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import DonationItem from "../pages/DonationItem/DonationItem";


const myCreateRoute = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: ()=> fetch('/data.json')
            },
            {
                path: "/donation",
                element: <Donation></Donation>,

            },
            {
                path: "/statistics",
                element: <Statistics></Statistics>,
                loader: ()=> fetch('/data.json') 
            },
            {
                path: "/donations/:id",
                element: <DonationItem></DonationItem>,
                loader: ()=> fetch('/data.json') 

            }
        ]
    }
])

export default myCreateRoute;