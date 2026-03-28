import Login from "./Login";
import Dashboard from "./Dashboard";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./AppLayout";
import TaskTracker from "./TaskTracker";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "",
        element: <Login />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/tasktracker",
        element: <TaskTracker />,
      },
    ],
  },
]);

const Body = () => {
  return <RouterProvider router={router} />;
};
export default Body;
