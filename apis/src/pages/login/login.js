import { useState } from "react";
import styled from "styled-components";
import Signup from "./components/signUp";
import Signin from "./components/signIn";

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
      {isOpenLogin ? <Signup setIsOpenLogin={setIsOpenLogin} /> : <Signin />}
    </Wrapper>
  );
};
export default LoginPage;
const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Header = styled.div`
  background-color: #75aff2;
  width: 363px;
  height: 48px;
  position: relative;
  display: flex;

  & > div {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: #fff;
    &:hover {
      background-color: #97c7ff;
    }
  }
`;
