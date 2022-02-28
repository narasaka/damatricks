import Link from "next/link";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";

const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <ul className="nav-links">
          <li className="logo">
            <Link href="/">damatricks</Link>
          </li>
          <li className="socials">
            <Link href="https://instagram.com/nathnaeltg">
              <a target="_blank" rel="noreferrer">
                <AiFillInstagram size={32} className="ig-logo" />
              </a>
            </Link>
            <Link href="https://github.com/narasaka/damatricks">
              <a target="_blank" rel="noreferrer">
                <AiFillGithub size={32} className="github-logo" />
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
