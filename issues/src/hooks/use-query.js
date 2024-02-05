import { useQuery } from "@tanstack/react-query";
import { getIssuesData } from "../apis/issue.api";

export function useQueryIssue(filter) {
  const { data: issuesList, refetch } = useQuery({
    queryKey: ["issuesList"],
    queryFn: () => getIssuesData(filter),
  });

  return { issuesList, refetch };
}
