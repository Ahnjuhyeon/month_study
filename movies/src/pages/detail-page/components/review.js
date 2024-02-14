import { styled } from "styled-components";
import { flexAlignCenter, flexCenter } from "../../../styles/common.style";
import { useQuery } from "react-query";
import { MOVIE_QUERY_KEY } from "../../../consts/queryKey";
import { getReviews } from "../../../apis/movie.api";
import { useState } from "react";
const Review = ({ movieId }) => {
  const { data: reviewdata } = useQuery([MOVIE_QUERY_KEY.REVIEWS], () =>
    getReviews(movieId)
  );
  const [showReviews, setShowReviews] = useState(false);
  const onClickReviews = () => {
    setShowReviews((prev) => !prev);
  };
  return (
    <Wrapper>
      <Center>
        <Button onClick={onClickReviews}>Review</Button>
      </Center>
      {showReviews && reviewdata && (
        <ReviewBox>
          {reviewdata.results.map((review) => (
            <li key={review.id}>
              <UserInfo>
                <UserInfoPofile>
                  <Profile>user</Profile>
                  <UserNickName> {review.author}</UserNickName>
                </UserInfoPofile>
                <Written> {review.created_at}</Written>
              </UserInfo>
              <Content>{review.content}</Content>
            </li>
          ))}
        </ReviewBox>
      )}
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

//리뷰 컨텐트 박스
const ReviewBox = styled.ul`
  height: fit-content;
  min-height: 100px;
  border: 1px solid #999;
  border-radius: 10px;
  padding: 2%;
  margin-top: 70px;
  transition: height 0.3s;
  list-style: none;
`;

const UserInfo = styled.div`
  ${flexAlignCenter}
  justify-content: space-between;
  padding-top: 20px;
`;

const UserInfoPofile = styled.div`
  display: flex;
  align-items: center;
`;
const Profile = styled.button`
  background-color: #ccc;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  width: 40px;
  height: 40px;
`;
const UserNickName = styled.div`
  margin-left: 10px;
  font-size: 24px;
  font-weight: 400;

  & > div:nth-child(2) {
    font-size: 14px;
    line-height: 20px;
  }
`;
const Written = styled.span`
  font-size: 14px;
  color: #999;
  margin-left: 65%;
`;
const Content = styled.div`
  padding-bottom: 30px;
  line-height: 20px;
  padding: 2%;
`;
