import React from "react";
import { Link } from "react-router-dom";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";

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
          <AiFillInstagram size={32} />
        </a>
        <a
          className="github-logo"
          href="https://github.com/narasaka/damatricks"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub size={32} />
        </a>
      </footer>
    </div>
  );
};

export default Home;
