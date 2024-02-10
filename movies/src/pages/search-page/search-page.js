import styled from "styled-components";
const SearchPage = () => {
  return (
    <Wrapper>
      <OneMovie>
        <MoviePoster>
          <img />
        </MoviePoster>
        <MovieInfo>
          <Title>movie.title</Title>
          <Hr />
          <div>movie.release_date</div>
          <Content>
            movie.overviewmovie.overviewmovie.
            movie.overviewmovie.overviewmovie.
            movie.overviewmovie.overviewmovie.
            movie.overviewmovie.overviewmovie....
          </Content>
          <Button>상세보기</Button>
        </MovieInfo>
      </OneMovie>
    </Wrapper>
  );
};
export default SearchPage;
const Wrapper = styled.div`
  padding-top: 178px;
  width: 1280px;
  margin: 0 auto;
`;
const OneMovie = styled.div`
  display: flex;
  border-bottom: 1px solid #bdbdbd;
`;
/*
const MoviePoster = styled.div`
  margin: 0;
  img {
    min-width: 230px;
    max-width: 230px;
    border-radius: 10px;
    display: inline-block;
    border: 1px solid #111;
  }
`;*/
const MoviePoster = styled.div`
  width: 635px;
  height: 573px;
  background-color: blueviolet;
`;

const MovieInfo = styled.div`
  width: 645px;
  padding: 50px 80px;

  & > p {
    font-size: 36px;
    font-weight: 300;
  }
`;
//밑줄
const Hr = styled.hr`
  background-color: #bdbdbd;
  height: 1px;
  border: none;
`;

const Title = styled.div`
  font-size: 56px;
  font-weight: 700;
`;
const Content = styled.div`
  font-size: 34px;
  font-weight: 400;
`;

const Button = styled.button`
  margin-top: 56px;
  width: 192px;
  height: 60px;
  border-radius: 30px;
  transition: all 0.3s;
  cursor: pointer;
  text-align: center;
  font-size: 24px;
  padding-top: 5px;
  background-color: white;
  border: 1px solid #bdbdbd;

  &:hover {
    background-color: black;
    color: white;
  }
`;
