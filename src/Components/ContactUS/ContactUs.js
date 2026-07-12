import React from 'react'
import './ContactUs.css'
import msg_box from "../../assets/msg-box.png"
import mail from "../../assets/mail.png";
import call from "../../assets/call.png";
import loation from "../../assets/location.png";
const ContactUs = () => { 
  return (
      <>
          <div className="contactus container">
              <div className="contactus-col">
                  <h3>
                      Send us a message <img src={msg_box} alt="" />
                  </h3>
                  <p>
                      Thank you for your interest in Invisible Routes!<br></br>{" "}
                      <br></br>
                      If you have any questions, inquiries, or feedback, please
                      feel free to reach out to us using the contact form below.
                      We value your input and strive to provide the best
                      possible service to our clients and partners.
                  </p>
                  <ul>
                      <li>
                          {" "}
                          <img src={mail} alt="" />
                          invisibleroutes@gmail.com
                      </li>
                      <li>
                          {" "}
                          <img src={call} alt="" />
                          +91 9616088525
                      </li>
                      <li>
                          <img src={loation} alt="" />
                          278 Kalika Ji, New Delhi,<br></br>Delhi 110019
                      </li>
                  </ul>
              </div>
              <div className="contactus-col">
                  <form>
                      <label>Your name</label>
                      <input
                          type="text"
                          name="name"
                          placeholder="Enter your name"
                          rquired
                      />
                      <label>Your email</label>
                      <input
                          type="email"
                          name="email"
                          placeholder="Enter your email"
                          rquired
                      />
                      <label>Phone number</label>
                      <input
                          type="tel"
                          name="Phone"
                          placeholder="Enter your mobile number"
                          rquired
                      />
                      <label>Write your message here</label>
                      <textarea
                          Name="message"
                          id=""
                          rows="6"
                          placeholder="Enter your message"
                          required
                      ></textarea>
                      <button type="submit" className="btn dark-btn">
                          Submit now
                      </button>
                  </form>
              </div>
          </div>
      </>
  );
}

export default ContactUs