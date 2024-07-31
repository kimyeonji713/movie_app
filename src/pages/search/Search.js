import styled from "styled-components";
import { colors, size, spacing } from "../../GlobalStyled";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { searchMovie, trending } from "../../api";
import { FiSearch } from "react-icons/fi";
import { Loading } from "../../components/Loading";
import { Link } from "react-router-dom";
import { ORIGIN_URL, W500_URL } from "../../constant/imgUrl";

const Container = styled.div`
  padding: 150px ${spacing.side};
  @media screen and (max-width: ${size.size1024}) {
    padding: 150px ${spacing.side};
  }

  @media screen and (max-width: ${size.size768}) {
    padding: 150px ${spacing.moSide};
  }

  @media screen and (max-width: ${size.size368}) {
    padding: 150px ${spacing.moSide};
  }
`;

const Form = styled.form`
  position: relative;
  input {
    all: unset;
    width: 100%;
    height: 50px;
    border-bottom: 1px solid #555;
    &::placeholder {
      font-size: 20px;
    }
    padding: 0 10px;
    font-size: 20px;
    letter-spacing: 0;
  }

  button {
    all: unset;
    position: absolute;
    top: 20px;
    right: 0;
    font-size: 20px;
    cursor: pointer;
  }

  @media screen and (max-width: ${size.size1024}) {
    position: relative;
    input {
      all: unset;
      width: 100%;
      height: 50px;
      border-bottom: 1px solid #555;
      &::placeholder {
        font-size: 20px;
      }
      padding: 0 10px;
      font-size: 20px;
      letter-spacing: 0;
    }

    button {
      all: unset;
      position: absolute;
      top: 20px;
      right: 0;
      font-size: 20px;
      cursor: pointer;
    }
  }

  @media screen and (max-width: ${size.size768}) {
  }

  @media screen and (max-width: ${size.size368}) {
  }
`;

const ErrorMessage = styled.h4`
  opacity: 0.7;
  font-size: 18px;
  margin-top: 20px;

  @media screen and (max-width: ${size.size1024}) {
    opacity: 0.7;
    font-size: 18px;
    margin-top: 20px;
  }

  @media screen and (max-width: ${size.size768}) {
  }

  @media screen and (max-width: ${size.size368}) {
  }
`;

const TrendWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 20px;
  column-gap: 30px;
  position: relative;

  @media screen and (max-width: ${size.size1024}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 20px;
    column-gap: 30px;
    position: relative;
  }

  @media screen and (max-width: ${size.size768}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 20px;
    column-gap: 30px;
    position: relative;
  }

  @media screen and (max-width: ${size.size368}) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    row-gap: 20px;
    column-gap: 0px;
    position: relative;
  }
`;
const TrendD = styled.div`
  border-bottom: 1px solid ${colors.sub};
`;

const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  position: relative;

  @media screen and (max-width: ${size.size1024}) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
    position: relative;
  }

  @media screen and (max-width: ${size.size768}) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 80px;
    position: relative;
  }

  @media screen and (max-width: ${size.size368}) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 60px;
    position: relative;
  }
`;

const Num = styled.div`
  font-size: 40px;
  position: absolute;
  bottom: 10px;
  left: 0;
  font-weight: 600;

  @media screen and (max-width: ${size.size1024}) {
    font-size: 30px;
    position: absolute;
    bottom: 10px;
    left: 0;
    font-weight: 600;
  }

  @media screen and (max-width: ${size.size768}) {
    font-size: 30px;
    position: absolute;
    bottom: 10px;
    left: 0;
    font-weight: 600;
  }

  @media screen and (max-width: ${size.size368}) {
    font-size: 25px;
    position: absolute;
    bottom: 10px;
    left: 0;
    font-weight: 600;
  }
`;
const Title = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50px;
  margin-left: 20px;
  font-size: 20px;
  font-weight: 400;

  @media screen and (max-width: ${size.size1024}) {
    position: absolute;
    bottom: 10px;
    left: 30px;
    margin-left: 20px;
    font-size: 16px;
    font-weight: 400;
  }

  @media screen and (max-width: ${size.size768}) {
    position: absolute;
    bottom: 10px;
    left: 30px;
    margin-left: 20px;
    font-size: 16px;
    font-weight: 400;
  }

  @media screen and (max-width: ${size.size368}) {
    position: absolute;
    bottom: 10px;
    left: 30px;
    margin-left: 20px;
    font-size: 14px;
    font-weight: 400;
  }
`;

const ConWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  row-gap: 30px;
  column-gap: 15px;

  @media screen and (max-width: ${size.size1024}) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    row-gap: 30px;
    column-gap: 15px;
  }

  @media screen and (max-width: ${size.size768}) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 30px;
    column-gap: 15px;
  }

  @media screen and (max-width: ${size.size368}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 30px;
    column-gap: 15px;
  }
`;

const Con = styled.div``;

const Bg = styled.div`
  height: 400px;
  img {
    height: 100%;
    object-fit: cover;
  }

  @media screen and (max-width: ${size.size1024}) {
    height: 380px;
    img {
      height: 100%;
      object-fit: cover;
    }
  }

  @media screen and (max-width: ${size.size768}) {
    height: 330px;
    img {
      height: 100%;
      object-fit: cover;
    }
  }

  @media screen and (max-width: ${size.size368}) {
    height: 250px;
    img {
      height: 100%;
      object-fit: cover;
    }
  }
`;

export const Search = () => {
  const [searchData, setSearchData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [trendData, setTrendData] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    (async () => {
      try {
        const { results: trendResult } = await trending();

        setTrendData(trendResult);
      } catch (error) {
        console.log(error);
        alert("에러 발생");
      }
    })();
  }, []);

  const onSearchResult = async (data) => {
    const { keyword } = data;
    const { results } = await searchMovie(keyword);

    setSearchData(results);
    setIsLoading(false);
  };

  console.log(trendData);

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSearchResult)}>
        <input
          {...register("keyword", {
            required: "검색 내용을 입력해 주세요.",
          })}
          type="text"
          placeholder="찾으시는 영화가 있으신가요?"
        />
        <button>
          <FiSearch />
        </button>

        <ErrorMessage>{errors?.keyword?.message}</ErrorMessage>
      </Form>

      {!isLoading ? (
        <>
          {searchData?.length === 0 ? (
            "검색결과없음"
          ) : (
            <>
              {searchData && (
                <ConWrap>
                  {isLoading ? (
                    <Loading />
                  ) : (
                    <>
                      {searchData.map((data) => (
                        <Con key={data.id}>
                          <Link to={`/detail/${data.id}`}>
                            <Bg>
                              <img
                                src={W500_URL + data.poster_path}
                                alt={data.title}
                              />
                            </Bg>
                          </Link>
                        </Con>
                      ))}
                    </>
                  )}
                </ConWrap>
              )}
            </>
          )}
        </>
      ) : (
        <TrendWrap>
          {trendData?.map((data, index) => (
            <TrendD key={data?.id} $bgUrl={data.backdrop_path}>
              <Text>
                <Link to={`/detail/${data.id}`}>
                  <Num>{index + 1}</Num>
                  <Title>{data?.title}</Title>
                </Link>
              </Text>
            </TrendD>
          ))}
        </TrendWrap>
      )}
    </Container>
  );
};
