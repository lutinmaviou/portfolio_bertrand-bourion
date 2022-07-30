import React, { useEffect } from 'react';
import Image from 'next/image';
import Info from '../../../public/img/info.png';
import slideFromLeft from '../../gsap/slideFromLeft';

const Modal = () => {
  useEffect(() => {
    const elt = document.querySelector('.modal-container');
    slideFromLeft(elt, 1, 1);
  }, []);

  return (
    <div className="modal-container">
      <div className="thinking-head">
        <Image src={Info} alt="Tête pensante" layout="fill" objectFit="contain" />
      </div>
    </div>
  );
};

export default Modal;
