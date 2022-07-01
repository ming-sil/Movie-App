import { useEffect, useState } from "react";
import "swiper/css";
import { movieApi } from "../../../api";
import { movieNum } from "../../constant/constant";
import { Loading } from "../../Loading";
import { MainBanner } from "./MainBanner";
import { Container } from "../../Container";
import { Movies } from "./Movies";
import { ScrollTop } from "../../../ScrollTop";
import { PageTitle } from "../../PageTitle";
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
  // 들어가자마자 로딩화면이 보일것이므로 =>true

  useEffect(() => {
    const movieData = async () => {
      try {
        // 현재상영중 영화
        const {
          data: { results: playingData },
          // =>비구조화 할당 이용시 변수명 변경할땐 변수명:변경할 명
        } = await movieApi.nowPlaying();
        setPlaying(playingData);

        // 인기영화
        const {
          data: { results: ratedData },
        } = await movieApi.topRated();
        setRated(ratedData);

        // // 최신영화
        // const {
        //   data: { results: latestData },
        // } = await movieApi.latest();
        // setLatest(latestData);

        // 개봉예정영화
        const {
          data: { results: upCommingData },
        } = await movieApi.upComming();
        setUpComming(upCommingData);

        // 읽어들이기 끝난 후 로딩화면 false로 바꿔주기
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    movieData();
  }, []);

  console.log("현재상영영화:", playing);
  console.log("인기영화:", rated);
  // console.log("최신영화:", latest);
  console.log("개봉예정영화:", upComming);

  return (
    <>
      <PageTitle title={"Home"} />
      <ScrollTop />
      {loading ? (
        <Loading />
      ) : (
        <>
          {playing && (
            <>
              <MainBanner playData={playing[movieNum]} />
              <Container>
                <Movies movieData={playing} movieTitle="현재 상영 영화" />
                <Movies movieData={rated} movieTitle="인기 영화" />
                <Movies movieData={upComming} movieTitle="개봉 예정 영화" />
              </Container>
            </>
          )}
        </>
      )}
      {/* 로딩중이다 ?(참이면) 로딩화면불러오기 :(아니면) 현재상영영화&&(둘 다 true)메인배너 실행 */}
    </>
  );
};
