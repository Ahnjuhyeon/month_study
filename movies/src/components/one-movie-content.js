import { styled } from "styled-components";
import { skipOverView, skipTitleView } from "../utils/over-flow-length";

const OneMovieContent = ({ movie, onOpenDetailPage }) => {
  return (
    <Wrapper>
      <Poster src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
      <HoverReveal
        onClick={() => {
          onOpenDetailPage(movie);
        }}
      >
        <Content>
          <ContentScore>
            <span>★</span>
            <span>{Math.floor(movie.vote_average * 10) / 10}</span>
            <hr />
          </ContentScore>

          <ContentTitle>
            <div> {skipTitleView(movie.title)}</div>
            <div> {skipOverView(movie.overview)}</div>
          </ContentTitle>
        </Content>
      </HoverReveal>
    </Wrapper>
  );
};
export default OneMovieContent;
const Wrapper = styled.div`
  &:hover {
    cursor: pointer;
  }
  position: relative;
`;

const Poster = styled.img`
  width: 245px;
  height: 352px;
  border-radius: 5px;
`;

const Content = styled.p`
  padding: 30px;
`;
const ContentScore = styled.div`
  font-size: 20px;
  span:first-child {
    margin-right: 10px;
    color: #ffd600;
  }
`;
const ContentTitle = styled.div`
  & > div {
    padding-top: 20px;
  }
  div:first-child {
    font-size: 20px;
    font-weight: 600;
    padding-bottom: 10px;
  }
`;

const HoverReveal = styled.div`
  width: 245px;
  height: 352px;

  border-radius: 5px;
  line-height: 20px;
  color: white;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  display: none;
  overflow: hidden;

  ${Wrapper}:hover & {
    display: block;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.7);
  }
`;
