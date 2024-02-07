import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  headers: {
    Authorization: process.env.REACT_APP_API_TOKEN,
  },
  params: {
    api_key: process.env.REACT_APP_KAKAO_API_TOKEN,
  },
});
