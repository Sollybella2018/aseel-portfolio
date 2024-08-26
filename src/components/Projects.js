import React from 'react'
import PropTypes from 'prop-types'
import guess from '../assets/guess.jpg'
import poltluckguest from '../assets/potluckguest.jpg'
import epicmix from '../assets/epicmix.jpg'
import stickynote from '../assets/stickynote.jpg'
const Projects = props => {
  return (
    <div><div className="carousel w-full">
    <div id="item1" className="carousel-item w-full">
      <img
        src={guess}
        className="w-full" />
    </div>
    <div id="item2" className="carousel-item w-full">
      <img
        src={poltluckguest}
        className="w-full" />
    </div>
    
    <div id="item3" className="carousel-item w-full">
      <img
        src={epicmix}
        className="w-full" />
    </div>
    <div id="item4" className="carousel-item w-full">
      <img
        src={stickynote}
        className="w-full" />
    </div>
  </div>
  <div className="flex w-full justify-center gap-2 py-2">
    <a href="#item1" className="btn btn-xs">1</a>
    <a href="#item2" className="btn btn-xs">2</a>
    <a href="#item3" className="btn btn-xs">3</a>
    <a href="#item4" className="btn btn-xs">4</a>
  </div></div>

  
  )
 
}

Projects.propTypes = {}

export default Projects