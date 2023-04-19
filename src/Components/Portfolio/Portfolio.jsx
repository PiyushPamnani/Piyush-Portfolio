import React, { useState } from "react";
import IMG1 from "../../assests/project-images/memories-project.png";
import IMG2 from "../../assests/project-images/expense-tracker.jpg";
import IMG3 from "../../assests/project-images/Supermarket_Billing_System.jpg";
import IMG4 from "../../assests/project-images/Lane_Detection_OpenCV.jpg";
import "./portfolio.css";
// import Swiper core and required modules
import { Pagination } from "swiper";
import { SlArrowRightCircle, SlArrowLeftCircle } from "react-icons/sl";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Portfolio = () => {
  const [isActive, setIsActive] = useState(false);

  const handleDescription = () => setIsActive(!isActive);

  const data = [
    {
      id: 1,
      image: IMG1,
      title: "Memories",
      github: "https://github.com/PiyushPamnani/memories-project",
      demo: "https://piyushpamnani.github.io/memories-project/",
      description:
        "Completed a full-stack MERN (MongoDB, Express, React, Node.js) project named 'Memories' that includes a form section for submitting posts and a posts section for displaying created posts. Upon form submission, a post with a unique ID is automatically generated and displayed on the screen. The project also features seamless user authentication through Google login, as well as manual sign-in/sign-up functionality using JSON Web Token (JWT) for secure authentication and authorization.",
    },
    {
      id: 2,
      image: IMG2,
      title: "Expense Tracker",
      github: "https://github.com/PiyushPamnani/Expense-Tracker",
      demo: "https://piyushpamnani.github.io/Expense-Tracker/",
      description:
        "Successfully developed a project consisting of three main sections: Income Details, Expense Details, and Main Form. The Main Form allows users to create transactions by inputting details. Automatic updating of the Income and Expense Details chart based on the data entered in the Main Form, providing real-time visualizations. Furthermore, to enhance convenience, I have enabled voice command input using Speechly, allowing users to interact with the application using voice commands",
    },
    {
      id: 3,
      image: IMG3,
      title: "Supermarket Billing System using C++",
      github: "https://github.com/PiyushPamnani/Supermarket-Billing-System",
      demo: "",
      description:
        "Developed a menu-driven program that offers three options for users to select: administrator, customer, or exit to stop the program. If the user is a new user, they are directed to the administrator part first, where they can add products, set prices for products, delete existing products, and edit product names and prices. In the customer part, users can select products from the menu, specify the quantity for each product, and generate a final bill, which is printed on the console. This program provides a comprehensive solution for managing products and generating bills in an organized and user-friendly manner.",
    },
    {
      id: 4,
      image: IMG4,
      title: "Lane Detection using OpenCV",
      github: "https://github.com/PiyushPamnani/Lane-Detection-using-OpenCV",
      demo: "",
      description:
        "Developed a lane detection system using OpenCV and NumPy. The system incorporates various functions, including Canny edge detection, region of interest selection, and Hough lines detection, to accurately identify straight road lanes. However, it should be noted that this system may not work effectively on curved roads as the Hough lines function is not suitable for detecting lanes on such roads. In such cases, the program terminates to avoid inaccurate results.",
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
        onSlideChange={() => setIsActive(false)}
      >
        {data.map(({ id, image, title, github, demo, description }) => {
          return (
            <SwiperSlide key={id} className="portfolio_item">
              {isActive ? (
                <div
                  className={isActive ? "flip-description" : "flip_description"}
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
                  className={isActive ? "flip-description" : "flip_description"}
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
                </div>
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Portfolio;
