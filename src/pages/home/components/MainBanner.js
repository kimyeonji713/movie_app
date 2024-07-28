import styled from "styled-components";
import { ORIGIN_URL } from "../../../constant/imgUrl";
import { colors, spacing } from "../../../GlobalStyled";
import { FaPlay, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { routes } from "../../../routes";

const Container = styled.section`
  height: 80vh;
  background: url(${ORIGIN_URL}${(props) => props.$bgUrl}) no-repeat center /
    cover;
  padding: 420px ${spacing.side} 0 ${spacing.side};
  position: relative;
  h3 {
    font-size: 80px;
    font-weight: 700;
    letter-spacing: -3px;
    margin-bottom: 30px;
    position: relative;
  }

  p {
    width: 600px;
    font-size: 20px;
    font-weight: 300;
    line-height: 30px;
    opacity: 0.7;
  }

  @media screen and (max-width: 768px) {
    padding: 550px ${spacing.moSide} 0 ${spacing.moSide};
    h3 {
      font-size: 40px;
      margin-bottom: 15px;
    }
    p {
      max-width: 500px;
      width: 100%;
      font-size: 14px;
      line-height: 20px;
    }
  }
`;
const BlackBg = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0.8) 40%,
    rgba(255, 255, 255, 0) 100%
  );
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
    border: 0px;
  }

  .trailer {
    background-color: ${colors.point};
  }

  .plus {
    background-color: ${colors.sub};
  }
`;

export const MainBanner = ({ movieData }) => {
  // console.log(movieData);
  return (
    <Container $bgUrl={movieData.backdrop_path}>
      <BlackBg />
      <h3>{movieData.title}</h3>
      <p>{movieData.overview.slice(0, 100) + "..."}</p>
      <BtnWrap>
        <button className="trailer">
          <Link to={""}>
            <FaPlay /> 예고편
          </Link>
        </button>
        <button className="plus">
          <Link to={routes.detail}>
            <FaPlus /> 더보기
          </Link>
        </button>
      </BtnWrap>
    </Container>
  );
};
