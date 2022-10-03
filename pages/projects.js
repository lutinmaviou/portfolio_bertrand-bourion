import Head from 'next/head';
import ProjectsPage from '../src/components/ProjectsPage/ProjectsPage';

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projets | Bertrand Bourion</title>
      </Head>
      <ProjectsPage />
    </>
  );
}
