import { buildUrl } from 'cloudinary-build-url';
import cloudName from '../../../utils/cloudinary/cloudName';
import Image from 'next/image';

const StarMenu = () => {
  const repo = 'portfolio-next/';
  const star = buildUrl(`${repo}star1_yflmqv.png`, cloudName);
  return (
    <div className="starNav-container">
      <nav className="star-nav">
        <ul>
          <li>about me</li>
          <li>projects</li>
          <li>contact me</li>
        </ul>
      </nav>
    </div>
  );
};

export default StarMenu;
