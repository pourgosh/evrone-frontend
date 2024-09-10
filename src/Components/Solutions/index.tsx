import { GoTriangleRight } from "react-icons/go";

type Props = {
  className?: string;
  label: string;
};

const Solutions = ({ className, label }: Props) => {
  return (
    <div className={className}>
      <p>{label}</p>
      <span>
        <GoTriangleRight />
      </span>
    </div>
  );
};

export default Solutions;
