import { FC } from "react";
import Link from "next/link";

const Header: FC = () => (
  <div className="container">
    <div className="header">
      <div className="header__logo">
        <Link href="/" passHref>
          <a href="/">
            <span className="header__logo--prefix"> &gt; [</span>
            <span className="header__logo--root">devweb</span>
            <span className="header__logo--postfix">]# cd /home</span>
            <span className="header__logo--cursor" />
          </a>
        </Link>
      </div>

      <div className="header__nav">
        <Link href="/projects" passHref>
          <a href="/projects">
            <i className="header__nav-item fas fa-lg fa-briefcase icon" />
            <span className="header__nav-item--desc"> /projects</span>
          </a>
        </Link>

        <Link href="/contact" passHref>
          <a href="/contact">
            <i className="header__nav-item fas fa-lg fa-address-card icon" />
            <span className="header__nav-item--desc"> /contact</span>
          </a>
        </Link>
      </div>
    </div>
  </div>
);

export default Header;
