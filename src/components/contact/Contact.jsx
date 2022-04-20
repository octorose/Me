import React, {useRef} from 'react'
import './contact.css'
import{MdEmail} from 'react-icons/md'
import {RiWhatsappFill} from 'react-icons/ri'
import emailjs from 'emailjs-com'


export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_m1z8y5c', 'template_ved08zb', form.current, 'e0H1g1T51FxKmSVcF')
      .then((result) => {
        console.log(result.text)
      }, (error) => {
        console.log(error.text)
      })
      e.target.reset();
  }
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className='contact_option'>
            <MdEmail className='contact_icon' />
            <h4>Email</h4>
            <h5>allouchhatim@gmail.com</h5>
            <a href="mailto:allouchhatim@gmail.com">send a message</a>
          </article>
          <article className='contact_option'>
            <RiWhatsappFill className='contact_icon' />
            <h4>whatsapp</h4>
            <a href="https://api.whatsapp.com/send?phone=+212705287739">+212705287739</a>
          </article>
        </div>
        {/* END OF contact options */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Full Name' required />
          <input type="email" name='email' placeholder='Email' required />
          <textarea name='message' placeholder='Message' rows="4" required></textarea>
          <button type='submit' className='btn btn-primary'>Send</button>
        </form>
      </div>
    </section>
  )
}

  // export default contact
