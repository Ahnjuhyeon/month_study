import { styled } from "styled-components";
import { flexCenter } from "../../../styles/common.style";
const Review = () => {
  return (
    <Wrapper>
      <Center>
        <Button>Review</Button>
      </Center>
      <div>
        <div>
          <div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div></div>
        </div>
      </div>
    </Wrapper>
  );
};
export default Review;
const Wrapper = styled.div`
  width: 1100px;
  margin: 0 auto;
  padding-bottom: 70px;
`;
const Center = styled.div`
  ${flexCenter}
`;
const Button = styled.button`
  width: 160px;
  height: 50px;
  border-radius: 30px;
  transition: all 0.3s;
  cursor: pointer;
  text-align: center;
  font-size: 24px;
  background-color: white;
  border: 1px solid #bdbdbd;

  &:hover {
    background-color: black;
    color: white;
  }
`;
