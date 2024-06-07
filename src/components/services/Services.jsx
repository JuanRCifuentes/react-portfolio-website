import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const specialties = [
  {
    name: 'Data Visualization',
    services: [ 
      'Automated Dashboard creation',
      'Interactive Dashboard creation', 
      'Presentation structuring and chart creation', 
      'Data visualization consulting',
    ]
  },
  {
    name: 'Data Analysis',
    services: [
      'Web Scrapping for insights',
      'Automated Data treatment system', 
      'Develop data collection App', 
      'Develop IoT devices software'
    ]
  },
  {
    name: 'iOS/Web Development',
    services: [
      'Design, Develop and Deploy landing page.',
      'Design and Develop Web App.',
      'Mockup iOS App'
    ]
  }
]


const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className='container services__message'>
        <p>All the work I do is iterative, as I like getting feedback from clients and deliver the best possible product.</p>
      </div>
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