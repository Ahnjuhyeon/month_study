import { useSearchParams } from "react-router-dom";
import { styled } from "styled-components";

const IssuePagination = ({ currentPage, onPageChange, perPage }) => {
  const [searchParams] = useSearchParams();
  const itemsPerPage = searchParams.get("per_page") ?? 10;
  // const page = searchParams.get("page") ?? 1;
  const totalIssues = 200;
  //페이지네이션은 페이지 수나, 토탈 개 수가 있어야하므로 알고 있어야 한다

  //페이지네이션 버튼 함수
  const renderPageButtons = () => {
    const totalPages = Math.ceil(totalIssues / perPage);
    console.log("totalPages", totalIssues);
    const pageButtons = [];
    for (let i = 1; i <= totalPages; i++) {
      pageButtons.push(
        <Button
          key={i}
          onClick={() => onPageChange(i)}
          style={{ backgroundColor: currentPage === i ? "blue" : "#fff" }}
          // value={page}
        >
          {i}
        </Button>
      );
    }
    return pageButtons;
  };
  //버튼
  const onStartBtn = () => onPageChange(1);
  const onBefore = () => onPageChange(Math.max(currentPage - 1, 1));
  const onNext = () =>
    onPageChange(
      Math.min(currentPage + 1, Math.ceil(totalIssues / itemsPerPage))
    );
  const onEndBtn = () => onPageChange(Math.ceil(totalIssues / itemsPerPage));

  return (
    <PaginationBtn>
      <Button onClick={onStartBtn}>《</Button>
      <Button onClick={onBefore}>〈</Button>
      {renderPageButtons()}
      <Button onClick={onNext}>〉</Button>
      <Button onClick={onEndBtn}>》</Button>
    </PaginationBtn>
  );
};
export default IssuePagination;

const PaginationBtn = styled.div`
  display: flex;
  justify-content: center;
`;
const Button = styled.button`
  font-weight: 900;
`;
