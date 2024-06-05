import styled from "styled-components";

type Props = {
  story: string;
  name: string;
  job: string;
  img: string | null;
};

const StyleStory = styled.div`
  display: flex;
  flex-direction: column;
  .storyText {
    flex: 1;
    display: flex;
    gap: 15px;
    align-items: center;
  }
  .storyText p {
    flex: 3;
    font-size: 16px;
    line-height: 1.5;
    @media (min-width: 1000px) {
      font-size: 20px;
    }
  }
  .storyText .clientLogo {
    flex: 1;
    display: none;
    @media (min-width: 720px) {
      display: block;
    }
  }
  .storyText .clientLogo img {
    width: 100%;
    height: auto;
  }
  .clientInfo {
    display: flex;
    align-items: center;
    padding-top: 15px;
    @media (min-width: 1000px) {
      padding-top: 30px;
    }
  }
  .clientInfo .clientProfile {
    display: flex;
  }
  .clientInfo .clientProfile span {
    height: 70px;
    width: 70px;
    background-color: #e6e6e6;
    border-radius: 50%;
  }
  .clientInfo .clientData {
    flex: 1;
    padding-left: 30px;
    display: flex;
    flex-direction: column;
    @media (min-width: 1500px) {
      padding-left: 50px;
    }
  }
  .clientInfo .clientData .job {
    color: #999;
  }
  .clientInfo .clientData p {
    font-size: 16px;
    line-height: 1.5;
    @media (min-width: 1000px) {
      font-size: 20px;
    }
  }
`;
const ClientStory = ({ story, name, job, img }: Props) => {
  return (
    <StyleStory>
      <div className="storyText">
        <p>{story}</p>
        <section className="clientLogo">{img && <img src={img} />}</section>
      </div>
      <div className="clientInfo">
        <section className="clientProfile">
          <span></span>
        </section>
        <section className="clientData">
          <p>{name}</p>
          <p className="job">{job}</p>
        </section>
      </div>
    </StyleStory>
  );
};

export default ClientStory;
