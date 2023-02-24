import { React, useState } from "react";
import { AiOutlineHome, AiOutlineUser, AiOutlineMessage } from "react-icons/ai";
import { TbBook2 } from "react-icons/tb";
import { SiDatabricks } from "react-icons/si";
import { VscFileSymlinkDirectory } from "react-icons/vsc";
import "./navbar.css";

const Navbar = () => {
  const [activeNav, setactiveNav] = useState("#");

  return (
    <nav>
      <a
        href="#"
        onClick={() => setactiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setactiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#skills"
        onClick={() => setactiveNav("#skills")}
        className={activeNav === "#skills" ? "active" : ""}
      >
        <SiDatabricks />
      </a>
      <a
        href="#experience"
        onClick={() => setactiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <TbBook2 />
      </a>
      <a
        href="#portfolio"
        onClick={() => setactiveNav("#portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}
      >
        <VscFileSymlinkDirectory />
      </a>
      <a
        href="#contact"
        onClick={() => setactiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <AiOutlineMessage />
      </a>
    </nav>
  );
};

export default Navbar;
