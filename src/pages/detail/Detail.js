import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { movieDetail } from "../../api";
import { ORIGIN_URL, W500_URL } from "../../constant/imgUrl";
import { Loading } from "../../components/Loading";
import { routes } from "../../routes";
import { useScrollTop } from "../../lib/useScrollTop";
import { PageTitle } from "../../components/PageTitle";
import { colors, spacing } from "../../GlobalStyled";
import { FaPlay } from "react-icons/fa";

const Container = styled.div`
  padding: 150px 15%;
  display: flex;

  @media screen and (max-width: 1024px) {
    padding: 150px 10%;
  }
  @media screen and (max-width: 768px) {
    padding: 150px ${spacing.moSide};
  }
  @media screen and (max-width: 400px) {
    padding: 150px ${spacing.moSide};
    flex-direction: column;
  }
`;

const CoverImg = styled.img`
  width: 45%;
  margin-right: 5%;
  object-fit: cover;
  margin-bottom: 0;
  @media screen and (max-width: 1024px) {
    width: 45%;
    margin-right: 5%;
    object-fit: cover;
    margin-bottom: 0;
  }
  @media screen and (max-width: 768px) {
    width: 48%;
    margin-right: 8%;
    object-fit: cover;
    margin-bottom: 0;
  }
  @media screen and (max-width: 400px) {
    width: 100%;
    margin-right: 0%;
    object-fit: cover;
    margin-bottom: 20px;
  }
`;

const ConWrap = styled.div`
  width: 40%;
  h3 {
    font-size: 60px;
    font-weight: 700;
    margin-bottom: 30px;
  }

  @media screen and (max-width: 1024px) {
    width: 40%;
    h3 {
      font-size: 55px;
      font-weight: 700;
      margin-bottom: 30px;
    }
  }
  @media screen and (max-width: 768px) {
    width: 40%;
    h3 {
      font-size: 45px;
      font-weight: 700;
      margin-bottom: 30px;
    }
  }
  @media screen and (max-width: 400px) {
    width: 100%;
    h3 {
      font-size: 40px;
      font-weight: 700;
      margin-bottom: 30px;
    }
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

  @media screen and (max-width: 1024px) {
    span {
      display: block;
      padding: 10px 20px;
      background-color: #333;
      border-radius: 20px;
      font-size: 16px;
      font-weight: 400;
      margin-right: 15px;
    }
  }
  @media screen and (max-width: 768px) {
    span {
      display: block;
      padding: 10px 10px;
      background-color: #333;
      border-radius: 20px;
      font-size: 16px;
      font-weight: 400;
      margin-right: 15px;
    }
  }
  @media screen and (max-width: 400px) {
    span {
      display: block;
      padding: 10px 20px;
      background-color: #333;
      border-radius: 20px;
      font-size: 16px;
      font-weight: 400;
      margin-right: 15px;
    }
  }
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

  @media screen and (max-width: 1024px) {
    margin-top: 10px;

    a {
      display: block;
      padding: 10px 25px;
      background-color: #333;
      border-radius: 20px;
      font-size: 16px;
      font-weight: 400;
      margin-right: 15px;
    }
  }
  @media screen and (max-width: 768px) {
    margin-top: 10px;

    a {
      display: block;
      padding: 10px 20px;
      background-color: #333;
      border-radius: 20px;
      font-size: 16px;
      font-weight: 400;
      margin-right: 15px;
    }
  }
  @media screen and (max-width: 400px) {
    margin-top: 10px;

    a {
      display: block;
      padding: 10px 20px;
      background-color: #333;
      border-radius: 20px;
      font-size: 16px;
      font-weight: 400;
      margin-right: 15px;
    }
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

  @media screen and (max-width: 1024px) {
    font-weight: 400;
    opacity: 0.7;
    margin-top: 80px;
    line-height: 25px;

    h3 {
      font-size: 20px;
    }

    p {
      font-size: 16px;
    }
  }
  @media screen and (max-width: 768px) {
    font-weight: 400;
    opacity: 0.7;
    margin-top: 100px;
    line-height: 25px;

    h3 {
      font-size: 18px;
    }

    p {
      font-size: 15px;
    }
  }
  @media screen and (max-width: 400px) {
    font-weight: 400;
    opacity: 0.7;
    margin-top: 80px;
    line-height: 30px;

    h3 {
      font-size: 20px;
    }

    p {
      font-size: 16px;
    }
  }
`;
const BtnWrap = styled.div`
  position: relative;
  margin-top: 30px;
  display: flex;
  width: 100%;
  button {
    width: 200px;
    height: 40px;
    margin-right: 30px;
    font-size: 18px;
    border-radius: 20px;
    padding: 5px 10px;
    border: 1px solid #555;
    margin-top: 20px;
    color: #fff;
  }

  .trailer {
    background-color: ${colors.point};
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

            <BtnWrap>
              <button className="trailer">
                <FaPlay /> 예고편
              </button>
            </BtnWrap>
          </ConWrap>
        </Container>
      )}
    </>
  );
};
