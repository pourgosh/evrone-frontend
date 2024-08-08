import styled from "styled-components";
import NavBar from ".";

type NavProps = {
  display?: string;
  justifyc?: string;
  className?: string;
};

export const StyledNav = styled(NavBar)<NavProps>`
  position: fixed;
  width: 92%;
  display: flex;
  z-index: 10;
  padding: 14px 20px;
  font-family: Suisse Intl Regular;
  background-color: #fff;
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
    font-size: 23px;
    font-weight: 300;
    white-space: nowrap;
  }
  .logoContainer {
    flex: 1;
    @media (min-width: 900px) {
      padding: 10px;
    }
    &:hover {
      cursor: pointer;
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
    @media (min-width: 900px) {
      padding-right: 20px;
    }
    @media (min-width: 1260px) {
      flex: 3;
    }
  }
  .listContainer {
    display: none;
    gap: 20px;
    padding-right: 15px;
    height: 100%;
    &:hover > :not(:hover) {
      opacity: 0.5;
    }
    @media (min-width: 1260px) {
      display: flex;
      align-items: center;
    }
  }
  .listContainer .navItem {
    height: 100%;
    padding-top: 4px;
    display: flex;
    align-items: center;
    &:hover {
      border-bottom: 1px solid #999;
      cursor: pointer;
    }
  }
  .listContainer .navItem svg {
    font-size: 25px;
    font-weight: 300;
    white-space: nowrap;
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
    @media (min-width: 1260px) {
      margin-right: 100px;
    }
    @media (min-width: 2000px) {
      margin-right: 50px;
    }
    &:hover {
      background-color: #090909;
      cursor: pointer;
    }
  }
  .letsTalk p {
    color: #f0f0f0;
  }
`;
