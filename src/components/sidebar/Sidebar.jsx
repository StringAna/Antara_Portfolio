import React, { useState } from 'react'
import './Sidebar.css'
import lottie from 'lottie-web'
import { defineElement } from '@lordicon/element'
import { RiMenu2Line } from 'react-icons/ri'

// define "lord-icon" custom element with default properties
defineElement(lottie.loadAnimation)

const Sidebar = (props) => {
  const [toggle, showMenu] = useState(false)

  return (
    <>
      <aside className={toggle ? 'aside show-menu' : 'aside'}>
        {/* <a href="#home" className="nav__logo">
                    <lord-icon
                        src="https://cdn.lordicon.com/olvznswf.json"
                        trigger="hover"
                        stroke="bold"
                        colors="primary:#9ce5f4,secondary:#16a9c7"
                        style={{ width: '35px', height: '35px' }}>
                    </lord-icon>
                </a> */}

        <nav className="nav">
          <div className="nav__menu">
            <ul className="nav__list">
              <li className="nav__item">
                <a href="#home" className="nav__link">
                  {/* <RiHome2Line /> */}
                  <lord-icon
                    src="https://cdn.lordicon.com/laqlvddb.json"
                    trigger="loop"
                    stroke="bold"
                    state="loop-smoke"
                    colors="primary:#9ce5f4,secondary:#16a9c7"
                    style={{ width: '32px', height: '32px' }}
                  ></lord-icon>
                </a>
              </li>

              <li className="nav__item">
                <a href="#about" className="nav__link">
                  {/* <RiUser3Line /> */}
                  <lord-icon
                    src="https://cdn.lordicon.com/qitvuzec.json"
                    trigger="hover"
                    stroke="bold"
                    state="hover-nodding"
                    colors="primary:#9ce5f4,secondary:#16a9c7"
                    style={{ width: '32px', height: '32px' }}
                  ></lord-icon>
                </a>
              </li>

              <li className="nav__item">
                <a href="#services" className="nav__link">
                  {/* <RiFileList3Line /> */}
                  <lord-icon
                    src="https://cdn.lordicon.com/jdalicnn.json"
                    trigger="hover"
                    stroke="bold"
                    colors="primary:#9ce5f4,secondary:#16a9c7"
                    style={{ width: '32px', height: '32px' }}
                  ></lord-icon>
                </a>
              </li>

              <li className="nav__item">
                <a href="#resume" className="nav__link">
                  {/* <RiBriefcase2Line /> */}
                  <lord-icon
                    src="https://cdn.lordicon.com/qmsejndz.json"
                    trigger="morph"
                    stroke="bold"
                    state="morph-open"
                    colors="primary:#9ce5f4,secondary:#16a9c7"
                    style={{ width: '32px', height: '32px' }}
                  ></lord-icon>
                </a>
              </li>

              <li className="nav__item">
                <a href="#portfolio" className="nav__link">
                  {/* <RiStackLine /> */}
                  <lord-icon
                    src="https://cdn.lordicon.com/kqvibaec.json"
                    trigger="hover"
                    stroke="bold"
                    colors="primary:#9ce5f4,secondary:#16a9c7"
                    style={{ width: '32px', height: '32px' }}
                  ></lord-icon>
                </a>
              </li>

              <li className="nav__item">
                <a href="#calendar" className="nav__link">
                  {/* <RiDraftLine /> */}
                  <lord-icon
                    src="https://cdn.lordicon.com/abfverha.json"
                    trigger="hover"
                    stroke="bold"
                    colors="primary:#9ce5f4,secondary:#16a9c7"
                    style={{ width: '32px', height: '32px' }}
                  ></lord-icon>
                </a>
              </li>

              <li className="nav__item">
                <a href="#contact" className="nav__link">
                  {/* <RiChat3Line /> */}
                  <lord-icon
                    src="https://cdn.lordicon.com/wzrwaorf.json"
                    trigger="hover"
                    stroke="bold"
                    colors="primary:#9ce5f4,secondary:#16a9c7"
                    style={{ width: '32px', height: '32px' }}
                  ></lord-icon>
                </a>
              </li>
            </ul>
          </div>
        </nav>

        {/* <div className="nav__footer">
                    <button onClick={() => { props.switchTheme(); showMenu(!toggle) }} className="nav__link footer__button">
                        {props.theme === 'light' ? <RiMoonLine /> : <RiSunLine />}
                    </button>
                </div> */}
      </aside>

      <div className={toggle ? 'nav__toggle nav__toggle-open' : 'nav__toggle'} onClick={() => showMenu(!toggle)}>
        <RiMenu2Line />
      </div>
    </>
  )
}

export default Sidebar
