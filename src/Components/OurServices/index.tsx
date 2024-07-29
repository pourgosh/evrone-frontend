import { useState } from "react";
import { GoTriangleDown } from "react-icons/go";

type Props = {
  className?: string;
};

const OurServices = ({ className }: Props) => {
  const [service, setService] = useState({
    uXuI: false,
    softDev: false,
    discPhase: false,
    webDev: false,
    frontEndDev: false,
    customApp: false,
    devOps: false,
    qA: false,
  });

  return (
    <div className={className}>
      <div className="servicesTitleContainer">
        <p>Services</p>
      </div>
      <div className="serviceOptions">
        <section
          onClick={() => {
            setService((prevService) => ({
              uXuI: !prevService.uXuI,
              softDev: false,
              discPhase: false,
              frontEndDev: false,
              customApp: false,
              devOps: false,
              qA: false,
              webDev: false,
            }));
          }}
        >
          <p>UI/UX Design Services</p>
          <GoTriangleDown />
        </section>
        {service.uXuI && (
          <div className="serviceText">
            <p>
              We believe that the UI design process is key to delivering a
              high-quality software product, and our team of professional
              designers works closely with our clients to ensure that their
              vision is brought to life in the most efficient and effective way
              possible. With us, you can expect a cost-effective, streamlined
              design process that delivers a sleek, high-performing product
              tailored to your business needs. Let us build a UX and design for
              your product that will leave a lasting impression on your clients.
            </p>
          </div>
        )}
        <section
          onClick={() => {
            setService((prevService) => ({
              uXuI: false,
              softDev: !prevService.softDev,
              discPhase: false,
              frontEndDev: false,
              customApp: false,
              devOps: false,
              qA: false,
              webDev: false,
            }));
          }}
        >
          <p>Software Development Consulting Services</p>
          <GoTriangleDown />
        </section>
        {service.softDev && (
          <div className="serviceText">
            <p>
              In the digital era, businesses grappling with technological
              advancements find solace in sophisticated solutions, and that’s
              precisely where Evrone, a standout software development consulting
              company, raises its mark.
            </p>
          </div>
        )}
        <section
          onClick={() => {
            setService((prevService) => ({
              uXuI: false,
              softDev: false,
              discPhase: !prevService.discPhase,
              webDev: false,
              frontEndDev: false,
              customApp: false,
              devOps: false,
              qA: false,
            }));
          }}
        >
          <p>Discovery Phase Services</p>
          <GoTriangleDown />
        </section>
        {service.discPhase && (
          <div className="serviceText">
            <p>
              We offer our clients a discovery phase where the architecture and
              stack of the project is undefined. With step `0` we can produce
              results that will serve as the basis for each subsequent step as
              we move forward in the development process.
            </p>
          </div>
        )}
        <section
          onClick={() => {
            setService((prevService) => ({
              uXuI: false,
              softDev: false,
              discPhase: false,
              frontEndDev: false,
              customApp: false,
              devOps: false,
              qA: false,
              webDev: !prevService.webDev,
            }));
          }}
        >
          <p>Web Development Services</p>
          <GoTriangleDown />
        </section>
        {service.webDev && (
          <div className="serviceText">
            <p>
              We believe that the UI design process is key to delivering a
              high-quality software product, and our team of professional
              designers works closely with our clients to ensure that their
              vision is brought to life in the most efficient and effective way
              possible. With us, you can expect a cost-effective, streamlined
              design process that delivers a sleek, high-performing product
              tailored to your business needs. Let us build a UX and design for
              your product that will leave a lasting impression on your clients.
            </p>
          </div>
        )}
        <section
          onClick={() => {
            setService((prevService) => ({
              uXuI: false,
              softDev: false,
              discPhase: false,
              frontEndDev: !prevService.frontEndDev,
              customApp: false,
              devOps: false,
              qA: false,
              webDev: false,
            }));
          }}
        >
          <p>Front-End Development Services</p>
          <GoTriangleDown />
        </section>
        {service.frontEndDev && (
          <div className="serviceText">
            <p>
              No product, be it a website, web or mobile app, service, or
              internal interface, can be created without a frontend specialist.
              If you don`t want to expand your own team or overpay for a
              high-level specialist, outsourcing the work to an experienced
              frontend developer is a great option.
            </p>
          </div>
        )}
        <section
          onClick={() => {
            setService((prevService) => ({
              uXuI: false,
              softDev: false,
              discPhase: false,
              frontEndDev: false,
              customApp: !prevService.customApp,
              devOps: false,
              qA: false,
              webDev: false,
            }));
          }}
        >
          <p>Custom Application Development</p>
          <GoTriangleDown />
        </section>
        {service.customApp && (
          <div className="serviceText">
            <p>
              Our experienced team can deliver custom native and cross-platform
              iOS and Android mobile solutions designed for security,
              performance, and reliability. Our focus on secure software
              development practices ensures that your mobile app is not only
              user-friendly but also protects your user`s sensitive data. With
              our mobile app development services, you will enjoy a streamlined
              process that delivers a professional, high-performing mobile app
              that meets your needs.
            </p>
          </div>
        )}
        <section
          onClick={() => {
            setService((prevService) => ({
              uXuI: false,
              softDev: false,
              discPhase: false,
              frontEndDev: false,
              customApp: false,
              devOps: !prevService.devOps,
              qA: false,
              webDev: false,
            }));
          }}
        >
          <p>DevOps Services</p>
          <GoTriangleDown />
        </section>
        {service.devOps && (
          <div className="serviceText">
            <p>
              DevOps is a way of working that helps different departments
              communicate and work together better. When development and
              operations teams work efficiently together, it results in faster
              development of high-quality products through automation and
              continuous integration, as well as delivery, monitoring, and
              feedback.
            </p>
          </div>
        )}
        <section
          onClick={() => {
            setService((prevService) => ({
              uXuI: false,
              softDev: false,
              discPhase: false,
              frontEndDev: false,
              customApp: false,
              devOps: false,
              qA: !prevService.qA,
              webDev: false,
            }));
          }}
        >
          <p>QA Consulting & tesing Services</p>
          <GoTriangleDown />
        </section>
        {service.qA && (
          <div className="serviceText">
            <p>
              We offer a flexible, customizable approach to testing and quality
              assurance that can be integrated into any stage of the development
              lifecycle. Our programmers work closely with the testing and QA
              team to ensure that software products are thoroughly tested and
              validated before deployment. Invest in the quality of your project
              with our software development enterprise.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default OurServices;
