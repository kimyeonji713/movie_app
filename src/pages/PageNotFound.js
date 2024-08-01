import { TbMoodSadDizzy } from "react-icons/tb";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { routes } from "../routes";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  font-size: 300px;
  color: #555;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h3 {
    font-size: 100px;
  }
  a {
    margin-top: 50px;
    font-size: 16px;
    text-decoration: underline;
    color: #777;
  }
`;

export const PageNotFound = () => {
  return (
    <Container>
      <TbMoodSadDizzy />
      <h3>404</h3>
      <Link to={routes.home}>메인으로 돌아가기</Link>
    </Container>
  );
};
