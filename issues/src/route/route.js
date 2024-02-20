import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/main/main";
import DetailPage from "../pages/detail/detail";
import LoginPage from "../pages/login/login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/loginPage",
    element: <LoginPage />,
  },
  {
    path: "/detailPage",
    element: <DetailPage />,
  },
]);

export default router;
