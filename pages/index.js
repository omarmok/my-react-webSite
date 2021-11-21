import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.css'
import Image from 'next/image'
import photo from '../public/images/omar.png'
import { FaTwitter,FaBehance,FaGithub,FaEnvelope,FaLinkedin } from 'react-icons/fa';

import Loader from '../components/Loader';
export default function Home() {
  return (
    <main >
      <Head>
        <title>Omar Mokhtar</title>
        <meta name="description" content="UI/UX Design developer front-end developer" />
        <link rel="icon" href="/favicon.ico" />


      </Head>
     
   
      <Loader/>

          <div className="container">

          <div className="index__details">
              <div className="row align-items-center">
                <div className=" col-lg-5 col-sm-12"   data-aos="fade-right" data-aos-duration="2000">
                   {/* <Image  alt="MyImage"  src={photo}/> */}
                   <Image  alt="MyImage"  src="../public/images/omar.png" width={600} height={600}  layout="responsive" objectFit='cover' />
                </div>
                <div className=" col-lg-7 col-sm-12"   data-aos="fade-left"  data-aos-duration="2000" >
              <div className="title">
             <div className="myname d-flex align-items-center" >  OMAR <span className="m-2 cusomspan ">MOKHTAR</span></div>
                <span className="">
                  UI/UX Designer
                </span>
              </div>

              <div className="mt-3 d-flex align-items-center discraption">
               
              <p>
                I am an experienced UI/User Experience Designer Over the past 10 years
<br/>
 I have designed digital experiences mobile web dashboards and more across a variety of organizations minstiies and universities
                </p>



                  <div className="socialIcon" >
                  <a href="https://www.behance.net/Omar_Mokhtar" title="twitter">  <FaBehance /></a>
                  <a href="https://github.com/omarmok" title="twitter">  <FaGithub /></a>
                  <a href="https://www.linkedin.com/in/omarmokhtar22/" title="linkedin">  <FaLinkedin /></a>
                  <a href="https://twitter.com/al_fagomy22" title="twitter">  <FaTwitter /></a>
                  <a href="mailto:al_fagomy22@hotmail.com" >  <FaEnvelope /></a>
 
                    </div>


                </div>
               
              <div className="d-flex">
                    <button className="btn mt-3 mx-2 homebtn"> DOWNLOAD PORTFOLIO</button>
                    
                </div>

                </div>
                </div>
      
          </div>

          
          </div>

        
    </main>
  )
}
