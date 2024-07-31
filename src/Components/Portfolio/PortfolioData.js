import IMG1 from "../../assets/project-images/collab-artist.png";
import IMG2 from "../../assets/project-images/memories-project.png";
import IMG3 from "../../assets/project-images/hey-prompts.png";
import IMG4 from "../../assets/project-images/blood-disease-prediction.jpg";
import IMG5 from "../../assets/project-images/You-Tube-Clone.png";
import IMG6 from "../../assets/project-images/nike-landing-page.png";
import IMG7 from "../../assets/project-images/expense-tracker.jpg";
import IMG8 from "../../assets/project-images/job-scout.png";
import IMG9 from "../../assets/project-images/Supermarket_Billing_System.jpg";
import IMG10 from "../../assets/project-images/Lane_Detection_OpenCV.jpg";

export const data = [
  {
    id: 1,
    image: IMG1,
    title: "Collab Artist",
    github: "https://github.com/Devesh007suii/TestRepo",
    demo: "https://collabartist-devesh007suiis-projects.vercel.app/",
    description:
      "A MERN Stack application built by a team of two where users can interact with a visually appealing frontend, listen to beats, and provide feedback on the uploaded beats. Utilized the useLocation hook from react-router-dom to check the URL for a specific variable, enabling admin functionalities such as uploading or deleting beats and modifying questions in the review form. This project showcased effective collaboration and advanced use of React, MongoDB, Express, and Node.js.",
  },
  {
    id: 2,
    image: IMG2,
    title: "Memories",
    github: "https://github.com/PiyushPamnani/memories-project",
    demo: "https://piyushpamnani.github.io/memories-project/",
    description:
      "Completed a full-stack MERN (MongoDB, Express, React, Node.js) project named 'Memories' that includes a form section for submitting posts and a posts section for displaying created posts. Upon form submission, a post with a unique ID is automatically generated and displayed on the screen. The project also features seamless user authentication through Google login, as well as manual sign-in/sign-up functionality using JSON Web Token (JWT) for secure authentication and authorization.",
  },
  {
    id: 3,
    image: IMG3,
    title: "Hey-Prompts",
    github: "https://github.com/PiyushPamnani/hey-prompts",
    demo: "https://hey-prompts.vercel.app/",
    description:
      "Hey-Prompts, built using Next.js, features a robust CRUD system enabling effortless prompt management. Seamlessly integrating Google Account sign-in, users can explore both their own and community-created prompts. Leveraging MongoDB as the database enhances data storage and retrieval efficiency. Next.js ensures a polished performance, while the platform's Google Account authentication enhances accessibility and security, creating a seamless and engaging prompt-sharing experience.",
  },
  {
    id: 4,
    image: IMG4,
    title: "Blood Disease Prediction",
    github: "https://github.com/PiyushPamnani/Blood-Disease-Prediction",
    demo: "https://ml-project-45eu.onrender.com/",
    description:
      "A machine learning model aimed at predicting a wide range of blood diseases such as diabetes, anemia and CHD. Also designed and implemented a user-friendly interface to enable the efficient input of relevant parameters for accurate disease predictions. The main routing of the interface is powered by Flask, while the HTML files are rendered using Flask to deliver a seamless and responsive user experience.",
  },
  {
    id: 5,
    image: IMG5,
    title: "YouTube Clone",
    github: "https://github.com/PiyushPamnani/You-Tube-Clone",
    demo: "https://p2-youtube-clone.netlify.app/",
    description:
      "'YouTube Clone' is a ReactJS-based project, featuring a stylish and responsive user interface designed with Material UI 5. It leverages Rapid API integration to fetch video data, enabling seamless access to a vast library of videos. Users can browse videos, view video details, explore channels and perform searches for content. The project demonstrates the capabilities of ReactJS, Material UI 5, Rapid API and modern web development techniques, offering an interactive platform for video discovery.",
  },
  {
    id: 6,
    image: IMG6,
    title: "Nike Landing Page",
    github: "https://github.com/PiyushPamnani/tailwind-css",
    demo: "https://nike-nine-sable.vercel.app/",
    description:
      "The Nike Landing Page is a captivating web application that introduces the Nike brand through an eye-catching hero section. It showcases popular Nike shoes with prices and ratings, highlights the brand's commitment to quality and values and presents Nike's services in a visually appealing manner. Special offers and customer reviews add to the brand's appeal, while a subscription option keeps users connected. The footer provides contact information and essential links, making it a concise yet engaging representation of Nike's identity and offerings.",
  },
  {
    id: 7,
    image: IMG7,
    title: "Expense Tracker",
    github: "https://github.com/PiyushPamnani/Expense-Tracker",
    demo: "https://piyushpamnani.github.io/Expense-Tracker/",
    description:
      "Successfully developed a project consisting of three main sections: Income Details, Expense Details and Main Form. The Main Form allows users to create transactions by inputting details. Automatic updating of the Income and Expense Details chart based on the data entered in the Main Form, providing real-time visualizations. Furthermore, to enhance convenience, I have enabled voice command input using Speechly, allowing users to interact with the application using voice commands",
  },
  {
    id: 8,
    image: IMG8,
    title: "Job-Scout",
    github: "https://github.com/PiyushPamnani/job-scout",
    demo: "https://expo.dev/@piyushpamnani/React-Native-Project/",
    description:
      "I have developed a job search application that offers two main sections: Popular Jobs and Nearby Jobs. The application allows users to search for jobs based on their preferences, including full-time, part-time or contractor basis. Users can access detailed job information, including job descriptions, required qualifications and responsibilities. While the core functionalities have been successfully implemented, there are ongoing efforts to incorporate additional features.",
  },
  {
    id: 9,
    image: IMG9,
    title: "Supermarket Billing System using C++",
    github: "https://github.com/PiyushPamnani/Supermarket-Billing-System",
    demo: "",
    description:
      "Developed a menu-driven program that offers three options for users to select: administrator, customer or exit to stop the program. If the user is a new user, they are directed to the administrator part first, where they can add products, set prices for products, delete existing products and edit product names and prices. In the customer part, users can select products from the menu, specify the quantity for each product and generate a final bill which is printed on the console. This program provides a comprehensive solution for managing products and generating bills in an organized and user-friendly manner.",
  },
  {
    id: 10,
    image: IMG10,
    title: "Lane Detection using OpenCV",
    github: "https://github.com/PiyushPamnani/Lane-Detection-using-OpenCV",
    demo: "",
    description:
      "A lane detection system using OpenCV and NumPy. The system incorporates various functions, including Canny edge detection, region of interest selection and Hough lines detection, to accurately identify straight road lanes. However, it should be noted that this system may not work effectively on curved roads as the Hough lines function is not suitable for detecting lanes on such roads. In such cases, the program terminates to avoid inaccurate results.",
  },
];
