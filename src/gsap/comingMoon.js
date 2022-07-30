import { gsap } from 'gsap';

const comingMoon = () => {
  const moon = document.querySelector('.moon');
  gsap.fromTo(
    moon,
    { scale: 0.4, left: '65%' },
    { scale: 1, left: '60%', duration: 30, ease: 'power1' }
  );
};

export default comingMoon;
