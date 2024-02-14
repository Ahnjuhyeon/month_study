import { getSimilarMovie } from "../../../apis/movie.api";
import OneMovieContent from "../../../components/one-movie-content";
import { MOVIE_QUERY_KEY } from "../../../consts/queryKey";

const SimilarMoviePage = ({}) => {
  //   const params = useParams();
  //   const navigate = useNavigate();

  const { data: similardata } = useQuery([MOVIE_QUERY_KEY.SIMILAR_MOVIE], () =>
    getSimilarMovie()
  );
  //movieId
  //   const similarArr = data && data.results;

  // 상세 페이지 이동 함수
  const onOpenDetailPage = () => {
    // navigate(`/${params.movie}/:${movie.id}`);
    // window.scroll({
    //   top: 0,
    // });
  };

  return (
    // data && (
    <SimilarMovieWrapper>
      {/* {similarArr.map((movie) => ( */}
      <OneMovieContent
        movie={movie}
        key={movie.id}
        onOpenDetailPage={onOpenDetailPage}
      />
      {/* ))} */}
    </SimilarMovieWrapper>
    // )
  );
};
export default SimilarMoviePage;

const SimilarMovieWrapper = styled.div`
  width: 998px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-row-gap: 50px;
`;
