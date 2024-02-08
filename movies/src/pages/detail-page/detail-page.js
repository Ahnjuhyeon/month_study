import styled from "styled-components";
const DetailPage = () => {
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
      <div>
        <div>이 영화와 비슷해요!</div>
        <div>ID??</div>
      </div>
    </Wrapper>
  );
};
export default DetailPage;
const Wrapper = styled.div`
  width: 1280px;
  margin: 0 auto;
`;
const VideoContent = styled.div`
  background-color: beige;
  width: 1280px;
  height: 760px;
`;

const InfoContent = styled.div`
  background-color: aliceblue;
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
