import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab,fas } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import '../styles/globals.scss'
import Layouts from '../components/Layouts'
library.add(fab, faCheckSquare, faCoffee)
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
