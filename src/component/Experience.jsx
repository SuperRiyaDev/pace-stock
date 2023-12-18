import React from "react";
import cheggLogo from "../assets/Chegg-Logo.png";
import crioLogo from "../assets/Crio_Dark.png";
import "./Experience.css";

const Experience = () => {
  return (
    <div className="experience">
      <div className="heading">
        <h2>Experiences</h2>
      </div>
      <div className="expSection">
        <div className="expOne">
          <img src={crioLogo} alt="crio.do" />
          <p>FullStack Fellowship</p>
          <p>Jun 2022 - aug 2023</p>
        </div>
        <div className="expTwo">
          <img src={cheggLogo} alt="chegg" />
          <p>Subject Matter Expert</p>
          <p>Mar 2021 - Jun 2022</p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
