import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

export default createBrowserRouter([
  {
    element: <MainLayout />,
    children: [],
    path: "/",
  },
]);
