import React from "react";
import "./About.css";

import { Button, Heading } from "../../../components";
import { images } from "../../../constants";

const About = () => {
  return (
    <section className="about">
      {/* Section heading */}
      <Heading title={"the academy"} />

      <div className="box-container">
        {/* About images */}
        <div className="image">
          <img className="sub-image1" src={images.about1} alt="About-Pic" />
          <img className="sub-image2" src={images.about2} alt="About-Pic" />
        </div>

        {/* About description */}
        <div className="content">
          <h3>Who We Are.</h3> {/* Heading */}
          <div className="line"></div> {/* Divider line */}
          <p>
            We Are a Football Academy Located in Kisumu County, Kenya Currently Focused On 
Developing Football Talent in Kenya. We Have Been Operational Since 2015 Prior to 
Our Official Registration in 2023. So Far We Boast 21 Academy Players from At-Risk 
and Underprivileged Backgrounds On Active Scholarships in Various High Schools in 
Kenya, Courtesy of Their Talent and Academic Performance.
          </p>{" "}
          {/* Description */}
          <Button link={"About-us"} title={"read more"} />{" "}
          {/* About-Us Button */}
        </div>
      </div>
    </section>
  );
};

export default About;
