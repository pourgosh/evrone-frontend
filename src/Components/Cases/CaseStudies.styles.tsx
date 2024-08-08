import CaseStudies from ".";
import styled from "styled-components";

type CaseProps = {
  className?: string;
};
export const StyledCaseStudies = styled(CaseStudies)<CaseProps>`
  padding-inline: 30px;
  padding-top: 30px;
  &:hover {
    cursor: pointer;
  }
  @media (min-width: 1100px) {
    padding-top: 60px;
  }
  .caseImgWrapper .caseImgContainer img {
    border-radius: 6px;
    display: block;
    width: 100%;
    min-height: 200px;
    object-fit: cover;
    @media (min-width: 1300px) {
      min-height: 250px;
    }
    @media (min-width: 1500px) {
      min-height: 300px;
    }
    @media (min-width: 1790px) {
      min-height: 350px;
    }
    @media (min-width: 2000px) {
      min-height: 400px;
    }
    @media (min-width: 2300px) {
      height: 420px;
    }
  }
  .caseTitleContainer {
    padding-inline: 5px;
    padding-top: 30px;
    @media (min-width: 420px) {
      padding-top: 38px;
    }
    @media (min-width: 1100px) {
      padding-top: 42px;
    }
  }
  .caseTitleContainer p {
    width: fit-content;
    padding-bottom: 2px;
    font-size: 20px;
    border-bottom: 1px solid #999;
    &:hover {
      border-bottom: 1px solid #000;
    }
    @media (min-width: 990px) {
      font-size: 24px;
    }
  }
  .caseInfoContainer {
    padding-inline: 5px;
    padding-top: 15px;
    @media (min-width: 420px) {
      padding-top: 19px;
    }
    @media (min-width: 1100px) {
      padding-top: 21px;
    }
  }
  .caseInfoContainer p {
    font-size: 16px;
    @media (min-width: 990px) {
      font-size: 20px;
    }
  }
  .date {
    padding-top: 15px;
    @media (min-width: 420px) {
      padding-top: 19px;
    }
    @media (min-width: 1100px) {
      padding-top: 21px;
    }
  }
  .date p {
    color: #999;
  }
`;
