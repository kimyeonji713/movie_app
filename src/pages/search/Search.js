import styled from "styled-components";
import { spacing } from "../../GlobalStyled";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { searchMovie, trending } from "../../api";
import { FiSearch } from "react-icons/fi";
import { Loading } from "../../components/Loading";
import { Link } from "react-router-dom";
import { W500_URL } from "../../constant/imgUrl";

const Container = styled.div`
  padding: 150px ${spacing.side};
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
`;

const ErrorMessage = styled.h4`
  opacity: 0.7;
  font-size: 18px;
  margin-top: 20px;
`;

const TrendWrap = styled.div``;
const TrendD = styled.div``;
const Num = styled.div``;
const Title = styled.div``;

const ConWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  row-gap: 30px;
  column-gap: 15px;
`;

const Con = styled.div``;

const Bg = styled.div`
  height: 400px;
  img {
    height: 100%;
    object-fit: cover;
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

  // console.log(trendData);

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

      {isLoading ? (
        <Loading />
      ) : (
        <TrendWrap>
          {trendData.map((data, index) => (
            <TrendD key={data?.id}>
              <Num>{index + 1}</Num>
              <Title>{data?.title}</Title>
            </TrendD>
          ))}
        </TrendWrap>
      )}

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
    </Container>
  );
};
