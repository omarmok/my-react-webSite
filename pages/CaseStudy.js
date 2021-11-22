import Head from 'next/head'
import Link from "next/link"
import Image from 'next/image'
import case1 from '../public/images/case1.png'
import Persona from '../public/images/Persona.png'
import color from '../public/images/color.png'
import screenshoot from '../public/images/screenshoot.png'
import Loader from '../components/Loader'
const CaseStudy = () => {
    return(


        
        <div >
         
         <Head>
                <title>Omar Mokhtar-Case Study</title>
          
        </Head>
        <Loader/>
        <div className="container">

        <div className="page__container project">

            <div className="mainpagetitle"  data-aos="fade-in" data-aos-duration="500">
              Student Internal Portal
            </div>
          <div className="casestudyContainer" data-aos="fade-up" data-aos-duration="2000">
          <Image  alt="MyImage"  src={case1}  layout="responsive" />
          {/* <Image  alt="MyImage"  src="../public/images/case1.png" width={900} height={450} layout='responsive' objectFit='contain' /> */}

        
              <h3 className="fw-bold">My Role</h3>

                <p>
                I was the UX Designer UI Designer UI Developer in a team of 6 and we completed this project over the course of 10 weeks.
<br/>
 I was in competitives analysis and user research.
<br/>
 I was also responsible for coming up with ideas for designing the layout, and for improving the overall user experience using sketching, wireframing and Prototyping. 
<br/>
Moreover, I was involved with the development team, as we used HTML and Javascript to build portal . 

<br/>
Working closely with analysist ,developers and QA testers ensuring that the product is developed according to experience and design specifications.

                </p>
         
                {/* <Image  alt="MyImage"  src="../public/images/Persona.png" width={900} height={350} layout='responsive' objectFit='contain' /> */}
                <Image  alt="MyImage"  src={Persona}  width={900} height={350} layout="responsive" />
                <Image  alt="MyImage"  src={color}  width={900} height={500} layout="responsive" />
                <Image  alt="MyImage"  src={screenshoot}  width={900} height={1500} layout="responsive" />
                {/* <Image  alt="MyImage"  src="../public/images/color.png" width={900} height={500} layout='responsive' objectFit='contain' />
                <Image  alt="MyImage"  src="../public/images/screenshoot.png" width={900} height={1500} layout='responsive' objectFit='contain' /> */}
        
        <Link href="/Projects">
              <a className="btn d-inline-block me-2 my-2">Back to Projects</a>
              
        </Link>

        <Link href="http://omarmokhtar.com/SU/index.html">
              <a className="btn outlinebtn  d-inline-block me-2 my-2">Check website</a>

        </Link>

          </div>
         
            </div>
        </div>


        </div>

    )
}
export default CaseStudy