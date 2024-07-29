import { Fragment, useCallback, useEffect, useRef, useState } from "react";
import { StyledSliderContainer } from "../../Components/Slider/sliderContainer.styles";
import { StyledPartners } from "../../Components/Partners/partners.style";
import { StyledServices } from "../../Components/OurServices/ourServices.styles";
import { StyledCaseStudies } from "../../Components/Cases/CaseStudies.styles";
import { StyledWhyUs } from "../../Components/WhyUs/WhyUs.styles";
import { StyledSolution } from "../../Components/Solutions/Solutions.styles";
import { StyledIndustries } from "../../Components/Industries/Industries.styles";
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
import Employees from "../../Components/Employees";
import ArrowBtns from "../../Components/ArrowBtns";
import ecommerce from "/industries/ecommerce.jpg";
import edtech from "/industries/edtech.jpg";
import ehealth from "/industries/ehealth.jpg";
import fintech from "/industries/fintech.jpg";
import foodtech from "/industries/foodtech.jpg";
import hrtech from "/industries/hrtech.jpg";
import retail from "/industries/retail.jpg";
import startup from "/industries/startup.jpg";
import videostreaming from "/industries/videostreaming.jpg";
import djangoImg from "/bottomlogos/tech-django.png";
import dotNetImg from "/bottomlogos/tech-dot-net.png";
import elixirImg from "/bottomlogos/tech-elixir.png";
import flutterImg from "/bottomlogos/tech-flutter.png";
import goImg from "/bottomlogos/tech-go.png";
import kubernetisImg from "/bottomlogos/tech-kubernetis.png";
import nodeImg from "/bottomlogos/tech-node.png";
import pythonImg from "/bottomlogos/tech-python.png";
import reactImg from "/bottomlogos/tech-react.png";
import railsImg from "/bottomlogos/tech-rails.png";
import rubyImg from "/bottomlogos/tech-ruby.png";
import tsImg from "/bottomlogos/tech-typescript.png";
import vueImg from "/bottomlogos/tech-vue.png";
import TechPlatform from "../../Components/TechPlatform";
import ClientStory from "../../Components/ClientStory";
import DevProcess from "../../Components/DevProcess";
import Faq from "../../Components/Faq";
import ClientForm from "../../Components/ClientForm";
import { StyledButton } from "../../Components/Button/Button.styles";

