import { buildUrl } from 'cloudinary-build-url';
import cloudName from '../../utils/cloudinary/cloudName';
import Image from 'next/image';
import Navbar from '../Navbars/Navbar';
import YearsNav from './YearsNav/YearsNav';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import horizontalScroll from '../../gsap/horizontalScroll';

const ProjectsPage = (properties) => {
  const router = useRouter();
  'router year : ' + router.query.year;
  const data = properties.props;
  console.log(data);

  //const year = router.query.year;
  //const [actualData, setActualData] = useState([]);
  /* useEffect(() => {
    const array = props.filter((i) => i.year === year);
    console.log(array);
    return setActualData(array);
  }, [year]); */

  /* useEffect(() => {
    horizontalScroll();
  }, []); */
  useEffect(() => {
    const scrollContainer = document.querySelector('.projects-slider');
    scrollContainer.addEventListener('wheel', (e) => {
      e.preventDefault();
      scrollContainer.scrollLeft += e.deltaY;
    });
  }, []);

  const repo = 'portfolio/portfolio/';
  const repo2 = 'portfolio-next/';
  const blackHole = buildUrl(`${repo2}black-hole_qy1a5c`, cloudName);
  return (
    <>
      <Image src={blackHole} alt="Trou noir" layout="fill" />
      <Navbar />
      <main className="projects-container flex-around">
        <div className="yearsNav-container">
          <YearsNav />
        </div>
        <section className="projects-slider flex-col">
          <div className="projects-wrapper flex-around">
            {data.map((item) => (
              <div key={item._id} className="card">
                <Image
                  src={buildUrl(`${repo}${item.cover}`, cloudName)}
                  width={350}
                  height={350}
                />
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default ProjectsPage;

{
}
