import styled from "styled-components";
import { useQuery } from "react-query";
import { MOVIE_QUERY_KEY } from "../../../consts/queryKey";
import { fetchMovies, getMovieVideo } from "../../../apis/movie.api";
import { useParams } from "react-router-dom";
const Banner = () => {
  const params = useParams();
  let paramsKey = params.category ?? "popular";
  //movie.id 받아올 데이터
  const { data: movieList, isLoading } = useQuery({
    queryKey: ["get-movie"],
    queryFn: () => fetchMovies(paramsKey, 1),
  });
  const randomMovieId =
    movieList?.results[Math.floor(Math.random() * movieList?.results.length)]
      .id;
  console.log(randomMovieId);
  const { data: videoData } = useQuery({
    queryKey: [MOVIE_QUERY_KEY.BANNER_VIDEO, randomMovieId],
    queryFn: () => getMovieVideo(randomMovieId),
    enabled: !!randomMovieId,
  });
  if (isLoading || !movieList) {
    return <div>Loading...</div>;
  }

  console.log(movieList && movieList?.results);

  // console.log(movieList && movieList.pages && movieList.pages[0].results); //id
  //랜덤으로 돌릴 영화 목록

  // 영화 비디오 목록

  console.log(videoData);
  return (
    <Wrapper>
      <VideoContent>
        {videoData && (
          <Video
            src={`https://www.youtube.com/embed/${videoData.results[0].key}?autoplay=1&mute=1`}
            frameBorder="0"
            allowFullScreen
            autoPlay
          />
        )}
      </VideoContent>
    </Wrapper>
  );
};
export default Banner;
const Video = styled.iframe`
  width: 1280px;
  height: 760px;
  overflow: hidden;
`;
const Wrapper = styled.div`
  width: 1280px;
  margin: 0 auto;
  /* padding-top: 100px; */
`;
const VideoContent = styled.div`
  background-color: beige;
  width: 1280px;
  height: 760px;
`;
//undefined 처리해야한다~
