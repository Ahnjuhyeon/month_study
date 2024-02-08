import { axiosInstance } from "./core";

export const getIssuesData = async ({ ...filter }) => {
  const { data } = await axiosInstance.get("", {
    params: { ...filter },
  });
  // console.log(data); //데이터 확인!
  return data;
};
