import { axiosInstance } from "./core";

export const fetchMovies = async (paramsKey, pageParam) => {
  const res = await axiosInstance.get(`movie/${paramsKey}?page=${pageParam}`);
  console.log("paramsKey:", paramsKey, "pageParam:", pageParam);
  return res.data;
};
//pramsKey
//movie video language=en
export const getMovieVideo = async (movie_id) => {
  const res = await axiosInstance.get(`movie/${movie_id}/videos`);
  return res.data;
};
//movie_id 랜덤으로 받아야한다
//시퀀스다이어그램!!

//비슷한 영화목록
export const getSimilarMovie = async (movieId) => {
  const response = await axiosInstance.get(`/movie/${movieId}/similar`);
  return response.data;
};

//리뷰
export const getReviews = async (movieId) => {
  const response = await axiosInstance.get(`/movie/${movieId}/reviews`);
  return response.data;
};

//검색어
export const getSearchMovie = async (query) => {
  const response = await axiosInstance.get(`/search/movie?query=${query}`);
  return response.data;
};
