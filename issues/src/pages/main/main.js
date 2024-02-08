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
  // const page = parseInt(searchParams.get("page")) ?? 1; // ||1 안해놓으면 안나옴
  const page = searchParams.get("page") ?? 1;
  // const per_page = parseInt(searchParams.get("per_page")) ?? "";
  const per_page = searchParams.get("per_page") ?? 100;
  const count = searchParams.get("count") ?? 10;
  const [currentPage, setCurrentPage] = useState(page); // 현재 페이지 상태 추가
  console.log(page, per_page); //''
  const { issuesList, refetch } = useQueryIssue({
    sort,
    page,
    // state,
    per_page,
  });

  console.log(issuesList); //30
  useEffect(() => {
    // queryClient.invalidateQueries({ queryKey: ["issuesList"] });
    refetch();
  }, [sort, page, per_page]);

  if (!issuesList) {
    // 데이터가 로딩 중이거나 에러가 발생한 경우
    return <p>Loading...</p>;
  }
  // console.log(issuesList);
  // const onPageChange = (page) => {
  //   setCurrentPage(page);
  //  window.history.replaceState({}, "", `?${searchParams.toString()}`);
  // };
  const onPageChange = (newPage) => {
    setCurrentPage(newPage);
    // 페이지가 변경될 때 URL 쿼리 파라미터를 업데이트
    searchParams.set("page", newPage);
    // 페이지 변경 시에는 새로운 URL을 생성하여 페이지를 변경
    window.history.replaceState({}, "", `?${searchParams.toString()}`);
    //이거를 쓰지 않으면 url에 나오지 않아용
    //펄페이지숫자를 늘렸더니 버튼이 늘어났다
  };
  return (
    <>
      <IssuesFilter />
      {issuesList
        .slice((currentPage - 1) * count, currentPage * count)
        // .slice((currentPage - 1) * per_page, currentPage * per_page) //이러면 per_page설정한 개 수대로 다 나옴
        .map((list, index) => (
          <IssuListPage key={index} list={list} />
        ))}
      <IssuePagination
        currentPage={currentPage}
        onPageChange={onPageChange}
        totalIssues={issuesList.length}
        perPage={count}
      />
    </>
  );
};
export default MainPage;
// 왜 주소에는 잘 나오는데... 왜 안가져오는지 모르겠네..?
