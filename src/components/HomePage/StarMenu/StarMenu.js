import Link from 'next/link';

const StarMenu = () => {
  return (
    <nav className="starNav-container surfer">
        <ul>
          <li>
            <Link href="/about">about me</Link>
          </li>
          <li>
            <Link href="/projects">projects</Link>
          </li>
          <li>contact me</li>
        </ul>
    </nav>
  );
};

export default StarMenu;
