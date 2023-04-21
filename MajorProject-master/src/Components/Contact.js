import React, { useState } from "react";
import "../styles/contact.css";
import poster5 from "../Assets/poster5.jpg";
import contact1 from "../Assets/contact1.gif";
import { toast } from "react-hot-toast";
import axios from "axios";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(0);
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isProcessed, setIsProcessed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(`Your Data :  ${name} -- ${email} -- ${phone} -- ${subject} -- ${message} `);
    let loggeduser = JSON.parse( localStorage.getItem('user'))

    if(loggeduser)
    {
      const res = axios
      .post("http://localhost:4000/api/contact", {
        name,
        email,
        phone,
        subject,
        message,
        isProcessed,
      })
      .then((res) => {
        console.log(res.data.createdData);
        toast.success(`Thanks ${res.data.createdData.name}! for feedback`);
      })
      .catch((err) => {
        console.log(err.message);
        toast.success("some error Occured at backend");
      });

    }
    else
    {
      toast.success('Login to send message');
    }
    
  };

  return (
    <>
      <header className="contact-container">
        <img src={poster5} alt="" />
      </header>

      <form onSubmit={handleSubmit}>
        <div className="contact-form">
          <div className="form-left">
            <div className="form-div1">
              <h2>Send Us a Message</h2>
              <p>
                <i className="fa-solid fa-envelope"></i>
              </p>
            </div>
            <div className="form-div2">
              <div className="input-div">
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="input-div">
                <input
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="input-div">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  name="number"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="input-div">
                <input
                  type="text"
                  placeholder="Subject"
                  name="subject"
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>
            </div>
            <div className="form-div3">
              <input
                type="text"
                placeholder="Message"
                name="message"
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <div className="form-div4">
              <div className="btn">
                <input type="submit" />
                <p>
                  <i className="fa-solid fa-paper-plane"></i>
                </p>
              </div>
            </div>
          </div>
          <div className="form-right">
            <h2>REACH TO US</h2>

            <img src={contact1} alt="" className="contact-gif" />

            <a href="mailto:support@funding.in">
              <i className="fa-solid fa-envelope"> </i> support@funding.in
            </a>
          </div>
        </div>
      </form>
    </>
  );
}

export default Contact;
