import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/mepng2.png'
import HeaderSocials from './HeaderSocials'
function Header() {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello World! I'm</h5>
        <h1>Hatim Allouch</h1>
        <h5 className="text-light">FullStack Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <div>
          <a href="#contact" className="scroll-down">scroll down</a>
        </div>
      </div>
    </header>
  )
}

export default Header