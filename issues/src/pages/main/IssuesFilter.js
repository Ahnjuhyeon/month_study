import { styled } from "styled-components";

const IssuesFilter = () => {
  const optionTypes = [
    "-- 게시글 정렬 --",
    "생성 순",
    "업데이트 순",
    "댓글 순",
  ];

  const onIssuesFilter = (e) => {
    const value = e.target.value;

    // if (value === "생성 순") {
    //   //   [...contentList].sort((a, b) => b.created_at - a.created_at);
    //   const sortedList = [...contentList].sort(
    //     (a, b) => a.created_at - b.created_at
    //   );
    //   console.log(sortedList);
    // }

    // queryClient.invalidateQueries([QUERY_KEY.DATA_CONTENT_LIST]);
  };

  return (
    <Wrapper>
      <select onChange={onIssuesFilter}>
        {optionTypes.map((option, index) => (
          <option key={index}>{option}</option>
        ))}
      </select>
    </Wrapper>
  );
};
export default IssuesFilter;

//필터 기능 구현 (생성순/업데이트순/댓글순, 10개/20개/50개 씩 보기)
const Wrapper = styled.div`
  cursor: pointer;
  width: 1024px;
  margin: 0 auto;
  margin-bottom: 20px;
`;
