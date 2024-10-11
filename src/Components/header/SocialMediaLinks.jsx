import React from "react";
import { BsLinkedin, BsGithub, BsStackOverflow } from "react-icons/bs";

const SocialMediaLinks = () => {
  return (
    <div className="social_links">
      <a href="https://www.linkedin.com/in/piyushpamnani2001/" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/PiyushPamnani" target="_blank">
        <BsGithub />
      </a>
      <a
        href="https://stackoverflow.com/users/27458191/piyush-pamnani"
        target="_blank"
      >
        <BsStackOverflow />
      </a>
    </div>
  );
};

export default SocialMediaLinks;
