import { useState } from "react";
import { styled } from "styled-components";

const IssuePagination = ({ currentPage, onPageChange, totalIssues }) => {
  const itemsPerPage = 10;

  const renderPageButtons = () => {
    // if (!issuesList) return null;

    const totalPages = Math.ceil(totalIssues / itemsPerPage);

    const pageButtons = [];
    for (let i = 1; i <= totalPages; i++) {
      pageButtons.push(
        <Button
          key={i}
          onClick={() => onPageChange(i)}
          style={{ backgroundColor: currentPage === i ? "blue" : "#fff" }}
        >
          {i}
        </Button>
      );
    }

    return pageButtons;
  };
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
/*


페이지 크기 설정: 1페이지당 10개
현재 페이지 표시: currentPage
데이터 가져오기: query
현재 페이지에 해당하는 데이터를 가져와서 표시합니다.
페이지 이동:
페이지 버튼 제어:

페이지네이션은 종종 페이지 버튼을 통해 사용자가 직접 특정 페이지로 이동할 수 있도록 합니다.

*/
