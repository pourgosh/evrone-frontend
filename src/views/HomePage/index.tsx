import { useState } from "react";
import Input from "../../Components/Input";
import { StyledSliderContainer } from "../../Components/Slider/sliderContainer.styles";
import firstImage from "/hero/gett.png";
import scndImage from "/hero/jiseki_.png";
import thirdImage from "/hero/porodina_cover.jpg";

type HomeProps = {
  className: string;
};
const HomePage = ({ className }: HomeProps): JSX.Element => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [sliderImage, _] = useState([firstImage, scndImage, thirdImage]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [imgIndex, setImgIndex] = useState(0);

  const prevImg = () => {
    setImgIndex(imgIndex - 1);
    if (imgIndex === 0) {
      setImgIndex(0);
    }
  };

  const nextImg = () => {
    setImgIndex(imgIndex + 1);
    if (imgIndex === sliderImage.length - 1) {
      setImgIndex(0);
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
          bgImage={sliderImage[imgIndex]}
          prevFunc={prevImg}
          nextFunc={nextImg}
        />
      </div>
    </main>
  );
};
export default HomePage;
