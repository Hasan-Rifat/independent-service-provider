import React from "react";
import signature from "../../../images/slider/signature.png";
import personalImg from "../../../images/slider/about.jpg";
import "./AboutSection.css";

const AboutSection = () => {
  return (
    <section className="my-36">
      <div className="container">
        <div className="row flex justify-center items-center">
          <div className="col-md-6">
            <img src={personalImg} alt="" />
          </div>
          <div className="col-md-6">
            <div className="aboutSction-info">
              <h2 className="about-heading-1">Hi, I'm Frank Castle.</h2>
              <h2 className="about-heading-2">
                I'm The Founder of The EduMall Academy.
              </h2>
              <p>
                Facing the study with the right mindset can change our chances
                of learning everything necessary. At the same time, having
                learned these contents will make our way of interpreting the
                world change.
              </p>
              <img src={signature} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
