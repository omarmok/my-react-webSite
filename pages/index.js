import Head from 'next/head'
import Image from 'next/image'
import photo from '../public/images/omar.png'
export default function Home() {
  return (
    <main >
      <Head>
        <title>my-app</title>
        <meta name="description" content="UI/UX Design developer front-end developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

          <div className="container">

          <div className="index__details">
              <div className="row">
                <div className="col col-lg-3">
                <Image
                alt="MyImage"
                src={photo}
                      />
                </div>
                <div className="col col-lg-8">
              <div className="title">
OMAR MOKHTAR

              </div>
                 <button className="btn mt-3">Download</button>
                </div>
                </div>
      
          </div>

          
          </div>
    </main>
  )
}
