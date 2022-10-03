import { buildUrl } from 'cloudinary-build-url';
import cloudName from '../../utils/cloudinary/cloudName';
import Image from 'next/image';
import Navbar from '../Navbars/Navbar';
import { useEffect } from 'react';
//import hs from '../../gsap/hs';

const TestPage = () => {
  return (
    <>
      <Navbar />
      <main className="projects-container flex-around">
        {/* <div className="yearsNav-container">
      <YearsNav />
    </div> */}
      </main>
    </>
  );
};

export default TestPage;
