import React from "react";
import "./Recruitment.css";

import { Button, Heading } from "../../../components";
import { images } from "../../../constants";

const Recruitment = () => {
  return (
    <section className="about">
      <div className="box-container">
        {/* About images */}
        <div className="image">
          <img className="sub-image1" src={images.about1} alt="About-Pic" />
          <img className="sub-image2" src={images.about2} alt="About-Pic" />
        </div>

        {/* About description */}
        <div className="content">
          <h3>Diverse Recruitment and Inclusive Opportunities.</h3>{" "}
          {/* Heading */}
          <div className="line"></div> {/* Divider line */}
          <p>
            Our academy is always on the lookout for the next top future
            prospects, securing and developing them. Despite focusing on talent
            identification, we have a quota system that leaves slots for
            children from underprivileged backgrounds who benefit greatly from
            the combination of free schooling and the development of their
            talent. At Awasi Rovers, we believe in changing society and ending
            generational poverty through sports and academia. In working towards
            achieving this objective, our scouts canvas the republic to identify
            and select would-be academy attendees. Our recruitment primarily
            focuses on two metrics, talent and academic performance while
            factoring backgrounds the children come from. We have a
            non-discrimination policy that allows admission regardless of
            gender, ethnicity, creed, religion, etc; at Awasi Rovers all are
            welcome.
          </p>{" "}
          {/* Description */}
          <Button link={"About-us"} title={"read more"} />{" "}
          {/* About-Us Button */}
        </div>
      </div>
    </section>
  );
};

export default Recruitment;
