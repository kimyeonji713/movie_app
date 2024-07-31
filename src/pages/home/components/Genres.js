import { useEffect, useState } from "react";
import { genre } from "../../../api";
import styled from "styled-components";
import { Link, useLinkClickHandler } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { colors } from "../../../GlobalStyled";

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

  &.active {
    background-color: ${colors.point};
  }
`;

export const Genres = ({ index }) => {
  const [genreData, setGenreData] = useState();
  const [clicked, setClicked] = useState(false);
  const onClick = () => setClicked(!clicked);

  useEffect(() => {
    (async () => {
      try {
        const { genres: genredata } = await genre();
        setGenreData(genredata);
      } catch (error) {
        console.log(error);
        alert("에러 발생");
      }
    })();
  }, []);

  // const clickHandler = () => {
  //   if()
  // };

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
        spaceBetween: 30,
      },
      400: {
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
              <Con
                className={`${clicked ? "active" : ""}`}
                onClick={() => onClick()}
              >
                {data.name}
              </Con>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </Section>
  );
};
