import React, { useEffect } from 'react';
import Navbar from '../Navbars/Navbar';
import Image from 'next/image';
import { buildUrl } from 'cloudinary-build-url';
import cloudName from '../../utils/cloudinary/cloudName';

const AboutPage = () => {
  const repo = 'portfolio-next/';
  const cloudsBg = buildUrl(`${repo}clouds_psujye`, cloudName);
  const me = buildUrl(`${repo}dark-me_tyiz7n`, cloudName);
  return (
    <>
      <Image src={cloudsBg} alt="Mer de nuages" layout="fill" />
      <Navbar />
      <main className="about-container">
        <div className="top-text surfer">
          <p>I am Bertrand, a JavaScript Frontend Developer with Backend skills.</p>
          <p>
            Having a great appetite for design and beautiful things, I am halfway between
            the creative web, with possibilities of 3D and exceptional rendering, and the
            traditional web.
          </p>
          <p>
            User experience being paramount, I focus a lot on UX / UI and strive to make
            the web accessible to all.
          </p>
          <p>I also use my knowledge of SEO / SEA for good search engine ranking.</p>
          <p>
            In perpetual technological watch, I am as concerned by my technical stack as
            by the general evolution of our digital universe.
          </p>
          <div className="me">
            <Image src={me} alt="Moi" layout="intrinsic" width="500" height="630" />
          </div>
        </div>
      </main>
    </>
  );
};

export default AboutPage;
