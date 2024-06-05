import styled from "styled-components";

type Props = {
  placeholder: string;
  type: string;
};

const StyledInput = styled.input`
  font-size: 16px;
  border-radius: 6px;
  color: #000;
  border: 2px solid #f0f0f0;
  background-color: #f0f0f0;
  padding: 10px;
  @media (min-width: 900px) {
    font-size: 20px;
    padding: 15px;
  }
`;
const Input = ({ placeholder, type }: Props) => {
  return <StyledInput type={type} placeholder={placeholder} />;
};

export default Input;
