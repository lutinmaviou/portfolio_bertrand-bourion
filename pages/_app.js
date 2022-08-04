import Head from 'next/head';
import '../styles/globals.scss';
import '../src/components/HomePage/HomePage.scss';
import '../src/components/HomePage/ModalButton.scss';
import '../src/components/HomePage/ModalInfo/ModalInfo.scss';
import '../src/components/Navbars/Navbar.scss';
import '../src/components/AboutPage/AboutPage.scss';
import { AnimatePresence, motion, AnimateSharedLayout } from 'framer-motion';

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Head>
        <meta
          name="Portfolio Bertrand Bourion"
          content="Mon portfolio créé avec Next.js"
        />
        <title>Bertrand Bourion | Portfolio</title>
      </Head>
      <AnimatePresence exitBeforeEnter>
        {/* <AnimateSharedLayout> */}
        <motion.div
          key={router.route}
          initial="initialPage"
          animate="animatedPage"
          variants={{
            initialPage: {
              opacity: 0,
            },
            animatedPage: {
              opacity: 1,
            },
          }}
        >
          <Component {...pageProps} />
        </motion.div>
        {/* </AnimateSharedLayout> */}
      </AnimatePresence>
    </>
  );
}

export default MyApp;
