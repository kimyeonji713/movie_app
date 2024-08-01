import { GrLinkTop } from "react-icons/gr";
import styled from "styled-components";

const Topbtn = styled.button`
  all: unset;
  padding: 10px;
  position: fixed;
  bottom: 20px;
  right: 20px;
  font-size: 20px;
  background-color: firebrick;
  border: none;
  color: #fff;
  cursor: pointer;
  z-index: 10;
`;

export const TopButton = () => {
  const topHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Topbtn onClick={topHandler}>
      <GrLinkTop />
    </Topbtn>
  );
};
