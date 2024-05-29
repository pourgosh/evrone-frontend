import { useState } from "react";
import Input from "../../Components/Input";
import { StyledSliderContainer } from "../../Components/Slider/sliderContainer.styles";
import firstImage from "/hero/gett.png";
import scndImage from "/hero/jiseki_.png";
import thirdImage from "/hero/porodina_cover.jpg";
import crypto from "/scrollers/cryptopay.svg";
import jiseki from "/scrollers/jiseki.svg";
import loreal from "/scrollers/loreal.svg";
import medcor from "/scrollers/medcorder.svg";
import pirelli from "/scrollers/pirelli.svg";
import quiv from "/scrollers/quiv.svg";

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
    </main>
  );
};
export default HomePage;
