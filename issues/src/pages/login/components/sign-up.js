import styled from "styled-components";
import { useAuth } from "../../../provider/auth-provider";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SignUp = ({ setIsOpenLogin }) => {
  const { SignUp } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState(""); // email state 추가
  const [pw, setpw] = useState(""); // password state 추가

  //signUp
  const onSubmitSignUp = async (e) => {
    e.preventDefault();
    console.log(email, pw);
    try {
      const res = await SignUp(email, pw);
      //어떻게 로그인으로 보낼까?
      console.log(res);
      alert("축하합니다");
      setIsOpenLogin(false);
      alert("다시 로그인해주세요");
      // nvigate("/?page=todo");
    } catch (err) {
      alert("이미 존재하는 이메일입니다");
    }
  };

  return (
    <Wrapper onSubmit={onSubmitSignUp}>
      <input
        id="email"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)} // input 값이 변경될 때 email state 업데이트
      />
      <input
        id="pw"
        placeholder="password"
        type="password"
        value={pw}
        onChange={(e) => setpw(e.target.value)} // input 값이 변경될 때 password state 업데이트
      />
      {/* <input placeholder="password confirm" /> */}

      <Button>JOIN</Button>
    </Wrapper>
  );
};
export default SignUp;
const Wrapper = styled.form`
  width: 360px;
  height: 230px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  input::placeholder {
    color: #97c7ff;
  }
  & > input {
    width: 200px;
    height: 25px;
    margin-bottom: 20px;
    border: 1px solid #75aff2;
    border-radius: 10px;
    padding-left: 15px;
  }
  border-left: 1px solid #75aff2;
  border-right: 1px solid #75aff2;
  border-bottom: 1px solid #75aff2;
`;
const Button = styled.button`
  border: none;
  outline: none;
  width: 200px;
  height: 30px;
  border-radius: 10px;
  background-color: #75aff2;
  color: #fff;
  &:hover {
    background-color: #97c7ff;
  }
  cursor: pointer;
  transition: all 0.6s;
`;
/*
  &:disabled {
    background-color: ${({ theme }) => theme.COLORS.gray[100]};
  }
*/
