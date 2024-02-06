import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { styled } from "styled-components";

const IssuePagination = ({ currentPage, onPageChange, totalIssues }) => {
  const itemsPerPage = 10;
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page") ?? 1;
  console.log(page);
  const renderPageButtons = () => {
    const totalPages = Math.ceil(totalIssues / itemsPerPage);
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
