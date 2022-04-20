import React from 'react'
import CV from '../../assets/hatimcv.pdf'

function CTA() {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let'Talk</a>
    </div>
  )
}

export default CTA