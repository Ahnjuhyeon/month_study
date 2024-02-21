import axios from "axios";
import TokenRepository from "../repository/token-repository";

export const axiosInstance = () => {
  return axios.create({
    baseURL: "https://topdragon.co.kr",
    headers: {
      Authorization: `Bearer ${TokenRepository.getToken()}`,
    },
    withCredentials: true,
  });
};
