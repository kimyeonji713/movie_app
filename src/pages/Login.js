import styled from "styled-components";
import { colors } from "../GlobalStyled";
import { Link } from "react-router-dom";
import { routes } from "../routes";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "../components/ErrorMessage";

const Container = styled.div`
  margin: 100px auto;
  max-width: 500px;
  width: 100%;
  height: 800px;
  background-color: ${colors.backsub};
  padding: 100px 50px;
  border-radius: 10px;
`;

const Form = styled.form`
  h3 {
    text-align: center;
    color: #fff;
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 100px;
  }

  input {
    width: 100%;
    padding: 10px;
    font-size: 18px;
    background-color: ${colors.backsub};
    border-radius: 5px;
    color: #fff;
  }
  .password {
    margin-top: 15px;
  }
`;

const Button = styled.button`
  width: 100%;
  height: 50px;
  padding: 10px;
  border: 1px solid ${colors.sub};
  border-radius: 5px;
  text-align: center;
  margin: 100px 0;
  background-color: ${colors.point};
  opacity: ${(props) => (props.$isBtnActive ? "1" : "0.7")};
  cursor: ${(props) => (props.$isBtnActive ? "pointer" : "default")};
  color: #fff;
  font-size: 18px;
  font-weight: 600;
`;

const Text = styled.div`
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
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const loginHandler = () => {};
  return (
    <Container>
      <Form onSubmit={handleSubmit(loginHandler)}>
        <h3>로그인</h3>
        <input
          {...register("username", {
            required: "아이디는 필수 입니다.",
          })}
          type="text"
          placeholder="아이디"
        />
        <ErrorMessage message={errors?.username?.message} />

        <input
          className="password"
          {...register("password", {
            required: "패스워드는 필수 입니다.",
          })}
          type="password"
          placeholder="패스워드"
        />
        <ErrorMessage message={errors?.password?.message} />

        <Button $isBtnActive={isValid}>로그인</Button>
      </Form>

      <Text>
        <p>아이디가 없으신가요?</p>
        <Link to={routes.signup}>회원가입</Link>
      </Text>
    </Container>
  );
};
