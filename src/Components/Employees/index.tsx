import styled from "styled-components";

const EmployeeBox = styled.div`
  background: #e6e6e6;
  border-radius: 6px;
  &:nth-child(even) {
    min-width: 270px;
    height: 240px;
    @media (min-width: 1100px) {
      min-width: 470px;
      height: 291px;
    }
    @media (min-width: 1500px) {
      min-width: 631px;
      height: 400px;
    }
    @media (min-width: 2100px) {
      min-width: 870px;
      height: 600px;
    }
    @media (min-width: 2300px) {
      min-width: 1065px;
      height: 690px;
    }
  }
  &:nth-child(odd) {
    min-width: 240px;
    height: 240px;
    @media (min-width: 1100px) {
      min-width: 291px;
      height: 291px;
    }
    @media (min-width: 1500px) {
      min-width: 400px;
      height: 400px;
    }
    @media (min-width: 2100px) {
      min-width: 600px;
      height: 600px;
    }
    @media (min-width: 2300px) {
      min-width: 690px;
      height: 690px;
    }
  }
`;
const Employees = (): JSX.Element => {
  return <EmployeeBox />;
};

export default Employees;
