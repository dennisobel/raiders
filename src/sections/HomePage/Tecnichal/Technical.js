import React from "react";
import "./Technical.css";

import { Button, Heading } from "../../../components";
import { images } from "../../../constants";

const Technical = () => {
  return (
    <section className="about">
      <div className="box-container">
        {/* About description */}
        <div className="content">
          <h3>
            Fostering Individual Technical Excellence with Personalized
            Coaching.
          </h3>{" "}
          {/* Heading */}
          <div className="line"></div> {/* Divider line */}
          <p>
            Our coaches promote individual player technical abilities through
            one-on-one assessment, training, review, and encouragement. At
            Rovers, we are aware that each player despite being a team member is
            distinct not only positional but personality-wise. Improving
            technical know-how requires customized individual training training.
          </p>{" "}
          {/* Description */}
          <Button link={"About-us"} title={"read more"} />{" "}
          {/* About-Us Button */}
        </div>

        {/* About images */}
        <div className="image">
          <img className="sub-image1" src={images.about7} alt="About-Pic" />
          <img className="sub-image2" src={images.about8} alt="About-Pic" />
        </div>
      </div>
    </section>
  );
};

export default Technical;
