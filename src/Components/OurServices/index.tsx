type Props = {
  className?: string;
};

const OurServices = ({ className }: Props) => {
  return (
    <div className={className}>
      <div className="servicesTitleContainer">
        <p>Services</p>
      </div>
      <div className="serviceOptions">
        <section>
          <p>Web Development Services</p>
        </section>
        <section>
          <p>Website Design Services</p>
        </section>
        <section>
          <p>Front-End Development Services</p>
        </section>
        <section>
          <p>Custom Application Development</p>
        </section>
        <section>
          <p>DevOps Services</p>
        </section>
        <section>
          <p>QA Consulting & tesing Services</p>
        </section>
      </div>
    </div>
  );
};

export default OurServices;
