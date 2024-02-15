import { useQuery } from "react-query";
import styled from "styled-components";
import { MOVIE_QUERY_KEY } from "../../consts/queryKey";
import { getSearchMovie } from "../../apis/movie.api";
import { useNavigate, useParams } from "react-router-dom";
import {
  skipOverViewSearch,
  skipTitleView,
} from "../../utils/over-flow-length";
const SearchPage = () => {
  const navigate = useNavigate();
  const params = useParams();

  console.log(params);
  const paramKeyword = params.keyWord.replace(":", "");
  const { data: searchdata } = useQuery([MOVIE_QUERY_KEY.CONTAIN_KEYWORD], () =>
    getSearchMovie(paramKeyword)
  );
  searchdata && console.log(searchdata);
  //paramKeyword
  return (
    <Wrapper>
      {searchdata?.results.map((movie) => (
        <OneMovie>
          <MoviePoster>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt="movie poster"
            />
          </MoviePoster>
          <MovieInfo>
            <Title>{skipTitleView(movie.title)}</Title>
            <Hr />
            <div>{movie.release_date}</div>
            <Content>{skipOverViewSearch(movie.overview)}</Content>
            <Button
              onClick={() => {
                navigate("/detailPage", {
                  state: {
                    movie: movie,
                  },
                });
              }}
            >
              상세보기
            </Button>
          </MovieInfo>
        </OneMovie>
      ))}
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
  width: 1100px;
  margin: 0 auto;
`;

const MoviePoster = styled.div`
  margin-top: 66px;
  img {
    min-width: 230px;
    max-width: 230px;
    border-radius: 10px;
    display: inline-block;
    border: 1px solid #111;
  }
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
  margin-top: 38px;
  font-size: 24px;
  font-weight: 400;
`;

const Button = styled.button`
  margin-top: 38px;
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
