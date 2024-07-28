import { useForm } from "react-hook-form";
import { routes } from "../routes";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "../GlobalStyled";
import { ErrorMessage } from "../components/ErrorMessage";

const Container = styled.div`
  margin: 100px auto;
  max-width: 500px;
  width: 100%;
  height: 800px;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 100px 50px;
  border-radius: 10px;
`;

const Form = styled.form`
  h3 {
    text-align: center;
    color: #fff;
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 80px;
  }

  input {
    width: 100%;
    padding: 10px;
    font-size: 18px;
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 5px;
    color: #fff;
  }
  .birthday {
    margin-top: 15px;
  }
  .id {
    margin-top: 15px;
  }
  .password {
    margin-top: 15px;
  }

  .email {
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
  margin: 80px 0;
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

export const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const signupHandler = () => {};
  return (
    <Container>
      <Form onSubmit={handleSubmit(signupHandler)}>
        <h3>회원가입</h3>
        <input
          {...register("name", {
            required: "이름은 필수 입니다.",
          })}
          type="text"
          placeholder="이름"
        />
        <ErrorMessage message={errors?.name?.message} />

        <input
          className="birthday"
          {...register("birthday", {
            required: false,
          })}
          type="text"
          placeholder="생년월일"
        />
        <ErrorMessage message={errors?.name?.message} />

        <input
          className="id"
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

        <input
          className="email"
          {...register("email", {
            required: false,
          })}
          type="text"
          placeholder="e-mail"
        />
        <ErrorMessage message={errors?.email?.message} />

        <Button $isBtnActive={isValid}>회원가입</Button>
      </Form>

      <Text>
        <p>아이디가 있으신가요?</p>
        <Link to={routes.login}>로그인</Link>
      </Text>
    </Container>
  );
};
