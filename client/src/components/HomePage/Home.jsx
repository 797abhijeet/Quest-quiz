import React from "react";
import BannerBackground from "./home-banner-background.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <Navbar />

      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="Banner Background" />
        </div>

        <div className="home-text-section">
          <h1 className="primary-heading1">
            Welcome to our Quest Website! 🌟
          </h1>

          <p className="primary-text">
            Dive into a world of quizzes, test your wits, and enjoy the thrill
            of learning — your journey to knowledge starts now! 🏆
          </p>

          <button
            className="secondary-button"
            onClick={() => navigate("/register")}
          >
            Get Started <FiArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
