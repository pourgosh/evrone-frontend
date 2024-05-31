import WhyUs from ".";
import styled from "styled-components";

type whyUsType = {
  className?: string;
};

export const StyledWhyUs = styled(WhyUs)<whyUsType>`
  border-top: 1px solid #ccc;
  padding-top: 20px;
  .numbContainer {
    padding-top: 10px;
  }
  .numbContainer p {
    color: #f53;
    font-size: 40px;
    line-height: 1;
    @media (min-width: 1100px) {
      font-size: 90px;
    }
  }
  .textContainer {
    padding: 20px 0 10px 0;
    @media (min-width: 1100px) {
      padding-block: 25px;
    }
  }
  .textContainer p {
    font-size: 16px;
    line-height: 1.25;
    @media (min-width: 1100px) {
      font-size: 24px;
      line-height: 1.5;
    }
  }
`;
