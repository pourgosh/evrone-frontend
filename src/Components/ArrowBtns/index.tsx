import styled from "styled-components";

type Props = {
  direction: "left" | "right";
};

const ArrowBtns = ({ direction = "left" }: Props) => {
  const StyledArrowBtn = styled.button`
    width: 30px;
    height: 30px;
    border: 1px solid #f0f0f0;
    border-radius: 6px;
    background-color: #f0f0f0;
    font-size: 20px;
    @media (min-width: 1100px) {
      width: 50px;
      height: 50px;
      font-size: 24px;
    }
  `;
  return <StyledArrowBtn>{direction === "right" ? ">" : "<"}</StyledArrowBtn>;
};

export default ArrowBtns;
