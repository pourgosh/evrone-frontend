import styled from "styled-components";
import Solutions from ".";

type solutionsType = {
  className?: string;
};

export const StyledSolution = styled(Solutions)<solutionsType>`
  display: flex;
  border-top: 1px solid #ccc;
  padding-block: 15px;
  margin-inline: 10px;
  font-size: 16px;
  line-height: 1.25;
  border-radius: 6px;
  &:hover {
    background-color: #000;
    color: #fff;
    cursor: pointer;
  }
  @media (min-width: 1100px) {
    padding-block: 18px;
    font-size: 20px;
    line-height: 1.5;
  }
  span {
    display: flex;
    align-items: center;
    text-align: center;
    color: #f53;
    margin-left: 6px;
  }
  span svg {
    color: #f53;
  }
`;
