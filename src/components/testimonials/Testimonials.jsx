import React from 'react';
import './Testimonials.css';

import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const Testimonials = () => {
  const data = [
    {
      id: 1,
      image:
        'https://media.licdn.com/dms/image/v2/C4D03AQFfaFAjwPZU-Q/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1643813488087?e=1733961600&v=beta&t=3UGmUGPlJvbJ3QAHEGecvMG1QTBk8VUAOXHJryITqzc',
      title: ' Robert Faber',
      subtitle: 'Program Director at George Mason University',
      comment:
        'I have had the great pleasure of having Antara on my team. I highly recommend her to anyone who values expertise in AI and Machine Learning, software development, SDLC operations, automation, RPA, and associated process redesign, the ability to think strategically and act tactically, and her disarming charm and wit. Days after joining my developer team, she was already making and impact. She connecting easily with peers and establishing relationships with our customers. Even within our own team, she was instrumental in identifying opportunities for changes to our operational process. If I could hire her today, I would absolutely do so.',
    },
    {
      id: 2,
      image:
        'https://media.licdn.com/dms/image/v2/D5603AQFx-vt_KGln_A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1678289451754?e=1733961600&v=beta&t=E6UK11kjit1tHU1W9UP0WjjHWCZTejhwvWXL7CGXSeU',
      title: 'Aileen Miller',
      subtitle: 'Senior Business Systems Analyst at George Mason University',
      comment:
        'Antara was our intern in the Fiscal Services Program Office at George Mason University. She worked with us on a number of projects, updating our website, analyzing business processes, and developing automations using Robotic Process Automation. Antara is a very quick learner who asks insightful questions and is always eager to test out her knowledge on a new challenge. She is a responsible and conscientious team member. I enjoyed working with her and hope that she keeps us informed of all her future success. If you are looking to hire Antara, I am happy to provide a recommendation.',
    },
    {
      id: 3,
      image:
        'https://media.licdn.com/dms/image/v2/D5603AQF_39gDCrL8KA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1693170002532?e=1733961600&v=beta&t=ObzD5DG6ouP5EUOQn_SPHeOS475nc27iQJzrK0qP9nE',
      title: 'David "Matt" Bartles',
      subtitle: 'Lead Consultant - Automation and Artificial Intelligence',
      comment:
        "Antara is, without a doubt, the most exceptional business automation intern I have ever worked with. From day one, she astounded me with her natural ability to transform complex business processes into elegant technical solutions—a skill that often takes many years to master.\nBeyond her technical prowess, what truly sets Antara apart is her work ethic and innate curiosity. Driven by a deep desire to make a real difference, she significantly enhanced our Automation Center of Excellence's ability to deliver, accelerating our operations to develop services more rapidly.\n Antara's magnetic personality draws people in and fosters collaboration between technical, business, and operational teams, expediting problem-solving. She has an uncanny ability to blend seamlessly into any team, instantly understanding and connecting with each individual. Antara listens to users' needs and fully embodies them. She has the rare gift of seeing the world through others' eyes, allowing her to build solutions that not only meet requirements but also resonate profoundly with users.\nThis deep empathy, combined with her infectious enthusiasm and tireless dedication, enables Antara to forge genuine, lasting connections that form the bedrock of successful initiatives. Through her project execution, she rallies teams, inspires stakeholders, and elevates entire organizations. But beyond her measurable impacts, Antara's spirit of innovation and positivity left the most indelible mark on our team.\nAny team would be fortunate to have her—I know I was. She exceeded my expectations and redefined what I thought was achievable.",
    },
    {
      id: 4,
      image:
        'https://media.licdn.com/dms/image/v2/C4D03AQGxNRfzvh_jmw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1604164437679?e=1733961600&v=beta&t=VLfmcrmnVodOZMTAKvBWOW1QX_8EfoCEVRMVAlnGcyA',
      title: 'Mike Brennan',
      subtitle: 'Independent Consultant @ Impact Makers',
      comment:
        'Made an immediate impact is what Antara did when she joined the Mason Automation Center of Excellence team as a developer. I’ve worked with Antara for the better part of a year now, and I am continually amazed at her passion and professionalism in her role. Antara came in as a developer expected to do a lot of coding with our automation tools. While she has done that, she has done so much more. She is working with some of our senior developers, on requirements gathering, design, testing, and implementation. At times she has stepped in and ran team planning meetings. She has a great out going personality that has aided her immensely in working with our end users. Antara is a great intern, who for some lucky company will make a great employee.',
    },
    {
      id: 5,
      image:
        'https://media.licdn.com/dms/image/v2/D5603AQGEsHRALbVgrw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1691192484919?e=1733961600&v=beta&t=ih9TFBFazqKD2210d69Nd5HjNV-ogpSEoNcpLicF9pk',
      title: 'Liz (Madej) Coalts',
      subtitle: 'Senior Consultant @ Impact Makers',
      comment:
        'I was beyond impressed with Antara from the moment we interviewed her for the Mason Automation Center of Excellence at George Mason University. She has the perfect combination of technical, analytical, and interpersonal skills. Her passion is infectious and her curiosity for understanding the why behind the work and processes we were automating was wonderful to see. She will be a rockstar of an asset at any company who hires her after graduation, and I am excited to follow her career. I am so happy I got to work with her at George Mason.',
    },
    {
      id: 6,
      image:
        'https://media.licdn.com/dms/image/v2/C4D03AQFfaFAjwPZU-Q/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1643813488087?e=1733961600&v=beta&t=3UGmUGPlJvbJ3QAHEGecvMG1QTBk8VUAOXHJryITqzc',
      title: 'Omprakash Bansal',
      subtitle: 'Senior Program Manager at Mercedes Benz Research and Development India',
      comment:
        'I am pleased to recommend Antara, whom I managed during her time at Mercedes Benz. From the moment Antara joined our team as a fresh graduate, I was struck by her infectious enthusiasm, keen intellect, and unwavering commitment to excellence. Antara has grown and flourished over her two years at Mercedes, where she tackled every challenge with a positive attitude and a hunger to learn, quickly establishing herself as an indispensable team member. Her technical acumen was remarkable—she had a deep understanding of front-end and back-end technologies and an incredible knack for leveraging these skills to solve complex problems. But what set Antara apart is her ability to see beyond the code. She approached every project holistically, always considering how her technical solutions can streamline processes, enhance user experiences, and drive meaningful business outcomes.One of Antara\'s most impressive qualities is her ability to bridge the technical and human gap. She translates complex technical concepts into compelling narratives that engage and inspire her colleagues. Whether she was collaborating with our global counterparts, mentoring new team members, or presenting at workshops and events, Antara brought people together and fostered a sense of shared purpose. However, Antara\'s contributions extended far beyond her projects. She is a true team player, always ready to lend a helping hand or take on additional responsibilities. Her warm, approachable demeanour and gift for clear communication make her a sought-after mentor for new joiners and a persuasive presenter in workshops and events.As Antara embarks on her next chapter, I have no doubt that she will continue to make a profound impact wherever she goes. She has been an absolute asset to Mercedes Benz; any team would be lucky to have her.',
    }
  ];

  return (
    <section className='testimonials container section'>
      <h2 className='section__title'>Testimonials</h2>

      <Swiper
        className='testimonial__container grid'
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
            <SwiperSlide className='testimonial__item' key={id}>
              <div className='thumb'>
                <img src={image} alt='' />
              </div>
              <h3 className='testimonial__title'>{title}</h3>
              <span className='subtitle'>{subtitle}</span>
              <div className='comment'>{comment}</div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;