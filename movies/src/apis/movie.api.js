import { axiosInstance } from "./core";

export const fetchMovies = async (endpoint) => {
  const response = await axiosInstance.get(endpoint);
  return response;
};
