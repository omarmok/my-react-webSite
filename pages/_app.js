import { useEffect } from "react";
import { hotjar } from 'react-hotjar'

import Head from 'next/head'
import AOS from "aos";
import axios from "axios";
import "aos/dist/aos.css";
import 'bootstrap/dist/css/bootstrap.css'
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
import { AnimatePresence } from "framer-motion";
import '../styles/globals.scss'
import Layouts from '../components/Layouts'
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    hotjar.initialize(1978942, 1)
  }, []);

  useEffect(() => {

    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });

    
  }, []);



  return (


            <>

            <Head> 
             <meta charSet="UTF-8" />
              <title>Omar Mokhtar</title>
              <meta name="description" content="UI/UX Design developer front-end developer" />
              <meta name="viewport" content="initial-scale=1.0, width=device-width" />

              <link rel="icon" href="/favicon.ico" />
           
            </Head>
            <Layouts>
                        <Component {...pageProps} />
                    </Layouts>
        </>

      )

}

export default MyApp
