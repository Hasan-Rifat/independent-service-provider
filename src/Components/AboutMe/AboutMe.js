import React from "react";
import img from "../../images/my-1-bg.png";

const AboutMe = () => {
  return (
    <div>
      <div className="container my-24">
        <div className="row shadow-xl p-24 ">
          <div className="col-md-6 mx-auto">
            <div className="p-12">
              <h2>I am Hasan Rifat</h2>

              <p>
                I'm a frontend developer in development. I am always aware of
                the project’s deadline and I try to deliver projects timely. I'm
                skilled at
                <br />
                <br />
                <ol>
                  <li>➠ HTML</li>
                  <li>➠ CSS</li>
                  <li> ➠ JavaScript</li>
                  <li>➠ Bootstrap</li>
                  <li> ➠ tailwind</li>
                  <li> ➠ React</li>
                </ol>
                and more what kind of website I can create:-
                <ul>
                  <li>➠ News Paper</li>
                  <li>➠ Corporate</li>
                  <li>➠ Business</li>
                  <li>➠ Portfolio</li>
                  <li>➠ Landing Page</li>
                  <li>➠ Woocommerce</li>
                  <li>➠eCommerce </li>
                  <li>➠ LMS</li>
                  <li>➠ Membership</li>
                </ul>{" "}
                and more Regards Hasan Rifat
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div>
              <img className="img-fluid" src={img} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
