import { gsap } from 'gsap';

const deployMenu = () => {
  const menuContainer = document.querySelector('.starNav-container');
  const star = document.querySelector('.star');

  let tl = gsap.timeline({ ease: 'power4' });
  let tl2 = gsap.timeline({ ease: 'power2' });
  menuContainer.addEventListener('mouseenter', () => {
    tl.play();
    tl2.play();
    tl2.to(star, { transform: 'rotateZ(215deg)' });
    tl.to(menuContainer, {
      right: '2vw',
      width: '30vw',
      background: 'rgba(11, 11, 11, 0.445)',
      border: '0.2vw solid rgba(255, 255, 255, 0.664)',
      duration: 0.2,
    });
    tl.to(menuContainer, { height: '28vw', duration: 0.3 });
  });
  menuContainer.addEventListener('mouseleave', () => {
    tl.reverse(0.1);
    tl2.reverse(0.1);
  });
};

export default deployMenu;
