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

//깃 이슈
export const axiosGitInstance = axios.create({
  baseURL: "https://api.github.com/repos/angular/angular-cli/issues",
  // headers: {
  //   Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
  // },
});
