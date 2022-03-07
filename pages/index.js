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
        <title>Omar Mokhtar -Home-Page</title>
      </Head>
     
   
      <Loader/>

          <div className="container">

          <div className="index__details">
              <div className="row align-items-center">
                <div className=" col-lg-5 col-sm-12"   >
                   <Image  alt="MyImage"  src={photo}/>
                   {/* <Image  alt="MyImage"  src="../public/images/omar.png" width={600} height={600}  layout="responsive" objectFit='cover' /> */}
                </div>
                <div className=" col-lg-7 col-sm-12"   >
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
              I have designed digital experiences mobile and web dashboards and more across a variety of organizations minstiies and universities.   
                         <br/><br/>
              I am responsible for coming up with ideas to redesign the layout and to improve the overall user experience using drawing, wireframe prototyping, and High-fidelity prototyping , moreover, I Working closely with analysist ,developers and QA testers ensuring that the product is developed according to experience and design specifications.              </p>



                  <div className="socialIcon" >
                  <a href="https://www.behance.net/Omar_Mokhtar" title="twitter">  <FaBehance /></a>
                  <a href="https://github.com/omarmok" title="twitter">  <FaGithub /></a>
                  <a href="https://www.linkedin.com/in/omarmokhtar22/" title="linkedin">  <FaLinkedin /></a>
                  <a href="https://twitter.com/al_fagomy22" title="twitter">  <FaTwitter /></a>
                  <a href="mailto:al_fagomy22@hotmail.com" >  <FaEnvelope /></a>
 
                    </div>


                </div>
               
              <div className="d-flex">
                    <a href="https://drive.google.com/file/d/1qmohDM5_31jg8aHfUuOBOALO2uuv9faK/view?usp=sharing"  className="btn section__title--btn btn mt-3 mx-2 homebtn"  download>DOWNLOAD RESUME</a>
                </div>

                </div>
                </div>
      
          </div>

          
          </div>

        
    </main>
  )
}
