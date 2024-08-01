import { useEffect, useState } from "react";
import { genre } from "../../../api";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { colors, size } from "../../../GlobalStyled";

const Section = styled.section`
  padding: 50px 0 0 50px;

  @media screen and (max-width: ${size.size1024}) {
    padding: 30px 0 0 0px;
  }

  @media screen and (max-width: ${size.size768}) {
    padding: 30px 0 0 0px;
  }

  @media screen and (max-width: ${size.size368}) {
    padding: 30px 0 0 0px;
  }
`;

const Con = styled.div`
  padding: 15px;
  background-color: ${(props) => (props.$activeColor ? "red" : "#444")};
  text-align: center;
  font-size: 19px;
  font-weight: 600;
  border-radius: 25px;

  @media screen and (max-width: ${size.size1024}) {
    padding: 15px;
    background-color: ${(props) => (props.$activeColor ? "red" : "#444")};
    text-align: center;
    font-size: 19px;
    font-weight: 600;
    border-radius: 25px;
  }

  @media screen and (max-width: ${size.size768}) {
    padding: 15px;
    background-color: ${(props) => (props.$activeColor ? "red" : "#444")};
    text-align: center;
    font-size: 19px;
    font-weight: 600;
    border-radius: 25px;
  }

  @media screen and (max-width: ${size.size368}) {
    padding: 15px 0;
    background-color: ${(props) => (props.$activeColor ? "red" : "#444")};
    text-align: center;
    font-size: 18px;
    font-weight: 600;
    border-radius: 25px;
  }
`;

export const Genres = ({ index }) => {
  const [genreData, setGenreData] = useState();
  const [clicked, setClicked] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const { genres: genreResult } = await genre();
        setGenreData(genreResult);
        setClicked();
      } catch (error) {
        console.log(error);
        alert("에러 발생");
      }
    })();
  }, []);
  console.log(genreData);

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
        spaceBetween: 15,
      },
      368: {
        slidesPerView: 2.3,
        spaceBetween: 15,
      },
    },
  };

  return (
    <Section>
      <Swiper {...params}>
        {genreData?.map((data) => (
          <SwiperSlide key={data.id}>
            {/* <button onClick={() => onClick(data.id)}></button> */}
            <Link to={`/genre/${data.id}`}>
              <Con $activeColor={clicked === data.id}>{data.name}</Con>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </Section>
  );
};
// 클릭했을 때 클릭한 버튼 id와 data.id가 같으면 red 아니면 #444
// 버튼id === data.id ? "red" : "444"
