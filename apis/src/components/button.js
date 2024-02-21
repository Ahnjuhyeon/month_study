import { css, styled } from "styled-components";

const ButtonBox = ({ children, size, variant, font, isValid, ...rest }) => {
  return (
    <>
      <Button
        size={size}
        variant={variant}
        font={font}
        isValid={isValid}
        {...rest}
      >
        {children}
      </Button>
    </>
  );
};
export default ButtonBox;
const variantCSS = {
  primary: css`
    background-color: #97c7ff;
    color: #fff;
    &:hover {
      background-color: #75aff2;
    }
  `,
  secondary: css`
    background-color: #c0c0c0;
    color: #fff;
    &:hover {
      background-color: #eaeaea;
    }
  `,
};
const sizeCSS = {
  small: css`
    width: 200px;
    height: 30px;
    border-radius: 10px;
  `,
  large: css`
    width: 300px;
    height: 40px;
    border-radius: 10px;
  `,
};

const fontCSS = {
  small: css`
    font-size: 16px;
    font-weight: 100;
  `,
  large: css`
    font-size: 26px;
    font-weight: bold;
  `,
};
const Button = styled.button`
  /* button reset CSS */
  border: none;
  outline: none;
  padding: 0;
  margin: 0;

  /* button css 중 공통되는 부분 (교집합) */
  cursor: pointer;
  transition: all 0.6s;
  &:disabled {
    background-color: gray;
  }

  /* 위에 custom한 css를 적용하기 위한 부분 */
  /* props로 전달받아 각각 요소를 조합해 조립하는 방식 */
  ${({ variant }) => variantCSS[variant]}
  ${({ size }) => sizeCSS[size]}
  ${({ font }) => fontCSS[font]}
`;
