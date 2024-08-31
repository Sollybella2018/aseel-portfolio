import React from "react";
import PropTypes from "prop-types";
import logo from "../assets/logo.jpg";
import logoj from "../assets/logoj.webp";
import logor from "../assets/logor.jpg";
import logov from "../assets/logov.png";
import figma from "../assets/figma.png";
import htmlogo from "../assets/htmlogo.jpg";
import csslogo from "../assets/csslogo.png";
import adobelogo from "../assets/adobelogo.png";
import dev from "../assets/dev.jpg";

const Skills = (props) => {
  return (
    <div id="skills">
      {" "}
      {/* Add this ID */}
      <div className="carousel rounded-box">
        <div className="carousel-item pr-5">
          <img
            src={logo}
            className="w-20 h-30 max-w-sm rounded-lg shadow-2xl flex align-center"
            alt="Logo"
          />
        </div>
        <div className="carousel-item"></div>

        <div className="carousel-item pr-5">
          <img
            src={logoj}
            className="w-20 h-30 max-w-sm rounded-lg shadow-2xl flex align-center"
            alt="Logo"
          />
        </div>
        <div className="carousel-item pr-5">
          <img
            src={dev}
            className="w-20 h-30 max-w-sm rounded-lg shadow-2xl flex align-center"
            alt="Logo"
          />
        </div>
        <div className="carousel-item pr-5">
          <img
            src={adobelogo}
            className="w-20 h-30 max-w-sm rounded-lg shadow-2xl flex align-center"
            alt="Logo"
          />
        </div>
        <div className="carousel-item pr-5">
          <img
            src={logor}
            className="w-20 h-30 max-w-sm rounded-lg shadow-2xl flex align-center"
            alt="Logo"
          />
        </div>
        <div className="carousel-item pr-5">
          <img
            src={logov}
            className="w-20 h-30 max-w-sm rounded-lg shadow-2xl flex align-center"
            alt="Logo"
          />
        </div>
        <div className="carousel-item pr-5">
          <img
            src={htmlogo}
            className="w-20 h-30 max-w-sm rounded-lg shadow-2xl flex align-center"
            alt="Logo"
          />
        </div>
        <div className="carousel-item pr-5">
          <img
            src={csslogo}
            className="w-20 h-30 max-w-sm rounded-lg shadow-2xl flex align-center"
            alt="Logo"
          />
        </div>
      </div>
    </div>
  );
};
export default Skills;
Skills.propTypes = {};
