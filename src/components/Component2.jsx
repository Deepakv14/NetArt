import React from 'react'
import './component2.css'
import banner from '../assets/3.png'

const Component2 = () => {
  return (
    <div className='containerTwo'>
        <h6>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.</h6>
        <div className='figure'>
            <img src={banner} alt="banner"/>
            <p>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </p>
        </div>

    </div>
  )
}

export default Component2