import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="fr">
        <Head>
          <link rel="shortcut icon" href="/suitcase.png" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.0/gsap.min.js"></script>
          <script
            src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.0/ScrollTrigger.min.js"
            integrity="sha512-QcYm1q7RbnXmwY7HJ0H7938IS0MalTPYqGUF0fIwQgEjMBt2tqjDBt+R5I+ppdwEohjMdHnFU0H+RxmrGQ8qcg=="
            crossOrigin="anonymous"
          ></script>
          <script
            src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.0/Draggable.min.js"
            integrity="sha512-RDX1eDxp3ORwtRRL6pxKFQRCMn2TjxuHevOkw70yuvTxrGLs7+inPtL2BVtHSkW4zXmG4s+CoKgPoqJsndzHcQ=="
            crossOrigin="anonymous"
          ></script>
          <script
            src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.7.0/TextPlugin.min.js"
            integrity="sha512-orz/l0zz+W+3mJKlUrK3jQ4q+5RlMt3QPtwifhy3QBD2q2AEarIN55NQDHBrRN9Rc543hRdYjUmCJhG8Jbz5Zg=="
            crossOrigin="anonymous"
            referrerPolicy="no-referrer"
          ></script>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
            integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
            crossOrigin="anonymous"
            referrerPolicy="no-referrer"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Fredericka+the+Great&amp;display=swap"
            rel="stylesheet"
          ></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&amp;display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Original+Surfer&amp;display=swap"
            rel="stylesheet"
          ></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Orbitron:wght@300;400;500;600;700;800;900&amp;display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
