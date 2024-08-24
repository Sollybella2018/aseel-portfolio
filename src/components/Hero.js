import React from 'react'
import PropTypes from 'prop-types'
import profile from '../assets/profile.jpeg'

const Hero = props => {
  return (
    <div><div className="hero bg-base-200 min-h-screen">
    <div className="hero-content flex-col lg:flex-row-reverse">
      <img
        src={profile}
        className="w-40 h-50 max-w-sm rounded-lg shadow-2xl" />
      <div>
        <h1 className="text-5xl font-bold">Box Office News!</h1>
        <p className="py-6">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
          quasi. In deleniti eaque aut repudiandae et a id nisi.
        </p>
        <button className="btn btn-primary">Get Started</button>
      </div>
    </div>
  </div></div>
  )
}

Hero.propTypes = {}

export default Hero
