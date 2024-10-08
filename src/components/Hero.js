
import React from 'react';
import PropTypes from 'prop-types';
import profile from '../assets/profile.jpeg';

const Hero = (props) => {
  return (
    <div id="about-me"> {/* Add this ID */}
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={profile}
            className="w-40 h-50 max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-3xl font-bold">
              Hello! My name is Aseel Khalid. If I am not freelancing at some of Amman's finest digital agencies, I'm working remotely on projects for clients all over the world.
            </h1>
            <p className="py-6">
              I have a diverse set of skills, ranging from design, to HTML + CSS + JavaScript + responsive web design + VS Code + ReactJs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

Hero.propTypes = {};

export default Hero;
