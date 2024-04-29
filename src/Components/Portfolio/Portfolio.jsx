import React, { useState } from "react";
import "./portfolio.css";
import { data } from "./PortfolioData";
// import Swiper core and required modules
import { Pagination, Navigation } from "swiper";
import { SlArrowRightCircle, SlArrowLeftCircle } from "react-icons/sl";
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Portfolio = () => {
  const [isActive, setIsActive] = useState(false);

  const handleDescription = () => setIsActive(!isActive);

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div style={{ position: "relative" }}>
        <div className="swiper-button image-swiper-button-next">
          <IoIosArrowDropright />
        </div>
        <div className="swiper-button image-swiper-button-prev">
          <IoIosArrowDropleft />
        </div>
        <Swiper
          className="container portfolio__container"
          modules={[Pagination, Navigation]}
          spaceBetween={40}
          slidesPerView={1}
          navigation={{
            nextEl: ".image-swiper-button-next",
            prevEl: ".image-swiper-button-prev",
            disabledClass: "swiper-button-disabled",
          }}
          pagination={{ clickable: true }}
          onSlideChange={() => setIsActive(false)}
        >
          {data.map(({ id, image, title, github, demo, description }) => {
            return (
              <SwiperSlide key={id} className="portfolio_item">
                {isActive ? (
                  <div
                    className={
                      isActive ? "flip-description" : "flip_description"
                    }
                  >
                    <div className="none-flip">
                      <span className="portfolio_item-less">
                        <span
                          className="show_description"
                          onClick={handleDescription}
                        >
                          <SlArrowLeftCircle />
                        </span>
                      </span>
                      <div className="portfolio_item-description">
                        {description}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div
                    className={
                      isActive ? "flip-description" : "flip_description"
                    }
                  >
                    <span className="portfolio_item-more">
                      <span className="portfolio-description">Description</span>
                      <span
                        className="show_description"
                        onClick={handleDescription}
                      >
                        <SlArrowRightCircle />
                      </span>
                    </span>
                    <div className="portfolio_item-img">
                      <img
                        src={image}
                        height="285px"
                        alt="piyush-portfolio-imgs"
                      />
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
                  </div>
                )}
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Portfolio;
