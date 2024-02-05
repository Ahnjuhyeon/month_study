import { axiosInstance } from "./core";

export const getIssuesData = async ({ ...query }) => {
  const res = await axiosInstance.get("", {
    params: { ...query },
  });
  // console.log(res.data);//데이터 확인!
  return res.data;
};
