import { gsap } from 'gsap';

const comingMoon = () => {
  const moon = document.querySelector('.moon');
  gsap.fromTo(
    moon,
    { scale: 0.6, left: '62%' },
    { scale: 1, left: '60%', duration: 10, ease: 'power1' }
  );
};

export default comingMoon;
