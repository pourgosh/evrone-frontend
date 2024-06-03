import Industries from ".";
import styled from "styled-components";

type industriesType = {
  className?: string;
};

export const StyledIndustries = styled(Industries)<industriesType>`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-right: 40px;
  @media (min-width: 1100px) {
    margin-right: 60px;
  }
  .industriesImgBox {
    width: 424px;
    height: 300px;
    background-color: #e6e6e6;
    border-radius: 6px;
    @media (min-width: 1100px) {
      line-height: 2;
      width: 460px;
      height: 330px;
    }
    @media (min-width: 1600px) {
      width: 500px;
      height: 380px;
    }
    @media (min-width: 2000px) {
      width: 600px;
      height: 400px;
    }
    @media (min-width: 2400px) {
      width: 650px;
      height: 450px;
    }
  }
  .industriesImgBox img {
    border-radius: 6px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .industriesInfo .industriesLabel {
    font-size: 20px;
    line-height: 1.5;
    @media (min-width: 1100px) {
      font-size: 24px;
      line-height: 2;
    }
  }
  .industriesInfo .industriesText {
    margin-top: 10px;
    font-size: 16px;
    line-height: 1.25;
    @media (min-width: 1100px) {
      margin-top: 15px;
      font-size: 20px;
      line-height: 1.5;
    }
  }
`;
