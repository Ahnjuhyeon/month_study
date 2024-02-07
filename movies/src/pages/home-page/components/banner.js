import styled from "styled-components";
const Banner = () => {
  return (
    <Wrapper>
      <VideoContent>{/* <img /> */}</VideoContent>
    </Wrapper>
  );
};
export default Banner;
/*
const Video = styled.iframe`
  width: 2000px;
  height: 1100px;
  overflow: hidden;
`;
*/
const Wrapper = styled.div`
  width: 1280px;
  margin: 0 auto;
`;
const VideoContent = styled.div`
  background-color: beige;
  width: 1280px;
  height: 760px;
`;
