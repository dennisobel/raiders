import React from "react";
import "./AboutUs.css";

import { Heading, Management, PageTitle } from "../../../components";
import {
  // About,
  Testimonials,
  Counter,
  Sponsors,
  Trophies,
} from "../../../sections";
import Academy from "../../HomePage/Academy/Academy";
import Tactical from "../../HomePage/Tactical/Tactical";
import Physical from "../../HomePage/Physical/Physical";
import Psychological from "../../HomePage/Psychological/Psychological";
import Divider from "../../HomePage/Divider/Divider";
import Technical from "../../HomePage/Tecnichal/Technical";
import Recruitment from "../../HomePage/Recruitment/Recruitment";
import About from "../../HomePage/About/About";

const AboutUs = () => {
  return (
    <>
      {/* Page title */}
      <PageTitle title={"about us"} page={"about"} />

      <section className="about-us">
        {/* About section */}
        <About/>

        {/* Counter section */}
        {/* <Counter /> */}

        {/* Management section */}
        <section>
          <Divider title={"Academy"} />
          <Academy />
          <Divider title={"Tactical"} />
          <Tactical />
          <Divider title={"Technical"} />
          <Technical />
          <Divider title={"Physical"} />
          <Physical />
          <Divider title={"Psychological"} />
          <Psychological />
          <Divider title={"Recruitment"} />
          <Recruitment />
          <Heading title={"team management"} />
          <Management />
        </section>

        {/* Tropies section */}
        {/* <Trophies /> */}

        {/* Testimonials section */}
        <Testimonials />

        {/* Sponsors Section */}
        <Sponsors />
      </section>
    </>
  );
};

export default AboutUs;
