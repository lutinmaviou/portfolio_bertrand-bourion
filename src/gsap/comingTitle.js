import { gsap } from 'gsap';

const comingTitle = () => {
  const title = document.querySelector('.home-title');
  gsap.fromTo(title, { top: '80%' }, { top: '0%', duration: 2, ease: 'power1' });
};

export default comingTitle;
