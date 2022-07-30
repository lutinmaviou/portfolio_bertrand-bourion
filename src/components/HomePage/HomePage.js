import { useEffect } from 'react';
import Image from 'next/image';
import { buildUrl } from 'cloudinary-build-url';
import cloudName from '../../utils/cloudinary/cloudName';
import { motion } from 'framer-motion';

const HomePage = () => {
  const repo = 'portfolio-next/';
  const moon = buildUrl(`${repo}moon_f6qesv.png`, cloudName);
  const bg = buildUrl(`${repo}bg-boat_hcm2y0`, cloudName);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    let count = 200;
    let i = 0;
    while (i < count) {
      let scene = document.querySelector('.dust-container');
      let dust = document.createElement('i');
      let x = Math.floor(Math.random() * window.innerWidth);
      let y = Math.floor(Math.random() * window.innerHeight);
      let size = Math.random() * 0.3;

      let duration = Math.random() * 10;

      dust.style.left = x + 'px';
      dust.style.top = y + 'px';
      dust.style.width = size + 'vw';
      dust.style.height = size + 'vw';

      dust.style.animationDuration = 6 + duration + 's';

      scene.appendChild(dust);
      i++;
    }
  }, []);

  return (
    <motion.div
      exit={{ rotateX: [0, 90], rotateZ: 50 }}
      transition={{ duration: 1.5, delay: 0.1 }}
      className="home-container"
    >
      <div className="dust-container"></div>
      <div className="moon">
        <Image src={moon} alt="Lune" layout="responsive" width="1500" height="1500" />
      </div>
      <Image src={bg} alt="Paysage forêt" layout="fill" />
      <h1 className='digital'>Bertrand Bourion</h1>
    </motion.div>
  );
};

export default HomePage;
