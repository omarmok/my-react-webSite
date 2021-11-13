import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.css';
import Image from 'next/image'
import photo from '../public/images/omar.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Home() {
  return (
    <main >
      <Head>
        <title>Omar Mokhtar</title>
        <meta name="description" content="UI/UX Design developer front-end developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     
      <div class="loader">
		<script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js">
		</script> 
         <lottie-player class="loada" src="https://assets9.lottiefiles.com/packages/lf20_EchaWV.json" background="transparent" speed="1"  loop="" autoplay=""></lottie-player>

	</div>


          <div className="container">

          <div className="index__details">
              <div className="row align-items-center">
                <div className=" col-lg-5 col-sm-12"   data-aos="fade-right" data-aos-duration="2000">
                   {/* <Image  alt="MyImage"  src={photo}/> */}
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
                I am an experienced UI/User Experience Designer.
Over the past 10 years, I've designed digital experiences (mobile, web, dashboards, and more) across a variety of organizations, minstiies, and universities.
                </p>

                  <div className="socialIcon" >
                  <a href="https://www.behance.net/Omar_Mokhtar" title="behance">  <FontAwesomeIcon icon={['fab', 'behance']} /></a>
                  <a href="https://github.com/omarmok" title="github">  <FontAwesomeIcon icon={['fab', 'github']} /></a>
                  <a href="https://www.linkedin.com/in/omarmokhtar22/" title="linkedin">  <FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
                  <a href="mailto:sal_fagomy22@hotmail.com" title="envelope">  

                <img src="/images/envelope.svg"/>
      
      </a>
                  <a href="https://twitter.com/al_fagomy22" title="twitter">  <FontAwesomeIcon icon={['fab', 'twitter']} /></a>
                    </div>


                </div>
               
              <div className="d-flex">
                    <button className="btn mt-3 mx-2"> DOWNLOAD PORTFOLIO</button>
                    
                </div>

                </div>
                </div>
      
          </div>

          
          </div>

        
    </main>
  )
}
