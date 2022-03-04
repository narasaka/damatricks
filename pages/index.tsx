import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>damatricks</title>
      </Head>
      <div className="home">
        <header className="home-header">
          <div className="home-header-main">damatricks</div>
          <div className="home-header-desc">a kendama utility app</div>
        </header>
        <nav className="home-links">
          <Link href="/list">
            <a className="tricks-link">browse tricklists</a>
          </Link>
        </nav>
        <footer>
          <Link href="https://instagram.com/nathnaeltg">
            <a target="_blank" rel="noreferrer">
              <AiFillInstagram size={32} />
            </a>
          </Link>
          <Link href="https://github.com/narasaka/damatricks">
            <a className="github-logo" target="_blank" rel="noreferrer">
              <AiFillGithub size={32} />
            </a>
          </Link>
        </footer>
      </div>
    </>
  );
};

export default Home;
