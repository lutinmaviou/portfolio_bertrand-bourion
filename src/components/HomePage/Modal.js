import React from 'react';
import Image from 'next/image';
import Info from '../../../public/img/info.png';

const Modal = () => {
  return (
    <div className="modal-container">
      <div className="thinking-head">
        <Image src={Info} alt="Tête pensante" layout="fill" objectFit="contain" />
      </div>
    </div>
  );
};

export default Modal;
