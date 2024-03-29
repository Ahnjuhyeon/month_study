import { styled } from "styled-components";
import { useQueryMovieInfinity } from "../../../hooks/use-query";
import OneMovieContent from "../../../components/one-movie-content";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const MovieList = () => {
  // const navigate = useNavigate();
  const params = useParams();
  const [ref, inView] = useInView();
  let paramsKey = params.category ?? "popular";
  //consol.log() => /movie/popular
  const { data: movieList, fetchNextPage } = useQueryMovieInfinity(paramsKey);

  // console.log(movieList && movieList.pages && movieList.pages[0], "얏호!");
  useEffect(() => {
    console.log(inView);
    // 특정 요소가 감지되었을 때 무한 스크롤링
    // 마우스 스크롤링 이벤트 --> 쓰로틀링 (중복요청) ---> view box가 달라졌을 때 스크롤 위치 계산
    // 복붙한 코드란 이야기야!!! 누가 복붙하래
    fetchNextPage();
  }, [fetchNextPage, inView]);
  return (
    <Wrapper>
      <MovieGrid>
        {movieList?.pages?.map((page) =>
          page.results?.map((movie, index) => (
            <OneMovieContent key={index} movie={movie} />
          ))
        )}
      </MovieGrid>
      <div ref={ref}></div>
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
3. 배너 랜덤으로 바꾸기 = 완
4. 무한 스크롤링  하..ㅆ..
5. 디테일이동 = 완
6. 혼나고 물어보기... 두시간이나 봤눈데...
*/
