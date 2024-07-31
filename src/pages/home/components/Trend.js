import styled from "styled-components";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { size, spacing } from "../../../GlobalStyled";
import { W500_URL } from "../../../constant/imgUrl";

const Section = styled.section`
  padding: 80px 0 0 ${spacing.side};
  overflow: unset;

  @media screen and (max-width: ${size.size1024}) {
    padding: 80px 0 0 ${spacing.side};
  }

  @media screen and (max-width: ${size.size768}) {
    padding: 80px 0 0 ${spacing.moSide};
  }
  @media screen and (max-width: ${size.size368}) {
    padding: 80px 0 0 ${spacing.moSide};
  }
`;
const Title = styled.div`
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 30px;

  @media screen and (max-width: ${size.size1024}) {
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 30px;
  }

  @media screen and (max-width: ${size.size768}) {
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 30px;
  }

  @media screen and (max-width: ${size.size368}) {
    font-size: 35px;
    font-weight: 700;
    margin-bottom: 35px;
  }
`;

const MovieTitle = styled.div`
  font-size: 20px;
  margin-left: 20%;
  margin-top: 5px;

  @media screen and (max-width: ${size.size1024}) {
    font-size: 18px;
    margin-left: 25%;
  }

  @media screen and (max-width: ${size.size768}) {
    font-size: 18px;
    margin-left: 25%;
  }

  @media screen and (max-width: ${size.size368}) {
    font-size: 14px;
    margin-left: 25%;
  }
`;

const params = {
  slidesPerView: 5.3,
  spaceBetween: 100,
  breakpoints: {
    1024: {
      slidesPerView: 4.3,
      spaceBetween: 80,
    },
    768: {
      slidesPerView: 3.3,
      spaceBetween: 60,
    },
    368: {
      slidesPerView: 2.3,
      spaceBetween: 40,
    },
  },
};

const Con = styled.div`
  position: relative;
  img {
    /* position: absolute; */
    top: 0;
    left: 50px;
    width: 100%;
    border-radius: 20px;
    margin-left: 20%;
    @media screen and (max-width: ${size.size1024}) {
      img {
        position: absolute;
        top: 0;
        left: 50px;
      }
    }

    @media screen and (max-width: ${size.size768}) {
      img {
        position: absolute;
        top: 0;
        left: 30px;
      }
    }

    @media screen and (max-width: ${size.size368}) {
      img {
        position: absolute;
        top: 0;
        left: 30px;
      }
    }
  }
`;
const Num = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 9;
  text-shadow: -1px 0px #fff, 0px 1px #fff, 1px 0px #fff, 0px -1px #fff;
  color: #252525;
  font-size: 150px;
  letter-spacing: -8px;
  @media screen and (max-width: ${size.size1024}) {
    font-size: 90px;
    position: absolute;
    bottom: 0;
    left: 0;
  }
  @media screen and (max-width: ${size.size768}) {
    font-size: 70px;
    position: absolute;
    bottom: 0;
    left: 25px;
  }

  @media screen and (max-width: ${size.size368}) {
    font-size: 70px;
    position: absolute;
    bottom: 0;
    left: -5px;
  }
`;

export const Trend = ({ title, movieData }) => {
  return (
    <Section>
      <Title>{title}</Title>
      <Swiper {...params}>
        {movieData.map((data, index) => (
          <SwiperSlide key={data.id}>
            <Link to={`/detail/${data.id}`}>
              <Con>
                <Num>{index + 1}</Num>
                <img src={`${W500_URL}${data.poster_path}`} alt={data.title} />
              </Con>
              <MovieTitle>{data.title}</MovieTitle>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </Section>
  );
};
