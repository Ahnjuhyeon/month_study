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
  // const [currentPage, setCurrentPage] = useState(1);
  // const [totalPages, setTotalPages] = useState(1);
  const totalPages = Math.ceil(issuesList.length / 10);
  console.log(totalPages);
  // const [totalItems, setTotalItems] = useState(1);
  // const [itemsPerPage, setItemsPerPage] = useState(10);
  /*
현재 페이지 (currentPage): 현재 보여지는 페이지의 번호입니다.
전체 페이지 수 (totalPages): 전체 아이템을 기준으로 나누어진 전체 페이지의 수입니다.
전체 아이템 수 (totalItems): 페이지네이션을 적용할 대상의 전체 아이템 수입니다.
페이지당 아이템 수 (itemsPerPage): 각 페이지당 보여질 아이템의 수입니다.
  */
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
