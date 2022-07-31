import React from 'react';
import Image from 'next/image';
import QuestionMark from '../../../../public/img/question-mark.png';

const ModalInfo = () => {
  return (
    <div className="modalInfo-container">
      <div className="moon-modal">
        <Image
          src={QuestionMark}
          alt="Point d'interrogation"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="sea-modal">
        <Image
          src={QuestionMark}
          alt="Point d'interrogation"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="boat-modal">
        <Image
          src={QuestionMark}
          alt="Point d'interrogation"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default ModalInfo;
