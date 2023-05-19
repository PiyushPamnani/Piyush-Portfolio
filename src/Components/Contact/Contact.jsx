import { React, useRef } from "react";
import { VscMail } from "react-icons/vsc";
import { AiOutlineInstagram } from "react-icons/ai";
import emailjs from "@emailjs/browser";
import "./contact.css";

const Contact = () => {
  const serviceId = process.env.REACT_APP_EMAILJS_service_id;
  const templateId = process.env.REACT_APP_EMAILJS_template_id;
  const publicKey = process.env.REACT_APP_EMAILJS_public_key;

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
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

      <div className="container contact__container">
        <div className="contact_options">
          <article className="contact_option">
            <VscMail className="contact_option-icon" />
            <h4>Email</h4>
            <h5>piyushpamnani46@gmail.com</h5>
            <a href="mailto:piyushpamnani46@gmail.com">Click Here</a>
          </article>
          {/* ======================================== */}

          <article className="contact_option">
            <AiOutlineInstagram className="contact_option-icon" />
            <h4>Instagram</h4>
            <h5>@piyush.pamnani</h5>
            <a href="https://ig.me/m/piyush.pamnani" target="_blank">
              Click Here
            </a>
          </article>
        </div>
        {/* ===============END OF CONTACT INFO================== */}

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Full Name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email Id"
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Enter Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
