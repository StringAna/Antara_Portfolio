import React from 'react'
import './About.css'
import Resume from '../../assets/Antara_Tewary_Resume.pdf'
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
              Hi. My name is Antara.
              
              Chatgpt calls me a "trailblazing force in the world of technology", but I settle for - transforming organizations with my unique abilities, seamlessly blending my passion for innovation with an unwavering commitment to creating real-world impact. As a Co-Lead of the Google Developer Group at George Mason University, I not only excel in her coursework with a perfect 4.0 GPA in advanced, niche subjects which demonstrates my discipline and passion for knowledge, but also dedicate myself to building a vibrant community of tech enthusiasts.
              <br/><br/>
              With a proven track record in delivering transformative solutions, my expertise spans across cutting-edge domains such as Natural Language Processing, Data Mining, and Machine Learning with PySpark, PyTorch, Recommender Systems, LLMs and more under my belt. My projects, like the Workspace Archiver and SpotiFind, showcase my ability to develop user-centric, efficient, and impactful applications.
              <br/><br/>
              But what truly sets me apart is a blend of technical prowess and human empathy. I possess an innate ability to understand and connect with people, allowing me to create solutions that resonate deeply with users' needs. My leadership skills, honed through my role at the Google Developer Group and other experiences, enable me to rally teams and drive projects to success.
              <br/><br/>
              Throughout, my journey has been one of perseverance and passion. I doesn't just aim to build impressive tech; I strive to create tools that make a tangible difference in people's everyday lives. My coursework and projects reflect this commitment, as I consistently push the boundaries of what's possible.
              <br/><br/>
              I am looking to join an organization where my technical skills, leadership qualities, and dedication to meaningful innovation can make me a invaluable asset.
            </p>
            {/* <ul className="about__list">
              <li>Python</li>
              <li>JavaScript (ES6+)</li>
              <li>TypeScript</li>
              <li>React</li>
              <li>Node.js</li>
              <li>Postgres SQL</li>            
            </ul> */}
            <button className="btn" onClick={downloadResume}>
              View Resume
            </button>
            &nbsp;
            {/* <button className="btn" onClick={downloadMLE}>
              View MLE resume
            </button> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
