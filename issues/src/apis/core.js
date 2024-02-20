import axios from "axios";
import TokenRepository from "../repository/token-repository";

export const axiosInstance = axios.create({
  baseURL: "https://api.github.com/repos/angular/angular-cli/issues",
  // headers: {
  //   Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
  // },
});

export const axiosLoginInstance = axios.create({
  baseURL: "https://topdragon.co.kr",
  headers: {
    Authorization: `Bearer ${TokenRepository.getToken()}`,
  },
  withCredentials: true,
});

axiosLoginInstance.interceptors.request.use(
  (config) => {
    const token = TokenRepository.getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosLoginInstance;
