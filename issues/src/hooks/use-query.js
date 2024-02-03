import { useQuery } from "@tanstack/react-query";
import { getDataList } from "../apis/core";
import { QUERY_KEY } from "../const/queryKey";

export function useQueryIssue() {
  const { data: issuesList } = useQuery({
    queryKey: [QUERY_KEY.DATA_ISSUE_LIST],
    queryFn: () => getDataList(),
  });
  return { issuesList };
}
