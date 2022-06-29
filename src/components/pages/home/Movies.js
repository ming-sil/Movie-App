import styled from "styled-components";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

import { imgUrl } from "../../constant/constant";

const Container = styled.div`
  margin-top: 120px;
`;

const Title = styled.h3`
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 30px;
`;

const MovieImg = styled.div`
  height: 250px;
`;

const MovieTitle = styled.div`
  font-size: 18px;
  margin-top: 20px;
`;

export const Movies = ({ movieData, movieTitle }) => {
  const params = {
    breakpoints: {
      320: {
        slidesPerView: 2.2,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 5.2,
        spaceBetween: 20,
      },
    },
  };

  return (
    <Container>
      <Title>{movieTitle}</Title>
      <Swiper
        modules={[Navigation]}
        navigation
        {...params}
        // spread operator(분산연산자)
      >
        {movieData.map((play) => (
          <SwiperSlide key={play.id}>
            <Link to={"#"}>
              <MovieImg
                style={{
                  background: `url(${imgUrl}${play.backdrop_path}) no-repeat center / cover`,
                }}
              />
              <MovieTitle>{play.title}</MovieTitle>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};
