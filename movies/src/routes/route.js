import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/home-page/main-page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
]);
