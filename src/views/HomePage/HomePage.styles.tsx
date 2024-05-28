import styled from "styled-components";
import HomePage from ".";

type HomeProps = {
  className?: string;
  bgImage?: string;
};

export const StyledHomePage = styled(HomePage)<HomeProps>`
  .titleWrapper {
    padding-left: 20px;
    padding-top: 60px;
    @media (min-width: 900px) {
      padding-top: 120px;
      padding-left: 42px;
    }
    @media (min-width: 1100px) {
      padding-top: 180px;
      padding-left: 75px;
    }
    @media (min-width: 1260px) {
      padding-left: 130px;
    }
  }
  .titleContainer {
    max-width: 1300px;
    min-height: 150px;
    @media (min-width: 900px) {
      padding-right: 590px;
    }
    @media (min-width: 2000px) {
      padding-right: 0;
    }
  }
  .titleContainer p {
    font-size: 40px;
    font-weight: 300;
    line-height: 1.3;
    @media (min-width: 900px) {
      font-size: 60px;
      font-weight: normal;
    }
  }
  .subHeaderContainer {
    width: 66.6%;
    margin-bottom: 15px;
    padding-left: 25px;

    @media (min-width: 900px) {
      padding-left: 47px;
      padding-top: 20px;
    }
    @media (min-width: 1100px) {
      padding-left: 80px;
    }
    @media (min-width: 1260px) {
      padding-left: 135px;
    }
  }
  .subHeaderContainer p {
    color: #999;
    font-size: 16px;
    @media (min-width: 900px) {
      font-size: 20px;
    }
  }
  form {
    padding-left: 25px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 5px;
    @media (min-width: 780px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 8px;
    }
    @media (min-width: 900px) {
      padding-left: 47px;
    }
    @media (min-width: 1100px) {
      padding-left: 80px;
    }
    @media (min-width: 1260px) {
      padding-left: 135px;
    }
  }
  form section {
    display: flex;
    flex-direction: column;
    gap: 5px;
    @media (min-width: 570px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 8px;
      background-color: #fff;
    }
  }
  form .textArea {
    background-color: #fff;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    @media (min-width: 780px) {
      padding-right: 20px;
    }
    @media (min-width: 960px) {
      padding-right: 45px;
    }
    @media (min-width: 1100px) {
      padding-right: 70px;
    }
    @media (min-width: 1260px) {
      padding-right: 120px;
    }
  }
  form input {
    font-size: 16px;
    color: #000;
    border-radius: 6px;
    color: #000;
    border: 2px solid #f0f0f0;
    background-color: #f0f0f0;
    padding: 6px;
    @media (min-width: 900px) {
      font-size: 20px;
      padding: 10px;
    }
  }
`;
