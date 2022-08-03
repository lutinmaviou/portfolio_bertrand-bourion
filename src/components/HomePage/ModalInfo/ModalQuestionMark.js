import React from 'react';
import Image from 'next/image';
import QuestionMark from '../../../../public/img/question-mark.png';

const ModalQuestionMark = ({ className }) => {
  return (
    <div className={className}>
      <Image
        src={QuestionMark}
        alt="Point d'interrogation"
        layout="fill"
        objectFit="contain"
      />
    </div>
  );
};

export default ModalQuestionMark;
