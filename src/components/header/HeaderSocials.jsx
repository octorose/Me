import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {FaInstagramSquare} from 'react-icons/fa'

function HeaderSocials() {
  return (
    <div className="header_socials">
        <a href="https://www.linkedin.com/in/hatim-allouch-79482b218/"><BsLinkedin/></a>
        <a href="https://github.com/octorose"><BsGithub/></a>
        <a href="https://www.instagram.com/1nt393r/"><FaInstagramSquare/></a>
    </div>
  )
}

export default HeaderSocials