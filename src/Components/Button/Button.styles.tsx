import styled from "styled-components";
import Button from ".";

type buttonProps = {
  className?: string;
  color: string;
  bgColor: string;
};

export const StyledButton = styled(Button)<buttonProps>`
  color: ${(props) => props.color};
  background-color: ${({ bgColor }) => bgColor};
  padding: 8px 16px;
  white-space: nowrap;
  font-size: 16px;
  border-radius: 6px;
  border: 1px solid ${({ bgColor }) => bgColor};
  line-height: 2;
  @media (min-width: 1100px) {
    padding: 10px 20px;
    font-size: 20px;
    line-height: 1.5;
  }
`;
