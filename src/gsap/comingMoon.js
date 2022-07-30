import { gsap } from 'gsap';

const comingMoon = () => {
  const moon = document.querySelector('.moon');
  gsap.fromTo(moon, { scale: 0.4 }, { scale: 1, duration: 20, ease: 'power1' });
};

export default comingMoon;
