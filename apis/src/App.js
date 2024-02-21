import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/route";
import AuthProvider from "./provider/auth-provider";

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
