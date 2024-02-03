import { useQueryIssue } from "../../hooks/use-query";
import IssuesFilter from "./IssuesFilter";
import IssuListPage from "./issueList";
import IssuePagination from "./issuePagination";

const MainPage = () => {
  const { issuesList } = useQueryIssue();
  console.log(issuesList);

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
      <IssuePagination />
    </>
  );
};
export default MainPage;
