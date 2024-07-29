import styled from "styled-components";
import { colors, spacing } from "../GlobalStyled";
import { Link } from "react-router-dom";
import { routes } from "../routes";
import { FiSearch } from "react-icons/fi";
import { FaBars } from "react-icons/fa";
import { Bar } from "../pages/home/components/Bar";
import { useEffect, useState } from "react";

const Container = styled.header`
  padding: 20px ${spacing.side};
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;

  .original {
    padding: 20px ${spacing.side};
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
  }

  .active {
    padding: 20px ${spacing.side};
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    background-color: ${colors.backsub};
  }

  @media screen and (max-width: 768px) {
    padding: 20px ${spacing.moSide};
  }

  @media screen and (max-width: 400px) {
    padding: 20px ${spacing.moSide};
  }
`;
const LOGO = styled.div`
  font-size: 30px;
  font-weight: 900;
  a {
    color: ${colors.point};
  }
`;
const Menu = styled.ul`
  display: flex;
  font-size: 20px;
  font-weight: 700;

  button {
    all: unset;
    margin-left: 120px;
    cursor: pointer;
  }

  @media screen and (max-width: 400px) {
    a {
      display: none;
    }
    button {
      margin-left: 0px;
      cursor: pointer;
    }
  }
`;

export const Header = () => {
  const [isOpen, setMenu] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const toggleHandler = () => {
    setMenu(true);
  };

  const scrollHandler = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);

    setScrollPosition(scrollPosition);
  });

  // console.log(scrollPosition);

  // console.log(isOpen);
  return (
    <Container
      className={scrollPosition < 100 ? "original" : "active"}
      onScroll={scrollHandler}
    >
      <LOGO>
        <Link to={routes.home}>RE:MOVIE</Link>
      </LOGO>

      <Menu>
        <li>
          <Link to={routes.search}>
            <FiSearch />
          </Link>
        </li>

        <button onClick={toggleHandler}>
          <FaBars />
        </button>
      </Menu>

      {isOpen ? <Bar /> : ""}
    </Container>
  );
};
