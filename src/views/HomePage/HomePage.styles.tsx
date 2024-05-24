import styled from "styled-components";
import HomePage from ".";

type HomeProps = {
  className?: string;
};

export const StyledHomePage = styled(HomePage)<HomeProps>`
  display: flex;
  .titleWrapper {
    padding-left: 20px;
    padding-top: 80px;
    @media (min-width: 900px) {
      padding-top: 140px;
      padding-left: 42px;
    }
    @media (min-width: 1100px) {
      padding-top: 200px;
      padding-left: 75px;
    }
    @media (min-width: 1260px) {
      padding-left: 130px;
    }
  }
  .titleContainer {
    max-width: 1300px;
    min-height: 150px;
    @media (min-width: 900px) {
      padding-right: 590px;
    }
    @media (min-width: 2000px) {
      padding-right: 0;
    }
  }
  .titleContainer p {
    font-size: 40px;
    font-weight: 300;
    line-height: 1.3;
    @media (min-width: 900px) {
      font-size: 60px;
      font-weight: normal;
    }
  }
`;
