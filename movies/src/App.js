import "./App.css";

import { RouterProvider } from "react-router-dom";
import { router } from "./routes/route";

function App() {
  //나중에 다 지울거지~
  // useEffect(() => {
  //   // fetchMovies(`/movie/now_playing`);
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetchMovies(`/movie/now_playing`);
  //       console.log("data", response.data);
  //       // Handle data or set state here if needed
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData(); // 호출된 함수 내에서 async 함수 실행

  //   // Clean-up 함수 (이 경우에는 아무 일도 하지 않음)
  //   return () => {};
  // }, []);
  return (
    <>
      <RouterProvider router={router} />;
    </>
  );
}

export default App;
