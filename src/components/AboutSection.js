import React from 'react'
import home1 from '../img/home1.png'
//styles

import { About, Description, Image, Hide } from '../styles'
const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className='title'>
          <Hide>
            <h2>We Work to make </h2>
          </Hide>
          <Hide>
            <h2>
              Your <span>dreams</span>come
            </h2>
          </Hide>
          <Hide>
            <h2>true</h2>
          </Hide>
        </div>
        <p>Contact Us for any kind of information</p>
        <button>Contact us</button>
      </Description>
      <Image>
        <img src={home1} alt='look this' />
      </Image>
    </About>
  )
}
//styled components

export default AboutSection
