import IssuesFilter from "./IssuesFilter";
import IssuListPage from "./issueList";
import { useQueryIssue } from "../../hooks/use-query";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import IssuePagination from "./issuePagination";
// import { useQueryClient } from "@tanstack/react-query";

const MainPage = () => {
  // const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();
  const sort = searchParams.get("sort") ?? "";
  // const state = searchParams.get("state") ?? ""; //오류나는데 15번째에 값 넣음녀?
  console.log(sort);
  const { issuesList, refetch } = useQueryIssue({ sort });
  console.log(issuesList);

  useEffect(() => {
    // queryClient.invalidateQueries({ queryKey: ["issuesList"] });
    refetch();
  }, [sort]);

  if (!issuesList) {
    // 데이터가 로딩 중이거나 에러가 발생한 경우
    return <p>Loading...</p>;
  }

  return (
    <>
      <IssuesFilter />
      {issuesList.map((list, index) => (
        <IssuListPage key={index} list={list} />
      ))}
      <IssuePagination issuesList={issuesList} />
    </>
  );
};
export default MainPage;
