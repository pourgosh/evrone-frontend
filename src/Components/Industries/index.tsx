type Props = {
  img: string | null;
  label: string | null;
  text: string | null;
  className?: string;
};

const Industries = ({ className, text, label, img }: Props) => {
  return (
    <div className={className}>
      <div className="industriesImgBox">
        {img && <img src={img} alt="industries we serve" />}
      </div>
      <div className="industriesInfo">
        <p className="industriesLabel">{label}</p>
        <p className="industriesText">{text}</p>
      </div>
    </div>
  );
};

export default Industries;
