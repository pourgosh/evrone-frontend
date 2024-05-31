import OurServices from ".";
import styled from "styled-components";

type OurServicesType = {
  className?: string;
};

export const StyledServices = styled(OurServices)<OurServicesType>`
  @media (min-width: 720px) {
    display: flex;
  }
  .servicesTitleContainer {
    flex: 2;
    padding: 120px 0 30px 25px;
    @media (min-width: 420px) {
      padding: 150px 0 40px 35px;
    }
    @media (min-width: 900px) {
      padding-top: 170px;
      padding-left: 43px;
    }
    @media (min-width: 1000px) {
      padding-left: 48px;
    }
    @media (min-width: 1100px) {
      padding-left: 80px;
      flex: 1;
    }
    @media (min-width: 1260px) {
      padding-top: 200px;
      padding-left: 135px;
    }
    @media (min-width: 1900px) {
      padding-top: 250px;
      padding-left: 160px;
    }
  }
  .servicesTitleContainer p {
    font-size: 24px;
    @media (min-width: 900px) {
      font-size: 40px;
    }
  }
  .serviceOptions {
    flex: 4;
    padding-left: 25px;
    @media (min-width: 420px) {
      padding-left: 35px;
    }
    @media (min-width: 720px) {
      padding-top: 120px;
    }
    @media (min-width: 900px) {
      padding-top: 170px;
      padding-left: 43px;
    }
    @media (min-width: 1000px) {
      padding-left: 48px;
    }
    @media (min-width: 1100px) {
      padding-left: 80px;
      flex: 3;
    }
    @media (min-width: 1260px) {
      padding-top: 200px;
      padding-left: 135px;
    }
    @media (min-width: 1900px) {
      padding-top: 250px;
      padding-left: 160px;
    }
  }
  .serviceOptions section p {
    width: fit-content;
    margin-block: 20px;
    font-size: 20px;
    border-bottom: 1px solid #999;
    padding-bottom: 3px;
    @media (min-width: 1100px) {
      font-size: 30px;
      margin-bottom: 40px;
    }
  }
`;
