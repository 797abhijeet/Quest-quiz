import React from "react";
import AboutBackground from "./about-background.png";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="About Background" />
      </div>

      <div className="about-section-text-container">
        <h1 className="primary-heading1">
          Engage your mind with our bite-sized quiz challenges 🚀
        </h1>

        <p className="primary-text">
          Welcome to our dynamic quiz website, where knowledge meets excitement!
          Explore quizzes across general knowledge and specialized topics.
        </p>

        <p className="primary-text">
          Unleash curiosity and start a thrilling journey of learning — start
          quizzing today!
        </p>
      </div>
    </div>
  );
};

export default About;
