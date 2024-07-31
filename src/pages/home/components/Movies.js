import styled from "styled-components";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { size, spacing } from "../../../GlobalStyled";
import { W500_URL } from "../../../constant/imgUrl";

const Section = styled.section`
  padding: 80px 0 0 ${spacing.side};
  img {
    border-radius: 20px;
  }

  @media screen and (max-width: ${size.size1024}) {
    padding: 80px 0 0 ${spacing.side};
    img {
      border-radius: 20px;
    }
  }

  @media screen and (max-width: ${size.size768}) {
    padding: 80px 0 0 ${spacing.moSide};
    img {
      border-radius: 20px;
    }
  }

  @media screen and (max-width: ${size.size368}) {
    padding: 80px 0 0 ${spacing.moSide};
    img {
      border-radius: 20px;
    }
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
    font-size: 35px;
    font-weight: 700;
    margin-bottom: 30px;
  }

  @media screen and (max-width: ${size.size368}) {
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 30px;
  }
`;

const MovieTitle = styled.div`
  font-size: 18px;
  margin-top: 18px;
  line-height: 21px;

  @media screen and (max-width: ${size.size1024}) {
    font-size: 18px;
    margin-top: 20px;
  }

  @media screen and (max-width: ${size.size768}) {
    font-size: 16px;
    margin-top: 16px;
    line-height: 21px;
  }

  @media screen and (max-width: ${size.size368}) {
    font-size: 18px;
    margin-top: 20px;
  }
`;

const params = {
  slidesPerView: 6.3,
  spaceBetween: 20,
  breakpoints: {
    1024: {
      slidesPerView: 8.3,
    },
    768: {
      slidesPerView: 5.2,
      spaceBetween: 15,
    },
    400: {
      slidesPerView: 3.2,
      spaceBetween: 10,
    },
  },
};

export const Movies = ({ title, movieData }) => {
  return (
    <Section>
      <Title>{title}</Title>
      <Swiper {...params}>
        {movieData.map((data) => (
          <SwiperSlide key={data.id}>
            <Link to={`/detail/${data.id}`}>
              <img src={`${W500_URL}${data.poster_path}`} alt="" />
              <MovieTitle>{data.title}</MovieTitle>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </Section>
  );
};
