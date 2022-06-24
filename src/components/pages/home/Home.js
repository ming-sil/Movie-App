import { useEffect } from "react";
import { movieApi } from "../../../api";
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

  useEffect(() => {
    const movieData = async () => {
      const {
        data: { results },
      } = await movieApi.nowPlaying();
      console.log(results);
    };
    movieData();
  }, []);
  return <>Home</>;
};
