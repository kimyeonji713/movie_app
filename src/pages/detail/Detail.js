import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { movieDetail } from "../../api";
import { ORIGIN_URL, W500_URL } from "../../constant/imgUrl";
import { Loading } from "../../components/Loading";
import { routes } from "../../routes";
import { useScrollTop } from "../../lib/useScrollTop";
import { PageTitle } from "../../components/PageTitle";

const Container = styled.div`
  padding: 150px 15%;
  display: flex;

  @media screen and (max-width: 1024px) {
    padding: 150px 10%;
  }
  @media screen and (max-width: 768px) {
    padding: 150px 10%;
  }
  @media screen and (max-width: 400px) {
    padding: 150px 10%;
  }
`;

const CoverImg = styled.img`
  width: 45%;
  margin-right: 5%;
  object-fit: cover;
  @media screen and (max-width: 1024px) {
    width: 45%;
    margin-right: 5%;
    object-fit: cover;
  }
  @media screen and (max-width: 768px) {
    padding: 150px 10%;
  }
  @media screen and (max-width: 400px) {
    padding: 150px 10%;
  }
`;

const ConWrap = styled.div`
  width: 40%;
  h3 {
    font-size: 60px;
    font-weight: 700;
    margin-bottom: 30px;
  }
`;

const Info = styled.div`
  span {
    display: block;
    padding: 10px 20px;
    background-color: #333;
    border-radius: 20px;
    font-size: 18px;
    font-weight: 400;
    margin-right: 15px;
  }
  display: flex;
`;

const Genres = styled.ul`
  display: flex;
  margin-top: 10px;

  a {
    display: block;
    padding: 10px 20px;
    background-color: #333;
    border-radius: 20px;
    font-size: 18px;
    font-weight: 400;
    margin-right: 15px;
  }
`;

const Desc = styled.div`
  font-weight: 400;
  opacity: 0.7;
  margin-top: 100px;
  line-height: 30px;

  h3 {
    font-size: 20px;
  }

  p {
    font-size: 16px;
  }
`;

export const Detail = () => {
  useScrollTop();
  const [movieData, setMovieData] = useState();
  const [isLoading, setIsLoading] = useState(true);

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
      {isLoading ? (
        <Loading />
      ) : (
        <Container>
          <PageTitle title={movieData.title} />
          <CoverImg
            src={ORIGIN_URL + movieData.poster_path}
            alt={movieData.title}
          />
          <ConWrap>
            <h3>{movieData.title}</h3>
            <Info>
              <span>{movieData.release_date}</span>

              <span>{Math.round(movieData.vote_average)}점</span>

              <span>{movieData.runtime}분</span>
            </Info>

            <Genres>
              {movieData.genres.map((genre) => (
                <li key={genre.id}>
                  <a href={`/#/genre/${genre.id}`}>{genre.name}</a>
                </li>
              ))}
            </Genres>

            <Desc>
              <h3>줄거리 요약</h3>
              <p>{movieData.overview}</p>
            </Desc>
          </ConWrap>
        </Container>
      )}
    </>
  );
};
