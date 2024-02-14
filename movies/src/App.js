import { RouterProvider } from "react-router-dom";
import { router } from "./routes/route";
import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
