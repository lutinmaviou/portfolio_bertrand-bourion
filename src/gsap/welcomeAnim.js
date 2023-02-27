import { gsap } from 'gsap';

const welcomeAnim = () => {
  const welcomeContainer = document.querySelector('.welcome-container');
  const pinkWelcome = document.querySelector('.welcome:nth-child(1)');
  const blueWelcome = document.querySelector('.welcome:nth-child(2)');
  const whiteWelcome = document.querySelector('.welcome:nth-child(3)');
  const yellowWelcome = document.querySelector('.welcome:nth-child(4)');
  const orangeWelcome = document.querySelector('.welcome:nth-child(5)');
  let tl = gsap.timeline();

  gsap.to(welcomeContainer, { opacity: 1, duration: 2, delay: 0.5 });
  gsap.to(pinkWelcome, { top: '10%', left: '10%', delay: 2.5, duration: 0.5 });
  gsap.to(blueWelcome, { top: '25%', left: '20%', delay: 2.5, duration: 0.5 });
  gsap.to(yellowWelcome, { top: '55%', right: '10%', delay: 2.5, duration: 0.5 });
  gsap.to(orangeWelcome, { top: '70%', right: '-10%', delay: 2.5, duration: 0.5 });
  gsap.to(whiteWelcome, {
    scale: 30,
    opacity: 0,
    delay: 2.5,
    duration: 1.5,
    ease: 'power1.in',
  });
  gsap.to([pinkWelcome, blueWelcome, yellowWelcome, orangeWelcome], {
    opacity: 0,
    delay: 4,
  });
};

export default welcomeAnim;
