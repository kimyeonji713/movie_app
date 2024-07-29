import { useEffect, useState } from "react";
import { genre } from "../../../api";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { colors } from "../../../GlobalStyled";
import { routes } from "../../../routes";

const Section = styled.section`
  padding: 50px 0 0 50px;
`;

const Con = styled.div`
  padding: 15px;
  background-color: #444;
  text-align: center;
  font-size: 19px;
  font-weight: 600;
  border-radius: 25px;
  .original {
    background-color: #444;
  }
  .active {
    background-color: ${colors.point};
  }
`;

export const Genres = () => {
  const [genreData, setGenreData] = useState();

  useEffect(() => {
    (async () => {
      try {
        const { genres: genredata } = await genre();
        setGenreData(genredata);
        // console.log(genredata);
      } catch (error) {
        console.log(error);
        alert("에러 발생");
      }
    })();
  }, []);

  const params = {
    slidesPerView: 8.2,
    spaceBetween: 50,
    breakpoints: {
      1024: {
        slidesPerView: 7.2,
        spaceBetween: 20,
      },
      640: {
        slidesPerView: 4.2,
        spaceBetween: 30,
      },
      320: {
        slidesPerView: 3.2,
        spaceBetween: 10,
      },
    },
  };

  return (
    <Section>
      <Swiper {...params}>
        {genreData?.map((data) => (
          <SwiperSlide key={data.id}>
            <Link to={`/genre/${data.id}`}>
              <Con>{data.name}</Con>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </Section>
  );
};
