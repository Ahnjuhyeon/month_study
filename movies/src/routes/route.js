import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/home-page/main-page";
import Layout from "../components/layout/layout";
import DetailPage from "../pages/detail-page/detail-page";
import SearchPage from "../pages/search-page/search-page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/:category",
        element: <MainPage />,
      },
      {
        path: "/detailPage",
        element: <DetailPage />,
      },
      {
        path: "/searchPage",
        element: <SearchPage />,
      },
    ],
  },
]);
