import { React, useState, useEffect } from "react";
import "./arrow.css";
import { BsArrowUpSquareFill } from "react-icons/bs";

const Arrow = () => {
  const [nameClass, setnameClass] = useState("arrow_Ncontainer");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY <= 711) {
        setnameClass("arrow_Ncontainer");
      } else {
        setnameClass("arrow__container");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <a href="#" className={`${nameClass} active`}>
        <i>
          <BsArrowUpSquareFill />
        </i>
      </a>
    </div>
  );
};

export default Arrow;
