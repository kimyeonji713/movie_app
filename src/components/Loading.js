import { HashLoader } from "react-spinners";
import { colors } from "../GlobalStyled";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Loading = () => {
  return (
    <Container>
      <HashLoader color={colors.point} />
    </Container>
  );
};
