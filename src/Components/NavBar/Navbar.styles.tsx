import styled from "styled-components";
import NavBar from ".";

type NavProps = {
  display?: string;
  justifyc?: string;
  className?: string;
};

export const StyledNav = styled(NavBar)<NavProps>`
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
  .menu p,
  .letsTalk p,
  .listContainer p {
    font-size: 20px;
    font-weight: 300;
    white-space: nowrap;
  }
  .logoContainer {
    flex: 1;
    @media (min-width: 900px) {
      padding: 10px;
    }
  }
  .logoContainer p {
    font-size: 30px;
    font-weight: 600;
  }
  .navItemsContainer {
    flex: 1;
    display: flex;
    gap: 10px;
    justify-content: flex-end;
    align-items: center;
    @media (min-width: 1260px) {
      flex: 3;
    }
  }
  .listContainer {
    display: none;
    gap: 20px;
    padding-right: 15px;
    @media (min-width: 1260px) {
      display: flex;
    }
  }
  .listContainer div svg {
    font-size: 25px;
    font-weight: 300;
    white-space: nowrap;
  }
  .navItem {
    padding-top: 4px;
  }
  .menu {
    @media (min-width: 900px) {
      justify-content: flex-end;
    }
    @media (min-width: 1260px) {
      display: none;
    }
  }

  .letsTalk {
    background-color: #f53;
    padding: 14px 20px;
    border-radius: 6px;
    @media (max-width: 985px) {
      display: none;
    }
  }
  .letsTalk p {
    color: #f0f0f0;
  }
`;