type HomeProps = {
  className: string;
};
const HomePage = ({ className }: HomeProps) => {
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

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [industries, setIndustries] = useState([
    {
      img: ecommerce,
      label: "eCommerce",
      text: "Our B2C and B2B eCommerce consulting & development services are aimed at scaling your business experience.",
    },
    {
      img: fintech,
      label: "Fintech",
      text: "Evrones team of experts provides web development services to global financial services players.",
    },
    {
      img: ehealth,
      label: "eHealth",
      text: "We can help you create custom eHealth solutions to transform the digital medicine industry.",
    },
    {
      img: edtech,
      label: "Edtech",
      text: "We apply best EdTech practices to provide your project with top-notch Elearning software tailored to your business",
    },
    {
      img: startup,
      label: "Startup",
      text: `Evrones software development services for startups are designed to transform your ideas into successful market-ready solutions`,
    },
    {
      img: foodtech,
      label: "Foodtech",
      text: "We provide foodtech software development services &amp; solutions to automate all the processes for startups and enterprises.",
    },
    {
      img: retail,
      label: "Retail",
      text: "We help automate business solutions for retailers while you set new goals",
    },
    {
      img: videostreaming,
      label: "Video streaming",
      text: "Reach out to us if you need to develop a live streaming website or online video platform",
    },
    {
      img: hrtech,
      label: "HR-tech",
      text: "Automating HR processes, developing HCM solutions for workforce planning &amp; management",
    },
    {
      img: null,
      label: "Real Estate",
      text: null,
    },
  ]);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [techLogos, setTechLogos] = useState([
    railsImg,
    pythonImg,
    djangoImg,
    rubyImg,
    goImg,
    dotNetImg,
    elixirImg,
    nodeImg,
    tsImg,
    reactImg,
    vueImg,
    flutterImg,
    kubernetisImg,
  ]);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [clientStory, setClientStory] = useState([
    {
      story:
        "The most impressive thing about Evrone.com team is their ability to find solutions to our issues and willingness to take on any challenge. We’re satisfied with the work that Evrone.com has done for us on both the development and testing sides on our platform. They were easy to work with, responsive enough to feedback, and met all the milestones within the budget and time.",
      name: "Mark Lavie",
      job: "Director, Lavtech Computers Inc., Badoo Group",
      img: null,
    },
    {
      story:
        "I learned a lot in the past year, working with Evrone.com to explore using new cross-platform frameworks like Flutter (including contributing an audio recording module to the community), design language, and flows. We decided to use a Firebase backend with Google’s speech recognition API. The Evrone team introduced me to a broad swath of design tools and process like Trello, Zeplin, Loom, Marvel, InVision, and more.",
      name: "David E.Weekly",
      job: "Founder & CEO, Medcorder.com — App to record & share doctor chats",
      img: medcor,
    },
    {
      story:
        "I love seeing new plugins like Flutter Audio by Evrone: tightly focused on doing one thing well. Lots of interesting ways to use this for mobile apps. Thanks Evrone for making Flutter better!",
      name: "Tim Sneath",
      job: "Director of Product and UX for Flutter & Dart, Google",
      img: null,
    },
    {
      story:
        "Evrone.com developed a web-based platform that allows users to connect, ask and answer questions, and integrate with social media. Users are giving positive feedback and are happy with the process of getting involved.",
      name: "Erez Naveh",
      job: "Co-Founder & VP come2play.com, Quiv.com, Yallo",
      img: quiv,
    },
    {
      story:
        "The Python developer Evrone allocated to our project did a great job. We’re glad that, thanks to our collaboration, we managed to develop an MVP right on time, and, eventually, successfully pitch the project to investors.",
      name: "Lavell Juan",
      job: "CEO at Brag House",
      img: null,
    },
    {
      story:
        "I was surprised that we have more than 700 people, almost 800 people here. Which means Ruby Russia is one of the biggest Ruby conferences in the world. That is quite impressive.",
      name: "Yukihiro Matsumoto",
      job: "Ruby's creator",
      img: null,
    },
    {
      story:
        "Our experience working with Evrone was absolutely wonderful. They were able to deliver everything we needed even ahead of the deadline. The quality of their code and their flexibility were two stand-out qualities of our partnership. We would definitely recommend hiring them if you need to develop a mobile app for your healthcare project.",
      name: "Khaja Khan",
      job: "President, Aerovu Technologies, Inc.",
      img: null,
    },
    {
      story:
        "Every breaking change induces pain in the developer community. If you don't have many developers, then breaking changes aren't a big problem. And you also have to think about the cost-benefit tradeoff. If you do a breaking change, it adds some pain, but it also brings some benefit.",
      name: "James Gosling",
      job: "Creator of the Java Programming Language",
      img: null,
    },
    {
      story:
        "The team at Evrone delivered high-quality work. Internal feedback has been extremely positive. Their patience complemented their professional management style. Customers can expect a dynamic and creative team that provides strong value. I think they’re underpriced. The value is spectacular for what we received.",
      name: "Sean Hoge",
      job: "Founder & General Partner at Starship.vc, Managing Partner at Genesisblockchain.io",
      img: null,
    },
    {
      story:
        "They were effective, communicative, and to the point. The site cultivated an influx of inbound leads. Users spend more time on the site, and the bounce rate is lower. Evrone.com met deadlines and offered a quality deliverable within a small budget and short timeline.",
      name: "Richard Carreon",
      job: "VP Marketing at Videon.com",
      img: null,
    },
    {
      story:
        "Evrone’s developers were senior and wrote a high-quality code. They were much better than an average developer. They had more experience than I had expected for the price we were paying. At the time, it made financial sense. We were able to get developers that would have cost three times as much in the US.",
      name: "Dan Pinto",
      job: "Co-Founder & CEO at Fingerprint.com",
      img: null,
    },
    {
      story:
        "Elixir is great for everything that runs on top of a socket, like web servers, IoT devices, distributed systems, audio/video streaming, etc. When you're doing anything that relies on the network, if data is going in and out, Elixir will be excellent. Elixir is `the language for communication`.",
      name: "José Valim",
      job: "The creator of the Elixir programming language",
      img: null,
    },
    {
      story:
        "Users don’t like things being taken away. The takeaway is you need to understand what your users want — it’s not that easy and sometimes you will get that information the hard way, but you need to be willing to listen regardless.",
      name: "Evan You",
      job: "Creator of Vue.js",
      img: null,
    },
    {
      story:
        "Software development is, if nothing else, a team sport. You really need to get people working together. And that matters as much as the core technology and just, you know, laying down a lot of great code.",
      name: "Joe Beda",
      job: "Principal Engineer at VMware",
      img: null,
    },
    {
      story:
        "People give me too much credit for PowerShell. PowerShell is great because we had a series of rockstar engineers add their awesomeness to the project. What I will take credit for is that the Monad Manifesto created a conceptual framework which created clarity. That allowed those rockstars to contribute in a way that their IQs added together to produce a coherent solution. Empirical evidence indicates that that is a rare thing.",
      name: "Jeffrey Snover",
      job: "Windows PowerShell Inventor",
      img: null,
    },
    {
      story:
        "Math is one of the best ways to train our brains, especially when combined with computing so that our mistakes become obvious pretty soon. Math teaches us to be accurate and not to believe in oversimplified or simply false ideas.",
      name: "Bjarne Stroustrup",
      job: "C++ Creator",
      img: null,
    },
  ]);

  const [storyIndex, setStoryIndex] = useState(0);
  // const itemsRef = useRef<HTMLDivElement | null>(null);
  // const [isMouseDown, setIsMouseDown] = useState(false);
  // const [startX, setStartX] = useState(0);
  // const [scrollLeft, setScrollLeft] = useState(0);

  const itemsRef = useRef<HTMLDivElement | null>(null);
  const [dragState, setDragState] = useState({
    isMouseDown: false,
    startX: 0,
    scrollLeft: 0,
  });

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

  // const handleMouseDown = (e: React.MouseEvent) => {
  //   setIsMouseDown(true);
  //   setStartX(e.pageX - (itemsRef.current?.offsetLeft || 0));
  //   setScrollLeft(itemsRef.current?.scrollLeft || 0);
  // };

  // const handleMouseLeave = () => {
  //   setIsMouseDown(false);
  // };

  // const handleMouseUp = () => {
  //   setIsMouseDown(false);
  // };

  // const handleMouseMove = (e: React.MouseEvent) => {
  //   if (!isMouseDown) return;
  //   e.preventDefault();
  //   const x = e.pageX - (itemsRef.current?.offsetLeft || 0);
  //   const walk = (x - startX) * 2;
  //   if (itemsRef.current) {
  //     itemsRef.current.scrollLeft = scrollLeft - walk;
  //   }
  // };

  //mouseDrag

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (itemsRef.current) {
      const { offsetLeft, scrollLeft } = itemsRef.current;
      setDragState({
        isMouseDown: true,
        startX: e.pageX - offsetLeft,
        scrollLeft,
      });
    }
  }, []);

  const handleMouseLeaveOrUp = useCallback(() => {
    setDragState((prev) => ({ ...prev, isMouseDown: false }));
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!dragState.isMouseDown || !itemsRef.current) return;
      e.preventDefault();
      const { pageX } = e;
      const { offsetLeft } = itemsRef.current;
      const { startX, scrollLeft } = dragState;
      const x = pageX - offsetLeft;
      const walk = (x - startX) * 2;
      itemsRef.current.scrollLeft = scrollLeft - walk;
    },
    [dragState]
  );

  useEffect(() => {
    if (dragState.isMouseDown) {
      document.addEventListener("mouseup", handleMouseLeaveOrUp);
      document.addEventListener("mouseleave", handleMouseLeaveOrUp);
    } else {
      document.removeEventListener("mouseup", handleMouseLeaveOrUp);
      document.removeEventListener("mouseleave", handleMouseLeaveOrUp);
    }
  });

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
      <form className="headerForm">
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
          <StyledButton
            label={"All Case Studies"}
            color={"#000"}
            bgColor={"#f0f0f0"}
          />
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
      <div className="employeeWrapper">
        <div className="infoContainer">
          <div className="employeeTitle">
            <p>Nice to Meet you!</p>
          </div>
          <div className="employeeBtns">
            <ArrowBtns direction="left" />
            <ArrowBtns direction="right" />
          </div>
        </div>
        <div
          className="employeeContent"
          // onMouseDown={handleMouseDown}
          // onMouseLeave={handleMouseLeave}
          // onMouseUp={handleMouseUp}
          // onMouseMove={handleMouseMove}
          ref={itemsRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
        >
          <Employees />
          <Employees />
          <Employees />
          <Employees />
          <Employees />
          <Employees />
        </div>
      </div>
      <div className="solutionsWrapper">
        <div className="solutionsTitle">
          <p>Ready-made solutions</p>
        </div>
        <div className="solutionsContent">
          <StyledSolution label={"CRM"} />
          <StyledSolution label={"ERP"} />
          <StyledSolution label={"Media"} />
          <StyledSolution label={"Marketplace"} />
          <StyledSolution label={"Blockchain"} />
          <StyledSolution label={"Machine Learning"} />
          <StyledSolution label={"Artificial Intelligence"} />
        </div>
      </div>
      <div className="industriesWrapper">
        <div className="industriesTop">
          <div className="industriesTitle">
            <p>Industries we serve</p>
          </div>
          <div className="arrowBtnsBox">
            <ArrowBtns direction="left" />
            <ArrowBtns direction="right" />
          </div>
        </div>
        <div
          className="industriesContent"
          ref={itemsRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
        >
          {industries.map((elem, i) => {
            return (
              <Fragment key={i}>
                <StyledIndustries
                  text={elem.text}
                  img={elem.img}
                  label={elem.label}
                />
              </Fragment>
            );
          })}
        </div>
      </div>
      <div className="techPlatformsWrapper">
        <div className="techPlaformTitle">
          <p>Technology Platforms We Use</p>
        </div>
        <div className="techPlatformsTxt">
          <p>
            We stay on top of the latest technology trends to ensure that our
            clients get the most efficient custom software solutions. Our
            expertise in a range of cutting-edge technology platforms enables us
            to offer the best technologies for your unique project needs.
          </p>
        </div>
        <div className="techPlatformContent">
          {techLogos?.map((elem, i) => {
            return (
              <Fragment key={i}>
                <TechPlatform src={elem} />
              </Fragment>
            );
          })}
        </div>
      </div>
      <div className="clientStoriesWrapper">
        <div className="clientStoriesTitle">
          <p>Client stories</p>
          <div className="arrowBtnBox">
            <ArrowBtns
              direction="left"
              onClick={() => {
                setStoryIndex(storyIndex - 1);
                if (storyIndex === 0) {
                  setStoryIndex(0);
                }
              }}
            />
            <ArrowBtns
              direction="right"
              onClick={() => {
                setStoryIndex(storyIndex + 1);
                if (storyIndex === clientStory.length - 1) {
                  setStoryIndex(clientStory.length - 1);
                }
              }}
            />
          </div>
        </div>
        <div className="storyContent">
          <ClientStory
            story={clientStory[storyIndex].story}
            name={clientStory[storyIndex].name}
            job={clientStory[storyIndex].job}
            img={clientStory[storyIndex].img}
          />
        </div>
      </div>
      <div className="devProcessWrapper">
        <div className="devProcessTop">
          <div className="devProcessTitle">
            <p>Our software development process</p>
          </div>
          <div className="devProcessArrowBtn">
            <ArrowBtns direction="left" />
            <ArrowBtns direction="right" />
          </div>
        </div>
        <div className="processBreakDown">
          <p>
            Here`s a breakdown of our process, which we follow for all projects
          </p>
        </div>
        <div className="devProcessContent">
          <DevProcess num={1} />
          <DevProcess num={2} />
          <DevProcess num={3} />
          <DevProcess num={4} />
          <DevProcess num={5} />
          <DevProcess num={6} />
        </div>
      </div>
      <div className="faqWrapper">
        <div className="faqTitle">
          <p>FAQ</p>
        </div>
        <div className="faqContent">
          <Faq />
        </div>
      </div>
      <div className="aboutClientWrapper">
        <div className="aboutClientTitle">
          <p>Let`s talk about you</p>
        </div>
        <div className="companyInfo">
          <p>+49 176 24514399</p>
          <p>Kemperplatz 1, 10785 Berlin</p>
          <p>mail@evrone.com</p>
        </div>
        <div className="clientFormContainer">
          <ClientForm />
        </div>
      </div>
    </main>
  );
};
export default HomePage;
