import React from 'react'
import Header from './components/header/Header'
import About from './components/about/about'
import Contact from './components/contact/Contact'
import Footer from './components/footer/footer'
import Experience from './components/experience/experience'
import Nav from './components/nav/nav'
import Services from './components/services/services'
import Testimonials from './components/testimonials/testimonials'
import bgImage from './assets/video/Abstract - 26011.mp4'

const App = () => {
  return (
    <>
        <video autoPlay loop muted>
            <source src={bgImage} type="video/mp4" />
        </video>
        <Header/>
        <Nav/>
        <About/>
        <Experience/>
        <Services/>
        {/* <Testimonials/> */}
        <Contact/>
        <Footer/>
    </>
  )
}

export default App