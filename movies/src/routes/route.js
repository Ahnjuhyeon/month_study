import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/home-page/main-page";
import Layout from "../components/layout/layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
    ],
  },
]);
