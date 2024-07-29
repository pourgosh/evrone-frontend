type Props = {
  className?: string;
  numb?: number;
  text?: string;
};

const WhyUs = ({ className, numb, text }: Props) => {
  return (
    <div className={className}>
      <div className="numbContainer">
        <p>{numb}+</p>
      </div>
      <div className="textContainer">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default WhyUs;
