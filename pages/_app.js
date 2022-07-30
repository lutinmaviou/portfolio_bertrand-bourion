import Head from 'next/head';
import '../styles/globals.scss';
//import '../components/About/AboutPage.scss';
import '../src/components/HomePage/HomePage.scss';
/* import '../components/PortfolioPage/Portfo3.scss';
import '../components/Form/AddProjectForm.scss';
import '../components/PortfolioPage/TimeMachine/TimeMachine.scss';
import '../components/PortfolioPage/Window/Window.scss';
import '../components/Attic/Attic.scss';
import '../components/ProjectCard/ProjectCard.scss'; */
import { AnimatePresence, motion, AnimateSharedLayout } from 'framer-motion';

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Head>
        <meta
          name="Portfolio Bertrand Bourion"
          content="Mon portfolio créé avec Next.js"
        />
        <title>Bertrand Bourion</title>
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
