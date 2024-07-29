import styled from "styled-components";
import { Genres } from "../home/components/Genres";
import { spacing } from "../../GlobalStyled";

const Container = styled.div`
  padding: 100px ${spacing.subside};
`;

export const GenresList = () => {
  return (
    <Container>
      <Genres />
    </Container>
  );
};
