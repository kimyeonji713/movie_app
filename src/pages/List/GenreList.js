import styled from "styled-components";
import { Genres } from "../home/components/Genres";
import { spacing } from "../../GlobalStyled";
import { useEffect, useState } from "react";
import { discoverMovie, genre } from "../../api";
import { Link, useParams } from "react-router-dom";
import { W500_URL } from "../../constant/imgUrl";
import { Loading } from "../../components/Loading";
import { TopButton } from "../home/components/TopButton";

const Container = styled.div`
  padding: 100px ${spacing.subside};
`;

const Con = styled.div`
  margin-top: 50px;
`;
const BgWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 30px;
  column-gap: 15px;
`;

const Bg = styled.div`
  height: 400px;
  img {
    height: 100%;
    object-fit: cover;
  }
`;

export const GenresList = () => {
  const { id } = useParams();
  const [genreData, setGenreData] = useState();
  const [discoverData, setDiscoverData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { genres: genredata } = await genre();
        const { results: discoverResult } = await discoverMovie(id);

        // console.log(discoverResult);

        setGenreData(genredata);
        setDiscoverData(discoverResult);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        alert("에러 발생");
      }
    })();
  }, [id]);

  const contain = () => {};

  // console.log(genreData);
  // console.log(discoverData);
  // data.id || discover.genre_ids

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Container>
          <Genres />
          {genreData?.map((data) => (
            <Con key={data.id}>
              <Link to={`/detail/${data.id}`}>
                {discoverData?.map((discover) => (
                  <BgWrap key={discover.id}>
                    <Bg>
                      <img
                        src={W500_URL + discover.poster_path}
                        alt={discover.title}
                      />
                      <h3>{discover.title}</h3>
                    </Bg>
                  </BgWrap>
                ))}
              </Link>
            </Con>
          ))}
          <TopButton />
        </Container>
      )}
    </>
  );
};
