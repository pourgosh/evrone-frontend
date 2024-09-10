import styled from "styled-components";
import { GoTriangleRight, GoTriangleLeft } from "react-icons/go";
type Props = {
  direction: "left" | "right";
  onClick?: () => void;
};

const StyledArrowBtn = styled.button`
  width: 30px;
  height: 30px;
  border: 1px solid #f0f0f0;
  border-radius: 6px;
  background-color: #f0f0f0;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
    background-color: #000;
    color: #fff;
  }
  @media (min-width: 1100px) {
    width: 50px;
    height: 50px;
    font-size: 24px;
  }
`;
const ArrowBtns = ({ direction = "left", onClick }: Props) => {
  return (
    <StyledArrowBtn onClick={onClick}>
      {direction === "right" ? <GoTriangleRight /> : <GoTriangleLeft />}
    </StyledArrowBtn>
  );
};

export default ArrowBtns;
