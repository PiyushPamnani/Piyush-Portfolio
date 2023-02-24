import React from "react";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        PIYUSH
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer_socials">
        <a href="https://instagram.com/piyush.pamnani">
          <BsInstagram />
        </a>
        <a href="https://twitter.com/piyushpamnani22">
          <BsTwitter />
        </a>
      </div>

      <div className="footer_copyright">
        <small>&copy;Piyush_Pamnani. All Rights Reserved. 2023</small>
      </div>
    </footer>
  );
};

export default Footer;
