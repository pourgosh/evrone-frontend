type Props = {
  placeholder: string;
  type: string;
};

const Input = ({ placeholder, type }: Props) => {
  return <input type={type} placeholder={placeholder} />;
};

export default Input;
