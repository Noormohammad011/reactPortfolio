import React from 'react'
import home1 from '../img/home1.png'
const AboutSection = () => {
  return (
    <div>
      <div className='description'>
        <div className='title'>
          <div className='hide'>
            <h2>We Work to make </h2>
          </div>
          <div className='hide'>
            <h2>
              Your <span>dreams</span>come
            </h2>
          </div>
          <div className='hide'>
            <h2>true</h2>
          </div>
        </div>
        <p>Contact Us for any kind of information</p>
        <button>Contact us</button>
      </div>
      <div className='image'>
        <img src={home1} alt='look this' />
      </div>
    </div>
  )
}

export default AboutSection
