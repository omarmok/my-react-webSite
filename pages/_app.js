import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';

import '../styles/globals.scss'
import Layouts from '../components/Layouts'
function MyApp({ Component, pageProps }) {

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
        <Layouts>
            <Component {...pageProps} />
        </Layouts>
      )

}

export default MyApp
