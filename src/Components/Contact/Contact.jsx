"use client";

import { useState, useRef, useEffect } from "react";
import { VscMail } from "react-icons/vsc";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import "./contact.css";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
const CONTACT_EMAIL = "piyushpamnani46@gmail.com";
const FALLBACK_ERROR = `Something went wrong. Please try again or email me at ${CONTACT_EMAIL}.`;

const Contact = () => {
  // status: "idle" | "sending" | "success" | "error"
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const form = useRef();

  // Hide the success message after a few seconds
  useEffect(() => {
    if (status !== "success") return undefined;
    const timer = setTimeout(() => setStatus("idle"), 5000);
    return () => clearTimeout(timer);
  }, [status]);

  const sendEmail = async (e) => {
    e.preventDefault();
    if (status === "sending") return;

    if (!ACCESS_KEY) {
      console.error(
        "Web3Forms access key is missing. Set VITE_WEB3FORMS_ACCESS_KEY.",
      );
      setErrorMessage(FALLBACK_ERROR);
      setStatus("error");
      return;
    }

    // JSON body: Web3Forms answers JSON requests with JSON (errors included)
    const fields = Object.fromEntries(new FormData(form.current));
    const payload = {
      ...fields,
      access_key: ACCESS_KEY,
      subject: `New message from ${fields.name} via Portfolio`,
      from_name: "Piyush Portfolio",
    };

    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
        signal: AbortSignal.timeout(15000),
      });
      const data = await response.json().catch(() => ({}));

      if (response.ok && data.success) {
        form.current.reset();
        setStatus("success");
      } else {
        console.error("Web3Forms error:", response.status, data);
        setErrorMessage(data.message || data.body?.message || FALLBACK_ERROR);
        setStatus("error");
      }
    } catch (error) {
      console.error("Web3Forms request failed:", error);
      setErrorMessage(FALLBACK_ERROR);
      setStatus("error");
    }
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
            <BsWhatsapp className="contact_option-icon" />
            <h4>WhatsApp</h4>
            <h5>+91-7509245660</h5>
            <a
              href="https://web.whatsapp.com/send/?phone=7509245660"
              target="_blank"
              rel="noreferrer"
            >
              Click Here
            </a>
          </article>
          {/* ======================================== */}

          <article className="contact_option instagram">
            <AiOutlineInstagram className="contact_option-icon" />
            <h4>Instagram</h4>
            <h5>@piyush.pamnani</h5>
            <a
              href="https://ig.me/m/piyush.pamnani"
              target="_blank"
              rel="noreferrer"
            >
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
          {/* Honeypot: hidden from people, bots fill it and Web3Forms rejects the submission */}
          <input
            type="checkbox"
            name="botcheck"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            style={{ display: "none" }}
          />
          <button
            type="submit"
            className="btn btn-primary"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>
          <div role="status" aria-live="polite">
            {status === "success" && (
              <p style={{ color: "#00ff00" }}>Message Sent Successfully</p>
            )}
            {status === "error" && (
              <p style={{ color: "#ff6b6b" }}>{errorMessage}</p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
