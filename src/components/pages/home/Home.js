import { useEffect, useState } from "react";
import { movieApi } from "../../../api";
import { movieNum } from "../../constant/constant";
import { Loading } from "../../Loading";
import { MainBanner } from "./MainBanner";
console.log(movieApi.nowPlaying());

export const Home = () => {
  //   useEffect(() => {
  //     // console.log(movieApi.nowPlaying());
  //     const movieData = async () => {
  //       const {
  //         data: { results },
  //       } = await movieApi.nowPlaying();
  //       console.log(results[0].title);
  //       //   console.log(playing.data.results);
  //       //   console.log(await movieApi.nowPlaying());
  //     };
  //     movieData();
  //   }, []);

  const [playing, setPlaying] = useState();
  const [rated, setRated] = useState();
  const [latest, setLatest] = useState();
  const [upComming, setUpComming] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const movieData = async () => {
      try {
        const {
          data: { results: playingData },
          // =>비구조화 할당 이용시 변수명 변경할땐 변수명:변경할 명
        } = await movieApi.nowPlaying();
        setPlaying(playingData);

        const {
          data: { results: ratedData },
        } = await movieApi.topRated();
        setRated(ratedData);

        // const {
        //   data: { results: latestData },
        // } = await movieApi.latest();
        // setLatest(latestData);

        const {
          data: { results: upCommingData },
        } = await movieApi.upComming();
        setUpComming(upCommingData);

        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    movieData();
  }, []);

  console.log("현재상영영화:", playing);
  // console.log("인기영화:", rated);
  // // console.log("최신영화:", latest);
  // console.log("개봉예정영화:", upComming);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>{playing && <MainBanner playData={playing[movieNum]} />}</>
      )}
    </>
  );
};
