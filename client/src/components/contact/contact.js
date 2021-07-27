import React from 'react'
import './contact.css'
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleUp} from '@fortawesome/free-solid-svg-icons'

const ContactForm = () => (
  <div className="form-container">
      <div className="previous">
            <NavLink to="/portfolio">
              <button className="portButton">
                <FontAwesomeIcon icon={faChevronCircleUp} />
              </button>              
            </NavLink>
          </div>
    <form className="contact-form" method="POST" action="/contact">
      <h1 className="contact-title">Contact</h1>
      <h3> Want to get in touch ?</h3>
        <div className="form-field">
          <label htmlFor="name">
            <div className="label-content">Name:</div>
            <input type="text" name="name" required />
          </label>
        </div>

        <div className="form-field">
          <label htmlFor="email">
            <div className="label-content">Email:</div>
            <input type="email" name="email" required />
          </label>
        </div>

        <div className="form-field messageForm">
          <label htmlFor="message">
            <div className="label-content">Message:</div>
            <textarea className="message-text" name="message" rows="8" required />
          </label>
        </div>

        <button className="submitContact" type="submit">Get In Touch</button>
    </form>
  </div>
)

export default ContactForm
