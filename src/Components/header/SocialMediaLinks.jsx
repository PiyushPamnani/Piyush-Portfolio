import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";

const SocialMediaLinks = () => {
  return (
    <div className="social_links">
      <a
        href="https://www.linkedin.com/in/piyushpamnani2001/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/PiyushPamnani" target="_blank">
        <BsGithub />
      </a>
      <a href="https://leetcode.com/piyushpamnani22/" target="_blank">
        <SiLeetcode />
      </a>
    </div>
  );
};

export default SocialMediaLinks;
