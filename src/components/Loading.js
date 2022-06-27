import { SpinnerCircular } from "spinners-react";
import styled from "styled-components";
import { mainStyle } from "../styles/globalStyle";

const Wrap = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Loading = () => {
  return (
    <Wrap>
      <SpinnerCircular size={50} color={mainStyle.mainColor} />
    </Wrap>
  );
};
