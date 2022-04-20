import React from 'react'
import './services.css'
import {BsCheckLg} from 'react-icons/bs'


function Services() {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        <article className='service'>
          <div className="service_head"><h3>Consulting</h3></div>
        <ul className="service_list">
          <li>
            <BsCheckLg className='service_list-icon'/>
            <p>About Robotic projects</p> 
          </li>
          <li><BsCheckLg className='service_list-icon'/><p>Personalized Road-maps</p></li>
          <li><BsCheckLg className='service_list-icon'/><p>Specialistion orientation</p></li>
        </ul>
        </article>
        <article className='service'>
          <div className="service_head"><h3>Web Development</h3></div>
        <ul className="service_list">
          <li><BsCheckLg className='service_list-icon'/><p>Portfolios</p></li>
          <li><BsCheckLg className='service_list-icon'/><p>Landing pages</p></li>
          <li><BsCheckLg className='service_list-icon'/><p>E-commerce websites</p></li>
          <li><BsCheckLg className='service_list-icon'/><p>ERP websites</p></li>
        </ul>
        </article>
        <article className='service'>
          <div className="service_head"><h3>Courses</h3></div>
        <ul className="service_list">
          <li><BsCheckLg className='service_list-icon'/><p>C language courses</p></li>
          <li><BsCheckLg className='service_list-icon'/><p>C++ language courses</p></li>
          <li><BsCheckLg className='service_list-icon'/><p>Webdev courses</p></li>
        </ul>
        </article>
      </div>
    </section>
  )
}

export default Services