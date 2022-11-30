import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.css'
import Image from 'next/image'
import photo from '../public/images/omar.png'
import googleimage from '../public/images/google.png'
import { FaTwitter,FaBehance,FaGithub,FaEnvelope,FaLinkedin,FaDownload } from 'react-icons/fa';

import Loader from '../components/Loader';
export default function Home() {
  return (
    <main >
      <Head>
        <title>Omar Mokhtar -Home-Page</title>
      </Head>
     
   
      <Loader/>

          <div className="container">
          <div className="index__details">
              <div className="row">
                <div className=" col-lg-4 col-sm-12 "   >
             
                <div className="home-image">

                <div className='overlay'></div>
                                  <Image  alt="MyImage"   src={photo}/>
                                  {/* <Image  alt="MyImage"  src="../public/images/omar.png" width={600} height={600}  layout="responsive" objectFit='cover' /> */}
                              
                                  <div className="d-flex downloadresume">
                                    <a href="https://drive.google.com/file/d/1qmohDM5_31jg8aHfUuOBOALO2uuv9faK/view?usp=sharing"  className="btn section__title--btn btn mt-3 mx-2 homebtn"  download> <FaDownload  /> DOWNLOAD RESUME  </a>
                                </div>
                              

                </div>

                </div>
                <div className=" col-lg-8 col-sm-12"   >
              <div className="title">
             <div className="myname d-flex align-items-center" >  Omar <span className="m-2 cusomspan ">Mokhtar</span></div>
                <span className="">
                  UI/UX Designer
                </span>
                <a href="https://www.coursera.org/account/accomplishments/professional-cert/7HGU76DTMDGG" title="Google UX Design Professional Certificate" className='googlecertificated'>
                <Image  alt="MyImage"  src={googleimage}/>
                  Google Certified</a>
              </div>
              <div className="mt-3 d-flex align-items-center discraption">
               
            <p>
              I am an experienced UI/User Experience Designer Over the past 10 years
                <br/>
                I have designed digital experiences mobile and web dashboards and more across various organizations ministries and universities.
                <br/>
                I am responsible for coming up with ideas to redesign the layout and to improve the overall user experience using drawing, wireframe prototyping, and High-fidelity prototyping, moreover, I Work closely with analysts, developers, and QA testers ensuring that the product is developed according to experience and design specifications.
            </p>



                  <div className="socialIcon" >
                  <a href="https://www.behance.net/Omar_Mokhtar" title="behance">  <FaBehance /></a>
                  <a href="https://github.com/omarmok" title="github">  <FaGithub /></a>
                  <a href="https://www.linkedin.com/in/omarmokhtar22/" title="linkedin">  <FaLinkedin /></a>
                  <a href="https://twitter.com/al_fagomy22" title="twitter">  <FaTwitter /></a>
                  <a href="mailto:al_fagomy22@hotmail.com" >  <FaEnvelope /></a>
 
                    </div>


                </div>
               
             

                </div>
                </div>
      
          </div>

          
          </div>

        
    </main>
  )
}
