import React, { useState } from "react";
import TouchWithMe from "./TouchWithMe";
import Image from "../assests/images/contact-img.1b0b5a50ad6c3e42afb6.jpg";
const ContactForm = () => {
  const [fname, setFName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = () => {
    console.log(fname, email, phone, message);
    setFName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };
  return (
    <>
      <div className="contact">
        <h1>Contact Me</h1>
        <div className="contact1">
          <div className="contactBox">
            <img src={Image} alt="handshake" className="handShake" />
            <p>
              MERN Stack Developer I am open to work. Connect with me via E-mail
              and call in to my Acccount
            </p>
            <p>Phone: +91-9798617082</p>
            <p>Email: shreyasinghlnu2@gmail.com</p>
            <TouchWithMe />
          </div>
          <div className="contactForm">
            <div className="c11">
              <div className="c1">
                <p>Full Name</p>
                <input
                  type="text"
                  placeholder="Enter your Full Name"
                  className="text"
                  value={fname}
                  onChange={(e) => {
                    setFName(e.target.value);
                  }}
                />
              </div>
              <div className="c1">
                <p>Email address</p>
                <input
                  type="email"
                  placeholder="Enter email"
                  className="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="c1">
                <p>Phone </p>
                <input
                  type="tel"
                  placeholder="Enter your Phone Number"
                  className="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="c1">
                <p>Message</p>
                <textarea
                  type="text"
                  placeholder="Enter your Message"
                  className="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
            </div>
            <button onClick={handleSubmit}>Send Messages</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
