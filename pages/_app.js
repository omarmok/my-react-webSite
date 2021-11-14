import { useEffect } from "react";
import AOS from "aos";
import axios from "axios";
import "aos/dist/aos.css";
import 'bootstrap/dist/css/bootstrap.css'
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
import { AnimatePresence } from "framer-motion";
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import '../styles/globals.scss'
import Layouts from '../components/Layouts'
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");

    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);



  return (


      <AnimatePresence exitBeforeEnter>
      <Layouts>
                  <Component {...pageProps} />
              </Layouts>
      </AnimatePresence>

      )

}

export default MyApp
