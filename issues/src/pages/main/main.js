import IssuesFilter from "./IssuesFilter";
import IssuListPage from "./issueList";
// // import IssuePagination from "./issuePagination";
import { useQueryIssue } from "../../hooks/use-query";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";

const MainPage = () => {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();
  const sort = searchParams.get("sort") ?? "";
  console.log(sort);
  const { issuesList, refetch } = useQueryIssue({ sort });
  console.log(issuesList);

  useEffect(() => {
    // queryClient.invalidateQueries({ queryKey: ["issuesList"] });
    refetch();
  }, [sort]);

  if (!issuesList) {
    // 데이터가 로딩 중이거나 에러가 발생한 경우
    return <p>Loading...</p>; // 또는 에러 메시지를 표시할 수도 있습니다.
  }

  return (
    <>
      <IssuesFilter />
      {issuesList.map((list, index) => (
        <IssuListPage key={index} list={list} />
      ))}
      {/* <IssuePagination /> */}
    </>
  );
};
export default MainPage;
