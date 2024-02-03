import { RouterProvider } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/main/main";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import router from "./route/route";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}>
        <MainPage />
      </RouterProvider>
    </QueryClientProvider>
  );
}

export default App;
