type Props = {
  className?: string;
  scrollItems?: string[];
};

const Partners = ({ className, scrollItems }: Props) => {
  return (
    <div className={className}>
      {scrollItems?.map((elem, i) => {
        return <img src={elem} key={i} alt={`Partners Logo ${i}`} />;
      })}
      {scrollItems?.map((elem, i) => {
        return <img src={elem} key={i} alt={`Partners Logo ${i}`} />;
      })}
    </div>
  );
};

export default Partners;
