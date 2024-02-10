import { useQuery } from "@tanstack/react-query";
import { MOVIE_QUERY_KEY } from "../consts/queryKey";
import { fetchMovies } from "../apis/movie.api";

export function useQueryMovieInfinity(pramsKey) {
  const { data: movieList, refetch } = useQuery({
    queryKey: [pramsKey],
    queryFn: () => fetchMovies(pramsKey),
  });
  console.log(pramsKey, movieList);
  return { movieList, refetch };
}
