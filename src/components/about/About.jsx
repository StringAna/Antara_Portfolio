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
              Hi. My name is Antara Tewary.
              <br />
              <br />
              Currently, I am a graduate student at George Mason Univerisity pursuing Machine Learning concentration, graduating in May 2025.
              <br/>
              <br/>
              I have worked with Mercedes Benz Research and Development India as a Software Consultant, where I was responsible for a 2 dimensional viewer which was used to visualize, annotate, and search drawing files of different file types and from different suppliers.
              <br />
              <br/>
              Currently, I work with the George Mason University Fiscal Services in their Automation Center of Excellence to transform existing business processes into automated workflows. I am responsible for developing and maintaining the automation workflows using UiPath and Power Query. It is absolutely phenomenal to see the end to end process of automation and how it can help in reducing the manual effort and increasing the efficiency of the process.
              <br />
              <br/>
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
