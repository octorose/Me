import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {FaInstagramSquare} from 'react-icons/fa'


function footer() {
  return (
    <footer>
      <a href="#" className='footer_logo'>HATIM</a>
      <ul className='premalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experence</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.linkedin.com/in/hatim-allouch-79482b218/"><BsLinkedin/></a>
        <a href="https://github.com/octorose"><BsGithub/></a>
        <a href="https://www.instagram.com/1nt393r/"><FaInstagramSquare/></a>
    </div>
    </footer>
  )
}

export default footer