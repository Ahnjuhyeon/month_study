import { useQuery } from "react-query";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import { MOVIE_QUERY_KEY } from "../../consts/queryKey";
import { getMovieVideo } from "../../apis/movie.api";
const DetailPage = () => {
  // const params = useParams();
  // const movieId = params.movieId.replace(":", "");

  const location = useLocation();
  const movie = location.state.movie;
  console.log(movie);
  const movieId = movie.id;
  const { data: videoData } = useQuery(
    [MOVIE_QUERY_KEY.DETAIL_VIDEO, movieId],
    () => getMovieVideo(movieId)
  );
  return (
    <Wrapper>
      <VideoContent>{/* <img /> */}</VideoContent>

      <InfoContent>
        <ContentScore>
          <span>★</span>
          <span>{Math.floor(movie.vote_average * 10) / 10}</span>
        </ContentScore>
        <ContentTitle>
          <div>{movie.title}</div>
          <div>{movie.release_date}</div>
        </ContentTitle>
        <Contents>
          <div>{movie.tagline}</div>
          <div>{movie.overview}</div>
        </Contents>
      </InfoContent>
      {/* 리뷰컴포넌트 */}
      <div style={{ textAlign: "center" }}>리뷰보기</div>
      <SimilarMovieContent>
        <div>이 영화와 비슷해요!</div>
        <div>ID??</div>
      </SimilarMovieContent>
    </Wrapper>
  );
};
export default DetailPage;
const Wrapper = styled.div`
  width: 1280px;
  margin: 0 auto;
  padding-top: 100px;
`;
const VideoContent = styled.div`
  background-color: beige;
  width: 1280px;
  height: 760px;
`;

const InfoContent = styled.div`
  width: 1100px;
  margin: 0 auto;
  margin-top: 55px;
  margin-bottom: 55px;
`;
const ContentScore = styled.div`
  font-size: 40px;
  span:first-child {
    margin-right: 10px;
    color: #ffd600;
  }
`;
const ContentTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;

  div:first-child {
    font-size: 54px;
    font-weight: 700;
  }
  div:last-child {
    font-weight: 100;
  }
`;
const Contents = styled.div`
  padding: 70px 0;
  div:first-child {
    font-size: 28px;
    font-weight: 400;
  }
  div:last-child {
    width: 900px;
    padding-top: 63px;
    font-size: 26px;
    font-weight: 300;
  }
`;

const SimilarMovieContent = styled.div`
  width: 1100px;
  margin: 0 auto;

  div:first-child {
    font-size: 20px;
    font-weight: 400;
  }
  div:last-child {
    padding-top: 22px;
  }
`;
