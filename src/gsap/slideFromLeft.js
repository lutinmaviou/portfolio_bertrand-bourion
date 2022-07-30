import { gsap } from 'gsap';

const slideFromLeft = (elt, duration, delay) => {
  gsap.fromTo(elt, { left: '-20%' }, { left: '-0.3%', duration, delay: `${delay}` });
};

export default slideFromLeft;
