type Props = {
  className?: string;
  label: string;
};

const Solutions = ({ className, label }: Props) => {
  return (
    <div className={className}>
      <p>{label}</p>
      <span>{">"}</span>
    </div>
  );
};

export default Solutions;
