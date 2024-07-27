import styled from "styled-components";
import { colors, spacing } from "../GlobalStyled";
import { Link } from "react-router-dom";
import { routes } from "../routes";
import { FiSearch } from "react-icons/fi";
import { FaBars } from "react-icons/fa";
import { Bar } from "../pages/home/components/Bar";

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
`;

const MenuBtn = styled.div`
  margin-left: 50px;
`;

export const Header = () => {
  return (
    <Container>
      <LOGO>
        <Link to={routes.home}>MOVIE</Link>
      </LOGO>

      <Menu>
        <li>
          <Link to={routes.search}>
            <FiSearch />
          </Link>
        </li>
        <MenuBtn>
          <FaBars />
          <Bar />
        </MenuBtn>
      </Menu>
    </Container>
  );
};
