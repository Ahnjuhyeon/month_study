import { MOVIE_QUERY_KEY } from "../consts/queryKey";
import { fetchMovies } from "../apis/movie.api";
import { useInfiniteQuery } from "react-query";

export function useQueryMovieInfinity(paramsKey) {
  const {
    data: movieList,
    refetch,
    fetchNextPage,
    hasNextPage,
    isFetching,
  } = useInfiniteQuery({
    queryKey: [paramsKey],
    queryFn: ({ pageParam = 1 }) => fetchMovies(paramsKey, pageParam),
    getNextPageParam: (lastPage) => {
      const page = lastPage.page; //1
      // console.log("page", page);
      if (lastPage.total_pages === page) return false;
      return page + 1;
    },
  });
  // console.log(paramsKey, "무비리스트는!!!=", movieList); //popular/리스트 나와용
  return { movieList, refetch, fetchNextPage, isFetching, hasNextPage };
}
