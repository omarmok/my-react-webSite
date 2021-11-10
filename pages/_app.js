import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import 'bootstrap/dist/css/bootstrap.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab,fas } from '@fortawesome/free-brands-svg-icons'
import { AnimatePresence } from "framer-motion";
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import '../styles/globals.scss'
import Layouts from '../components/Layouts'
library.add(fab, faCheckSquare, faCoffee)
function MyApp({ Component, pageProps }) {

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
    import("aos/dist/aos.js");
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
