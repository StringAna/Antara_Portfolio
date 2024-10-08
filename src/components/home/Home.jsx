import './Home.css';
import Me from '../../assets/avatar-1.svg';
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';
import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import AntIcon1 from '../../assets/web-designer-with-idea.json';

const Home = () => {
    return (
        <section className="home container" id='home'>
            <div className="intro">
                {/* <img src={Me} alt="" className='home__img' width='120' /> */}
                {/* <dotlottie-player src="https://lottie.host/7f0bf641-c55f-40b3-89ce-f61cb65c902c/dQrwp1xlWE.json" background="transparent" speed="1" style={{width: '300px', height: '300px'}} loop autoplay></dotlottie-player> */}
                <dotlottie-player src="https://lottie.host/2e851f75-3bf2-43cf-958f-21317f76cd1c/Th4wqHOQpS.json" background="transparent" speed="1" style={{width: '300px', height: '300px'}} loop autoplay></dotlottie-player>
                <h1 className="home__name">Antara Tewary</h1>
                <span className="home__education">Grace Hopper 2024 | Visionary Co-Lead at Google Developer Group at George Mason University | Unparalleled ability to  transform complex data into actionable insights | Masters Student at George Mason University | Specializes in Automation, Natural Language Processing, Data Mining, AI and ML | May 2025 Graduation</span>

                <HeaderSocials />

                <a href="#contact" className="btn"> Contact Me</a>

                {/* <ScrollDown /> */}
            </div>

            <Shapes />
        </section>
    )
}

export default Home