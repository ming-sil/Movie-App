import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { movieApi } from "../../../api";
import { ScrollTop } from "../../../ScrollTop";
import { imgUrl } from "../../constant/constant";
import { Container } from "../../Container";
import { Loading } from "../../Loading";
import { PageTitle } from "../../PageTitle";

const SearchWrap = styled.div`
  margin-top: 150px;
`;

const Input = styled.input`
  all: unset;
  width: 100%;
  border: 1px solid #555;
  padding: 20px;
  box-sizing: border-box;
  font-size: 20px;
  &::placeholder {
    font-size: 20px;
  }
`;

const ConWrap = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 30px;
  row-gap: 50px;
  margin-top: 150px;
`;

const Con = styled.div`
  /* width: 200px; */
`;

const Bg = styled.div`
  height: 300px;
`;

const Title = styled.h3`
  font-size: 18px;
  margin-top: 10px;
`;

export const Search = () => {
  const [searchTerm, setSearchTerm] = useState();
  const [loading, setLoading] = useState();

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm({
    mode: "onChange",
  });

  const searchMovie = async () => {
    const { search: term } = getValues();
    // =>getValues는 input태그에 작성된 내용을 가져옴
    // console.log(term);

    setLoading(true);

    try {
      // console.log(await movieApi.search(term));
      const {
        data: { results },
      } = await movieApi.search(term);

      if (results.length <= 0) {
        setError("result", { message: "없는 영화입니다." });
        // =>setError("에러이름",{message:"값"})
        // =>useForm에 있는 속성으로 에러
      } else {
        setSearchTerm(results);
      }

      // console.log(results.length <= 0);

      setLoading(false);
    } catch (error) {
      console.log(error);
    }
    // 비동기화 처리
  };
  // console.log(errors);
  // // =>폼상태 에러처리 담당

  console.log(searchTerm);

  return (
    <>
      <PageTitle title={"Search"} />
      <ScrollTop />
      <Container>
        <SearchWrap>
          <form onSubmit={handleSubmit(searchMovie)}>
            <Input
              {...register("search", {
                required: "내용은 필수입니다.",
                onChange() {
                  clearErrors("result");
                },
              })}
              type="text"
              placeholder="영화검색..."
            />

            {errors?.search?.message}
            {errors?.result?.message}
            {/* 옵셔녈 체이닝 Optional chaining */}
          </form>
        </SearchWrap>

        {loading ? (
          <Loading />
        ) : (
          <>
            {searchTerm && (
              <ConWrap>
                {searchTerm.map((term) => (
                  <Con key={term.id}>
                    <Link to={`/detail/${term.id}`}>
                      <Bg
                        style={{
                          background: `url(${imgUrl}${term.backdrop_path}) no-repeat center / cover`,
                        }}
                      />
                      <Title>{term.title}</Title>
                    </Link>
                  </Con>
                ))}
              </ConWrap>
            )}
          </>
        )}
      </Container>
    </>
  );
};
