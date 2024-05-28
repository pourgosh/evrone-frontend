type Props = {
  className?: string;
  bgImage?: string;
  prevFunc?: () => void;
  nextFunc?: () => void;
};

const SliderContainer = ({
  className,
  prevFunc,
  nextFunc,
}: Props): JSX.Element => {
  return (
    <>
      <div className={className}>
        <section>
          <div className="btnContainer">
            <span>
              <button onClick={prevFunc}>Prev</button>
            </span>
            <span>
              <button onClick={nextFunc}>next</button>
            </span>
          </div>
        </section>
      </div>
    </>
  );
};

export default SliderContainer;
