import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/home-page/main-page";
import Layout from "../components/layout/layout";
import DetailPage from "../pages/detail-page/detail-page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/detailPage",
        element: <DetailPage />,
      },
    ],
  },
]);
