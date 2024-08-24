import React from 'react'
import PropTypes from 'prop-types'

const Skills = props => {
  return (
    <div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full flex items-center justify-center bg-gray-100">
          <div className="text-center p-6">
            <h2 className="text-2xl font-bold">My multiple skills are:</h2>
            <p className="mt-4 text-lg">ReactJS</p>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full flex items-center justify-center bg-gray-100">
          <div className="text-center p-6">
            <h2 className="text-2xl font-bold">My multiple skills are:</h2>
            <p className="mt-4 text-lg">Javascript</p>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full flex items-center justify-center bg-gray-100">
          <div className="text-center p-6">
            <h2 className="text-2xl font-bold">My multiple skills are:</h2>
            <p className="mt-4 text-lg">Responsive web design</p>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full flex items-center justify-center bg-gray-100">
          <div className="text-center p-6">
            <h2 className="text-2xl font-bold">My multiple skills are:</h2>
            <p className="mt-4 text-lg">VS code</p>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    </div>
  )
}

Skills.propTypes = {}

export default Skills
