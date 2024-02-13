import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { MOVIE_QUERY_KEY } from "../../../consts/queryKey";
import { getMovieVideo } from "../../../apis/movie.api";
const Banner = () => {
  const { data: videoData } = useQuery({
    queryKey: [MOVIE_QUERY_KEY.BANNER_VIDEO, 787699],
    queryFn: () => getMovieVideo(787699),
  });
  //useQuery옵션  useQuery  enabled 사용해야한다
  // 인피니티 쿼리도 써야하고 그 아이디도 랜덤으로 가지고 와야하는것
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
