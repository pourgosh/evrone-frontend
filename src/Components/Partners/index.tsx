type Props = {
  className?: string;
  scrollItems?: string[];
};

const Partners = ({ className, scrollItems }: Props) => {
  return (
    <div className={className}>
      {scrollItems?.map((elem, i) => {
        return (
          <img
            className={`item${i}`}
            src={elem}
            key={i}
            alt={`Partners Logo ${i}`}
          />
        );
      })}
    </div>
  );
};

export default Partners;
