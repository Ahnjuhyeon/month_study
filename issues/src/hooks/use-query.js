import { useQuery } from "@tanstack/react-query";
import { getIssuesData } from "../apis/issue.api";

export function useQueryIssue(...filter) {
  const { data: issuesList, refetch } = useQuery({
    queryKey: ["issuesList", filter.page],
    queryFn: () => getIssuesData(...filter),
  });
  console.log(issuesList);
  return { issuesList, refetch };
}
