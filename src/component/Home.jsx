import React from "react";
import NavBar from "./navbar";
import { FaGithub, FaInstagram, FaLinkedin, FaFacebookSquare } from "react-icons/fa";
import Typewriter from "./Typewriter";
import "./Home.css";

const Home = () => {
  return (
    <div className="home BackgroundAnimation progress">
      <div className="stars"></div>
      <div className="content">
        <h1>Supriya Dutta</h1>
        <p>
          <Typewriter
            text="Passionate about changing the world with technology."
            delay={100}
            false
          />
        </p>
        <div className="icons">
        <FaGithub size={50} className="icon"/>
        <FaFacebookSquare size={50} className="icon"/>
        <FaInstagram size={50} className="icon"/>
        <FaLinkedin size={50} className="icon"/>
        </div>
        <div>
        <button className="btn">More about me</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
