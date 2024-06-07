import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">Juan R. Cifuentes</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#services">Services</a></li>
        {/* <li><a href="#testimonials">Testimonials</a></li> */}
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://github.com/JuanRCifuentes" target='_blank' rel="noreferrer"><BsGithub /></a>
        <a href="https://www.linkedin.com/in/juanrcifuentes" target='_blank' rel="noreferrer"><BsLinkedin /></a>
        <a href='https://wa.me/573138690872' target='_blank' rel="noreferrer"><BsWhatsapp /></a>
      </div>

      <div className="footer__copywright">
        <small>&copy; Juan R. Cifuentes. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer