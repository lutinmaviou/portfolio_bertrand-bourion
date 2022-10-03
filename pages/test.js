import Head from 'next/head';
import TestPage from '../src/components/TestPage/TestPage';

export default function Test() {
  return (
    <>
      <Head>
        <title>Test | Bertrand Bourion</title>
      </Head>
      <TestPage />
    </>
  );
}
