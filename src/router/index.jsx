import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import CoursePage from "../pages/CoursePage";

export default createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        element: <Home />,
        path: "/",
      },
      {
        element: <CoursePage />,
        path: "/course",
      },
    ],
    path: "/",
  },
]);
