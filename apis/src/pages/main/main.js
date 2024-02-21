import IssuesFilter from "./IssuesFilter";
import IssuListPage from "./issueList";
import { useQueryIssue } from "../../hooks/use-query";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import IssuePagination from "./issuePagination";

const MainPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sort = searchParams.get("sort") ?? "created";
  // const state = searchParams.get("state") ?? ""; //오류나는데 15번째에 값 넣음녀?
  // const page = parseInt(searchParams.get("page")) ?? 1; // ||1 안해놓으면 안나옴
  const page = searchParams.get("page") ?? 1;
  // const per_page = parseInt(searchParams.get("per_page")) ?? "";
  const per_page = searchParams.get("per_page") ?? 10; //30
  // const count = searchParams.get("count") ?? 10;
  const [currentPage, setCurrentPage] = useState(page); // 현재 페이지 상태 추가

  const { issuesList, refetch } = useQueryIssue({
    sort,
    page,
    // state,
    per_page,
  });

  useEffect(() => {
    // queryClient.invalidateQueries({ queryKey: ["issuesList"] });
    refetch();
  }, [sort, page, per_page, refetch, issuesList]);

  if (!issuesList) {
    // 데이터가 로딩 중이거나 에러가 발생한 경우
    return <p>Loading...</p>;
  }

  const onPageChange = (newPage) => {
    setCurrentPage(newPage);
    // console.log(newPage);
    // 페이지가 변경될 때 URL 쿼리 파라미터를 업데이트
    // searchParams.set("page", newPage);
    // 페이지 변경 시에는 새로운 URL을 생성하여 페이지를 변경
    //이거를 쓰지 않으면 url에 나오지 않아용
    //펄페이지숫자를 늘렸더니 버튼이 늘어났다
    setSearchParams((prev) => {
      prev.set("page", newPage);
      return prev;
    });
  };
  console.log(issuesList, currentPage, per_page);
  return (
    <>
      <IssuesFilter />
      {issuesList.map((list, index) => (
        <IssuListPage key={index} list={list} />
      ))}
      <IssuePagination
        currentPage={currentPage}
        onPageChange={onPageChange}
        perPage={per_page}
      />
    </>
  );
};
export default MainPage;
/*
마지막 페이지 가면 버튼 닫아놓는거
쿼리스트링 유지?
*/
