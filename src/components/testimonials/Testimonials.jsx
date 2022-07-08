import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const clients = [
  {
    name: 'Ernesto Macías',
    avatar: AVTR1,
    review: 'Que chevere quedo todo'
  },
  {
    name: 'Pedro Coral',
    avatar: AVTR2,
    review: 'Escelente'
  },
  {
    name: 'Bryan Galindo',
    avatar: AVTR3,
    review: 'Pupitrazo'
  },
  {
    name: 'Andres Ferreira',
    avatar: AVTR4,
    review: 'Los inversionistas de mundoexpresh'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        {
          clients.map(client => {
            return (
              <SwiperSlide className="testimonial">
                <div className="client__avatar">
                  <img src={client.avatar} alt="Avatar" />
                </div>
                <h5 className='client__name'>{client.name}</h5>
                <small className="client__review">
                  {client.review}
                </small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials