import { useForm } from "react-hook-form";
import { FiSearch } from "react-icons/fi";
import styled from "styled-components";
import { colors } from "../../../GlobalStyled";
import { MdClose } from "react-icons/md";
import { useState } from "react";
import { Header } from "../../../components/Header";
import { Link } from "react-router-dom";
import { routes } from "../../../routes";
import { GoPerson } from "react-icons/go";

const Container = styled.div`
  max-width: 500px;
  width: 100%;
  height: 100vh;
  background-color: black;
  padding: 50px 20px;
  position: absolute;
  top: 0;
  right: 0;
`;

const LoginWrap = styled.button`
  all: unset;
  margin: 20px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: 400;
  text-decoration: underline;

  color: ${colors.sub};
  a {
    margin-left: 10px;
    font-size: 20px;
    color: ${colors.sub};
  }
`;

const SearchWrap = styled.div`
  button {
    all: unset;
    position: absolute;
    top: 20px;
    right: 10px;
    font-size: 25px;
    color: ${colors.sub};
    cursor: pointer;
  }
`;

const Form = styled.form`
  position: relative;
  padding: 0 10px;
  input {
    all: unset;
    width: 100%;
    height: 50px;
    border-bottom: 1px solid ${colors.sub};
    &::placeholder {
      font-size: 18px;
    }
  }

  button {
    all: unset;
    position: absolute;
    top: 20px;
    right: 10px;
    font-size: 18px;
    color: ${colors.sub};
    cursor: pointer;
  }
`;
const ErrorMessage = styled.h4``;

export const Bar = () => {
  const [isOpen, setMenu] = useState(false);

  const toggleHandler = () => {
    setMenu(true);
  };
  // console.log(isOpen);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // 페이지 이동시 메뉴 바 창 닫기

  const onSearchResult = () => {};
  return (
    <>
      {isOpen ? (
        <Header />
      ) : (
        <>
          <Container>
            <LoginWrap>
              <GoPerson />
              <Link to={routes.login}>로그인 해주세요.</Link>
            </LoginWrap>
            <SearchWrap>
              <button onClick={toggleHandler}>
                <MdClose />
              </button>
              <Form onSubmit={handleSubmit(onSearchResult)}>
                <input
                  {...register("keyword", {
                    required: "검색 내용을 입력해 주세요.",
                  })}
                  type="text"
                  placeholder="Search"
                />
                <button>
                  <FiSearch />
                </button>

                <ErrorMessage>{errors?.keyword?.message}</ErrorMessage>
              </Form>
            </SearchWrap>
          </Container>
        </>
      )}
    </>
  );
};
