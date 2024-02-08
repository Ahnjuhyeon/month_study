import { useSearchParams } from "react-router-dom";
import { styled } from "styled-components";

const IssuesFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sort = searchParams.get("sort") ?? "created";
  const state = searchParams.get("state") ?? "open";
  const per_page = searchParams.get("per_page") ?? 10;

  const optionTypes = [
    { label: "-- 게시글 정렬 --", value: "created" },
    { label: "생성 순", value: "created" },
    { label: "업데이트 순", value: "updated" },
    { label: "댓글 순", value: "comments" },
  ];

  const optionStaterTypes = [
    { label: "-- 게시글 정렬 --", value: "open" },
    { label: "open", value: "open" },
    { label: "closed", value: "closed" },
  ];

  const optionCountTypes = [
    { label: "-- 게시글 정렬 --", value: 10 },
    { label: "10", value: 10 },
    { label: "20", value: 20 },
    { label: "30", value: 30 },
  ];
  const onIssuesFilter = (e) => {
    const value = e.target.value;
    console.log(value);
    // setSearchParams((prev) => {
    //   return { ...prev, sort: value };
    // });
    searchParams.append("sort", value);
  };

  const onIssuesFilterState = (e) => {
    const value = e.target.value;
    console.log(value);
    // setSearchParams((prev) => {
    //   return { ...prev, state: value };
    // });
    searchParams.append("state", value);
  };

  const onIssuesFilterCount = (e) => {
    const value = e.target.value;
    console.log(value);
    // setSearchParams((prev) => {
    //   return { ...prev, per_page: value };
    // });
    searchParams.append("per_page", value);
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
      <select onChange={onIssuesFilterState} value={state}>
        {optionStaterTypes.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <select onChange={onIssuesFilterCount} value={per_page}>
        {optionCountTypes.map((option, index) => (
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
