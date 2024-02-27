import React from 'react'
import './footer.css'
import call from '../assets/telephone-svgrepo-com.svg'
import fb from '../assets/facebook-svgrepo-com.svg'
import web from '../assets/web-svgrepo-com.svg'

const Footer = () => {
  return (
    <div className='main'>
        <div className='footer'>
            <div className='foot-items'>
                <img src={call} alt="call" />
                <p>Toll free <b>1800 200 1234</b></p>
            </div>
            <div className='foot-items'>
                <img src={fb} alt="fb" />
                <p>www.facebook.com/cripumps</p>
            </div>
            <div className='foot-items'>
                <img src={web} alt="web" />
                <p>www.crigroups.com</p>
            </div>
        </div>
    </div>
  )
}

export default Footer