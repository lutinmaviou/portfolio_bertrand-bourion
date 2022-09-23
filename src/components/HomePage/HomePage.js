import { useEffect } from 'react';
import Image from 'next/image';
import { buildUrl } from 'cloudinary-build-url';
import cloudName from '../../utils/cloudinary/cloudName';
import { motion } from 'framer-motion';
import ModalButton from './ModalButton';
import comingTitle from '../../gsap/comingTitle';
import comingMoon from '../../gsap/comingMoon';
import ModalInfo from './ModalInfo/ModalInfo';
import StarMenu from './StarMenu/StarMenu';
import Link from 'next/link';

const HomePage = () => {
  useEffect(() => {
    comingTitle();
    comingMoon();
  }, []);

  useEffect(() => {
    const modalButton = document.querySelector('.modal-container');
    const modalWindow = document.querySelector('.modalInfo-container');
    modalButton.addEventListener('click', () =>
      modalWindow.style.display === 'block'
        ? (modalWindow.style.display = 'none')
        : (modalWindow.style.display = 'block')
    );
  }, []);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    let count = 200;
    let i = 0;
    while (i < count) {
      let scene = document.querySelector('.stars-container');
      let dust = document.createElement('i');
      let x = Math.floor(Math.random() * window.innerWidth);
      let y = Math.floor(Math.random() * window.innerHeight);
      let size = Math.random() * 0.3;

      let duration = Math.random() * 10;

      dust.style.left = x + 'px';
      dust.style.top = y + 'px';
      dust.style.width = size + 'vw';
      dust.style.height = size + 'vw';

      dust.style.animationDuration = 20 + duration + 's';

      scene.appendChild(dust);
      i++;
    }
  }, []);

  /* useEffect(() => {
    const title = document.querySelector('.home-title');
    const linkToAboutPage = document.querySelector('.linkToAboutPage');
    linkToAboutPage.addEventListener(
      'mouseenter',
      () => (title.style.filter = 'blur(0.4vw)')
    );
    linkToAboutPage.addEventListener(
      'mouseleave',
      () => (title.style.filter = 'blur(0)')
    );
  }, []); */

  const repo = 'portfolio-next/';
  const moon = buildUrl(`${repo}moon_f6qesv.png`, cloudName);
  const bg = buildUrl(`${repo}bg-boat_hcm2y0`, cloudName);

  return (
    <>
      <motion.div
        exit={{ rotateX: [0, 90], rotateZ: 50 }}
        transition={{ duration: 1.5, delay: 0.1 }}
        className="home-container"
      >
        <div className="stars-container"></div>

        <div className="moon">
          <Image src={moon} alt="Lune" layout="responsive" width="1500" height="1500" />
        </div>
        <Image src={bg} alt="Bateau sur l'océan" layout="fill" />
        <Link href="/about">
          <div className="linkToAboutPage"></div>
        </Link>
        <div className="home-title">
          <h1 className="sea-gardens">Bertrand Bourion</h1>
          <h2>on the way of creative thinking...</h2>
        </div>
        <div className="star-menu">
          <StarMenu />
        </div>
        <ModalButton />
        <ModalInfo />
      </motion.div>
    </>
  );
};

export default HomePage;
