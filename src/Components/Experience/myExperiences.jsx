import deqodeImg from "../../assets/experience/deqode.jpg";
import jioImg from "../../assets/experience/jio.png";
import evolveImg from "../../assets/experience/evolve.jpg";
import confidential from "../../assets/experience/confidential.webp";

export const experiences = [
  {
    title: "Software Developer",
    company: "Deqode Solutions",
    duration: "October 2024 - Present",
    logo: deqodeImg,
    details: [
      `Worked on a blockchain-enabled full-stack web application using React, Nest.js, MySQL, and Web3 technologies.`,
      `Implemented secure wallet integration and gasless transaction flows, ensuring high transaction reliability and smart contract stability`,
      `Improved system reliability by designing RPC fallback mechanisms and reducing blockchain transaction failures significantly.`,
      `Contributed to a secure full-stack banking platform, resolving critical vulnerabilities and maintaining high test coverage with Jest.`,
    ],
  },
  {
    title: "Software Developer Intern",
    company: "Jio Platforms Limited",
    duration: "March 2024 - June-2024",
    logo: jioImg,
    details: [
      `Enhanced web and mobile applications using React.js, Firebase and React-Native.`,
      `Added a download function that arranges pre-captured screen images into a PDF, capable of downloading large files within 5-10 seconds.`,
      `Implemented an active floating navigation bar in the mobile app that hides on scroll up and appears on scroll down.`,
    ],
  },
  {
    title: "Web Developer Intern",
    company: "Evolve Webinfo Pvt. Ltd.",
    duration: "December 2023 - March 2024",
    logo: evolveImg,
    details: [
      `Collaborated effectively with the development team to enhance the company's software solutions.`,
      `Designed visually appealing reports and efficiently managed data within MySQL databases.`,
      `Developed user interfaces using PHP`,
      `Implemented download functionality and report redirection, alongside JavaScript-powered calculations.`,
      `Designed and implemented Custom WordPress Themes and Plugins.`,
    ],
  },
  {
    title: "Full Stack Developer Intern",
    company: "Digilytics Systems",
    duration: "July 2022 - January 2023",
    logo: confidential,
    details: [
      "Edited and added new features to an existing website.",
      "Improved the website's navigation bar and user interface.",
      "Implemented Dynamic QR code generation with unique runtime URLs.",
      "Added a download button for downloading a CSV file.",
    ],
  },
];
