import React from "react";
import CV from "../../assests/Piyush Pamnani.pdf";

const Download_Buttons = () => {
  return (
    <div className="download_btns">
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default Download_Buttons;
