import React from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {BsWhatsapp} from 'react-icons/bs'

const options = [
  {
    name: 'E-mail',
    contact: 'info@juanrcifuentes.com',
    icon: <HiOutlineMail className='contact__option-icon'/>,
    link: 'mailto:info@juanrcifuentes.com'
  },
  {
    name: 'WhatsApp',
    contact: '+57 (313) 869-0872',
    icon: <BsWhatsapp className='contact__option-icon'/>,
    link: 'https://wa.me/573138690872'
  }
]

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          {
            options.map(option => {
              return (
                <article className="contact__option">
                  {option.icon}
                  <h4>{option.name}</h4>
                  <h5>{option.contact}</h5>
                  <a href={option.link} target='_blank'>Send message</a>
                </article>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Contact