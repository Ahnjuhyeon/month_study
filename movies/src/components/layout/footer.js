import { styled } from "styled-components";
import { flexCenter } from "../../styles/common.style";

const Footer = () => {
  return (
    <FooterWrapper>
      <p>numuhimdleda © FRONTEND</p>
      <p>AHN-JUHYEON AHN-JUHYEON AHN-JUHYEON AHN-JUHYEON</p>
    </FooterWrapper>
  );
};
export default Footer;
const FooterWrapper = styled.div`
  ${flexCenter}
  text-align: center;
  flex-direction: column;
  width: 100%;
  height: 150px;
  margin-top: 40px;
  line-height: 10px;
  background-color: rgba(0, 0, 0, 0.9);
  color: white;
`;
/* background-color: ${({ theme }) => theme.COLORS.black};
  font-size: ${({ theme }) => theme.FONT_SIZE.small};
  color: ${({ theme }) => theme.COLORS.primary.gray}; */
