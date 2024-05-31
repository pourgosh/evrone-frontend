type Props = {
  className?: string;
  src: string;
  label: string;
  date: string;
  text: string;
};

const CaseStudies = ({ className, src, label, text, date }: Props) => {
  return (
    <div className={className}>
      <div className="caseImgWrapper">
        <div className="caseImgContainer">
          <img src={src} alt={label} />
        </div>
      </div>
      <div className="caseTitleContainer">
        <p>{label}</p>
      </div>
      <div className="caseInfoContainer">
        <div>
          <p>{text}</p>
        </div>
        <div className="date">
          <p>{date}</p>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
