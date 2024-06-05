import styled from "styled-components";
import Input from "../Input";
import { StyledButton } from "../Button/Button.styles";

const StyledClientForm = styled.form`
  padding-top: 30px;
  .clientFormWrapper {
    display: flex;
    flex-direction: column;
    gap: 15px;
    @media (min-width: 720px) {
      flex-direction: row;
      gap: 20px;
    }
    @media (min-width: 1100px) {
      gap: 25px;
    }
  }
  .clientFormWrapper .clientFormLeft {
    flex: 2;
    display: flex;
    flex-direction: column;
    gap: 15px;
    @media (min-width: 720px) {
      gap: 20px;
    }
    @media (min-width: 1100px) {
      gap: 25px;
    }
  }
  .clientFormWrapper .clientFormLeft .topInputs,
  .clientFormWrapper .clientFormLeft .midInputs,
  .clientFormWrapper .clientFormLeft .bottomInput {
    display: flex;
    flex-direction: column;
    gap: 15px;
    @media (min-width: 720px) {
      flex-direction: row;
      gap: 20px;
    }
    @media (min-width: 1100px) {
      gap: 25px;
    }
  }
  .clientFormWrapper .clientFormLeft .topInputs input {
    flex: 1;
  }
  .clientFormWrapper .clientFormLeft .midInputs input {
    flex: 1;
  }
  .clientFormWrapper .clientFormLeft .bottomInput input {
    flex: 1;
  }
  .clientFormWrapper .clientFormRight {
    flex: 1;
  }
  .clientFormWrapper .clientFormRight button {
    width: 100%;
    height: 100%;
    border-radius: 6px;
    background-color: #fff;
    color: #ccc;
    border: 1px solid #ccc;
    min-height: 45px;
  }
  .bottomContent {
    display: flex;
    flex-direction: column;
    padding-top: 35px;
    @media (min-width: 480px) {
      flex-direction: row;
    }
    @media (min-width: 800px) {
      padding-top: 45px;
    }
    @media (min-width: 1800px) {
      padding-top: 55px;
    }
  }
  .bottomContent .clientFormBottomInfo {
    display: flex;
    width: 45%;
    align-items: center;
    padding: 10px 10px 0 2px;
    @media (min-width: 480px) {
      padding: 10px 10px 0 25px;
    }
  }
  .bottomContent .clientFormBottomInfo p {
    font-size: 10px;
    line-height: 1.25;
    color: #ccc;
    @media (min-width: 720px) {
      font-size: 12px;
      line-height: 1.5;
    }
  }
  .bottomContent .clientFormBottomInfo span {
    border-bottom: 1px solid #ccc;
    &:hover {
      cursor: pointer;
    }
  }
`;

const ClientForm = () => {
  return (
    <StyledClientForm>
      <div className="clientFormWrapper">
        <div className="clientFormLeft">
          <div className="topInputs">
            <Input type="text" placeholder="Full name" />
            <Input type="text" placeholder="Email" />
          </div>
          <div className="midInputs">
            <Input type="text" placeholder="Phone" />
            <Input type="text" placeholder="Budget" />
          </div>
          <div className="bottomInput">
            <Input type="text" placeholder="Message" />
          </div>
        </div>
        <div className="clientFormRight">
          <button>Attach file</button>
        </div>
      </div>
      <div className="bottomContent">
        <div className="clientFormBtn">
          <StyledButton
            label={"Send message"}
            color={"#f0f0f0"}
            bgColor={"#f53"}
          />
        </div>
        <div className="clientFormBottomInfo">
          <p>
            This site is protecte by reCAPTCHA and the Google
            <span>Privacy Policy</span> and <span>Terms of Service</span> apply.
          </p>
        </div>
      </div>
    </StyledClientForm>
  );
};

export default ClientForm;
