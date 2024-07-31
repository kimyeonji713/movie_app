import styled from "styled-components";
import { colors } from "../GlobalStyled";

const Container = styled.footer`
  height: 150px;
  border-top: 1px solid ${colors.sub};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 200px;
  text-align: center;
  font-size: 15px;
`;

const Git = styled.div`
  display: flex;
`;

export const Footer = () => {
  return (
    <Container>
      <p>&copy; KimYeonJI 2024</p>
      <br />
      <p>email: hfgj0014@naver.com</p> <br />
      <Git>
        <p>github:</p>
        <a href="https://github.com/kimyeonji713">
          https://github.com/kimyeonji713
        </a>
      </Git>
    </Container>
  );
};
