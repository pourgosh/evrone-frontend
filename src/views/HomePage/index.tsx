import Input from "../../Components/Input";

type HomeProps = {
  className: string;
};

const HomePage = ({ className }: HomeProps): JSX.Element => {
  return (
    <main className={className}>
      <div className="titleWrapper">
        <div className="titleContainer">
          <p>Custom Software Development company</p>
        </div>
      </div>
      <div className="subHeaderContainer">
        <p>Need a custom software? Tell us about your idea:</p>
      </div>
      <form>
        <section>
          <Input type={"text"} placeholder={"Full name"} />
          <Input type={"text"} placeholder={"Email"} />
        </section>
        <section className="textArea">
          <Input type={"text"} placeholder={"Message"} />
        </section>
      </form>
      <div className="slider">
        <span className="sliderImage"></span>
      </div>
    </main>
  );
};
export default HomePage;
