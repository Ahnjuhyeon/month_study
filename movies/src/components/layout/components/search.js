import { styled } from "styled-components";
import { flexCenter } from "../../../styles/common.style";
import MovieInput from "../../input";
import { HeaderIcon } from "../../../images/icon";

const SearchBox = () => {
  return (
    <>
      <InputBox>
        <SearchIcon>
          <img src={HeaderIcon.search} />
        </SearchIcon>
        <form>
          <MovieInput variant="primary" size="small" font="small" />
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
