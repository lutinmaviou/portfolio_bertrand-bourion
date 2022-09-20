import React, { useEffect } from 'react';
import ModalBox from './ModalBox';
import ModalQuestionMark from './ModalQuestionMark';

const ModalInfo = () => {
  useEffect(() => {
    const boatModal = document.querySelector('.boat-modal');
    const seaModal = document.querySelector('.sea-modal');
    const moonModal = document.querySelector('.moon-modal');
    const boatModalBox = document.querySelector('.boat-modalBox');
    const seaModalBox = document.querySelector('.sea-modalBox');
    const moonModalBox = document.querySelector('.moon-modalBox');
    boatModal.addEventListener('mouseenter', () => (boatModalBox.style.opacity = 1));
    boatModal.addEventListener('mouseleave', () => (boatModalBox.style.opacity = 0));
    seaModal.addEventListener('mouseenter', () => (seaModalBox.style.opacity = 1));
    seaModal.addEventListener('mouseleave', () => (seaModalBox.style.opacity = 0));
    moonModal.addEventListener('mouseenter', () => (moonModalBox.style.opacity = 1));
    moonModal.addEventListener('mouseleave', () => (moonModalBox.style.opacity = 0));
  });
  return (
    <div className="modalInfo-container">
      <ModalQuestionMark className="boat-modal" />
      <ModalBox className="boat-modalBox" text="The boat: for me sailing on a ocean of knowledge" />
      <ModalQuestionMark className="sea-modal" />
      <ModalBox className="sea-modalBox" text="The water: for the ocean of knowledge" />
      <ModalQuestionMark className="moon-modal" />
      <ModalBox className="moon-modalBox" text="The moon: for creativity and dreams" />
    </div>
  );
};

export default ModalInfo;
