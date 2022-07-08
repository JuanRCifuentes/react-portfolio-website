import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const data = [
  {
    id: 'frontend',
    name: 'Frontend Development',
    technologies: [
      {
        name: 'HTML',
        level: 'Intermediate'
      },
      {
        name: 'CSS',
        level: 'Intermediate'
      },
      {
        name: 'JavaScript',
        level: 'Advanced'
      },
      {
        name: 'Bootstrap',
        level: 'Inexperienced'
      },
      {
        name: 'React',
        level: 'Intermediate'
      }
    ]
  },
  {
    id: 'backend',
    name: 'Backend Development',
    technologies: [
      {
        name: 'Python',
        level: 'Advanced'
      },
      {
        name: 'Java',
        level: 'Advanced'
      },
      {
        name: 'MongoDB',
        level: 'Inexperienced'
      },
      {
        name: 'Node.JS',
        level: 'Intermediate'
      },
      {
        name: 'MySQL',
        level: 'Intermediate'
      }
    ]
  }
]

const Experience = () => {
  return (
    <section id='experience'>
      <h5>My Skills</h5>
      <h2>My experience</h2>
      <div className="container experience__container">
        {
          // Each specialization
          data.map(specialization => {
            return(
              <div className={specialization.id}>
                <h3>{specialization.name}</h3>
                <div className="experience__content">
                  {
                    // Each technology used
                    specialization.technologies.map(tempTech => {
                      return (
                        <article className='experience__details'>
                          <BsPatchCheckFill className='experience__details-icon'/>
                          <div>
                            <h4>{tempTech.name}</h4>
                            <small className='text-light'>{tempTech.level}</small>
                          </div>
                        </article>
                      )
                    })
                  }
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Experience