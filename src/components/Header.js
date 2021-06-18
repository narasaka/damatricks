import React from "react";
import { Link } from "react-router-dom";
import { AiFillInstagram, AiFillGithub } from "react-icons/ai";
// import igLogo from "../images/ig-logo-round.png";
// import githubLogo from "../images/github-logo.png";

const Header = () => {
  return (
    <header>
      <nav>
        <ul className="nav-links">
          <li className="logo">
            <Link to="/">damatricks</Link>
          </li>
          <li className="socials">
            <a
              href="https://instagram.com/nathnaeltg"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillInstagram size={32} className="ig-logo" />
            </a>
            <a
              href="https://github.com/narasaka/damatricks"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub size={32} className="github-logo" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
