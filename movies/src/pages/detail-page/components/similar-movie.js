import { styled } from "styled-components";
import { getSimilarMovie } from "../../../apis/movie.api";
import OneMovieContent from "../../../components/one-movie-content";
import { MOVIE_QUERY_KEY } from "../../../consts/queryKey";
import { useQuery } from "react-query";

const SimilarMoviePage = ({ movieId }) => {
  //   const params = useParams();
  //   const navigate = useNavigate();

  const { data: similardata } = useQuery(
    [MOVIE_QUERY_KEY.SIMILAR_MOVIE, movieId],
    () => getSimilarMovie(movieId)
  );

  console.log(similardata);
  //movieId
  const similarArr = similardata && similardata.results;

  // 상세 페이지 이동 함수
  const onOpenDetailPage = () => {
    // navigate(`/${params.movie}/:${movie.id}`);
    // window.scroll({
    //   top: 0,
    // });
  };

  return (
    similardata && (
      <Wrapper>
        {similarArr.slice(0, 3).map((movie) => (
          <OneMovieContent
            movie={movie}
            key={movie.id}
            onOpenDetailPage={onOpenDetailPage}
          />
        ))}
      </Wrapper>
    )
  );
};
export default SimilarMoviePage;

const Wrapper = styled.div`
  width: 998px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;
