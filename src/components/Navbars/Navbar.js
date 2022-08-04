import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();
  return (
    <header className="navbar-container flex-between">
      <div className="flex-col items-center justify-center">
        <Link href="/">
          <div className="about-title">
            <h1 className="sea-gardens">Bertrand Bourion</h1>
            <h2 className="surfer">Portfolio</h2>
          </div>
        </Link>
      </div>
      <nav className="flex-col justify-center surfer">
        <div className="nav-items">
          <ul className="flex-around">
            <li className={router.pathname === '/about' && 'active'}>
              <Link href="/about">About</Link>
            </li>
            <li className={router.pathname === '/projects' && 'active'}>
              <Link href="/projects">Projects</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
