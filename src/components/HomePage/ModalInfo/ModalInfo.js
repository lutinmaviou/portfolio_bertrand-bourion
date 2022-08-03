import React from 'react';
import ModalBox from './ModalBox';
import ModalQuestionMark from './ModalQuestionMark';

const ModalInfo = () => {
  return (
    <div className="modalInfo-container">
      <ModalQuestionMark className="boat-modal" />
      <ModalBox className="boat-modalBox" text="The boat: for me sailing on ocean" />
      <ModalQuestionMark className="sea-modal" />
      <ModalBox className="sea-modalBox" text="The water: for an ocean of knowledge" />
      <ModalQuestionMark className="moon-modal" />
      <ModalBox className="moon-modalBox" text="The moon: for creativity and dreams" />
    </div>
  );
};

export default ModalInfo;
