import React from "react";
import profileImg from "../assets/githubProfilePic.jpg";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <div className="img">
      <div className="stars"></div>
        <img src={profileImg} alt="profile" />
      </div>
      <div className="aboutContent">
        <h2>About Me</h2>
        <p>
          Versatile Mechanical Engineering graduate with a purposeful three-year
          gap post-graduation dedicated to upskilling in software development
          and providing essential family support. Proficient in [mention
          relevant skills, languages, or tools], I am now poised to transition
          seamlessly into a dynamic software development role. Leveraging a
          unique blend of engineering acumen and newfound programming expertise,
          I am committed to bringing innovative solutions
        </p>
        <button className="btnAbout">Resume</button>
      </div>
    </div>
  );
};

export default About;
