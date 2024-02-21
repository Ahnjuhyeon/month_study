import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/login/login";
import MainPage from "../pages/main/main";
import DetailPage from "../pages/detail/detail";

export const router = createBrowserRouter([
  { path: "/", element: <LoginPage /> },
  { path: "/main", element: <MainPage /> },
  {
    path: "/detailPage",
    element: <DetailPage />,
  },
]);
