import { Fragment, useState } from "react";
import { StyledSliderContainer } from "../../Components/Slider/sliderContainer.styles";
import { StyledPartners } from "../../Components/Partners/partners.style";
import { StyledServices } from "../../Components/OurServices/ourServices.styles";
import { StyledCaseStudies } from "../../Components/Cases/CaseStudies.styles";
import { StyledWhyUs } from "../../Components/WhyUs/WhyUs.styles";
import Input from "../../Components/Input";
import firstImage from "/hero/gett.png";
import scndImage from "/hero/jiseki_.png";
import thirdImage from "/hero/porodina_cover.jpg";
import crypto from "/scrollers/cryptopay.svg";
import jiseki from "/scrollers/jiseki.svg";
import loreal from "/scrollers/loreal.svg";
import medcor from "/scrollers/medcorder.svg";
import pirelli from "/scrollers/pirelli.svg";
import quiv from "/scrollers/quiv.svg";
import oon from "/cases/00-n.jpg";
import cover_2 from "/cases/cover_2_0.png";
import crmLogo from "/cases/crm_logo_00000-min.png";
import emco from "/cases/emco.jpg";
import kinderlime from "/cases/kinderlime.png";
import pirelliCover from "/cases/pirelli_cover.png";

type HomeProps = {
  className: string;
};
const HomePage = ({ className }: HomeProps): JSX.Element => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [SliderItems, _] = useState([
    {
      title: "Gett",
      describtion: `Legacy project support for an international taxi ordering service `,
      date: "July 2022",
      image: firstImage,
    },
    {
      title: "Jiseki Health",
      describtion: `Building a HIPAA-compliant rules engine for text-based service company`,
      date: " November 2020",
      image: scndImage,
    },
    {
      title: "Elizaveta Porodina",
      describtion: `Design and development of a minimalistic fashion photography website`,
      date: " August 2020",
      image: thirdImage,
    },
  ]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [sliderIndex, setSliderIndex] = useState(0);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [scrollerItems, setScrollerItems] = useState([
    crypto,
    jiseki,
    loreal,
    medcor,
    pirelli,
    quiv,
  ]);

  //cases State
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [cases, setCases] = useState([
    {
      src: crmLogo,
      label: "KFC",
      text: "Creating a custom CRM to launch KFC into the future of customer-defined service",
      date: "June 2020",
    },
    {
      src: emco,
      label: "East Mining Company",
      text: "Helping a mining company optimize logistics",
      date: "July 2023",
    },
    {
      src: pirelliCover,
      label: "Pirelli",
      text: "Developing an analytical system for a tire manufacturer",
      date: "January 2022",
    },
    {
      src: cover_2,
      label: "Machinio",
      text: "Developing a comprehensive search engine for an industrial machinery company",
      date: "April 2020",
    },
    {
      src: kinderlime,
      label: "Kinderlime",
      text: "How we helped Kinderlime build a better child care platform",
      date: "January 2021",
    },
    {
      src: oon,
      label: "Medcvorder",
      text: "How we helped a tech leader build an automated healthcare app for care teams",
      date: "July 2020",
    },
  ]);

  const prevImg = () => {
    setSliderIndex(sliderIndex - 1);
    if (sliderIndex === 0) {
      setSliderIndex(0);
    }
  };

  const nextImg = () => {
    setSliderIndex(sliderIndex + 1);
    if (sliderIndex === SliderItems.length - 1) {
      setSliderIndex(0);
    }
  };

  return (
    <main className={className}>
      <div className="titleWrapper">
        <div className="titleContainer">
          <p>Custom Software Development company</p>
        </div>
      </div>
      <div className="subHeaderContainer">
        <p>Need a custom software? Tell us about your idea:</p>
      </div>
      <form>
        <section>
          <Input type={"text"} placeholder={"Full name"} />
          <Input type={"text"} placeholder={"Email"} />
        </section>
        <section className="textArea">
          <Input type={"text"} placeholder={"Message"} />
        </section>
      </form>
      <div className="sliderWrapper">
        <StyledSliderContainer
          items={SliderItems[sliderIndex]}
          bgImage={SliderItems[sliderIndex].image}
          prevFunc={prevImg}
          nextFunc={nextImg}
        />
      </div>
      <div className="offersContainer">
        <p>
          We offer a complete range of bespoke design and development services
          to help you turn your ideas into digital masterpieces.
        </p>
      </div>
      <div className="scrollerWrapper">
        <StyledPartners scrollItems={scrollerItems} />
      </div>
      <div className="servicesWrapper">
        <StyledServices />
      </div>
      <div className="casesMainTitle">
        <p>Case studies</p>
      </div>
      <div className="CasesWrapper">
        {cases?.map((elem, i) => {
          return (
            <Fragment key={i}>
              <StyledCaseStudies
                src={elem.src}
                label={elem.label}
                text={elem.text}
                date={elem.date}
              />
            </Fragment>
          );
        })}
        <div className="allStudiesBtn">
          <button>All Case Studies</button>
        </div>
      </div>
      <div className="whyUsWrapper">
        <div className="whyUsHeader">
          <p>Why choose us?</p>
        </div>
        <div className="specializesText">
          <p>
            Evrone specializes in delivering custom software development
            solutions to clients worldwide. With over 15 years of experience, we
            have built a reputation of quality, expertise, and the ability to
            deliver complex projects on time and on budget.
          </p>
        </div>
        <div className="whyUsContent">
          <StyledWhyUs numb={250} text={"Implemented projects"} />
          <StyledWhyUs numb={250} text={"High-class professionals"} />
          <StyledWhyUs numb={150} text={"International awards"} />
          <StyledWhyUs numb={100} text={"Clients worldwide"} />
          <StyledWhyUs numb={15} text={"Years of expirience"} />
        </div>
      </div>
    </main>
  );
};
export default HomePage;
