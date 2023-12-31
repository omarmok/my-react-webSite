import React, { useEffect } from 'react';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.css';
import Image from 'next/image';
import photo from '../public/images/omar.png';
import googleimage from '../public/images/google.png';
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

                   <div className='d-flex align-items-center flex-column'  >

                   <p data-bs-toggle="tooltip" data-bs-placement="top" title="
                   مع أكثر من 14 عامًا من الخبرة المخصصة كمصمم واجهة المستخدم/تجربة المستخدم، فقد تخصصت في صياغة تجارب رقمية مقنعة وواجهات متنقلة ولوحات تحكم ويب ديناميكية. طوال مسيرتي المهنية، كان لي شرف المساهمة بخبرتي في قطاعات متنوعة بما في ذلك المنظمات الشهيرة والوزارات الحكومية والمؤسسات الأكاديمية المرموقة.
 ">
                    With over 14 years of dedicated experience as a UI/User Experience Designer, I&apos;ve specialized in crafting compelling digital experiences, mobile interfaces, and dynamic web dashboards. Throughout my career, I&apos;ve had the privilege to contribute my expertise across diverse sectors including renowned organizations, government ministries, and esteemed academic institutions.
                  </p>
                  <p data-bs-toggle="tooltip" data-bs-placement="top" title="
ويمتد نهجي إلى ما هو أبعد من مجرد التصور - فأنا أتولى قيادة مبادرات إعادة التصميم الشاملة، وتحويل تجارب المستخدم من خلال ترجمة الأفكار بسلاسة إلى حلول ملموسة. بدءًا من التفكير الأولي وحتى التنفيذ النهائي، تتضمن عمليتي رسمًا تخطيطيًا دقيقًا وإطارًا سلكيًا دقيقًا وصياغة نماذج أولية عالية الدقة. ">
                    My approach extends beyond conceptualization—I take the helm in leading comprehensive redesign initiatives, transforming user experiences by seamlessly translating ideas into tangible solutions. From initial ideation to the final execution, my process involves meticulous sketching, precise wireframing, and crafting high-fidelity prototypes.
                  </p>
                  <p data-bs-toggle="tooltip" data-bs-placement="top" title="
التعاون هو جوهر سير العمل الخاص بي. أشارك بنشاط مع المحللين والمطورين ومختبري ضمان الجودة، مما يعزز العلاقة التكافلية التي تضمن الانتقال السلس من مخطط التصميم إلى المنتجات الوظيفية سهلة الاستخدام والتي تتماشى بدقة مع مواصفات المشروع.
">
  
                    Collaboration is at the heart of my workflow. I actively engage with analysts, developers, and QA testers, fostering a symbiotic relationship that ensures a smooth transition from design blueprint to user-friendly, functional products aligned precisely with project specifications.
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
                    <a href="mailto:al_fagomy22@hotmail.com"  title="Email" data-bs-toggle="tooltip" data-bs-placement="top" title="Behance">
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
