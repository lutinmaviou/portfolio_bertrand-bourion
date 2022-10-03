import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const horizontalScroll = () => {
  gsap.registerPlugin(ScrollTrigger);

  const sections = gsap.utils.toArray('.card');
  let maxWidth = 0;
  const container = document.querySelector('.projects-slider');

  const getMaxWidth = () => {
    maxWidth = 0;
    sections.forEach((section) => {
      maxWidth += section.offsetWidth;
    });
  };
  getMaxWidth();
  ScrollTrigger.addEventListener('refreshInit', getMaxWidth);

  gsap.to(sections, {
    x: () => `-${maxWidth - container.innerWidth}`,
    ease: 'none',
    scrollTrigger: {
      trigger: '.projects-wrapper',
      pin: true,
      scrub: true,
      end: () => `+=${maxWidth}`,
      //invalidateOnRefresh: true,
    },
  });

  sections.forEach((sct, i) => {
    ScrollTrigger.create({
      trigger: sct,
      start: () =>
        'top top-=' +
        (sct.offsetLeft - container.innerWidth / 2) *
          (maxWidth / (maxWidth - container.innerWidth)),
      end: () => '+=' + sct.offsetWidth * (maxWidth / (maxWidth - container.innerWidth)),
      toggleClass: { targets: sct, className: 'active' },
    });
  });
};

export default horizontalScroll;
