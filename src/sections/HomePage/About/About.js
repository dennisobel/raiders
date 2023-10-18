import React from "react";
import "./About.css";

import { Button, Heading } from "../../../components";
import { images } from "../../../constants";

const About = () => {
  return (
    <section className="about">
      {/* Section heading */}
      <Heading title={"about us"} />

      <div className="box-container">
        {/* About images */}
        <div className="image">
          <img className="sub-image1" src={images.about1} alt="About-Pic" />
          <img className="sub-image2" src={images.about2} alt="About-Pic" />
        </div>

        {/* About description */}
        <div className="content">
          <h3>We play as a team, we win as a team.</h3> {/* Heading */}
          <div className="line"></div> {/* Divider line */}
          <p>
            We are a sports academy located in Kisumu County, Kenya currently
            focused on developing football talent in Kenya. We have been
            operational since 2015 prior to our official registration in 2023.So
            far we boast of 21 academy players from at-risk and underprivileged
            backgrounds on active scholarships in various high schools in Kenya,
            courtesy of their talent and academic performance. We offer free
            football training, clinics and life skills for our academy attendees
            made possible through donations and grants.
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
