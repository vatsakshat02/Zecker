import React from "react";
import Login from "./Login";
import Dashboard from "./Dashboard";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

const Body = () => {
  return <RouterProvider router={router} />;
};
export default Body;
