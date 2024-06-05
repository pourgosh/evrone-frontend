type Props = {
  label: string;
  className?: string;
};

const Button = ({ className, label }: Props) => {
  return <button className={className}>{label}</button>;
};

export default Button;
