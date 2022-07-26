import Head from 'next/head';
import { useRouter } from 'next/router';
import { connectToDatabase } from '../../../src/utils/mongodb';
import ProjectCard from '../../../src/components/ProjectPage/ProjectPage';

const ProjectPage = ({ property }) => {
  const router = useRouter();
  const year = router.query.year;
  const data = property;
  const title = property.title;
  return (
    <>
      <Head>
        <title>
          {title} | {year} | Bertrand Bourion
        </title>
      </Head>
      <ProjectCard property={property} />
    </>
  );
};

export default ProjectPage;

/* export const getStaticPaths = async () => {
  const { db } = await connectToDatabase();

  const data = await db.collection('projects').find({}).toArray();
  const properties = JSON.parse(JSON.stringify(data));

  const paths = properties.map((property) => ({
    params: { slug: property.slug },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const { db } = await connectToDatabase();
  const data = await db.collection('projects').findOne({
    slug: params.slug,
  });
  return {
    props: { property: JSON.parse(JSON.stringify(data)) },
    revalidate: 100,
  };
}; */

export async function getServerSideProps({ params }) {
  const { db } = await connectToDatabase();
  const data = await db.collection('projects').findOne({
    slug: params.slug,
  });
  return {
    props: { property: JSON.parse(JSON.stringify(data)) },
  };
}
