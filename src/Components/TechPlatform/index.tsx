import styled from "styled-components";

type Props = {
  src: string;
};

const StyledImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px;
  &:hover {
    cursor: pointer;
    scale: 1.2;
  }
  img {
    width: 100%;
    max-width: 300px;
    min-width: 80px;
    height: auto;
    max-height: 150px;
    min-height: 40px;
  }
`;
const TechPlatform = ({ src }: Props) => {
  return (
    <StyledImg>
      <img src={src} alt="tech Platform Logo" />
    </StyledImg>
  );
};

export default TechPlatform;
