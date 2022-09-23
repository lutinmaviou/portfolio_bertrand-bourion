import { buildUrl } from 'cloudinary-build-url';
import cloudName from '../../utils/cloudinary/cloudName';
import Image from 'next/image';
import Navbar from '../Navbars/Navbar';
import YearsNav from './YearsNav/YearsNav';

const ProjectsPage = () => {
  const repo = 'portfolio-next/';
  const blackHole = buildUrl(`${repo}black-hole_qy1a5c`, cloudName);
  return (
    <>
      <Image src={blackHole} alt="Mer de nuages" layout="fill" />
      <Navbar />
      <main>
        <div className="yearsNav-container">
          <YearsNav />
        </div>
      </main>
    </>
  );
};

export default ProjectsPage;
