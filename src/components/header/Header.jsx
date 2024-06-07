import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.svg'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Juan R. Cifuentes</h1>
        <h5 className="text-light"><a href="https://twitter.com/RyanLaBouve/status/988588702321475584?s=20" target="_blank" rel="noreferrer">"Making invisible robots from words" - Ryan LaBouve</a></h5>
        <CTA />
        <div className='me'>
          <img src={ME} alt="" />
        </div>
      </div>
    </header>
  )
}

export default Header