import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { movieDetail } from "../../api";
import { ORIGIN_URL, W500_URL } from "../../constant/imgUrl";
import { Loading } from "../../components/Loading";

const Container = styled.div`
  padding: 100px;
  width: 100%;
`;
const CoverImg = styled.img``;
const ConWrap = styled.div``;
const Info = styled.div``;
const Genres = styled.div``;
const Desc = styled.div``;

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
    <>
      {isLoding ? (
        <Loading />
      ) : (
        <Container>
          <CoverImg
            src={ORIGIN_URL + movieData?.backdrop_path}
            alt={movieData?.title}
          />
          <ConWrap>
            <h3>{movieData?.title}</h3>
          </ConWrap>

          <Info>
            <span>{movieData?.release_date}</span>
            <span>{movieData?.runtime}분</span>
            <span>{Math.round(movieData?.vote_average)}점</span>
          </Info>

          <Genres>
            {movieData?.genres.map((genre) => (
              <li key={genre?.id}>{genre?.name}</li>
            ))}
          </Genres>

          <Desc>
            <h3>줄거리</h3>
            <p>{movieData?.overview}</p>
          </Desc>
        </Container>
      )}
    </>
  );
};
