import Head from 'next/head';
import ProjectsPage from '../../src/components/ProjectsPage/ProjectsPage';
import { connectToDatabase } from '../../src/utils/mongodb';
import { useRouter } from 'next/router';

export default function Portfolio({ properties }) {
  const router = useRouter();
  const year = router.query.year;
  return (
    <>
      <Head>
        <title>Projets {year} | Bertrand Bourion</title>
      </Head>
      <ProjectsPage props={properties} />
    </>
  );
}

export async function getServerSideProps(context) {
  const { db } = await connectToDatabase();

  const data = await db.collection('projects').find().toArray();
  const properties = JSON.parse(JSON.stringify(data));

  return {
    props: { properties },
  };
}
