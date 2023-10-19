import React from "react";
import "./Psychological.css";

import { Button, Heading } from "../../../components";
import { images } from "../../../constants";

const Psychological = () => {
  return (
    <section className="about">
      {/* Section heading */}
      {/* <Heading title={"psychological"} /> */}

      <div className="box-container">
        {/* About description */}
        <div className="content">
          <h3>
            Fostering Psychological Well-Being in Youth Talent Development.
          </h3>{" "}
          {/* Heading */}
          <div className="line"></div> {/* Divider line */}
          <p>
            Part of youth talent development is being aware of the psychological
            needs of our players. We promote a healthy mental culture of
            expression, emotional well-being, and being each other’s brother’s
            keeper. In so doing we develop a conducive environment for
            psychological development.
          </p>{" "}
          {/* Description */}
          <Button link={"About-us"} title={"read more"} />{" "}
          {/* About-Us Button */}
        </div>

        {/* About images */}
        <div className="image">
          <img className="sub-image1" src={images.about6} alt="About-Pic" />
          <img className="sub-image2" src={images.about7} alt="About-Pic" />
        </div>
      </div>
    </section>
  );
};

export default Psychological;
