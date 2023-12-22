import React from "react";
import CV from "../../assets/Piyush_Pamnani.pdf";

const Download_Buttons = () => {
  return (
    <div className="download_btns">
      <a href={CV} download="Piyush_Pamnani.pdf" className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default Download_Buttons;
