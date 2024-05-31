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
    gap: 15px;
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
    gap: 15px;
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
  .offersContainer {
    padding-top: 120px;
    padding-inline: 25px;
    @media (min-width: 420px) {
      padding-top: 150px;
      padding-inline: 35px;
    }
    @media (min-width: 900px) {
      padding-top: 170px;
      padding-inline: 43px;
    }
    @media (min-width: 1000px) {
      padding-inline: 48px;
    }
    @media (min-width: 1100px) {
      padding-inline: 80px;
    }
    @media (min-width: 1260px) {
      padding-top: 200px;
      padding-inline: 135px;
    }
    @media (min-width: 1900px) {
      padding-top: 250px;
      padding-inline: 160px;
    }
  }
  .offersContainer p {
    font-size: 20px;
    @media (min-width: 900px) {
      font-size: 30px;
    }
  }
  .scrollerWrapper {
    width: 100%;
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    padding-top: 30px;
    @media (min-width: 420px) {
      padding-top: 35px;
    }
    @media (min-width: 900px) {
      padding-top: 80px;
    }
    @media (min-width: 1260px) {
      padding-top: 50px;
    }
  }
  .casesMainTitle {
    padding-top: 120px;
    padding-left: 25px;
    @media (min-width: 420px) {
      padding: 150px 0 0 35px;
    }
    @media (min-width: 900px) {
      padding-left: 45px;
    }
    @media (min-width: 1100px) {
      padding-top: 175px;
      padding-left: 80px;
    }
    @media (min-width: 1260px) {
      padding-left: 155px;
    }
  }
  .casesMainTitle p {
    font-size: 24px;
    @media (min-width: 900px) {
      font-size: 40px;
    }
  }
  .CasesWrapper {
    @media (min-width: 420px) {
      padding-inline: 15px;
    }
    @media (min-width: 450px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 730px) {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }
    @media (min-width: 900px) {
      padding-inline: 25px;
    }

    @media (min-width: 1100px) {
      padding-inline: 60px;
    }
    @media (min-width: 1260px) {
      padding-inline: 130px;
    }
  }
  .allStudiesBtn {
    padding-top: 35px;
    padding-left: 30px;
    @media (min-width: 800px) {
      padding-top: 45px;
    }
    @media (min-width: 1800px) {
      padding-top: 55px;
    }
  }
  .allStudiesBtn button {
    color: #000;
    background-color: #f0f0f0;
    padding: 8px 16px;
    white-space: nowrap;
    font-size: 16px;
    border-radius: 6px;
    border: 1px solid #f0f0f0;
    line-height: 2;
    @media (min-width: 1100px) {
      padding: 10px 20px;
      font-size: 20px;
      line-height: 1.5;
    }
  }

  .whyUsWrapper {
    padding-top: 120px;
    padding-left: 25px;
    padding-right: 25px;
    @media (min-width: 420px) {
      padding: 150px 35px 0 35px;
    }
    @media (min-width: 900px) {
      padding-inline: 45px;
    }
    @media (min-width: 1100px) {
      padding-top: 175px;
      padding-inline: 80px;
    }
    @media (min-width: 1260px) {
      padding-inline: 155px;
    }
  }
  .whyUsWrapper .whyUsHeader p {
    font-size: 24px;
    @media (min-width: 900px) {
      font-size: 40px;
    }
  }
  .whyUsWrapper .specializesText {
    padding: 30px 0 0 5px;
    width: 66.6%;
    @media (min-width: 1100px) {
      padding: 60px 0 0 5px;
    }
  }
  .whyUsWrapper .specializesText p {
    font-size: 16px;
    line-height: 1.5;
    @media (min-width: 1100px) {
      font-size: 20px;
    }
  }
  .whyUsWrapper .whyUsContent {
    padding-top: 20px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    @media (min-width: 750px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (min-width: 1100px) {
      padding-top: 50px;
    }
  }
`;