import React from "react";
import IMG1 from "../../assests/project-images/memories-project.png";
import IMG2 from "../../assests/project-images/expense-tracker.jpg";
import IMG3 from "../../assests/project-images/Supermarket_Billing_System.jpg";
import IMG4 from "../../assests/project-images/Lane_Detection_OpenCV.jpg";
import "./portfolio.css";
// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Portfolio = () => {
  const data = [
    {
      id: 1,
      image: IMG1,
      title: "Memories",
      github: "https://github.com/PiyushPamnani/memories-project",
      demo: "https://piyushpamnani.github.io/memories-project/",
    },
    {
      id: 2,
      image: IMG2,
      title: "Expense Tracker",
      github: "https://github.com/PiyushPamnani/Expense-Tracker",
      demo: "https://piyushpamnani.github.io/Expense-Tracker/",
    },
    {
      id: 3,
      image: IMG3,
      title: "Supermarket Billing System using C++",
      github: "https://github.com/PiyushPamnani/Supermarket-Billing-System",
      demo: "",
    },
    {
      id: 4,
      image: IMG4,
      title: "Lane Detection using OpenCV",
      github: "https://github.com/PiyushPamnani/Lane-Detection-using-OpenCV",
      demo: "",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <Swiper
        className="container portfolio__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <SwiperSlide key={id} className="portfolio_item">
              <div className="portfolio_item-img">
                <img src={image} height="285px" alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item-btn">
                <a
                  href={demo}
                  className={demo === "" ? "demoNone" : "btn btn-primary"}
                  target="_blank"
                >
                  Live Demo
                </a>
                <a href={github} className="btn" target="_blank">
                  GitHub
                </a>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Portfolio;
