import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { routes } from "../routes";

const Container = styled.div`
  margin: 100px auto;
  max-width: 500px;
  width: 100%;
  height: 650px;
  border: 2px solid lightgray;
  border-radius: 20px;
  padding: 100px 50px;
`;
const Con = styled.div``;

export const LoginA = () => {
  const {
    register,
    handleSubmit,
    formState: { erros, isvalid },
  } = useForm();

  const loginHandler = () => {};
  return (
    <div>
      <Container>
        <h3>LOGIN</h3>

        <form onSubmit={handleSubmit(loginHandler)}>
          <input
            {...register("username", {
              required: "아이디를 입력해주세요.",
            })}
            type="text"
            placeholder="아이디"
          ></input>

          <br />

          <input
            {...register("password", {
              required: "패스워드를 입력해주세요.",
            })}
            type="text"
            placeholder="패스워드"
          ></input>
        </form>

        <Login>
          <a href="#">LOGIN</a>
        </Login>

        <Con>
          <p>아이디가 없으신가요?</p>
          <Link to={routes.signup}>회원가입</Link>
        </Con>
      </Container>
    </div>
  );
};
