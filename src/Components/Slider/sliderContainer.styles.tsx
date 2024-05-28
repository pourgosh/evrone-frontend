import styled from "styled-components";
import SliderContainer from ".";

type SliderImageProps = {
  backgroundImage?: string;
  className?: string;
};

export const StyledSliderContainer = styled(SliderContainer)<SliderImageProps>`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  section {
    width: 1580px;
    height: 800px;
    display: flex;
    align-items: center;
    background-image: ${(props) => ` url(${props.bgImage})`};
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .btnContainer {
    flex: 1;
    height: fit-content;
    display: flex;
    justify-content: space-between;
    padding: 0 50px;
  }
`;
