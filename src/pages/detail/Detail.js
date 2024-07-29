import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { movieDetail } from "../../api";

const Container = styled.div``;
const CoverImg = styled.div``;
const ConWrap = styled.div``;

export const Detail = () => {
  const [isLoding, setIsLoading] = useState(false);
  const [movieData, setMovieData] = useState();

  const { id: movieId } = useParams();
  useEffect(() => {
    (async () => {
      try {
        const data = await movieDetail(movieId);
        console.log(data);

        setMovieData(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [movieId]);

  return (
    <Container>
      <CoverImg />
      <ConWrap>
        <h3>타이틀</h3>
      </ConWrap>
    </Container>
  );
};
