import { RouterProvider } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/main/main";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import router from "./route/route";
import AuthProvider from "./provider/auth-provider";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router}>
          <MainPage />
        </RouterProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
