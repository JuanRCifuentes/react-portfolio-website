import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'

const Sides = () => {
  return (
    <div>
      <div className='header__socials'>
        <a href="https://www.linkedin.com/in/juanrcifuentes" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/JuanRCifuentes" target="_blank"><BsGithub /></a>
        <a href='https://wa.me/573138690872' target="_blank"><BsWhatsapp /></a>
      </div>
      <a href="#contact" className='scroll__down'>Scroll Down</a>
    </div>
  )
}

export default Sides