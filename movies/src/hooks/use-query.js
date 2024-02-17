import { MOVIE_QUERY_KEY } from "../consts/queryKey";
import { fetchMovies } from "../apis/movie.api";
import { useInfiniteQuery } from "react-query";

export function useQueryMovieInfinity(paramsKey) {
  return useInfiniteQuery({
    queryKey: [paramsKey],
    queryFn: ({ pageParam = 1 }) => fetchMovies(paramsKey, pageParam),
    getNextPageParam: (lastPage) => {
      const page = lastPage.page; //1
      // console.log("page", lastPage);
      if (lastPage.total_pages === page) return false;
      return page + 1;
    },
  });
}
