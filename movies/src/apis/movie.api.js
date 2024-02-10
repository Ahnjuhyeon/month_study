import { axiosInstance } from "./core";

export const fetchMovies = async (endpoint) => {
  const response = await axiosInstance.get(endpoint);
  return response.data;
};
//pramsKey
//movie video language=en
export const getMovieVideo = async (movie_id) => {
  const res = await axiosInstance.get(`movie/${movie_id}/videos`);
  return res.data;
};
//movie_id 랜덤으로 받아야한다
//시퀀스다이어그램!!
