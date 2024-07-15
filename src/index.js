import React from "react";
import ReactDom from "react-dom/client";
import { Helmet } from "react-helmet";
import App from "./App";
import "./index.css";

const title = "Piyush Pamnani";
const description = "Welcome to Piyush's Portfolio.";
const keywords =
  "Piyush Pamnani, Piyush, Pamnani, piyush, pamnani, piyush pamnani";
const author = "Piyush Pamnani";

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
  <>
    <Helmet>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <link
        rel="canonical"
        href="https://piyushpamnani.github.io/Piyush-Portfolio"
      />
    </Helmet>
    <App />
  </>
);
