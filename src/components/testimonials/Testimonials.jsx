import React from 'react'
import './Testimonials.css'

import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

const Testimonials = () => {
  const data = [
    {
      id: 1,
      image:
        'https://media.licdn.com/dms/image/C4D03AQGxNRfzvh_jmw/profile-displayphoto-shrink_800_800/0/1604164437679?e=1727308800&v=beta&t=ozRjhzIQSab8JLQWNMqN3y8Un1FAbuJdavYnUCjDVRo',
      title: 'Mike Brennan',
      subtitle: 'Independent Consultant @ Impact Makers',
      comment:
        'Made an immediate impact is what Antara did when she joined the Mason Automation Center of Excellence team as a developer. I’ve worked with Antara for the better part of a year now, and I am continually amazed at her passion and professionalism in her role. Antara came in as a developer expected to do a lot of coding with our automation tools. While she has done that, she has done so much more. She is working with some of our senior developers, on requirements gathering, design, testing, and implementation. At times she has stepped in and ran team planning meetings. She has a great out going personality that has aided her immensely in working with our end users. Antara is a great intern, who for some lucky company will make a great employee.',
    },
    {
      id: 2,
      image:
        'https://media.licdn.com/dms/image/D5603AQGEsHRALbVgrw/profile-displayphoto-shrink_800_800/0/1691192484919?e=1727308800&v=beta&t=SSVjS2rStCstrGmELjSitQyBtbwo8HjQ7mFQXcLDP1E',
      title: 'Liz (Madej) Coalts',
      subtitle: 'Senior Consultant @ Impact Makers',
      comment:
        'I was beyond impressed with Antara from the moment we interviewed her for the Mason Automation Center of Excellence at George Mason University. She has the perfect combination of technical, analytical, and interpersonal skills. Her passion is infectious and her curiosity for understanding the why behind the work and processes we were automating was wonderful to see. She will be a rockstar of an asset at any company who hires her after graduation, and I am excited to follow her career. I am so happy I got to work with her at George Mason.',
    },
  ]

  return (
    <section className="testimonials container section">
      <h2 className="section__title">Testimonials</h2>

      <Swiper
        className="testimonial__container grid"
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        grabCursor={true}
        pagination={{ clickable: true }}
        Autoplay={{ delay: 1 }}
      >
        {data.map(({ id, image, title, subtitle, comment }) => {
          return (
            <SwiperSlide className="testimonial__item" key={id}>
              <div className="thumb">
                <img src={image} alt="" />
              </div>
              <h3 className="testimonial__title">{title}</h3>
              <span className="subtitle">{subtitle}</span>
              <div className="comment">{comment}</div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

export default Testimonials
