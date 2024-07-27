import styled from "styled-components";

const Container = styled.footer`
  height: 150px;
  border-top: 1px solid #666;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 200px;
  text-align: center;
  font-size: 15px;
`;

export const Footer = () => {
  return (
    <Container>
      &copy; KimYeonJI 2024 <br /> <br />
      email: hfgj0014@naver.com <br /> <br />
      github: https://github.com/kimyeonji713
    </Container>
  );
};
