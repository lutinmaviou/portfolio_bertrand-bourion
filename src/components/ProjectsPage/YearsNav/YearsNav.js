import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { useRouter } from 'next/router';

const YearsNav = ({ year, data }) => {
  const router = useRouter();
  return (
    <nav className="yearsNav-wrapper digital">
      <ul>
        <li className={router.asPath === '/portfolio/2019' ? 'titi' : ''}>
          <Link href="/portfolio/[year]/" as={`/portfolio/2019`} passHref>
            2019
          </Link>
        </li>
        <li className={router.asPath === '/portfolio/2020' ? 'titi' : ''}>
          <Link href="/portfolio/[year]/" as={`/portfolio/2020`} passHref>
            2020
          </Link>
        </li>
        <li className={router.asPath === '/portfolio/2021' ? 'titi' : ''}>
          <Link href="/portfolio/[year]/" as={`/portfolio/2021`} passHref>
            2021
          </Link>
        </li>
        <li className={router.asPath === '/portfolio/2022' ? 'titi' : ''}>
          <Link href="/portfolio/[year]/" as={`/portfolio/2022`} passHref>
            2022
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default YearsNav;
