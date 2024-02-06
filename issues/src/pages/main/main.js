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
  const page = parseInt(searchParams.get("page")) || 1;
  const [currentPage, setCurrentPage] = useState(page); // 현재 페이지 상태 추가
  console.log(page);
  const { issuesList, refetch } = useQueryIssue({ sort, page });

  useEffect(() => {
    // queryClient.invalidateQueries({ queryKey: ["issuesList"] });
    refetch();
  }, [sort, page]);

  if (!issuesList) {
    // 데이터가 로딩 중이거나 에러가 발생한 경우
    return <p>Loading...</p>;
  }
  // const onPageChange = (page) => {
  //   setCurrentPage(page);
  // };
  const onPageChange = (newPage) => {
    setCurrentPage(newPage);
    // 페이지가 변경될 때 URL 쿼리 파라미터를 업데이트
    searchParams.set("page", newPage);
    // 페이지 변경 시에는 새로운 URL을 생성하여 페이지를 변경
    // window.history.replaceState({}, "", `?${searchParams.toString()}`);
    // setSearchParams({ page: currentPage });
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
// 왜 주소에는 잘 나오는데... 왜 안가져오는지 모르겠네..? ㅠㅠㅠㅠㅠㅠ
