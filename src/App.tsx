import { useState } from "react";
import Footer from "./Components/Footer";
import { StyledNav } from "./Components/NavBar/Navbar.styles";
import Router from "./Routes";
import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: #000;
  margin-top: 120px;
  padding-left: 25px;
  padding-right: 25px;
  @media (min-width: 420px) {
    padding: 0 35px 0 35px;
  }
  @media (min-width: 900px) {
    padding-inline: 45px;
  }
  @media (min-width: 1100px) {
    padding-inline: 80px;
  }
  @media (min-width: 1260px) {
    padding-inline: 155px;
  }
`;

function App() {
  const [display, setDisplay] = useState({
    services: false,
    solutions: false,
    industries: false,
    technologies: false,
    company: false,
    legal: false,
  });

  return (
    <>
      <StyledNav />
      <Router />
      <StyledFooter>
        <Footer
          displayer={display.services}
          label={"Services"}
          valueA={"Web development"}
          valueB={"App Development"}
          valueC={"UI/UX Design"}
          valueD={"Frontend"}
          valueE={"DevOps"}
          valueF={"QA"}
          onClick={() => {
            setDisplay({
              ...display,
              services: !display.services,
            });
          }}
        />
        <Footer
          displayer={display.solutions}
          label={"Solutions"}
          valueA={"CRM"}
          valueB={"ERP"}
          valueC={"Web Portals"}
          valueD={"AI"}
          valueE={"Machine Learning"}
          valueF={"Marketplace"}
          onClick={() => {
            setDisplay({
              ...display,
              services: false,
              solutions: !display.solutions,
            });
          }}
        />
        <Footer
          displayer={display.industries}
          label={"Industries"}
          valueA={"FinTech"}
          valueB={"EdTech"}
          valueC={"eHealth"}
          valueD={"Foodtech"}
          valueE={"Retail"}
          valueF={"HR-tech"}
          onClick={() => {
            setDisplay({
              ...display,
              solutions: false,
              industries: !display.industries,
            });
          }}
        />
        <Footer
          displayer={display.technologies}
          label={"Technologies"}
          valueA={"Ruby"}
          valueB={"Python"}
          valueC={"Golang"}
          valueD={"Vue.JS"}
          valueE={"React"}
          valueF={"Rust"}
          onClick={() => {
            setDisplay({
              ...display,
              industries: false,
              technologies: !display.technologies,
            });
          }}
        />
        <Footer
          displayer={display.company}
          label={"Company"}
          valueA={"About"}
          valueB={"Contact"}
          valueC={"Cases"}
          valueD={"News"}
          valueE={"Blog"}
          valueF={"Jobs"}
          onClick={() => {
            setDisplay({
              ...display,
              technologies: false,
              company: !display.company,
            });
          }}
        />
        <Footer
          displayer={display.legal}
          label={"Legal"}
          valueA={"Privacy Policy"}
          valueB={"Terms of Service"}
          onClick={() => {
            setDisplay({
              ...display,
              company: false,
              legal: !display.legal,
            });
          }}
        />
      </StyledFooter>
    </>
  );
}

export default App;
