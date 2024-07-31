import { useEffect, useState } from "react";
import { nowPlaying, popular, topRated, trending, upcoming } from "../../api";
import { Loading } from "../../components/Loading";
import { MainBanner } from "./components/MainBanner";
import { Movies } from "./components/Movies";
import "swiper/css";
import { Genres } from "./components/Genres";
import { Trend } from "./components/Trend";
import { useScrollTop } from "../../lib/useScrollTop";

export const Home = () => {
  useScrollTop();
  const [nowData, setNowData] = useState();
  const [popData, setPopData] = useState();
  const [topData, setTopData] = useState();
  const [upData, setUpData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [trendData, setTrendData] = useState();
  const [number, setNumber] = useState(0);

  useEffect(() => {
    (async () => {
      try {
        const { results: nowResult } = await nowPlaying();
        const { results: popResult } = await popular();
        const { results: topResult } = await topRated();
        const { results: upResult } = await upcoming();
        const { results: trendResult } = await trending();

        setNumber(Math.floor(Math.random() * 20));
        setNowData(nowResult);
        setPopData(popResult);
        setTopData(topResult);
        setUpData(upResult);
        setTrendData(trendResult);
        setIsLoading(false);
        // setNumber(Math.random() * 20);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  // console.log(trendData);

  // console.log(nowData);
  // console.log(isLoading);
  // console.log(`인기영화:  ${popData}`);
  // console.log(`평점 좋음: ${topData}`);
  // console.log(`개봉예정:  ${upData}`);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <MainBanner movieData={nowData} numData={number} />
          <Genres />
          <Trend title="실시간 🔥" movieData={trendData} />
          <Movies title="현재 상영 영화" movieData={nowData} />
          <Movies title="인기 영화" movieData={popData} />
          <Movies title="평점 좋음" movieData={topData} />
          <Movies title="개봉 예정" movieData={upData} />
        </>
      )}
    </>
  );
};
