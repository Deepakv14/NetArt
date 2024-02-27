import React from 'react'
import logo from '../assets/logo.png' 
import './heading.css'

const Heading = () => {
  return (
    <div className="heading">
          <img id="logo" src={logo} alt=""/>
    </div>
  )
}

export default Heading