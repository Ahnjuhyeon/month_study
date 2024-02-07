import { useInfiniteQuery } from "@tanstack/react-query";
import { MOVIE_QUERY_KEY } from "../consts/queryKey";
import { fetchMovies } from "../apis/movie.api";

export function useQueryMovieInfinity() {
  const { data: movieList, refetch } = useInfiniteQuery({
    queryKey: [MOVIE_QUERY_KEY.NOW_PLAYING],
    queryFn: () => fetchMovies(),
  });
  return { movieList, refetch };
}
