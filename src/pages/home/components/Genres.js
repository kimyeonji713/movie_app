import { useEffect, useState } from "react";
import { genre } from "../../../api";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { colors, size } from "../../../GlobalStyled";
import { useScrollTop } from "../../../lib/useScrollTop";

const Section = styled.section`
  padding: 50px 0 0 0px;

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

const Button = styled.button`
  all: unset;
  width: 80%;
  padding: 10px;
  background-color: ${(props) =>
    props.$isSelected ? `${colors.point}` : "#444"};
  text-align: center;
  font-size: 19px;
  font-weight: 600;
  border-radius: 30px;

  @media screen and (max-width: ${size.size1024}) {
    all: unset;
    width: 80%;
    padding: 10px;
    background-color: ${(props) =>
      props.$isSelected ? `${colors.point}` : "#444"};
    text-align: center;
    font-size: 19px;
    font-weight: 600;
    border-radius: 30px;
  }

  @media screen and (max-width: ${size.size768}) {
    all: unset;
    width: 80%;
    padding: 10px;
    background-color: ${(props) =>
      props.$isSelected ? `${colors.point}` : "#444"};
    text-align: center;
    font-size: 19px;
    font-weight: 600;
    border-radius: 30px;
  }

  @media screen and (max-width: ${size.size368}) {
    all: unset;
    width: 80%;
    padding: 10px;
    background-color: ${(props) =>
      props.$isSelected ? `${colors.point}` : "#444"};
    text-align: center;
    font-size: 19px;
    font-weight: 600;
    border-radius: 30px;
  }
`;

const Con = styled.div``;

export const Genres = ({
  index,
  genreListData,
  onSelectGenre,
  selectedGenre,
}) => {
  useScrollTop();
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
    slidesPerView: 10.2,
    spaceBetween: 40,
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
            <Button
              onClick={() => onSelectGenre(data.id)}
              $isSelected={selectedGenre === data.id}
            >
              <Link to={`/genre/${data.id}`}>
                <Con $activeColor={clicked === data.id}>{data.name}</Con>
              </Link>
            </Button>
          </SwiperSlide>
        ))}
      </Swiper>
    </Section>
  );
};
// 클릭했을 때 클릭한 버튼 id와 data.id가 같으면 red 아니면 #444
// 버튼id === data.id ? "red" : "444"
