import React from "react";
import "./Physical.css";

import { Button, Heading } from "../../../components";
import { images } from "../../../constants";

const Physical = () => {
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
          <h3>
            Player Development Aligned with FIFA and FKF Youth Training
            Standards.
          </h3>{" "}
          {/* Heading */}
          <div className="line"></div> {/* Divider line */}
          <p>
            We are guided by FIFA and FKF youth training policy, which improves
            the player’s physical. We conduct clinical assessments of the
            players periodically; to ensure they are fit enough to engage in
            training. Our team of coaches equally do weekly evaluations of the
            players.
          </p>{" "}
          {/* Description */}
          <Button link={"About-us"} title={"read more"} />{" "}
          {/* About-Us Button */}
        </div>
      </div>
    </section>
  );
};

export default Physical;
