import { useLocation } from "react-router-dom";
import { styled } from "styled-components";

const DetailPage = () => {
  const location = useLocation();
  const list = location.state.list;
  console.log(list);
  return (
    <Wrapper>
      <ContentTitle>
        <div>#{list.number}</div>
        <div>{list.title}</div>
      </ContentTitle>
      <hr />
      <div>{list.body}</div>
      <a href={list.html_url}>링크</a>
    </Wrapper>
  );
};
export default DetailPage;
const Wrapper = styled.div`
  width: 1024px;
  margin: 0 auto;
`;

const ContentTitle = styled.div`
  text-align: center;
`;
