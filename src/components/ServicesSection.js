import React from 'react'
import clock from '../img/clock.svg'
import diaphragm from '../img/diaphragm.svg'
import money from '../img/money.svg'
import teamwork from '../img/teamwork.svg'
import home2 from '../img/home2.png'


const ServicesSection = () => {
  return (
    <div className='services'>
      <div className='description'>
        <h2>
          High <span>Quality</span> services
        </h2>
        <div className='cards'>
          <div className='card'>
            <div className='icon'>
              <img src={clock} alt='' />
              <h3>Efficencf</h3>
            </div>
            <p> Lorem Ipsum is simp </p>
          </div>
          <div className='card'>
            <div className='icon'>
              <img src={diaphragm} alt='' />
              <h3>Efficencf</h3>
            </div>
            <p> Lorem Ipsum is simp </p>
          </div>
          <div className='card'>
            <div className='icon'>
              <img src={money} alt='' />
              <h3>Efficencf</h3>
            </div>
            <p> Lorem Ipsum is simp </p>
          </div>
          <div className='card'>
            <div className='icon'>
              <img src={teamwork} alt='' />
              <h3>Efficencf</h3>
            </div>
            <p> Lorem Ipsum is simp </p>
          </div>
        </div>
          </div>
          <div className="image"><img src={home2} alt="" /></div>
    </div>
  )
}

export default ServicesSection
