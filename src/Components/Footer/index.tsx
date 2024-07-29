import styled from "styled-components";

type Props = {
  onClick?: () => void;
  displayer: boolean;
  label: string;
  valueA?: string;
  valueB?: string;
  valueC?: string;
  valueD?: string;
  valueE?: string;
  valueF?: string;
};
const StyledFooterItems = styled.div`
  border-bottom: 1px solid #333;
  padding-bottom: 10px;
  .footerlabelText p {
    padding-block: 16px;
    color: #fff;
    font-size: 16px;
    line-height: 1.5;
  }
  .footerOptions p {
    color: #666667;
    font-size: 16px;
    line-height: 1.5;
    margin-block: 8px;
  }
`;

const Footer = ({
  onClick,
  displayer,
  label,
  valueA,
  valueB,
  valueC,
  valueD,
  valueE,
  valueF,
}: Props) => {
  return (
    <StyledFooterItems>
      <div className="footerlabelText" onClick={onClick}>
        <p>{label}</p>
      </div>
      {displayer && (
        <div className="footerOptions">
          <p>{valueA}</p>
          <p>{valueB}</p>
          <p>{valueC}</p>
          <p>{valueD}</p>
          <p>{valueE}</p>
          <p>{valueF}</p>
        </div>
      )}
    </StyledFooterItems>
  );
};

export default Footer;
