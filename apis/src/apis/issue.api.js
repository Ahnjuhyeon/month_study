import { axiosGitInstance } from "./core";

export const getIssuesData = async ({ ...filter }) => {
  const { data } = await axiosGitInstance.get("", {
    params: { ...filter },
  });
  // console.log(data); //데이터 확인!
  return data;
};
