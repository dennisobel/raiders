import React from "react";
import "./Academy.css";

import { Button, Heading } from "../../../components";
import { images } from "../../../constants";

const Academy = () => {
  return (
    <section className="about">
      {/* Section heading */}
      {/* <Heading title={"academy"} /> */}

      <div className="box-container">
        {/* About images */}


        {/* About description */}
        <div className="content">
          <h3>Rovers Academy: Nurturing Talent and Whole Development.</h3> {/* Heading */}
          <div className="line"></div> {/* Divider line */}
          <p>
            Our doors are open to the many talented young kids across the
            country. Our able coaching staff and facilities offer the perfect
            platform for talent development. Since its inception in 2015 from
            humble beginnings, our academy has managed to see 21 graduates who
            have cleared high school from our quasi-academy(then). We offer
            sports scholarships in partnership with several high schools placing
            emphasis on both academic and sports excellence. Rovers Academy
            offers not only talent development but the whole development of our
            academy students. Training is well planned by the coaching staff
            based on a Rovers academy curriculum vetted and overseen by the
            local federation. At the moment we have two soccer pitches available
            for use for the girls and boys simultaneously not to mention soccer
            equipment. Training is supplemented by soccer classroom sessions and
            film sessions often conducted in our community library to improve
            the technical skills of the youth. Additionally, we often conduct
            soccer clinics and participate in tournaments to gauge and improve
            our players. Apart from soccer we occasionally do acts of community
            service such as environmental clean-ups and conservation such as
            tree-planting. Moreover, the community library serves the students
            as a place of study.
          </p>{" "}
          {/* Description */}
          <Button link={"About-us"} title={"read more"} />{" "}
          {/* About-Us Button */}
        </div>

        <div className="image">
          <img className="sub-image1" src={images.about3} alt="About-Pic" />
          <img className="sub-image2" src={images.about4} alt="About-Pic" />
        </div>
      </div>
    </section>
  );
};

export default Academy;
