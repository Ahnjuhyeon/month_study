// import { useEffect } from "react";
import { fetchMovies } from "../../../apis/movie.api";
import { styled } from "styled-components";
import { useQueryMovieInfinity } from "../../../hooks/use-query";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { MOVIE_QUERY_KEY } from "../../../consts/queryKey";
import OneMovieContent from "../../../components/one-movie-content";

const MovieList = () => {
  //   //나중에 다 지울거지~
  //   useEffect(() => {
  //     // fetchMovies(`/movie/now_playing`);
  //     const fetchData = async () => {
  //       try {
  //         const response = await fetchMovies(`/movie/now_playing`);
  //         console.log("data", response.data);
  //       } catch (error) {
  //         console.error("Error fetching data:", error);
  //       }
  //     };

  //     fetchData(); // 호출된 함수 내에서 async 함수 실행

  //     return () => {};
  //   }, []);
  //   const { movieList } = useQueryMovieInfinity();
  const { data: movieList, refetch } = useQuery({
    queryKey: [MOVIE_QUERY_KEY.NOW_PLAYING],
    queryFn: () => fetchMovies(`/movie/now_playing`),
  });
  // console.log(movieList);
  return (
    <Wrapper>
      <MovieGrid>
        {movieList &&
          movieList.results.map((movie, index) => (
            <OneMovieContent key={index} movie={movie} />
          ))}
      </MovieGrid>
    </Wrapper>
  );
};
export default MovieList;
const Wrapper = styled.div`
  width: 1280px;
  margin: 0 auto;
`;
const MovieGrid = styled.div`
  padding-top: 78px;
  width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
`;
