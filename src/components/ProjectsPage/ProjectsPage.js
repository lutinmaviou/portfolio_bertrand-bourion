import { buildUrl } from 'cloudinary-build-url';
import cloudName from '../../utils/cloudinary/cloudName';
import Image from 'next/image';
import Navbar from '../Navbars/Navbar';

const ProjectsPage = () => {
  const repo = 'portfolio-next/';
  const blackHole = buildUrl(`${repo}black-hole_qy1a5c`, cloudName);
  return (
    <>
      <Image src={blackHole} alt="Mer de nuages" layout="fill" />
      <Navbar />
    </>
  );
};

export default ProjectsPage;
