import styled from "styled-components";
import { skipTitleView } from "../../utils/overflow-length";
import { useNavigate } from "react-router-dom";

const IssuListPage = ({ list }) => {
  const navigate = useNavigate();
  const listbody = list.body;
  const createAt = list.created_at.replace("T", "-").replace("Z", "");

  const onDetailPage = () => {
    navigate("/detailPage", {
      state: {
        list: list,
      },
    });
  };
  return (
    <Wrapper>
      <Content onClick={onDetailPage}>
        <ContentTitle>
          <div>#{list.number}</div>
          <div>{list.title}</div>
          <div>comments({list.comments})</div>
        </ContentTitle>
        <ContentBody>
          <div>{skipTitleView(listbody)}</div>
          <div>{createAt}</div>
        </ContentBody>
      </Content>
    </Wrapper>
  );
};
export default IssuListPage;

const Wrapper = styled.div`
  width: 1024px;
  margin: 0 auto;
`;
const Content = styled.div`
  cursor: pointer;
  background-color: aliceblue;
  padding: 30px;
  margin-bottom: 20px;
`;

const ContentTitle = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ContentBody = styled.div`
  margin-top: 20px;
`;
