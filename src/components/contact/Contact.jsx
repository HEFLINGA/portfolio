import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./contact.css";

import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9prp7sa",
        "template_d05eeqj",
        form.current,
        "Xj0a0aJzNyj9ALbH2"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className="contact_option_icon" />
            <h4>Email</h4>
            <h5>auston.hefling@outlook.com</h5>
            <a href="mailto:auston.hefling@outlook.com">Send an Email</a>
          </article>
          <article className="contact_option">
            <RiMessengerLine className="contact_option_icon" />
            <h4>Message</h4>
            <h5>Facebook Messenger</h5>
            <a
              href="https://m.me/auston.m.rich"
              target="_blank"
              rel="noreferrer"
            >
              Send a Message
            </a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className="contact_option_icon" />
            <h4>Phone</h4>
            <h5>+1 (509) 675-5183</h5>
            <a href="#contact">Text or Call</a>
          </article>
        </div>

        {/* END OF CONTACT OPTIONS */}

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="messege"
            rows="7"
            placeholder="Your Messege"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Messege
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
