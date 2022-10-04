import { gsap } from 'gsap';

const deployMenu = () => {
  const menuContainer = document.querySelector('.starNav-container');

  let tl = gsap.timeline({ ease: 'power2' });
  menuContainer.addEventListener('mouseenter', () => {
    tl.to(menuContainer, {
      right: '2vw',
      width: '30vw',
      duration: 0.3,
      delay: 0.1,
    });
    tl.to(menuContainer, { height: '28vw', duration: 0.3 });
  });
  menuContainer.addEventListener('mouseleave', () => {
    tl.to(menuContainer, { width: 0, height: 0, right: '2vw', duration: 0.3 });
  });
};

export default deployMenu;
