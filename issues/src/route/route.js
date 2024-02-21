import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/main/main";
import DetailPage from "../pages/detail/detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/detailPage",
    element: <DetailPage />,
  },
]);

export default router;
