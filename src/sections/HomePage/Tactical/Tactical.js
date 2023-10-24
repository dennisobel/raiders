import React from "react";
import "./Tactical.css";

import { Button, Heading } from "../../../components";
import { images } from "../../../constants";

const Tactical = () => {
  return (
    <section className="about">
      <div className="box-container">
        {/* About images */}
        <div className="image">
          <img className="sub-image1" src={images.tactical1} alt="About-Pic" />
          <img className="sub-image2" src={images.about6} alt="About-Pic" />
        </div>

        {/* About description */}
        <div className="content">
          <h3>
            Elevating Tactical Awareness Through Group Learning and Drills.
          </h3>{" "}
          {/* Heading */}
          <div className="line"></div> {/* Divider line */}
          <p>
            Group learning sessions, drills, and film sessions help improve the
            tactical awareness of our academy players. They first at an early
            age play recreationally to develop an interest in the game. Then,
            the tactical aspects of the game are gradually introduced to improve
            their tactical awareness during game situations. It is this
            development of tactical awareness that ushers them into
            understanding the game at a deeper level.
          </p>{" "}
          {/* Description */}
          <Button link={"About-us"} title={"read more"} />{" "}
          {/* About-Us Button */}
        </div>
      </div>
    </section>
  );
};

export default Tactical;
