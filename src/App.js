import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import ContactUS from "./components/ContactUS";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
// import Grocery from "./components/Grocery";

const Grocery = lazy(() => import("./components/Grocery"));
const AppLayout = () => { //here we write all the components which all sections our page will be divided in...
    return (<div className="app">
        <Header />
        <Outlet />   {/**Wheneever there is a change in the path this outlet will be filled up with appropriate path */}
    </div>)
};

const appRouter = createBrowserRouter([
    {
        path: "/", //ha main path ani hyavarun children la pathaavta yeil..
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <ContactUS />
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<h1>Jab tak load honga tabtak mujhe dekh na...</h1>}><Grocery /></Suspense>
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />
            }
        ],
        errorElement: <Error/>,
    },
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);