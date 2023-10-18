import React from "react";
import "./Divider.css";
import { Heading } from "../../../components";

const Divider = ({ title }) => {
  return (
    <div className="counting">
      <div className="box">
        <div className="text">
          <Heading title={title} />
        </div>
      </div>
    </div>
  );
};

export default Divider;
