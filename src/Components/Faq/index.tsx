import { useState } from "react";
import styled from "styled-components";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";

const StyledFaqContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  @media (min-width: 1100px) {
    gap: 30px;
  }
  .labelContainer {
    display: flex;
    align-items: center;
    gap: 5px;
    &:hover {
      cursor: pointer;
    }
  }
  .labelContainer p {
    font-size: 20px;
    line-height: 1.5;
    color: #000;
    @media (min-width: 1000px) {
      font-size: 24px;
      line-height: 1.25;
    }
  }
  .textContainer {
    padding-bottom: 15px;
  }
  .textContainer p {
    color: #000;
    font-size: 16px;
    line-height: 1.5;
    @media (min-width: 1000px) {
      font-size: 20px;
    }
  }
`;
const Faq = () => {
  const [firstQ, setFirstQ] = useState(false);
  const [scndQ, setScndQ] = useState(false);
  const [thirdQ, setThirdQ] = useState(false);
  const [fourthQ, setFourthQ] = useState(false);
  const [fifthQ, setFifthQ] = useState(false);
  const [sixthQ, setSixthQ] = useState(false);

  return (
    <StyledFaqContent>
      <div
        className="labelContainer"
        onClick={() => {
          setFirstQ(!firstQ);
          setScndQ(false);
          setThirdQ(false);
          setFourthQ(false);
          setFifthQ(false);
          setSixthQ(false);
        }}
      >
        <p>What is software development?</p>
        {!firstQ ? <GoTriangleDown /> : <GoTriangleUp />}
      </div>
      {firstQ && (
        <div className="textContainer">
          <p>
            It is the process of designing, coding, testing, and maintaining
            software applications. A custom business software development
            company can create solutions tailored to meet specific business
            needs, from small desktop applications to large-scale enterprise
            systems.
          </p>
        </div>
      )}
      <div
        className="labelContainer"
        onClick={() => {
          setFirstQ(false);
          setScndQ(!scndQ);
          setThirdQ(false);
          setFourthQ(false);
          setFifthQ(false);
          setSixthQ(false);
        }}
      >
        <p>What are the advantages of custom software development?</p>
        {!scndQ ? <GoTriangleDown /> : <GoTriangleUp />}
      </div>
      {scndQ && (
        <div className="textContainer">
          <p>
            It provides several advantages, including tailored solutions,
            increased efficiency and productivity, improved data security, and a
            competitive edge. A custom team can also help businesses integrate
            existing systems and technologies into a cohesive solution.
          </p>
        </div>
      )}
      <div
        className="labelContainer"
        onClick={() => {
          setFirstQ(false);
          setScndQ(false);
          setThirdQ(!thirdQ);
          setFourthQ(false);
          setFifthQ(false);
          setSixthQ(false);
        }}
      >
        <p>How to choose a custom software development company?</p>
        {!thirdQ ? <GoTriangleDown /> : <GoTriangleUp />}
      </div>
      {thirdQ && (
        <div className="textContainer">
          <p>
            When choosing a company, consider their experience, expertise, and
            quality of work. Look for companies that have a proven track record
            of delivering successful projects, have a team of professionals with
            deep technical expertise, and use industry-standard development
            methodologies.
          </p>
        </div>
      )}
      <div
        className="labelContainer"
        onClick={() => {
          setFirstQ(false);
          setScndQ(false);
          setThirdQ(false);
          setFourthQ(!fourthQ);
          setFifthQ(false);
          setSixthQ(false);
        }}
      >
        <p>How much does custom software development cost?</p>
        {!fourthQ ? <GoTriangleDown /> : <GoTriangleUp />}
      </div>
      {fourthQ && (
        <div className="textContainer">
          <p>
            It is the process of designing, coding, testing, and maintaining
            software applications. A custom business software development
            company can create solutions tailored to meet specific business
            needs, from small desktop applications to large-scale enterprise
            systems.
          </p>
        </div>
      )}
      <div
        className="labelContainer"
        onClick={() => {
          setFirstQ(false);
          setScndQ(false);
          setThirdQ(false);
          setFourthQ(false);
          setFifthQ(!fifthQ);
          setSixthQ(false);
        }}
      >
        <p>How long does it take to build a custom software?</p>
        {!fifthQ ? <GoTriangleDown /> : <GoTriangleUp />}
      </div>
      {fifthQ && (
        <div className="textContainer">
          <p>
            The timeline for custom product development services depends on
            several factors, including project scope, development methodology,
            and the size of the team. A simple project could take weeks, while a
            complex enterprise system could take several months or more.
          </p>
        </div>
      )}
      <div
        className="labelContainer"
        onClick={() => {
          setFirstQ(false);
          setScndQ(false);
          setThirdQ(false);
          setFourthQ(false);
          setFifthQ(false);
          setSixthQ(!sixthQ);
        }}
      >
        <p>What is Agile development?</p>
        {!sixthQ ? <GoTriangleDown /> : <GoTriangleUp />}
      </div>
      {sixthQ && (
        <div className="textContainer">
          <p>
            Agile is a flexible, iterative approach to development that
            prioritizes collaboration, continuous feedback, and rapid iteration.
            It enables teams to quickly adapt to changing requirements and
            deliver high-quality software in a timely and efficient manner.
            Agile development often involves working in sprints, with regular
            team meetings and frequent demos to ensure that the project is on
            track.
          </p>
        </div>
      )}
    </StyledFaqContent>
  );
};

export default Faq;
