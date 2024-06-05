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
  .headerForm {
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
  .headerForm section {
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
    width: 90%;
    @media (min-width: 1100px) {
      padding: 60px 0 0 5px;
      width: 66.6%;
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
  .employeeWrapper {
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

  .employeeWrapper .infoContainer {
    display: flex;
  }
  .employeeWrapper .infoContainer .employeeTitle {
    flex: 1;
    display: flex;
    align-items: center;
  }
  .employeeWrapper .infoContainer .employeeTitle p {
    font-size: 24px;
    white-space: nowrap;
    @media (min-width: 900px) {
      font-size: 40px;
    }
  }

  .employeeWrapper .infoContainer .employeeBtns {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 10px;
    @media (min-width: 1100px) {
      gap: 30px;
    }
  }

  .employeeWrapper .employeeContent {
    padding-top: 30px;
    display: flex;
    gap: 20px;
    overflow: hidden;
    overflow-x: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
    @media (min-width: 1100px) {
      padding-top: 50px;
    }
    @media (min-width: 1500px) {
      padding-top: 60px;
    }
  }
  .solutionsWrapper {
    padding: 120px 25px 0 25px;
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
  .solutionsWrapper .solutionsTitle p {
    font-size: 24px;
    white-space: nowrap;
    @media (min-width: 900px) {
      font-size: 40px;
    }
  }
  .solutionsWrapper .solutionsContent {
    padding-top: 30px;
    @media (min-width: 470px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 720px) {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }
    @media (min-width: 1100px) {
      padding-top: 50px;
    }
    @media (min-width: 1500px) {
      padding-top: 60px;
    }
  }

  .industriesWrapper {
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
  .industriesWrapper .industriesTop {
    display: flex;
  }
  .industriesWrapper .industriesTop .industriesTitle {
    flex: 1;
  }
  .industriesWrapper .industriesTop .arrowBtnsBox {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 10px;
    @media (min-width: 1100px) {
      gap: 30px;
    }
  }
  .industriesWrapper .industriesTitle p {
    font-size: 24px;
    white-space: nowrap;
    @media (min-width: 900px) {
      font-size: 40px;
    }
  }
  .industriesWrapper .industriesContent {
    padding-top: 30px;
    display: flex;
    overflow: hidden;
    overflow-x: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
    @media (min-width: 1100px) {
      padding-top: 50px;
    }
    @media (min-width: 1500px) {
      padding-top: 60px;
    }
  }
  .techPlatformsWrapper {
    display: flex;
    flex-direction: column;
    padding: 120px 25px 0 25px;
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

  .techPlatformsWrapper .techPlaformTitle p {
    font-size: 24px;
    @media (min-width: 900px) {
      font-size: 40px;
    }
  }
  .techPlatformsWrapper .techPlatformsTxt {
    padding: 30px 0 0 5px;
    width: 90%;
    @media (min-width: 1100px) {
      padding: 60px 0 0 5px;
      width: 66.6%;
    }
  }
  .techPlatformsWrapper .techPlatformsTxt p {
    font-size: 16px;
    line-height: 1.5;
    @media (min-width: 1100px) {
      font-size: 20px;
    }
  }
  .techPlatformsWrapper .techPlatformContent {
    flex: 1;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(3, 1fr);
    padding-top: 30px;

    @media (min-width: 1000px) {
      grid-template-columns: repeat(6, 1fr);
    }
    @media (min-width: 1100px) {
      padding-top: 50px;
    }
    @media (min-width: 1500px) {
      padding-top: 60px;
    }
  }
  .clientStoriesWrapper {
    display: flex;
    flex-direction: column;
    padding: 120px 25px 0 25px;
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
  .clientStoriesWrapper .clientStoriesTitle {
    display: flex;
  }
  .clientStoriesWrapper .clientStoriesTitle p {
    flex: 1;
    font-size: 24px;
    @media (min-width: 900px) {
      font-size: 40px;
    }
  }
  .clientStoriesWrapper .clientStoriesTitle .arrowBtnBox {
    display: flex;
    gap: 10px;
    @media (min-width: 1100px) {
      gap: 30px;
    }
  }
  .clientStoriesWrapper .storyContent {
    display: flex;
    flex-direction: column;
  }
  .clientStoriesWrapper .storyContent {
    padding: 30px 0 0 5px;
  }
  .devProcessWrapper {
    display: flex;
    flex-direction: column;
    padding: 120px 25px 0 25px;
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
  .devProcessWrapper .devProcessTop {
    display: flex;
  }
  .devProcessWrapper .devProcessTop .devProcessTitle {
    flex: 1;
    font-size: 24px;
    @media (min-width: 900px) {
      font-size: 40px;
    }
  }
  .devProcessWrapper .devProcessTop .devProcessArrowBtn {
    display: flex;
    gap: 10px;
    @media (min-width: 1100px) {
      gap: 30px;
    }
  }
  .devProcessWrapper .processBreakDown {
    padding-top: 15px;

    @media (min-width: 1000px) {
      padding-top: 30px;
    }
  }
  .devProcessWrapper .processBreakDown p {
    font-size: 16px;
    line-height: 1.5;
    @media (min-width: 1000px) {
      font-size: 20px;
    }
  }
  .devProcessWrapper .devProcessContent {
    display: flex;
    justify-content: space-evenly;
    padding-top: 20px;
    overflow-x: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
    @media (min-width: 1100px) {
      padding-top: 50px;
    }
  }
  .faqWrapper {
    display: flex;
    flex-direction: column;
    padding: 120px 25px 0 25px;
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
  .faqWrapper .faqTitle p {
    flex: 1;
    font-size: 24px;
    @media (min-width: 900px) {
      font-size: 40px;
    }
  }
  .faqWrapper .faqContent {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding-top: 30px;
  }
  .aboutClientWrapper {
    display: flex;
    flex-direction: column;
    padding: 120px 25px 0 25px;
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
  .aboutClientWrapper .aboutClientTitle p {
    font-size: 40px;
    line-height: 1.5;
    @media (min-width: 1000px) {
      font-size: 60px;
      line-height: 1.25;
    }
  }
  .aboutClientWrapper .companyInfo {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    gap: 5px;
    padding-top: 30px;
    @media (min-width: 720px) {
      align-items: center;
      flex-direction: row;
      gap: 15px;
    }
    @media (min-width: 1000px) {
      padding-top: 60px;
      gap: 30px;
    }
  }
  .aboutClientWrapper .companyInfo p {
    padding-bottom: 5px;
    font-size: 16;
    line-height: 1.5;
    border-bottom: 1px solid #ccc;
    @media (min-width: 1000px) {
      font-size: 20px;
      line-height: 1.25;
    }
  }
`;
