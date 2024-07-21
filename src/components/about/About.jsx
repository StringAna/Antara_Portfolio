import React from 'react'
import './About.css'
import Resume from '../../assets/Antara-Tewary-RA.pdf'
import ResumeMLE from '../../assets/Antara_Tewary_ML.pdf'

const About = () => {
  const downloadResume = () => {
    window.open(Resume, '_blank')
  }

  const downloadMLE = () => {
    window.open(ResumeMLE, '_blank')
  }

  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me </h2>

      <div className="about__container grid">
        <dotlottie-player
          src="https://lottie.host/f32f901e-1fc0-4b74-b719-2e20d283265d/ZExwcfNYFC.json"
          background="transparent"
          speed="1"
          style={{ width: '300px', height: '300px' }}
          loop
          autoplay
        ></dotlottie-player>
        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              Hello! I'm Antara.
              <br />
              <br />
              Grad Student at George Mason pursuing ML concentration, previously worked with Mercedes Benz Research and
              Development India.
              <br />
              <br />
              Here are a few technologies I’ve been working with recently:
            </p>
            <ul className="about__list">
              <li>JavaScript (ES6+)</li>
              <li>TypeScript</li>
              <li>React</li>
              <li>Node.js</li>
              <li>Postgres SQL</li>
              <li>NestJS</li>
            </ul>
            <button className="btn" onClick={downloadResume}>
              View SWE resume
            </button>
            &nbsp;
            <button className="btn" onClick={downloadMLE}>
              View MLE resume
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
