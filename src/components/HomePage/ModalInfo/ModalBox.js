import React from 'react';

const ModalBox = ({ className, text }) => {
  return (
    <div className={`modalBox-container flex-col ${className}`}>
      <p className="modalBox-text">{text}</p>
    </div>
  );
};

export default ModalBox;
