import { useQuery } from "@tanstack/react-query";
import { getIssuesData } from "../apis/issue.api";

export function useQueryIssue() {
  const { data: issuesList } = useQuery({
    queryKey: ["issuesList"],
    queryFn: async () => {
      try {
        const query = {
          // 적절한 쿼리 파라미터를 제공하세요
        };
        const data = await getIssuesData({ ...query });
        // console.log(data);//데이터 확인!
        return data;
      } catch (error) {
        throw error; // 에러 발생 시 처리
      }
    },
  });

  return { issuesList };
}
