import styled from "styled-components";
import { mainStyle } from "../../../styles/globalStyle";
import { imgUrl } from "../../constant/constant";

const Banner = styled.section`
  height: 80vh;
  background-color: gray;
  padding: ${mainStyle.padding};
  padding-top: 250px;
`;

const Title = styled.div`
  max-width: 650px;
  width: 100%;
  font-size: 80px;
  font-weight: 700;
  line-height: 6rem;
`;

const Desc = styled.div`
  max-width: 700px;
  width: 100%;
  font-size: 20px;
  font-weight: 100;
  margin-top: 20px;
  line-height: 2rem;
  opacity: 0.9;
`;

export const MainBanner = ({ playData }) => {
  return (
    <Banner
      style={{
        background: `url(${imgUrl}${playData.backdrop_path}) no-repeat center / cover`,
      }}
    >
      <Title>{playData.title}</Title>
      <Desc>{playData.overview.slice(0, 130) + "..."}</Desc>
    </Banner>
  );
};
