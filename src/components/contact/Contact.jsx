import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import emailjs from '@emailjs/browser'

import './Contact.css'
import 'react-toastify/dist/ReactToastify.css'

const Contact = (props) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const submitHandler = async (e) => {
    e.preventDefault()
    if (!name || !email || !subject || !message) {
      return toast.error('Please complete the form above')
    }

    setLoading(true)

    const data = {
      name,
      email,
      subject,
      message,
    }

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        data,
        process.env.REACT_APP_EMAILJS_PUBLIC_API
      )
      .then(
        (result) => {
          setLoading(false)
          toast.success(`Successfully sent email.`)
        },
        (error) => {
          setLoading(false)
          console.log(error)
          toast.error(error.text)
        }
      )
  }

  return (
    <section className="contact container section" id="contact">
      <h2 className="section__title">Get In Touch</h2>

      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Let's talk about everything!</h3>
          <p className="contact__details">
            Don't like forms? Send me an email.
            <lord-icon
              src="https://cdn.lordicon.com/aycieyht.json"
              trigger="in"
              delay="1500"
              stroke="bold"
              state="in-assembly"
              colors="primary:#9ce5f4,secondary:#16a9c7"
              style={{ width: '32px', height: '32px' }}
            ></lord-icon>
          </p>
          <dotlottie-player
            src="https://lottie.host/ed9534e8-6984-421d-874f-74affa886bac/cymVn7ya09.json"
            background="transparent"
            speed="1"
            style={{ width: '300px', height: '300px' }}
            loop
            autoplay
          ></dotlottie-player>
        </div>

        <form onSubmit={submitHandler} className="contact__form">
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input
                type="text"
                className="contact__form-input"
                placeholder="Insert your name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="contact__form-div">
              <input
                type="email"
                className="contact__form-input"
                placeholder="Insert your email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="contact__form-div">
            <input
              type="text"
              className="contact__form-input"
              placeholder="Insert your subject"
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>

          <div className="contact__form-div contact__form-area">
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="contact__form-input"
              placeholder="Write your message"
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>

          <button type="submit" className="btn">
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
        <ToastContainer position="bottom-right" theme={props.theme} />
      </div>
    </section>
  )
}

export default Contact
