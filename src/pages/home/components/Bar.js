import { useForm } from "react-hook-form";
import { FiSearch } from "react-icons/fi";
import styled from "styled-components";
import { colors } from "../../../GlobalStyled";
import { MdClose } from "react-icons/md";
import { useState } from "react";
import { Header } from "../../../components/Header";

const Container = styled.div`
  max-width: 500px;
  width: 100%;
  height: 100vh;
  background-color: black;
  padding: 50px 20px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 10;

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

  const onSearchResult = () => {};
  return (
    <>
      {isOpen ? (
        <Header />
      ) : (
        <>
          <Container>
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
          </Container>
        </>
      )}
    </>
  );
};
