import styled from "styled-components";

type DivProps = {
  display?: string;
  justifyc?: string;
  btnbgc?: string;
  btnBorder?: string;
};

export const Nav = styled.nav`
  display: flex;
  padding: 14px 20px;
  font-family: Suisse Intl Regular;
  @media (min-width: 900px) {
    padding: 14px 30px;
  }
  @media (min-width: 1100px) {
    padding: 14px 60px;
  }
  @media (min-width: 1260px) {
    padding: 18px 120px;
  }
`;

export const Div = styled.div<DivProps>`
  flex: 1;
  display: ${(props) => props.display || "block"};
  justify-content: ${(props) => props.justifyc || "center"};
  align-items: center;
  p {
    font-size: 25px;
    font-weight: 900;
  }
  button {
    background-color: ${(props) => props.btnbgc || "inherit"};
    font-size: 25px;
    border: ${(props) => props.btnBorder || "none"};
    border-radius: 6px;
  }
`;
