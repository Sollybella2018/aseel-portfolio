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
    <div>
<div className="carousel rounded-box">
  <div className="carousel-item">
    <img
      src={logo}
      className="w-20 h-30 max-w-sm rounded-lg shadow-2xl flex align-center"
      alt="Burger" />
  </div>
  <div className="carousel-item">
    <img
      src={logoj}
      className="w-20 h-30 max-w-sm rounded-lg shadow-2xl flex align-center"
      alt="Burger" />
  </div>
  <div className="carousel-item">
    <img
     src={dev}
     className="w-20 h-30 max-w-sm rounded-lg shadow-2xl flex align-center"
      alt="Burger" />
  </div>
  <div className="carousel-item">
    <img
     src={adobelogo}
     className="w-20 h-30 max-w-sm rounded-lg shadow-2xl flex align-center"
      alt="Burger" />
  </div>
  <div className="carousel-item">
    <img
      src={logor}
      className="w-20 h-30 max-w-sm rounded-lg shadow-2xl flex align-center"
      alt="Burger" />
  </div>
  <div className="carousel-item">
    <img
      src={logov}
      className="w-20 h-30 max-w-sm rounded-lg shadow-2xl flex align-center"
      alt="Burger" />
  </div>
  <div className="carousel-item">
    <img
      src={htmlogo}
      className="w-20 h-30 max-w-sm rounded-lg shadow-2xl flex align-center"
      alt="Burger" />
  </div>
  <div className="carousel-item">
    <img
      src={csslogo}
      className="w-20 h-30 max-w-sm rounded-lg shadow-2xl flex align-center"
      alt="Burger" />
  </div>
</div>

      
      </div>
    
  );
};

Skills.propTypes = {};

export default Skills;
