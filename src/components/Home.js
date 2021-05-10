import React from "react";
import githubLogo from "../images/github-logo.png";
import igLogo from "../images/ig-logo-round.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <header className="home-header">
        <div className="home-header-main">damatricks</div>
        <div className="home-header-desc">a kendama utility app</div>
      </header>
      <nav className="home-links">
        <Link className="tricks-link" to="/list">
          browse tricklists
        </Link>
      </nav>
      <footer>
        <a
          href="https://instagram.com/nathnaeltg"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="home-icons ig-logo"
            src={igLogo}
            alt="instagram logo"
          />
        </a>
        <a
          className="github-logo"
          href="https://github.com/narasaka"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="home-icons github-logo"
            src={githubLogo}
            alt="github logo"
          />
        </a>
      </footer>
    </div>
  );
};

export default Home;
