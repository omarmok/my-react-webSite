import { useEffect } from "react";
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

    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);
  return (


            <>

              <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta>
              </Head>
            <Layouts>
                        <Component {...pageProps} />
                    </Layouts>
        </>

      )

}

export default MyApp
