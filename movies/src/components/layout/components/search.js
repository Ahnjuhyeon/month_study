import { styled } from "styled-components";
import { flexCenter } from "../../../styles/common.style";
import MovieInput from "../../input";
import { HeaderIcon } from "../../../images/icon";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SearchBox = () => {
  const navigate = useNavigate();
  const [textValue, setTextValue] = useState("");

  const onOpenSearchPage = (e) => {
    e.preventDefault();
    const keyword = e.target.inputValue.value;

    // validation check
    const regExp = /[A-Za-z]+/gi;
    const keywordCheck = keyword.match(regExp);

    navigate(`/searchPage/:${keywordCheck}`);
    window.scroll({
      top: 0,
    });
  };
  return (
    <>
      <InputBox>
        <SearchIcon>
          <img src={HeaderIcon.search} />
        </SearchIcon>
        <form onSubmit={onOpenSearchPage}>
          <MovieInput
            variant="primary"
            size="small"
            font="small"
            type="text"
            name="inputValue"
            value={textValue}
            onChange={(e) => setTextValue(e.target.value)}
            placeholder="영화의 제목을 입력해주세요."
          />
        </form>
      </InputBox>
    </>
  );
};
export default SearchBox;
const InputBox = styled.div`
  position: absolute;
  right: 0;
  /* transform: translateY(-50%); */
  ${flexCenter}
`;
const SearchIcon = styled.div`
  position: absolute;
  right: 5%;
  margin-top: 10px;
  margin-bottom: 5px;
  cursor: pointer;
  &:hover img {
    transform: scale(1.2);
    transition: transform 0.3s ease;
  }
`;
