import Partners from ".";
import styled, { keyframes } from "styled-components";

type partnersType = {
  className?: string;
};

const scroller = keyframes`

    to {
      left:-500px;
    }
`;

export const StyledPartners = styled(Partners)<partnersType>`
  overflow: hidden;
  height: 150px;
  width: 100%;
  max-width: 2200px;
  margin-inline: auto;
  position: relative;
  img {
    left: max(calc(500px * 6), 100%);
    position: absolute;
    width: 500px;
    height: 150px;
    margin: 0 120px;
    animation: ${scroller} 35s linear infinite;
  }
  /* animation dealay calc function formula
  duration * delay * -1 
  (duration of animation relative to total number of items * unique delay for each item * -1 which transforms result to a negetive number)
  */
  .item0 {
    animation-delay: calc(35s / 6 * (6 - 1) * -1);
  }
  .item1 {
    animation-delay: calc(35s / 6 * (6 - 2) * -1);
  }
  .item2 {
    animation-delay: calc(35s / 6 * (6 - 3) * -1);
  }
  .item3 {
    animation-delay: calc(35s / 6 * (6 - 4) * -1);
  }
  .item4 {
    animation-delay: calc(35s / 6 * (6 - 5) * -1);
  }
  .item5 {
    animation-delay: calc(35s / 6 * (6 - 6) * -1);
  }
`;
