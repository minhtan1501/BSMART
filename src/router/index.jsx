import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";

export default createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        element: <Home />,
        path: "/",
      },
    ],
    path: "/",
  },
]);
