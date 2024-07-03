import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import Head from 'next/head';
import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';
import casstudymain from '../public/images/casstudymain.png';
import Loader from '../components/Loader';


const Projects = () => {
  const [Projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('https://api.npoint.io/16e3d8319949e6753d67').then((res) => {
      setProjects(res.data.Projects);
    });
    
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

  const Projectslist = Projects.map((ProjectsItem) => {
    return (
      <div className="col-12 col-lg-6 " data-aos="fade-up" data-aos-duration="3000"  key={ProjectsItem.key}>
      <div className="portfolio-item">
          <div className="portfolio-img">
            <Image className="img-fluid" src={ProjectsItem.image} alt="test"  width={300} height={200} layout="responsive"/>
            <div className="mycard__details--date">
          {ProjectsItem.Issued}
          </div>
            <div className="mycard__details--jobtitle">
         
              {ProjectsItem.info}
              
              </div>
            </div>
      
          <div className="portfolio-links">
            <a href={ProjectsItem.url} target="_blank"  rel="noreferrer">   <FontAwesomeIcon icon={faExternalLinkAlt}></FontAwesomeIcon> </a>

        
          </div>
      </div>
      </div>
    );
  });

  return (
    <div>
              <Head>
                <title>Omar Mokhtar-Work</title>
       
                </Head>
      <Loader/>
           <div className="container">
    
           <div className="page__container project">

           <h1 className="mainpagetitle"  data-aos="fade-in" data-aos-duration="500">
           Work
            </h1>
          <div className="project__description" data-bs-toggle="tooltip" data-bs-placement="top"  title="أنا دائمًا متحمس لتعلم تقنيات جديدة وتوسيع مهاراتي.
كل مشروع عملت عليه، سواء بمفردي أو مع الآخرين، علمني شيئًا ذا قيمة.
في بعض الأحيان، استخدمت هذه الدروس بشكل مباشر في عملي. وفي أحيان أخرى، كانت التقنيات المستخدمة في مكان العمل تحد مما يمكنني تطبيقه.
لقد أثر التكيف مع هذه الأدوات على طريقة عملي، ولكنه حفزني أيضًا على استكشاف المزيد خارج تلك الحدود.">
            
    
         <p>
          I&apos;m always excited about learning new techniques and expanding my skills.
          <br />
           Every project I&apos;ve worked on, whether alone or with others, has taught me something valuable.
           <br />
            Sometimes, I&apos;ve used these lessons directly in my work. Other times, the technologies used in the workplace limited what I could apply.
            <br />
           Adapting to these tools influenced how I worked, but it also motivated me to explore more beyond those limits.
            </p>
          </div>

         <div className="row">
           <div className="col-12">
             <div className="caseStudy m-1 mx-0" data-aos="fade-right" data-aos-duration="2000">
                <div className="caseStudy__img">
               
                {/* <img src="../images/casstudymain.png" alt="my image" className="img-fluid" /> */}
        
                <Image  alt="MyImage"  src={casstudymain}layout="responsive" />

                </div>             
             <div className="caseStudy__description">

               <div className="title">
               Student Internal Portal
                 </div>
                <p  data-bs-toggle="tooltip" data-bs-placement="top" title='أصبحت البوابات الإلكترونية ضرورة ملحة في مجال التعليم والتعليم العالي: ومن هذا المنطلق اقترحت جامعة المجمعة إنشاء بوابة داخلية للطلاب تتميز بما يلي: الدخول الموحد تقديم أكثر من 15 خدمة الاطلاع على الأخبار والفعاليات التي أعلن عنها الوصول السريع للجامعة: تقديم الطلبات عبر أنظمة الجامعة المختلفة وجمعها في مكان واحد. مراجعة دروسهم وجداول الامتحانات.'>
                    Portals have become an urgent necessity in the field of education and higher education:
                      From this standpoint, <span>MAJMAAH UNIVERSITY</span> suggested establishing an internal portal for students, characterized by the following:
                  
                      Single sign-on
                     
                      Providing more than 15 services
                  
                      View the news and events announced by the university
                     
                      Quick access: Submit applications across the various systems of the university and collect them in one place.
                 
                      Review their classes and exam schedules.
               

                  </p>

                   <Link href="./CaseStudy" className="btn d-inline-block">
                      Case Study
                    </Link>

             </div>
             
             
             </div>
           </div>

         </div>

         <div className="section__title mt-3 mb-3">
           <div className="section__title--maintitle" data-aos="fade-right" data-aos-duration="1000">More Projects</div>
         </div>
      <div className="row">

      { Projectslist}
      </div>
          <div className="row">
          <div className=" mr-auto my-4 ">    
            <a href="https://www.linkedin.com/in/omarmokhtar22/" className="btn section__title--btn d-inline-block more_btn_project"  data-aos="fade-left" data-aos-duration="1000">Find more @ linkedin</a>
          </div>
          </div>

      

           </div>

    </div>
    </div>
  );
};

export default Projects;
