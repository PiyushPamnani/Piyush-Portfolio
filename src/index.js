import React from "react";
import ReactDOM from "react-dom";
import { Helmet } from "react-helmet";
import App from "./App";
import "./index.css";

const title = "Piyush Pamnani";
const description = "Welcome to Piyush's Portfolio.";
const keywords = "Piyush Pamnani, Piyush, Pamnani, Portfolio";
const author = "Piyush Pamnani";
const canonical = "https://piyushpamnani.github.io/Piyush-Portfolio";

ReactDOM.render(
  <>
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <link rel="canonical" href={canonical} />
    </Helmet>
    <App />
  </>,
  document.querySelector("#root")
);
