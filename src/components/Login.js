import styled from "styled-components";
import { colors } from "../GlobalStyled";
import { Link } from "react-router-dom";
import { routes } from "../routes";

const Container = styled.div`
  margin: 100px auto;
  max-width: 500px;
  width: 100%;
  height: 650px;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 80px 50px;
  border-radius: 10px;

  h3 {
    text-align: center;
    color: ${colors.point};
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 80px;
  }
`;

const Id = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  border: 1px solid ${colors.sub};
  border-radius: 5px;
  padding: 0 10px;
  margin-bottom: 15px;
`;
const PW = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  border: 1px solid ${colors.sub};
  border-radius: 5px;
  padding: 0 10px;
  margin-bottom: 50px;
`;

const SignIn = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  border: 1px solid ${colors.sub};
  border-radius: 5px;
  text-align: center;
  margin-bottom: 100px;
`;

const Con = styled.div`
  display: flex;
  justify-content: center;
  font-size: 13px;
  color: #888;
  a {
    text-decoration: underline;
    opacity: 0.7;
  }
`;

export const Login = () => {
  return (
    <Container>
      <h3>LOGIN</h3>

      <Id>아이디</Id>

      <PW>패스워드</PW>

      <SignIn>
        <a href="#">LOGIN</a>
      </SignIn>

      <Con>
        <p>아이디가 없으신가요?</p>
        <Link to={routes.signup}>회원가입</Link>
      </Con>
    </Container>
  );
};
