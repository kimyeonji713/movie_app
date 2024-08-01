import { useEffect, useState } from "react";
import { genre } from "../../../api";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { size, spacing } from "../../../GlobalStyled";

const Section = styled.section`
  padding: 50px 0 0 50px;

  @media screen and (max-width: ${size.size1024}) {
    padding: 30px 0 0 0px;
  }

  @media screen and (max-width: ${size.size768}) {
    padding: 30px 0 0 ${spacing.moSide};
  }

  @media screen and (max-width: ${size.size368}) {
    padding: 30px 0 0 ${spacing.moSide};
  }
`;
const Con = styled.div`
  padding: 15px;
  background-color: #444;
  text-align: center;
  font-size: 19px;
  font-weight: 600;
  border-radius: 25px;

  @media screen and (max-width: ${size.size1024}) {
    padding: 15px;
    background-color: #444;
    text-align: center;
    font-size: 19px;
    font-weight: 600;
    border-radius: 25px;
  }

  @media screen and (max-width: ${size.size768}) {
    padding: 15px;
    background-color: #444;
    text-align: center;
    font-size: 19px;
    font-weight: 600;
    border-radius: 25px;
  }

  @media screen and (max-width: ${size.size368}) {
    padding: 15px;
    background-color: #444;
    text-align: center;
    font-size: 13px;
    font-weight: 600;
    border-radius: 25px;
  }
`;
export const GenresMain = () => {
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
      768: {
        slidesPerView: 4.2,
        spaceBetween: 20,
      },
      368: {
        slidesPerView: 4.2,
        spaceBetween: 0,
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
