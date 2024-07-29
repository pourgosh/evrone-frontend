import styled from "styled-components";

type Props = {
  label: string;
  valueA?: string;
  valueB?: string;
  valueC?: string;
  valueD?: string;
  valueE?: string;
  valueF?: string;
};

const StyledLsFooterItems = styled.div`
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

const LargeScreenFooter = ({
  label,
  valueA,
  valueB,
  valueC,
  valueD,
  valueE,
  valueF,
}: Props) => {
  return (
    <StyledLsFooterItems>
      <div className="footerlabelText">
        <p>{label}</p>
      </div>
      <div className="footerOptions">
        <p>{valueA}</p>
        <p>{valueB}</p>
        <p>{valueC}</p>
        <p>{valueD}</p>
        <p>{valueE}</p>
        <p>{valueF}</p>
      </div>
    </StyledLsFooterItems>
  );
};

export default LargeScreenFooter;
