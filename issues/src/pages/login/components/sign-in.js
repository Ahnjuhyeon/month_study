import styled from "styled-components";

const SignIn = () => {
  const onSubmitSignIn = () => {};

  return (
    <Wrapper onSubmit={onSubmitSignIn}>
      <input placeholder="email" />
      <input placeholder="password" />
      <Button>LOGIN</Button>
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
