import Head from 'next/head';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta
          name="Portfolio Bertrand Bourion"
          content="Mon portfolio créé avec Next.js"
        />
      </Head>
    </div>
  );
}
