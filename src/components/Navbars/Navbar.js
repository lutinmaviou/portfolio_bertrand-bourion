import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { buildUrl } from 'cloudinary-build-url';
import cloudName from '../../utils/cloudinary/cloudName';

const Navbar = () => {
  const router = useRouter();
  const repo = 'portfolio-next/';
  const GitHub = buildUrl(`${repo}github-logo_djzd6z`, cloudName);
  const LinkedIn = buildUrl(`${repo}linkedin-logo_rvtgg4`, cloudName);
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
            <li className={router.pathname === '/about' ? 'active' : ''}>
              <Link href="/about">About</Link>
            </li>
            <li className={router.pathname === '/portfolio' ? 'active' : ''}>
              <Link href="/portfolio">Portfolio</Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="external-links">
        <ul className="flex-around">
          <li>
            <Link href="https://github.com/lutinmaviou">
              <a target="_blank">
                <Image
                  src={GitHub}
                  alt="Logo GitHub"
                  layout="intrinsic"
                  width="60"
                  height="55"
                />
              </a>
            </Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com/in/bertrandbourion/">
              <a target="_blank">
                <Image
                  src={LinkedIn}
                  alt="Logo LinkedIn"
                  layout="intrinsic"
                  width="60"
                  height="60"
                />
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
