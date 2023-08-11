import React from 'react'
import './about.css'
import Me from '../../assets/sli3a.jpeg'
import {CgAwards} from 'react-icons/cg'
import {FiUsers} from 'react-icons/fi'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'

function about() {
  return (
   <section id='about'>
     <h5>Get To Know</h5>
     <h2>About Me</h2>

     <div className="container about_container">
       <div className="about_me">
         <div className="aboutme-image">
              <img src={Me} alt="about pic" />
            </div>
              </div>
              <div className="about_content">
                <div className="about_cards">
                  <article className='about_card'>
                  <CgAwards className='about_icon'/>
                    <h5>Expirence</h5>
                    <small>4 years</small>
                  </article>

                  <article className='about_card'>
                  <FiUsers className='about_icon'/>
                    <h5>Clients</h5>
                    <small>4 clients</small>
                  </article>

                  <article className='about_card'>
                  <AiOutlineFundProjectionScreen className='about_icon'/>
                    <h5>Projects</h5>
                    <small>7 completed</small>
                  </article>

                </div>
                <div className='aboutme'>

                <p>A Developer student, a good one 😉 with a good background about different specialities in the computer science field Web-Dev/App-Dev(IOS), Robotics, Security(Web-App). <br/> A problem solver with a large amount Creativity since i have a versatile knowledge including electronics </p>
                </div>

                <a href="#contact" className='btn btn-primary'>Let's Talk</a>
       </div>
     </div>

   </section>
  )
}

export default about