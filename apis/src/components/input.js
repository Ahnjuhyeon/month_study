import { css, styled } from "styled-components";

const InputBox = ({
  id,
  errors,
  variant,
  size,
  font,
  register,
  ...inputProps
}) => {
  return (
    <>
      <Input
        variant={variant}
        size={size}
        font={font}
        {...inputProps}
        {...register(id)}
      />
      {errors[id] && <InputErrors>{errors[id].message}</InputErrors>}
    </>
  );
};
export default InputBox;

const variantCSS = {
  primary: css`
    border: 1px solid #75aff2;
    color: #000;
    &:hover {
      /* background-color: #97c7ff; */
      border: 1px solid #97c7ff;
    }
  `,
  secondary: css`
    border: 1px solid #97c7ff;
    color: #000;
    &:hover {
      /* background-color: #eaeaea; */
      border: 1px solid #75aff2;
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

const Input = styled.input`
  /* button reset CSS */
  border: none;
  outline: none;
  padding: 0;
  margin: 0;
  margin-bottom: 10px;
  padding-left: 20px;

  ${({ variant }) => variantCSS[variant]};
  ${({ size }) => sizeCSS[size]};
  ${({ font }) => fontCSS[font]};
`;
const InputErrors = styled.p`
  margin-bottom: 5px;
  color: red;
`;
