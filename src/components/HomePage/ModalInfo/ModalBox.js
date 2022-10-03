import React from 'react';

const ModalBox = ({ className, title, text }) => {
  return (
    <div className={`modalBox-container flex-col ${className}`}>
      <p>
        <span className="modalBox-title">{title}</span>
        <span className="modalBox-text">{text}</span>
      </p>
    </div>
  );
};

export default ModalBox;
