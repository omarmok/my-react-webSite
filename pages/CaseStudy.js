import Head from 'next/head'
import Link from "next/link"
import Image from 'next/image'
import case1 from '../public/images/case1.png'
import Loader from '../components/Loader';
const CaseStudy = () => {
    return(


        
        <div >
         
         <Head>
                <title>Omar Mokhtar-Case Study</title>
                <meta name="description" content="UI/UX Design developer front-end developer" />
                <link rel="icon" href="../public/favicon.ico" />
        </Head>
        <Loader/>
        <div className="container">

        <div className="page__container project">

            <div className="mainpagetitle"  data-aos="fade-in" data-aos-duration="500">
              Student Internal Portal
            </div>
          <div className="casestudyContainer" data-aos="fade-up" data-aos-duration="2000">
          <Image  alt="MyImage"  src={case1} />
        
              <h3 className="fw-bold">My Role</h3>

                <p>
                I was the   UX Designer   UI Designer  UI Developer  in a team of 6 and we completed this project over the course of 10 weeks.  I was in  competitives benchmarking analysis and user research. I was also responsible for coming up with ideas for re-designing the layout, information architecture , and for improving the overall user experience using sketching, wireframing and Prototyping.

                Moreover, I was involved with the development team, as we used HTML and Javascript to build portal .

                Working closely with analysist ,developers and QA testers ensuring that the product is developed according to experience and design specifications.
                </p>



          <Link href="http://omarmokhtar.com/SU/index.html">
              <a className="btn d-inline-block">Details</a>
        </Link>

          </div>
         
            </div>
        </div>


        </div>

    )
}
export default CaseStudy