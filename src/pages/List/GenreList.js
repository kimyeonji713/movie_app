import styled from "styled-components";
import { Genres } from "../home/components/Genres";
import { spacing } from "../../GlobalStyled";
import { useEffect, useState } from "react";
import { genre } from "../../api";

const Container = styled.div`
  padding: 100px ${spacing.subside};
`;

export const GenresList = () => {
  const [genreData, setGenreData] = useState();

  useEffect(() => {
    (async () => {
      try {
        const { genres: genredata } = await genre();
        setGenreData(genredata);
        // console.log(genredata);
      } catch (error) {
        console.log(error);
        alert("에러 발생");
      }
    })();
  }, []);
  return (
    <Container>
      <Genres />
    </Container>
  );
};
