import Partners from ".";
import styled, { keyframes } from "styled-components";

type partnersType = {
  className?: string;
};

const scroller = keyframes`
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-100%);
    }
`;

export const StyledPartners = styled(Partners)<partnersType>`
  display: flex;
  animation: ${scroller} 105s linear infinite;

  img {
    width: 500px;
    height: 150px;
    margin: 0 120px;
  }
`;
