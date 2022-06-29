import styled from "styled-components";
import { mainStyle } from "../../../styles/globalStyle";
import { imgUrl } from "../../constant/constant";

const Banner = styled.section`
  height: 80vh;
  padding: ${mainStyle.padding};
  padding-top: 250px;
  position: relative;

  @media screen and (max-width: 500px) {
    height: 100vh;
    position: relative;
  }
`;

const Gradient = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: rgb(0, 0, 0);
  background: linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%);

  @media screen and (max-width: 500px) {
    height: 100vh;
  }
`;

const Title = styled.div`
  max-width: 650px;
  /* width: 100%; */
  font-size: 80px;
  font-weight: 700;
  line-height: 6rem;
  position: relative;

  @media screen and (max-width: 500px) {
    /* width: 100%; */
    font-size: 40px;
    line-height: 3rem;
    position: absolute;
    bottom: 25%;
    left: 20px;
  }
`;

const Desc = styled.div`
  max-width: 700px;
  width: 100%;
  font-size: 20px;
  font-weight: 100;
  margin-top: 20px;
  line-height: 2rem;
  opacity: 0.9;
  position: relative;

  @media screen and (max-width: 500px) {
    display: none;
  }
`;

export const MainBanner = ({ playData }) => {
  return (
    <Banner
      style={{
        background: `url(${imgUrl}${playData.backdrop_path}) no-repeat center / cover`,
      }}
    >
      <Gradient />
      <Title>{playData.title}</Title>
      <Desc>{playData.overview.slice(0, 130) + "..."}</Desc>
    </Banner>
  );
};
