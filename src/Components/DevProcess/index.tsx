import styled from "styled-components";

type Props = {
  num?: number;
  text?: string;
  label?: string;
};

const StyledContent = styled.div`
  flex: 1;
  border-radius: 6px;
  transition: 0.3s linear;
  &:hover {
    flex: 3;
    background-color: #000;
  }
  p {
    color: #e6e6e6;
    font-size: 90px;
    &:hover {
      color: #f53;
      cursor: pointer;
    }
    @media (min-width: 720px) {
      font-size: 120px;
    }
    @media (min-width: 1000px) {
      font-size: 180px;
    }
  }
`;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const DevProcess = ({ num, text, label }: Props) => {
  return (
    <StyledContent>
      <p>{num}</p>
    </StyledContent>
  );
};

export default DevProcess;
