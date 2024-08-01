import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { movieDetail, videos } from "../../api";
import { ORIGIN_URL } from "../../constant/imgUrl";
import { Loading } from "../../components/Loading";
import { useScrollTop } from "../../lib/useScrollTop";
import { PageTitle } from "../../components/PageTitle";
import { colors, size, spacing } from "../../GlobalStyled";
import { FaPlay } from "react-icons/fa";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { TopButton } from "../home/components/TopButton";

const Container = styled.div`
  padding: 150px 15%;
  display: flex;

  @media screen and (max-width: ${size.size1024}) {
    padding: 150px 10%;
  }
  @media screen and (max-width: ${size.size768}) {
    padding: 150px ${spacing.moSide};
  }
  @media screen and (max-width: ${size.size368}) {
    padding: 150px ${spacing.moSide};
    flex-direction: column;
  }
`;

const CoverImg = styled.img`
  width: 45%;
  margin-right: 5%;
  object-fit: cover;
  margin-bottom: 0;
  @media screen and (max-width: ${size.size1024}) {
    width: 45%;
    margin-right: 5%;
    object-fit: cover;
    margin-bottom: 0;
  }
  @media screen and (max-width: ${size.size768}) {
    width: 48%;
    margin-right: 8%;
    object-fit: cover;
    margin-bottom: 0;
  }
  @media screen and (max-width: ${size.size368}) {
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

  @media screen and (max-width: ${size.size1024}) {
    width: 40%;
    h3 {
      font-size: 55px;
      font-weight: 700;
      margin-bottom: 30px;
    }
  }
  @media screen and (max-width: ${size.size768}) {
    width: 40%;
    h3 {
      font-size: 45px;
      font-weight: 700;
      margin-bottom: 30px;
    }
  }
  @media screen and (max-width: ${size.size368}) {
    width: 100%;
    h3 {
      font-size: 35px;
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

  @media screen and (max-width: ${size.size1024}) {
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
  @media screen and (max-width: ${size.size768}) {
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
  @media screen and (max-width: ${size.size368}) {
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

  @media screen and (max-width: ${size.size1024}) {
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
  @media screen and (max-width: ${size.size768}) {
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
  @media screen and (max-width: ${size.size368}) {
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

  @media screen and (max-width: ${size.size1024}) {
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
  @media screen and (max-width: ${size.size768}) {
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
  @media screen and (max-width: ${size.size368}) {
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

  .trailerBtn {
    background-color: ${colors.point};
    cursor: pointer;
  }
`;

const Video = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 0 ${spacing.side};
  display: ${(props) => props.$playAct};

  .trailer {
    border-radius: 40px;
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100vh;
  }

  @media screen and (max-width: ${size.size1024}) {
    .trailer {
      border-radius: 40px;
      position: absolute;
      top: 0px;
      right: 85px;
      width: 80vw;
      height: 50vh;
    }
  }
  @media screen and (max-width: ${size.size768}) {
    .trailer {
      border-radius: 40px;
      position: absolute;
      top: 100px;
      right: 200px;
      width: 80vw;
      height: 40vh;
    }
  }
  @media screen and (max-width: ${size.size368}) {
    .trailer {
      border-radius: 40px;
      position: absolute;
      top: 50px;
      right: -30px;
      width: 100vw;
      height: 30vh;
    }
  }
`;
const Close = styled.button`
  all: unset;
  font-size: 40px;
  position: absolute;
  top: -50px;
  left: -425px;
  z-index: 9;
  color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  @media screen and (max-width: ${size.size1024}) {
    position: absolute;
    top: -50px;
    left: -300px;
  }
  @media screen and (max-width: ${size.size768}) {
    position: absolute;
    top: 10px;
    left: 120px;
  }
`;

export const Detail = () => {
  useScrollTop();
  const [movieData, setMovieData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [videoData, setVideoData] = useState();
  const [show, setShow] = useState(false);
  const { id: movieId } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const data = await movieDetail(movieId);
        const { results: videoResult } = await videos(movieId);
        // console.log(data);
        setVideoData(videoResult);
        setMovieData(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [movieId]);

  // console.log(movieData);
  // console.log(videoData);

  const playhandler = () => {
    if (!show) {
      setShow(true);
    }
  };

  const closeHandler = () => {
    if (show) {
      setShow(false);
    }
  };

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
              {movieData?.genres?.map((genre) => (
                <li key={genre.id}>
                  <a href={`/#/genre/${genre.id}`}>{genre.name}</a>
                </li>
              ))}
            </Genres>

            <Desc>
              <h3>줄거리 요약</h3>
              <p>{movieData.overview}</p>
            </Desc>

            <BtnWrap onClick={playhandler}>
              <button className="trailerBtn">
                <FaPlay /> 예고편
              </button>
            </BtnWrap>
          </ConWrap>

          <Video $playAct={show ? "block" : "none"}>
            <Close onClick={closeHandler}>
              <IoMdCloseCircleOutline />
            </Close>
            <iframe
              className="trailer"
              src={`https://www.youtube.com/embed/${videoData[0].key}`}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </Video>
          <TopButton />
        </Container>
      )}
    </>
  );
};
