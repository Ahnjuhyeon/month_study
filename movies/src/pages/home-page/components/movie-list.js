import { styled } from "styled-components";
import { useQueryMovieInfinity } from "../../../hooks/use-query";
import OneMovieContent from "../../../components/one-movie-content";
import { useParams } from "react-router-dom";
import { MOVIE_QUERY_KEY } from "../../../consts/queryKey";
const MovieList = () => {
  const prams = useParams();
  let pramsKey = prams.category ?? "popular";

  console.log(pramsKey);
  const { movieList, refetch } = useQueryMovieInfinity(`/movie/${pramsKey}`);
  console.log(movieList, "얏호!");
  return (
    <Wrapper>
      <MovieGrid>
        {movieList?.results?.map((movie, index) => (
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
