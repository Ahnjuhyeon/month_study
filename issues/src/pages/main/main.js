import IssuesFilter from "./IssuesFilter";
import IssuListPage from "./issueList";
import { useQueryIssue } from "../../hooks/use-query";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import IssuePagination from "./issuePagination";

const MainPage = () => {
  const [searchParams] = useSearchParams();
  const sort = searchParams.get("sort") ?? "";
  // const state = searchParams.get("state") ?? ""; //오류나는데 15번째에 값 넣음녀?
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 상태 추가
  console.log(sort);
  const { issuesList, refetch } = useQueryIssue({ sort });

  useEffect(() => {
    // queryClient.invalidateQueries({ queryKey: ["issuesList"] });
    refetch();
  }, [sort]);

  if (!issuesList) {
    // 데이터가 로딩 중이거나 에러가 발생한 경우
    return <p>Loading...</p>;
  }
  const onPageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <>
      <IssuesFilter />
      {/* {issuesList.map((list, index) => (
        <IssuListPage key={index} list={list} />
      ))} */}
      {issuesList
        .slice((currentPage - 1) * 10, currentPage * 10)
        .map((list, index) => (
          <IssuListPage key={index} list={list} />
        ))}
      <IssuePagination
        currentPage={currentPage}
        onPageChange={onPageChange}
        totalIssues={issuesList.length}
      />
    </>
  );
};
export default MainPage;
