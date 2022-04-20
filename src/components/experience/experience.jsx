import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'
import Integ from '../../assets/integ.jpeg'

function experience() {
  return (
    <section id='experience'>
      <h5>Skills I Have</h5>
      <h2>My Experience</h2>
      <div className='container experience_container'>
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_details-icon'/>
            <div>
            <h4>HTML</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>
            <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_details-icon'/>
            <div>
            <h4>CSS</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>
            <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_details-icon'/>
            <div>
            <h4>Javascript</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>
            <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_details-icon'/>
            <div>
            <h4>Bootstrap</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>
            <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_details-icon'/>
            <div>
            <h4>React</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>
          </div>
        </div>
        {/* END OF FRONT END */}
        <div className="experience_backend">
          <h3>Backend Development</h3>
          <div className="experience_content">
              <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>Python</h4>
              <small className='text-light'>Intermediate</small>
              </div>
              </article>
              <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>PHP</h4>
              <small className='text-light'>Experienced</small>
              </div>
              </article>
              <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>NodeJs</h4>
              <small className='text-light'>Beginner</small>
              </div>
              </article>
              <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>MySQL</h4>
              <small className='text-light'>Experienced</small>

              </div>
              </article>
            </div>
          </div>
          <div className='experience-global'>
            <h3>Global Experience</h3>
            <div className="experience_content">
              <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>MicroPython</h4>
              <small className='text-light'>Intermediate</small>
              </div>
              </article>
              <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>C</h4>
              <small className='text-light'>Experienced</small>
              </div>
              </article>
              <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>C++</h4>
              <small className='text-light'>Experienced</small>
              </div>
              </article>
              <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>Robotics</h4>
              <small className='text-light'>Intermediate</small>

              </div>
              </article>
            </div>
          </div>
          <div className='integ' id='integ'>
            <img src={Integ} alt="" />
          </div>
        </div>
    </section>
  )
}

export default experience