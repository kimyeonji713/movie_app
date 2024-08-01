import styled from "styled-components";
import { Genres } from "../home/components/Genres";
import { size, spacing } from "../../GlobalStyled";
import { useEffect, useState } from "react";
import { discoverMovie, genre, movieList } from "../../api";
import { Link, useParams } from "react-router-dom";
import { ORIGIN_URL } from "../../constant/imgUrl";
import { Loading } from "../../components/Loading";
import { TopButton } from "../home/components/TopButton";

const Container = styled.div`
  padding: 100px ${spacing.subside};

  @media screen and (max-width: ${size.size1024}) {
    padding: 100px ${spacing.subside};
  }

  @media screen and (max-width: ${size.size768}) {
    padding: 100px ${spacing.moSide};
  }

  @media screen and (max-width: ${size.size368}) {
    padding: 100px ${spacing.moSide};
  }
`;

const Con = styled.div`
  margin-top: 80px;
  a {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    row-gap: 40px;
    column-gap: 20px;
  }

  @media screen and (max-width: ${size.size1024}) {
    margin-top: 80px;
    a {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      row-gap: 40px;
      column-gap: 20px;
    }
  }

  @media screen and (max-width: ${size.size768}) {
    margin-top: 80px;
    a {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      row-gap: 40px;
      column-gap: 20px;
    }
  }

  @media screen and (max-width: ${size.size368}) {
    margin-top: 80px;
    a {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      row-gap: 40px;
      column-gap: 20px;
    }
  }
`;

const Bg = styled.div`
  height: 500px;
  img {
    height: 100%;
    object-fit: cover;
  }
  h3 {
    margin-top: 5px;
  }

  @media screen and (max-width: ${size.size1024}) {
    height: 400px;
    img {
      height: 100%;
      object-fit: cover;
    }
    h3 {
      margin-top: 5px;
    }
  }

  @media screen and (max-width: ${size.size768}) {
    height: 300px;
    img {
      height: 100%;
      object-fit: cover;
    }
    h3 {
      margin-top: 5px;
    }
  }

  @media screen and (max-width: ${size.size368}) {
    height: 200px;
    img {
      height: 100%;
      object-fit: cover;
    }
    h3 {
      margin-top: 5px;
    }
  }
`;

export const GenresList = () => {
  const { id } = useParams();
  const [genreData, setGenreData] = useState();
  const [discoverData, setDiscoverData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [genreListData, setGenreListData] = useState();
  const [selectedGenre, setSelectedGenre] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const { genres } = await movieList();
        const { genres: genredata } = await genre();
        const { results: discoverResult } = await discoverMovie(id);

        // console.log(discoverResult);

        setGenreListData(genres);
        setGenreData(genredata);
        setDiscoverData(discoverResult);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        alert("에러 발생");
      }
    })();
  }, [id]);

  const handleSelect = (genreId) => {
    setSelectedGenre(genreId);
  };

  console.log(handleSelect);

  const filterMoviesByGenre = (movies) => {
    if (!selectedGenre) return movies;
    return movies.filter((movie) => movie.genre_ids.includes(selectedGenre));
  };

  // console.log(genreData);
  // console.log(discoverData);
  // data.id || discover.genre_ids

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Container>
          <Genres
            genreListData={genreListData}
            onSelectGenre={handleSelect}
            selectedGenre={selectedGenre}
          />
          <Con>
            <Link key={genreData?.id} to={`/detail/${genreData?.id}`}>
              {discoverData?.map((discover) => (
                <Bg key={discover.id}>
                  <img
                    src={ORIGIN_URL + discover.poster_path}
                    alt={discover.title}
                  />
                  <h3>{discover.title}</h3>
                </Bg>
              ))}
            </Link>
          </Con>
          <TopButton />
        </Container>
      )}
    </>
  );
};
