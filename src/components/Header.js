import React from "react";
import { Link } from "react-router-dom";
import igLogo from "../images/ig-logo-round.png";
import githubLogo from "../images/github-logo.png";

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
              <img
                className="nav-icons ig-logo"
                src={igLogo}
                alt="instagram logo"
              />
            </a>
            <a
              href="https://github.com/narasaka/damatricks"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="nav-icons github-logo"
                src={githubLogo}
                alt="github logo"
              />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
