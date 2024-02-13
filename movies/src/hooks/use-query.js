import { useInfiniteQuery } from "@tanstack/react-query";
import { MOVIE_QUERY_KEY } from "../consts/queryKey";
import { fetchMovies } from "../apis/movie.api";

export function useQueryMovieInfinity(pramsKey, pageParam) {
  const {
    data: movieList,
    refetch,
    fetchNextPage,
    hasNextPage,
    isFetching,
  } = useInfiniteQuery({
    queryKey: [pramsKey, pageParam],
    queryFn: ({ pageParam = 1 }) => fetchMovies(pramsKey, pageParam),
    getNextPageParam: (lastPage) => {
      const page = lastPage.page;
      if (lastPage.total_pages === page) return false;
      return page + 1;
    },
  });
  // console.log(pramsKey, "무비리스트는!!!=", movieList); //popular/리스트 나와용
  return { movieList, refetch, fetchNextPage, isFetching, hasNextPage };
}
