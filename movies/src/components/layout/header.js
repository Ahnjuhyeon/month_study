import { styled } from "styled-components";
import { flexAlignCenter } from "../../styles/common.style";
import SearchBox from "./components/search";

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderBox>
        <Logo>
          <img src="/images/logo.png" alt="Logo" />
        </Logo>
        <FilterBar>
          <Standard>상영 중</Standard>
          <Standard
          //   onClick={() => onOpenTab(MOVIE_QUERY_KEY.UPCOMING)}
          //   active={activeTab === MOVIE_QUERY_KEY.UPCOMING}
          >
            개봉 예정
          </Standard>
          <Standard
          //   onClick={() => onOpenTab(MOVIE_QUERY_KEY.POPULAR)}
          //   active={activeTab === MOVIE_QUERY_KEY.POPULAR}
          >
            인기 작품
          </Standard>
          <Standard>높은 평점</Standard>
        </FilterBar>
        <SearchBox />
        {/* <UserProfile>user</UserProfile> */}
      </HeaderBox>
    </HeaderWrapper>
  );
};
export default Header;
const HeaderWrapper = styled.div`
  background-color: black;
  width: 100%;
  height: 100px;
  position: fixed;
  z-index: 100;
`;
const HeaderBox = styled.div`
  width: 1280px;
  height: 100px;
  margin: 0 auto;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
`;

const Logo = styled.div`
  width: 100px;
  height: 40px;
  cursor: pointer;
`;

const FilterBar = styled.ul`
  position: absolute;
  left: 8%;
  width: 36%;
  ${flexAlignCenter}
  justify-content: space-evenly;
`;
const Standard = styled.div`
  cursor: pointer;
  &:hover {
    font-weight: bold;
    color: #ff0458;
  }
`;
