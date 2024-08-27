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
      <div className="carousel w-full">
        <div
          id="slide1"
          className="carousel-item relative w-full flex items-center justify-center bg-gray-100"
        >
          <div className="text-center p-6">
            <h2 className="text-2xl font-bold">My multiple skills are:</h2>
            <p className="mt-4 text-lg">ReactJS</p>

            <div className="flex justify-center">
              <img
                src={logo}
                className="w-20 h-30 max-w-sm rounded-lg shadow-2xl"
              />
            </div>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide2"
          className="carousel-item relative w-full flex items-center justify-center bg-gray-100"
        >
          <div className="text-center p-6">
            <h2 className="text-2xl font-bold">My multiple skills are:</h2>
            <p className="mt-4 text-lg">Javascript</p>
            <div className="flex justify-center">
              <img
                src={logoj}
                className="w-20 h-30 max-w-sm rounded-lg shadow-2xl"
              />
            </div>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide3"
          className="carousel-item relative w-full flex items-center justify-center bg-gray-100"
        >
          <>
            <h2 className="text-2xl font-bold">My multiple skills are:</h2>
            <div
              id="slide3"
              className="carousel-item relative w-full flex items-center justify-center bg-gray-100"
            >
              <>
                <h2 className="text-2xl font-bold flex align-center">
                  My multiple skills are:
                </h2>
                <div className="text-center grid grid-cols-4 grid-rows-2 gap-2">
                  <div>
                    <img
                      src={logor}
                      className="w-20 h-30 max-w-sm rounded-lg shadow-2xl"
                    />
                  </div>
                  <div>
                    <img
                      src={logor}
                      className="w-20 h-30 max-w-sm rounded-lg shadow-2xl"
                    />
                  </div>
                  <div>
                    <img
                      src={logor}
                      className="w-20 h-30 max-w-sm rounded-lg shadow-2xl"
                    />
                  </div>
                  <div>
                    <img
                      src={logor}
                      className="w-20 h-30 max-w-sm rounded-lg shadow-2xl"
                    />
                  </div>
                  <div>
                    <img
                      src={logor}
                      className="w-20 h-30 max-w-sm rounded-lg shadow-2xl"
                    />
                  </div>
                  <div>
                  <h1 className ="animate-bounce">test</h1>
                  </div>
                  <div>
                  <h1>test</h1>
                  </div>
                  <div>
                 <h1>test</h1>
                  </div>
                </div>
              </>
            </div>
          </>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
          
          </div>
        </div>
        
          <div className="text-center p-6">
            <h2 className="text-2xl font-bold">My multiple skills are:</h2>
            <p className="mt-4 text-lg">VS code</p>
            <img
              src={logov}
              className="w-20 h-30 max-w-sm rounded-lg shadow-2xl"
            />
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

Skills.propTypes = {};

export default Skills;
