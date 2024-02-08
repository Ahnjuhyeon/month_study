import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://api.github.com/repos/angular/angular-cli/issues",
  // headers: {
  //   Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
  // },
});
