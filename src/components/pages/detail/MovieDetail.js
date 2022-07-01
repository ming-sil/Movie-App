import styled from "styled-components";
import { imgUrl } from "../../constant/constant";

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 100px;

  @media screen and (max-width: 500px) {
    display: block;
  }
`;

const Poster = styled.div`
  width: 48%;
  height: 80vh;

  @media screen and (max-width: 500px) {
    width: 100%;
    height: 70vh;
  }
`;

const DescWrap = styled.div`
  width: 48%;
  margin: 40px 0;

  @media screen and (max-width: 500px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Title = styled.h1`
  font-size: 50px;
  font-weight: 700;
  margin-bottom: 10px;
  span {
    font-weight: 700;
    font-size: 18px;
    margin-left: 10px;

    @media screen and (max-width: 500px) {
      display: block;
      margin-top: 5px;
    }
  }

  @media screen and (max-width: 500px) {
    text-align: center;
  }
`;

const TagLine = styled.h6`
  font-size: 20px;
  font-weight: 300;
  margin-bottom: 20px;

  @media screen and (max-width: 500px) {
    text-align: center;
  }
`;

const Info = styled.ul`
  font-weight: 500;
  font-size: 18px;
  li {
    line-height: 1.5rem;

    @media screen and (max-width: 500px) {
      margin: 0 10px;
    }
  }

  @media screen and (max-width: 500px) {
    display: flex;
  }
`;

const Overview = styled.p`
  font-size: 16px;
  font-weight: 200;
  margin-top: 40px;
  line-height: 1.5rem;
`;

const Button = styled.div`
  width: 200px;
  height: 50px;
  border: 1px solid white;
  margin-top: 30px;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const MovieDetail = ({ movieData }) => {
  return (
    <Wrap>
      <Poster
        style={{
          background: `url(${
            movieData.backdrop_path
              ? `${imgUrl}${movieData.backdrop_path}`
              : "https://i.pinimg.com/564x/74/cc/8a/74cc8a346b601afc543014d29c6e3aa0.jpg"
          }) no-repeat center / cover`,
        }}
      />
      <DescWrap>
        <Title>
          {movieData.title}
          <span>({movieData.release_date})</span>
        </Title>
        <TagLine>"{movieData.tagline}"</TagLine>
        <Info>
          <li>
            {movieData.genres.map((gen) => (
              <span key={gen.id}>{gen.name} / </span>
            ))}
          </li>
          <li>런타임: {movieData.runtime} 분</li>
        </Info>
        <Overview>{movieData.overview}</Overview>
        <Button>예고편 보러가기</Button>
      </DescWrap>
    </Wrap>
  );
};
