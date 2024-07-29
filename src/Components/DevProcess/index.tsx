import styled from "styled-components";

type Props = {
  num?: number;
  text?: string;
  label?: string;
};

const StyledContent = styled.div`
  display: flex;
  p {
    color: #e6e6e6;
    font-size: 90px;
    @media (min-width: 720px) {
      font-size: 120px;
    }
    @media (min-width: 1000px) {
      font-size: 180px;
    }
  }
`;
const DevProcess = ({ num, text, label }: Props) => {
  return (
    <StyledContent>
      <p>{num}</p>
    </StyledContent>
  );
};

export default DevProcess;
