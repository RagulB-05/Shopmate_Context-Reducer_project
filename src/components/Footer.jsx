import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <span>@Shopmate 2024</span>
      <nav>
        <Link
          to="https://www.linkedin.com/in/ragulb05/"
          target="_blank"
          rel="noreferrer"
          className="link"
        >
          Linkedin
        </Link>
        <Link
          to="https://github.com/RagulB-05"
          target="_blank"
          rel="noreferrer"
          className="link"
        >
          GitHub
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;
