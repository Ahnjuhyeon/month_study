import styled, { css } from "styled-components";

const MovieInput = ({ variant, size, font, ...inputProps }) => {
  return (
    <>
      <Input variant={variant} size={size} font={font} {...inputProps} />
    </>
  );
};
export default MovieInput;

const variantCSS = {
  primary: css`
    color: #fff;
  `,
  //   secondary: css`
  //     color: #fff;
  //   `,
};

const sizeCSS = {
  small: css`
    width: 350px;
    height: 40px;
    border-radius: 20px;
  `,
  large: css`
    width: 450px;
    height: 40px;
    border-radius: 40px;
  `,
};

const fontCSS = {
  small: css`
    font-size: 16px;
    font-weight: 300;
    color: black;
  `,
  large: css`
    font-size: 26px;
    font-weight: bold;
    color: black;
  `,
};

const Input = styled.input`
  /* button reset CSS */
  border: none;
  outline: none;
  padding: 0;
  margin: 0;
  padding-left: 30px;
  cursor: pointer;
  transition: all 0.5s;

  ${({ variant }) => variantCSS[variant]};
  ${({ size }) => sizeCSS[size]};
  ${({ font }) => fontCSS[font]};
`;
/*

  width: 100%;
  padding: 10px;
  outline: none;
  border: none;
  border-radius: 20px;
  margin: 0 10px;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.7);
  box-shadow: 0px 2px 7px 5px rgba(0, 0, 0, 0.2);
  transition: all 0.5s;
  &:focus {
    background-color: ${({ theme }) => theme.COLORS.white};
  }

*/
