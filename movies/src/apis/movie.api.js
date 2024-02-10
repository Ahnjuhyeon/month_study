import { axiosInstance } from "./core";

export const fetchMovies = async (endpoint) => {
  const response = await axiosInstance.get(endpoint);

  return response.data;
};

//movie video language=en
export const getMovieVideo = async (movie_id) => {
  const res = await axiosInstance.get(`movie/${movie_id}/videos`);
  console.log(res);
  return res.data;
};
