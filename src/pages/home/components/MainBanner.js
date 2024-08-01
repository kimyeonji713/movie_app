import styled from "styled-components";
import { ORIGIN_URL } from "../../../constant/imgUrl";
import { colors, size, spacing } from "../../../GlobalStyled";
import { Link } from "react-router-dom";
import { FaPlay, FaPlus } from "react-icons/fa";
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

  @media screen and (max-width: ${size.size1024}) {
    padding: 420px ${spacing.side_1024} 0 ${spacing.side_1024};
    h3 {
      font-size: 60px;
      transform: translateY(70px);
    }
    p {
      font-size: 18px;
      line-height: 20px;
      transform: translateY(70px);
    }
  }

  @media screen and (max-width: ${size.size768}) {
    padding: 550px ${spacing.moSide} 0 ${spacing.moSide};
    h3 {
      font-size: 40px;
      margin-bottom: 25px;
      transform: translateY(0px);
    }
    p {
      max-width: 550px;
      width: 100%;
      font-size: 14px;
      line-height: 20px;
      transform: translateY(0px);
    }
  }

  @media screen and (max-width: ${size.size368}) {
    padding: 550px ${spacing.moSide} 0 ${spacing.moSide};
    h3 {
      font-size: 30px;
      margin-bottom: 25px;
      transform: translateY(-50px);
    }
    p {
      max-width: 300px;
      width: 100%;
      font-size: 14px;
      line-height: 20px;
      transform: translateY(-50px);
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

  .plus {
    background-color: ${colors.backsub};
    border: 2px solid #555;
  }

  @media screen and (max-width: ${size.size1024}) {
    margin-top: 100px;
    button {
      width: 200px;
      height: 40px;
      margin-right: 20px;
      font-size: 14px;
      border-radius: 20px;
      padding: 5px 5px;
      border: 0px;
    }
  }

  @media screen and (max-width: ${size.size768}) {
    margin-top: 20px;
    button {
      width: 200px;
      height: 40px;
      margin-right: 15px;
      font-size: 14px;
      border-radius: 20px;
      padding: 5px 5px;
      border: 0px;
    }
  }

  @media screen and (max-width: ${size.size368}) {
    margin-top: -30px;
    button {
      width: 120px;
      height: 40px;
      margin-right: 20px;
      font-size: 14px;
      border-radius: 20px;
      padding: 5px 5px;
      border: 0px;
    }
  }
`;

export const MainBanner = ({ movieData, numData }) => {
  // console.log(movieData);
  const randomData = movieData[numData];

  // const [trendData, setTrendData] = useState();

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const { results: trendResult } = await trending();

  //       setTrendData(trendResult);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   })();
  // }, []);

  // console.log(trendData);

  // console.log(randomData);

  return (
    <Container $bgUrl={randomData?.backdrop_path}>
      <BlackBg />
      <h3>{randomData?.title}</h3>
      <p>{randomData?.overview.slice(0, 100) + "..."}</p>
      <BtnWrap>
        {/* <button className="trailer">
          <Link to={""}>
            <FaPlay /> 예고편
          </Link>
        </button> */}
        <button className="plus">
          <Link to={`/detail/${randomData?.id}`}>
            <FaPlus /> 더보기
          </Link>
        </button>
      </BtnWrap>
    </Container>
  );
};
