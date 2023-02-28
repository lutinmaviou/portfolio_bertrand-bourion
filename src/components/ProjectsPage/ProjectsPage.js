import { buildUrl } from 'cloudinary-build-url';
import cloudName from '../../utils/cloudinary/cloudName';
import Image from 'next/image';
import Navbar from '../Navbars/Navbar';
import YearsNav from './YearsNav/YearsNav';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const ProjectsPage = (properties) => {
  const router = useRouter();
  'router year : ' + router.query.year;
  const data = properties.props;
  const year = router.query.year;
  const [actualData, setActualData] = useState([]);

  useEffect(() => {
    const array = data.filter((i) => i.year === year);
    console.log(array);
    return setActualData(array);
    //('actual data : ' + actualData);
  }, [year]);

  useEffect(() => {
    const scrollContainer = document.querySelector('.projects-slider');
    scrollContainer.addEventListener('wheel', (e) => {
      e.preventDefault();
      scrollContainer.scrollLeft += e.deltaY;
    });
  }, []);

  /* const calcProjectsWidth = () => {
    const container = document.querySelector('.projects-wrapper');
    const sections = [...document.querySelectorAll('.card')];
    //console.log(sections);
    let maxWidth = 0;
    sections.forEach((section) => {
      maxWidth += section.offsetWidth / 4.5;
    });
    console.log(maxWidth);
    return (container.style.width = `${maxWidth}vw`);
  };

  useEffect(() => {
    () => calcProjectsWidth();
  }); */

  const repo = 'portfolio/portfolio/';
  const repo2 = 'portfolio-next/';
  const blackHole = buildUrl(`${repo2}black-hole_qy1a5c`, cloudName);
  return (
    <>
      <Image src={blackHole} alt="Trou noir" layout="fill" />
      <Navbar />
      <main className="projects-container flex-around">
        <div className="yearsNav-container">
          <YearsNav year={year} data={data} />
        </div>
        <section className="projects-slider flex-col">
          <div className="projects-wrapper flex-around">
            {actualData &&
              actualData.map((item) => (
                <div key={item._id} className="card">
                  <Link
                    href="/portfolio/[year]/[slug]/"
                    as={`/portfolio/${item.year}/${item.slug}`}
                  >
                    <Image
                      src={buildUrl(`${repo}${item.cover}`, cloudName)}
                      width={350}
                      height={350}
                    />
                  </Link>
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
