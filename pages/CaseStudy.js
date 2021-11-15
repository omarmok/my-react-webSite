import Head from 'next/head'
import Image from 'next/image'
import case1 from '../public/images/case1.png'
const CaseStudy = () => {
    return(


        
        <div >
         
         <Head>
                <title>Omar Mokhtar-Case Study</title>
                <meta name="description" content="UI/UX Design developer front-end developer" />
                <link rel="icon" href="../public/favicon.ico" />
        </Head>

        <div className="container">

        <div className="page__container project">

            <div className="mainpagetitle"  data-aos="fade-in" data-aos-duration="500">
            Majmaah  Student Internal Portal
            </div>
          <div className="casestudyContainer">
          <Image  alt="MyImage"  src={case1}/>
          </div>
         
            </div>
        </div>


        </div>

    )
}
export default CaseStudy