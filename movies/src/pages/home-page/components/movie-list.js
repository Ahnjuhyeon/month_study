import { styled } from "styled-components";
import { useQueryMovieInfinity } from "../../../hooks/use-query";
import OneMovieContent from "../../../components/one-movie-content";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const MovieList = () => {
  const params = useParams();
  let paramsKey = params.category ?? "popular";
  // let pageParam = 1;
  //consol.log() => /movie/popular
  const { movieList, fetchNextPage } = useQueryMovieInfinity(paramsKey);

  // console.log(movieList && movieList.pages && movieList.pages[0], "얏호!");

  // 스크롤 최하단 시 fetchNextPage실행
  const handleScroll = () => {
    console.log("scrolling..."); // 얘는 계속 되는데
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    if (scrollTop + clientHeight >= scrollHeight) {
      console.log("최하단!");
      return fetchNextPage(); // 이게 안 찍힘...
    }
    // 이거를 쓰면 movieList이게 호출이 된다 ...
  };

  useEffect(() => {
    console.log("scrollTop", document.documentElement.scrollTop); // 이게 실시간 감지가 안 되는 건가 계속 0만 뜸
    console.log("clientHeight", document.documentElement.clientHeight); //clientHeight 1065
    console.log("scrollHeight", document.documentElement.scrollHeight); // 3003..? 왜 커..?
    // 나중에 변경돼도.. 최하단인데 scrollHeight을 절대 못 넘음...
    // clientHeight 늘리려고 전체화면으로 바꾸면 최하단! 까지는 떠용, 페이지 값도 늘어남.. 근데 list는 안 보임, 근데 network/response에는 값이 뜸..
    //도움도움도움
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <Wrapper>
      <MovieGrid>
        {movieList?.pages[0].results?.map((movie, index) => (
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
4. 무한 스크롤링  gmlqka
5. 디테일이동

*/
