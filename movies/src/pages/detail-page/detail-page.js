import { useParams } from "react-router-dom";
import styled from "styled-components";
const DetailPage = () => {
  const params = useParams();
  const movieId = params.movieId.replace(":", "");
  return (
    <Wrapper>
      <VideoContent>{/* <img /> */}</VideoContent>

      <InfoContent>
        <ContentScore>
          <span>★</span>
          {/* <span>{Math.floor(movie.vote_average * 10) / 10}</span> */}
          <span>4.5</span>
        </ContentScore>
        <ContentTitle>
          <div>Movie.Title</div>
          <div>release movieData.release_date</div>
        </ContentTitle>
        <Contents>
          <div>한줄요약 : movieData.tagline</div>
          <div>movieData.overview</div>
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
