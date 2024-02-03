import { useState } from "react";
import { styled } from "styled-components";
import { useQueryIssue } from "../../hooks/use-query";

const IssuePagination = () => {
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const { issuesList } = useQueryIssue();
  const renderPageButtons = () => {
    if (!issuesList) return null;

    const totalPages = Math.ceil(issuesList.length / itemsPerPage);

    const pageButtons = [];
    for (let i = 1; i <= totalPages; i++) {
      pageButtons.push(
        <Button
          key={i}
          onClick={() => setCurrentPage(i)}
          style={{ backgroundColor: currentPage === i ? "blue" : "#fff" }}
        >
          {i}
        </Button>
      );
    }

    return pageButtons;
  };
  const onStartBtn = () => setCurrentPage(1);
  const onBefore = () =>
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  const onNext = () =>
    setCurrentPage((prevPage) =>
      Math.min(prevPage + 1, Math.ceil(issuesList.length / itemsPerPage))
    );
  const onEndBtn = () =>
    setCurrentPage(Math.ceil(issuesList.length / itemsPerPage));
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
