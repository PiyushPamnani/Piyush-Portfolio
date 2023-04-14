import { React, useState, useEffect } from "react";
import { AiOutlineHome, AiOutlineUser, AiOutlineMessage } from "react-icons/ai";
import { TbBook2 } from "react-icons/tb";
import { SiDatabricks } from "react-icons/si";
import { VscFileSymlinkDirectory } from "react-icons/vsc";
import "./navbar.css";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("#");

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset + 6;
      const homeSection = document.getElementById("home");
      const aboutSection = document.getElementById("about");
      const skillsSection = document.getElementById("skills");
      const experienceSection = document.getElementById("experience");
      const portfolioSection = document.getElementById("portfolio");
      const contactSection = document.getElementById("contact");

      if (
        scrollTop >= homeSection.offsetTop &&
        scrollTop < aboutSection.offsetTop
      ) {
        setActiveNav("#");
      } else if (
        scrollTop >= aboutSection.offsetTop &&
        scrollTop < skillsSection.offsetTop
      ) {
        setActiveNav("#about");
      } else if (
        scrollTop >= skillsSection.offsetTop &&
        scrollTop < experienceSection.offsetTop
      ) {
        setActiveNav("#skills");
      } else if (
        scrollTop >= experienceSection.offsetTop &&
        scrollTop < portfolioSection.offsetTop
      ) {
        setActiveNav("#experience");
      } else if (
        scrollTop >= portfolioSection.offsetTop &&
        scrollTop < contactSection.offsetTop
      ) {
        setActiveNav("#portfolio");
      } else if (scrollTop >= contactSection.offsetTop) {
        setActiveNav("#contact");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#skills"
        onClick={() => setActiveNav("#skills")}
        className={activeNav === "#skills" ? "active" : ""}
      >
        <SiDatabricks />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <TbBook2 />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNav("#portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}
      >
        <VscFileSymlinkDirectory />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <AiOutlineMessage />
      </a>
    </nav>
  );
};

export default Navbar;
