import { useEffect, useState } from 'react';
import Image from 'next/image';
import { buildUrl } from 'cloudinary-build-url';
import cloudName from '../../utils/cloudinary/cloudName';
import { motion } from 'framer-motion';
import ModalButton from './ModalButton';
import comingTitle from '../../gsap/comingTitle';
import comingMoon from '../../gsap/comingMoon';
import ModalInfo from './ModalInfo/ModalInfo';
import StarMenu from './StarMenu/StarMenu';
import deployMenu from '../../gsap/deployMenu';
import WelcomePage from '../WelcomePage/WelcomePage';

const HomePage = () => {
  //const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.addEventListener('load', () => {
      console.log('la page est chargée');
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    comingTitle();
    comingMoon();
    deployMenu();
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
      let stars = document.createElement('i');
      let x = Math.floor(Math.random() * window.innerWidth);
      let y = Math.floor(Math.random() * window.innerHeight);
      let size = Math.random() * 0.3;

      let duration = Math.random() * 10;

      stars.style.left = x + 'px';
      stars.style.top = y + 'px';
      stars.style.width = size + 'vw';
      stars.style.height = size + 'vw';

      stars.style.animationDuration = 20 + duration + 's';

      scene.appendChild(stars);
      i++;
    }
  }, []);

  const repo = 'portfolio-next/';
  const moon = buildUrl(`${repo}moon_f6qesv.png`, cloudName);
  const bg = buildUrl(`${repo}bg-boat_hcm2y0`, cloudName);
  const star = buildUrl(`${repo}star1_yflmqv`, cloudName);

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
        <div className="linkToAboutPage"></div>
        <div className="home-title">
          <h1 className="sea-gardens">Bertrand Bourion</h1>
          <h2>on the way of creative thinking...</h2>
        </div>
        <div className="star-menu">
          <div className="star">
            <Image src={star} alt="Étoile" width="80" height="80" />
          </div>
          <StarMenu />
        </div>
        <ModalButton />
        <ModalInfo />
      </motion.div>
    </>
  );
};

export default HomePage;
