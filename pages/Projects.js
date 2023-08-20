
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"
import Head from 'next/head'
import axios from 'axios'
import Link from "next/link"
import Image from 'next/image'
import CaseStudy from './CaseStudy'
import casstudymain from '../public/images/casstudymain.png'
import Loader from '../components/Loader'
class Projects extends Component{

  state ={

    Projects :[]
  }
  componentDidMount = () =>{
    axios.get('https://api.npoint.io/8e1204c7ff27fd1a6c68').then( res => { this.setState ({Projects :res.data.Projects})})
  
  }



  render(){
    const {Projects}= this.state;
    const Projectslist = Projects.map( ( ProjectsItem) =>{

      return(
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

      )

      

    })
  return(

   
    <div>
              <Head>
                <title>Omar Mokhtar-Projects</title>
       
                </Head>
      <Loader/>
           <div className="container">
    
           <div className="page__container project">

           <h1 className="mainpagetitle"  data-aos="fade-in" data-aos-duration="500">
           Projects
            </h1>
          <div className="project__description">
          <p>
          I always look forward to my techniques and expanding my skill set.
          <br/>
Each of my projects - individual or collaborative - has provided me with some experience to help me in this area.
<br/>
I have some experiences that I was able to apply some of them in projects, and there are others that I know about some things that I could not work with because the work environment in which I worked depended on other technologies, Which made me work the same way the environment counts.
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
                <p>
                    Portals have become an urgent necessity in the field of education and higher education:
                      From this standpoint, <span>MAJMAAH UNIVERSITY</span> suggested establishing an internal portal for students, characterized by the following:
                      <br />
                      Single sign-on
                      <br />
                      Providing more than 15 services
                      <br />
                      View the news and events announced by the university
                      <br />
                      Quick access: Submit applications across the various systems of the university and collect them in one place.
                      <br />
                      Review their classes and exam schedules.
                      <br />

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
)
}
   
}
export default Projects