import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.css';
import Image from 'next/image';
import photo from '../public/images/omar.png';
import googleimage from '../public/images/google.png';
import { FaTwitter, FaBehance, FaGithub, FaEnvelope, FaLinkedin, FaDownload } from 'react-icons/fa';

import Loader from '../components/Loader';

export default function Home() {
  return (
    <main>
      <Head>
        <title>Omar Mokhtar - Home Page</title>
      </Head>

      <Loader />

      <div className="container">
        <div className="index__details">
          <div className="row">
            <div className="col-lg-4 col-sm-12">
              <div className="home-image">
                <div className='overlay'></div>
                <Image alt="MyImage" src={photo} />
                <div className="d-flex downloadresume">
                  <a
                    href="https://drive.google.com/file/d/1h2G61LIlwnHWcgW_5gVbaEP0YswOez6O/view?usp=sharing"
                    className="btn section__title--btn btn mt-3 mx-2 homebtn"
                    target="_blank"
                    rel="noopener noreferrer"
                 
                    title="Download Resume"
                  >
                    <FaDownload /> DOWNLOAD RESUME
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-sm-12">
              <div className='h-100 d-flex flex-column justify-content-center'>
                <div className="title">
                  <div className="myname d-flex align-items-center">
                    Omar <span className="cusomspan">Mokhtar</span>
                  </div>
                  <span className="mb-3">User Experience Engineer at Confidential Government!</span>
                  <a
                    href="https://www.coursera.org/account/accomplishments/professional-cert/7HGU76DTMDGG"
                    title="Google UX Design Professional Certificate"
                    target="_blank"
                    rel="noopener noreferrer"
                    className='googlecertificated'
               
                  >
                    <Image alt="Google Certified" src={googleimage} />
                    Google Certified
                  </a>
                </div>
                <div className="mt-3 d-flex align-items-center discraption">
                  <p>
                    Within <strong>14+</strong> years as a UI/User Experience Designer, I've Designed digital experiences, mobile interfaces, and web dashboards.
                    <br></br>
                    My work spans different fields like organizations, ministries, and academic institutions.
                    <br></br>
                    Beyond ideas, I lead redesigns, improving user experiences by drawing, and creating wireframes, and high-quality prototypes.
                    <br></br>
                    Working closely with analysts, developers, and QA testers, I ensure designs turn into user-friendly products as per the specs.
                  </p>
                  <div className="socialIcon">
                    <a href="https://www.behance.net/Omar_Mokhtar" title="Behance" >
                      <FaBehance />
                    </a>
                    <a href="https://github.com/omarmok" title="GitHub"  >
                      <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/omarmokhtar22/" title="LinkedIn"  title="LinkedIn">
                      <FaLinkedin />
                    </a>
                    <a href="https://twitter.com/al_fagomy22" title="Twitter" >
                      <FaTwitter />
                    </a>
                    <a href="mailto:al_fagomy22@hotmail.com"  title="Email">
                      <FaEnvelope />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
