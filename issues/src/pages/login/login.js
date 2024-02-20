import SignIn from "./components/sign-in";
import SignUp from "./components/sign-up";
import { useState } from "react";
import styled from "styled-components";

const LoginPage = () => {
  const [isOpenLogin, setIsOpenLogin] = useState(false);
  return (
    <Wrapper>
      <Header>
        <div
          onClick={() => {
            setIsOpenLogin(false);
          }}
        >
          SIGN-IN
        </div>
        <div
          onClick={() => {
            setIsOpenLogin(true);
          }}
        >
          SIGN-UP
        </div>
      </Header>
      {isOpenLogin ? <SignUp /> : <SignIn />}
    </Wrapper>
  );
};
export default LoginPage;
const Wrapper = styled.div`
  width: 1024px;
  margin: 0 auto;
  background-color: aliceblue;
`;
const Header = styled.div`
  background-color: wheat;
  width: 360px;
  height: 48px;
  position: relative;
  display: flex;

  & > div {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover {
      background-color: goldenrod;
    }
  }
`;
