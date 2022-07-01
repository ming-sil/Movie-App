import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { movieApi } from "../../../api";
import { ScrollTop } from "../../../ScrollTop";
import { imgUrl } from "../../constant/constant";
import { Container } from "../../Container";
import { Loading } from "../../Loading";

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

export const Detail = () => {
  const [movieData, setMovieData] = useState();
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  // console.log(id); =>url주소에 있는 변수 값을 가져옴

  useEffect(() => {
    const detailData = async () => {
      const { data } = await movieApi.movieDetail(id);
      setMovieData(data);
      setLoading(false);
    };
    detailData();
  }, []);

  console.log(movieData);

  return (
    <>
      <ScrollTop />
      {loading ? (
        <Loading />
      ) : (
        <>
          {movieData && (
            <Container>
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
                </DescWrap>
              </Wrap>
            </Container>
          )}
        </>
      )}
    </>
  );
};
