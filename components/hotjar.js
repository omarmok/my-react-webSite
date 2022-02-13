import { hotjar } from 'react-hotjar'
import { useEffect } from 'react'
function hotjar ({ Component, pageProps }) {
  useEffect(() => {
    hotjar.initialize(1978942, 1)
  }, [])
return <Component {...pageProps} />
}
export default hotjar