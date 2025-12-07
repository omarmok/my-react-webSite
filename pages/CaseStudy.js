import Head from 'next/head'
import Link from 'next/link'

import Loader from '../components/Loader'

const CaseStudy = () => {
  const figmaUrl = 'https://crane-palm-14859740.figma.site/'

  return (
    <div className='page-container '>
      <Head>
        <title>Omar Mokhtar-Case Study</title>
      </Head>

      {/* لو عندك لودر ثابت خليه زي ما هو */}
      <Loader />

      <div className="container">

        <section className="my-4">
          <div
            style={{
              width: '100%',
              height: '100vh',       
              borderRadius: 0,
              overflow: 'hidden',
              background: '#000',
              position: 'relative',
            }}
          >
            <iframe
              title="Figma case study"
              src={figmaUrl}
              style={{
                border: 'none',
                width: '100%',
                height: '100%',
                display: 'block',
              }}
              loading="lazy"
              allowFullScreen
            />
          </div>
        </section>

        <div className="project">
          <div
            className="casestudyContainer"
            style={{ padding: 0, marginTop: 0, background: 'transparent', boxShadow: 'none' }}
          >
            <div className="row mt-3 mb-3">
              <div className="col">
                <Link
                  href="/Projects"
                  className="btn d-inline-block me-2 my-2"
                  aria-label="Back to the projects page"
                >
                  Back to Projects
                </Link>
              </div>

              <div className="col">
                <Link
                  href="https://omarmok.github.io/studentCode/"
                  className="btn outlinebtn d-inline-block me-2 my-2"
                  aria-label="View the student portal live prototype"
                >
                  Check website
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default CaseStudy
