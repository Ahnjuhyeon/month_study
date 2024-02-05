import IssuesFilter from "./IssuesFilter";
import IssuListPage from "./issueList";
// // import IssuePagination from "./issuePagination";
import { useQueryIssue } from "../../hooks/use-query";
import { useEffect } from "react";
const MainPage = () => {
  const { issuesList } = useQueryIssue();
  console.log(issuesList);

  // useEffect(() => {
  //   // 데이터를 다시 가져오는 작업 수행
  // }, [issuesList]); // issuesList가 변경될 때마다 useEffect가 실행됨

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
