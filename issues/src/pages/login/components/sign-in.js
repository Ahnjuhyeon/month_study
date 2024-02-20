import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../../provider/auth-provider";

const SignIn = () => {
  const { SignIn } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState(""); // email state 추가
  const [password, setPassword] = useState(""); // password state 추가
  //signIn
  const onSubmitSignIn = async (e) => {
    e.preventDefault();
    console.log(email, password);
    // try {
    //   const res = await SignIn(email, password);
    //   alert("로그인이 완료되었습니다.");
    //   navigate("/");
    // } catch (err) {
    //   alert(err.res);
    // }
  };

  return (
    <Wrapper onSubmit={onSubmitSignIn}>
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
        value={password}
        onChange={(e) => setPassword(e.target.value)} // input 값이 변경될 때 password state 업데이트
      />
      <Button type="submit">LOGIN</Button>
    </Wrapper>
  );
};
export default SignIn;
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
