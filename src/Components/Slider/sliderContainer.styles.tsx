import styled from "styled-components";
import SliderContainer from ".";

type SliderImageProps = {
  backgroundImage?: string;
  className?: string;
};

export const StyledSliderContainer = styled(SliderContainer)<SliderImageProps>`
  padding-top: 50px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 900px) {
    padding-left: 20px;
  }
  @media (min-width: 1000px) {
    padding-top: 100px;
    padding-left: 7px;
  }
  @media (min-width: 1200px) {
    padding-top: 100px;
    padding-left: 17px;
  }
  @media (min-width: 1800px) {
    padding-top: 120px;
    padding-left: 10px;
  }
  @media (min-width: 1800px) {
    padding-top: 120px;
    padding-left: 5px;
  }
  .imgContainer {
    width: 85%;
    min-height: 240px;
    display: flex;
    align-items: center;
    background-image: ${(props) => ` url(${props.bgImage})`};
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    @media (min-width: 700px) {
      width: 92%;
      min-height: 350px;
    }
    @media (min-width: 800px) {
      width: 92%;
      min-height: 500px;
    }
    @media (min-width: 1000px) {
      width: 91%;
      min-height: 600px;
    }
    @media (min-width: 1100px) {
      width: 86%;
    }
    @media (min-width: 1260px) {
      width: 80%;
      min-height: 650px;
    }
    @media (min-width: 1450px) {
      width: 83%;
      min-height: 800px;
    }
    @media (min-width: 1800px) {
      width: 87%;
      min-height: 900px;
    }
    @media (min-width: 2000px) {
      width: 89%;
      min-height: 1100px;
    }
  }
  .imgContainer .btnContainer {
    flex: 1;
    display: flex;
    justify-content: space-between;
    padding: 0 15px;
    @media (min-width: 900px) {
      padding: 0 25px;
    }
  }
  .imgContainer .btnContainer span {
    height: 30px;
    width: 30px;

    @media (min-width: 980px) {
      height: 50px;
      width: 50px;
    }
  }
  .imgContainer .btnContainer span div {
    width: calc(100%);
    height: calc(100%);
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    &:hover {
      background-color: #000;
      color: #fff;
      cursor: pointer;
    }
  }
  .imgContainer .btnContainer span div svg {
    width: 20px;
    height: 20px;
  }
  .itemInfoContainer {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    @media (min-width: 720px) {
      flex-direction: row;
    }
  }
  .itemInfoContainer {
    &:hover {
      cursor: pointer;
    }
  }
  .itemInfoContainer .sliderTitleContainer {
    flex: 1;
    height: 20px;
    padding-top: 30px;
    padding-left: 25px;
    @media (min-width: 420px) {
      padding-top: 35px;
      padding-left: 35px;
    }
    @media (min-width: 900px) {
      padding-top: 40px;
      padding-left: 43px;
    }
    @media (min-width: 1000px) {
      padding-left: 48px;
    }
    @media (min-width: 1100px) {
      padding-left: 80px;
    }
    @media (min-width: 1260px) {
      padding-top: 50px;
      padding-left: 135px;
    }
    @media (min-width: 1900px) {
      padding-left: 160px;
    }
  }
  .itemInfoContainer .sliderTitleContainer p {
    font-size: 20px;
    white-space: nowrap;
    width: max-content;
    padding-bottom: 2px;
    border-bottom: 1px solid #999;
    transition: border-bottom-color 0.3s ease;
    &:hover {
      border-bottom-color: #000;
    }
    @media (min-width: 900px) {
      font-size: 24px;
    }
  }
  .itemInfoContainer .dataContainer {
    flex: 3;
    padding-top: 25px;
    display: flex;
    flex-direction: column;
    gap: 25px;
    padding-left: 25px;
    @media (min-width: 420px) {
      padding-left: 35px;
    }
    @media (min-width: 720px) {
      padding-top: 35px;
    }
    @media (min-width: 900px) {
      padding-top: 40px;
      padding-left: 43px;
    }
    @media (min-width: 1000px) {
      padding-left: 48px;
    }
    @media (min-width: 1100px) {
      padding-left: 80px;
    }
    @media (min-width: 1260px) {
      padding-top: 50px;
      padding-left: 135px;
    }
    @media (min-width: 1900px) {
      padding-left: 160px;
    }
  }
  .itemInfoContainer .dataContainer p {
    font-size: 16px;
    @media (min-width: 900px) {
      font-size: 20px;
    }
  }
  .itemInfoContainer .dataContainer p:nth-child(2) {
    color: #999;
  }
`;
