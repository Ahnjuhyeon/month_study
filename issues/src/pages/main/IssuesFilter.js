import { useSearchParams } from "react-router-dom";
import { styled } from "styled-components";

const IssuesFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sort = searchParams.get("sort") ?? "";

  const optionTypes = [
    { label: "-- 게시글 정렬 --", value: null },
    { label: "생성 순", value: "created" },
    { label: "업데이트 순", value: "updated" },
    { label: "댓글 순", value: "comments" },
  ];

  const onIssuesFilter = (e) => {
    const value = e.target.value;
    console.log(value);
    setSearchParams({ sort: value });
    // switch(value){
    //   case '생성 순':
    // }
  };

  return (
    <Wrapper>
      <select onChange={onIssuesFilter} value={sort}>
        {optionTypes.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
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
/*
import { useSearchParams } from "react-router-dom";
import { styled } from "styled-components";

const IssuesFilter = () => {
  const [searchParams, setSeratchParams] = useSearchParams();
  const filter = searchParams.get("filter") ?? null;

  const optionTypes = [
    "-- 게시글 정렬 --",
    "생성 순",
    "업데이트 순",
    "댓글 순",
  ];

  const onIssuesFilter = (e) => {
    const value = e.target.value;
    console.log(value);
    switch(value){
      case '생성 순': 
    }
 
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

*/
