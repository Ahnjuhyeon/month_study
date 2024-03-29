import { styled } from "styled-components";
import { flexAlignCenter } from "../../styles/common.style";
import SearchBox from "./components/search";
import { useState } from "react";
import { MOVIE_QUERY_KEY } from "../../consts/queryKey";
import { useNavigate } from "react-router-dom";
import { HeaderIcon } from "../../images/icon";

const Header = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(MOVIE_QUERY_KEY.POPULAR);
  //main으로 이동
  const onClickMainPage = () => {
    navigate("/");
    window.scroll({
      top: 0,
    });
  };

  const onOpenTab = (tabKey) => {
    navigate(tabKey);
    window.scroll({
      top: 0,
    });
    setActiveTab(tabKey);
  };

  return (
    <HeaderWrapper>
      <HeaderBox>
        <Logo onClick={onClickMainPage}>
          <img src={HeaderIcon.Logo} alt="Logo" />
        </Logo>
        <FilterBar>
          <Standard
            onClick={() => onOpenTab(MOVIE_QUERY_KEY.NOW_PLAYING)}
            active={activeTab === MOVIE_QUERY_KEY.NOW_PLAYING}
          >
            상영 중
          </Standard>
          <Standard
            onClick={() => onOpenTab(MOVIE_QUERY_KEY.UPCOMING)}
            active={activeTab === MOVIE_QUERY_KEY.UPCOMING}
          >
            개봉 예정
          </Standard>
          <Standard
            onClick={() => onOpenTab(MOVIE_QUERY_KEY.POPULAR)}
            active={activeTab === MOVIE_QUERY_KEY.POPULAR}
          >
            인기 작품
          </Standard>
          <Standard
            onClick={() => onOpenTab(MOVIE_QUERY_KEY.TOP_RATED)}
            active={activeTab === MOVIE_QUERY_KEY.TOP_RATED}
          >
            높은 평점
          </Standard>
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
  height: 113px;
  position: fixed;
  z-index: 100;
`;
const HeaderBox = styled.div`
  width: 1280px;
  height: 113px;
  margin: 0 auto;
  background: rgba(0, 0, 0, 0.9);
  /* background-color: darkgrey; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  position: relative;
`;

const Logo = styled.div`
  cursor: pointer;
  & > img {
    width: 80px;
  }
`;

const FilterBar = styled.ul`
  position: absolute;
  left: 9%;
  width: 36%;
  ${flexAlignCenter}
  justify-content: space-evenly;
`;
const Standard = styled.div`
  cursor: pointer;
  &:hover {
    font-weight: bold;
    font-size: 20px;
  }
`;
