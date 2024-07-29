import styled from "styled-components";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { spacing } from "../../../GlobalStyled";
import { W500_URL } from "../../../constant/imgUrl";

const Section = styled.section`
  padding: 80px 0 0 ${spacing.side};
`;
const Title = styled.div`
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 30px;
`;

const MovieTitle = styled.div`
  font-size: 18px;
  margin-top: 20px;
`;

const params = {
  slidesPerView: 5.2,
  spaceBetween: 90,
  breakpoints: {
    1024: {
      slidesPerView: 5.3,
    },
    640: {
      slidesPerView: 3.2,
      spaceBetween: 15,
    },
    320: {
      slidesPerView: 2.2,
      spaceBetween: 10,
    },
  },
};

const Con = styled.div`
  display: flex;
  img {
    transform: translate();
    z-index: 9;
    width: 100%;
    border-radius: 20px;
  }
`;
const Num = styled.div`
  font-family: "Moirai One", system-ui;
  font-size: 120px;
  letter-spacing: -8px;
  /* transform: translateX(8px); */
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
