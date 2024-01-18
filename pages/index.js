import React, { useEffect } from 'react';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.css';
import Image from 'next/image';
import photo from '../public/images/omar.png';

import { FaTwitter, FaBehance, FaGithub, FaEnvelope, FaLinkedin, FaDownload } from 'react-icons/fa';
import Loader from '../components/Loader';

export default function Home() {
  useEffect(() => {
    // Load Bootstrap's tooltip script dynamically
    const loadBootstrapTooltipScript = () => {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/bootstrap/dist/js/bootstrap.bundle.min.js';
      script.async = true;
      document.body.appendChild(script);
    };

    // Initialize Bootstrap tooltips once the script has loaded
    const initializeTooltips = () => {
      if (typeof window !== 'undefined' && typeof window.bootstrap !== 'undefined') {
        const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        tooltipTriggerList.forEach((tooltipTriggerEl) => {
          new window.bootstrap.Tooltip(tooltipTriggerEl);
        });
      }
    };

    // Load script and initialize tooltips
    loadBootstrapTooltipScript();
    initializeTooltips();
  }, []);

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
                    Omar Mokhtar
                  </div>
                  <span className="mb-3">User Experience Engineer at Confidential Government!</span>
                  <a
                    href="https://www.coursera.org/account/accomplishments/professional-cert/7HGU76DTMDGG"
                    title="Google UX Design Professional Certificate"
                    target="_blank"
                    rel="noopener noreferrer"
                    className='googlecertificated'
               
                  >
                    {/* <Image alt="Google Certified" src={googleimage} /> */}

                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/><path d="M1 1h22v22H1z" fill="none"/></svg>

                    Google Certified
                  </a>
                </div>
                <div className="mt-3 d-flex align-items-center discraption">

                   <div className='d-flex align-items-center flex-column'  >

                   <p data-bs-toggle="tooltip" data-bs-placement="top" title="مع أكثر من 14 عامًا من الخبرة كمصمم UI/UX، فأنا متخصص في التجارب الرقمية وواجهات الأجهزة المحمولة ولوحات معلومات الويب .">
                  
                    With over 14 years of experience as a UI/UX designer, I specialize in digital experiences, mobile interfaces, and dynamic web dashboards.
                 
                  </p>
                  <p data-bs-toggle="tooltip" data-bs-placement="top" title="طوال مسيرتي المهنية، عملت في قطاعات تشمل منظمات مشهورة ووزارات حكومية ومؤسسات أكاديمية مرموقة. ">
Throughout my career, I have worked in sectors including renowned organizations, government ministries, and prestigious academic institutions.                  </p>
                  <p data-bs-toggle="tooltip" data-bs-placement="top" title="أتولى قيادة مبادرات إعادة التصميم الشاملة، وتحويل تجارب المستخدم من خلال ترجمة الأفكار بسلاسة إلى حلول ملموسة، بدءًا من التفكير الأولي وحتى التنفيذ النهائي، وتتضمن عمليتي رسمًا دقيقًا، وإطارًا شبكيًا دقيقًا، وصياغة نماذج أولية عالية الدقة.">
  
  I take the helm in leading comprehensive redesign initiatives, transforming user experiences by seamlessly translating ideas into tangible solutions From initial ideation to the final execution, my process involves meticulous sketching, precise wireframing, and crafting high-fidelity prototypes.                  </p>

<p data-bs-toggle="tooltip" data-bs-placement="top" title='أعمل بشكل وثيق مع المحللين والمطورين ومختبري ضمان الجودة للتأكد من أن تصميماتنا تصبح منتجات سهلة الاستخدام وتتوافق تمامًا مع أهداف المشروع.'>
I work closely with analysts, developers, and QA testers to ensure our designs smoothly become user-friendly products that match project goals perfectly.
</p>
                   </div>
               

                  <div className="socialIcon">
                    <a href="https://www.behance.net/Omar_Mokhtar" data-bs-toggle="tooltip" data-bs-placement="top"  title="Behance" >
                      <FaBehance />
                    </a>
                    <a href="https://github.com/omarmok" title="GitHub"  data-bs-toggle="tooltip" data-bs-placement="top" >
                      <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/omarmokhtar22/" title="LinkedIn" data-bs-toggle="tooltip" data-bs-placement="top" >
                      <FaLinkedin />
                    </a>
                    <a href="https://twitter.com/al_fagomy22" title="Twitter" data-bs-toggle="tooltip" data-bs-placement="top" >
                      <FaTwitter />
                    </a>
                    <a href="mailto:al_fagomy22@hotmail.com"  title="Email" data-bs-toggle="tooltip" data-bs-placement="top" >
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
