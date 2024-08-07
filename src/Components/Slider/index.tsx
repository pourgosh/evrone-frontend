import { GoTriangleLeft, GoTriangleRight } from "react-icons/go";

type Props = {
  className?: string;
  bgImage?: string;
  prevFunc?: () => void;
  nextFunc?: () => void;
  items?: {
    title: string;
    image: string;
    describtion: string;
    date: string;
  };
};

const SliderContainer = ({
  className,
  prevFunc,
  nextFunc,
  items,
}: Props): JSX.Element => {
  return (
    <div className={className}>
      <section className="imgContainer">
        <div className="btnContainer">
          <span>
            <div onClick={prevFunc}>
              <GoTriangleLeft />
            </div>
          </span>
          <span>
            <div onClick={nextFunc}>
              <GoTriangleRight />
            </div>
          </span>
        </div>
      </section>
      <div className="itemInfoContainer">
        <section className="sliderTitleContainer">
          <p>{items?.title}</p>
        </section>
        <section className="dataContainer">
          <p>{items?.describtion}</p>
          <p>{items?.date}</p>
        </section>
      </div>
    </div>
  );
};

export default SliderContainer;
