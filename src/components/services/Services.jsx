import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const specialties = [
  {
    name: 'UI/UX',
    services: [
      'Service 1', 
      'Service 2', 
      'Service 3', 
      'Service 4', 
      'Service 5'
    ]
  },
  {
    name: 'Data Analysis',
    services: [
      'Service 6', 
      'Service 7', 
      'Service 8', 
      'Service 9', 
      'Service 10'
    ]
  },
  {
    name: 'iOS/Web Development',
    services: [
      'Service 11', 
      'Service 12', 
      'Service 13', 
      'Service 14', 
      'Service 15'
    ]
  }
]


const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
      {
        specialties.map(specialty => {
          return (
            <article className="service">
              <div className="service__head">
                <h3>{specialty.name}</h3>
              </div>
              <div className="service__list">
              {
                specialty.services.map(service => {
                  return (
                    <li>
                      <BiCheck className='service__list-icon'/>
                      <p>{service}</p>
                    </li>
                  )
                })
              }
              </div>
            </article>
          )
        })
      }
      </div>
    </section>
  )
}

export default Services