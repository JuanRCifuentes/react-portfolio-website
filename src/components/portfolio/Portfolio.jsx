import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import {FaRegPlayCircle} from 'react-icons/fa'
import {ImGithub} from 'react-icons/im'

const data = [
  {
    id: '1',
    image: IMG1,
    title: 'VENKRA - Website',
    github: 'https://github.com/JuanRCifuentes/venkra--basic-website',
    demo: 'https://www.venkra.com'
  }
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target="_blank"><ImGithub className='portfolio__icon'/></a>
                  <a href={demo} className='btn btn-primary' target="_blank"><FaRegPlayCircle className='portfolio__icon'/></a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio