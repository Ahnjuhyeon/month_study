import { styled } from "styled-components";
import { useQueryMovieInfinity } from "../../../hooks/use-query";
import OneMovieContent from "../../../components/one-movie-content";
import { useParams } from "react-router-dom";
const MovieList = () => {
  const prams = useParams();
  let pramsKey = prams.category ?? "popular";
  //consol.log() => /movie/popular
  const { movieList, fetchNextPage, isFetching } = useQueryMovieInfinity(
    `/movie/${pramsKey}`
  );
  console.log(movieList && movieList.pages && movieList.pages[0], "얏호!");
  return (
    <Wrapper>
      <MovieGrid>
        {movieList?.pages[0]?.results?.map((movie, index) => (
          <OneMovieContent key={index} movie={movie} />
        ))}
      </MovieGrid>
    </Wrapper>
  );
};
export default MovieList;
const Wrapper = styled.div`
  width: 1280px;
  margin: 0 auto;
`;
const MovieGrid = styled.div`
  padding-top: 78px;
  width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
`;
/*
1. 기본페이지로 prams.category 가 popular로 나와야하는데 안나오는데? = 완
2. 헤더에서 클릭시 해당 파람키로 맞는 데이터 보여주기 = 완 
3. 배너 랜덤으로 바꾸기
4. 무한 스크롤링 
5. 디테일이동

*/
