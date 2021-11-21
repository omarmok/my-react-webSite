
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import useSWR from 'swr'
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
    axios.get('https://api.npoint.io/777bba75c802dcadc73b').then( res => { this.setState ({Projects :res.data.Projects})})
  
  }



  render(){
    const {Projects}= this.state;
    const Projectslist = Projects.map( ( ProjectsItem) =>{

      return(
            <div className="col-12 col-lg-4 " data-aos="fade-up" data-aos-duration="3000"  key={ProjectsItem.key}>
            <div className="portfolio-item">
                <div className="portfolio-img">
                  <Image className="img-fluid" src={ProjectsItem.image} alt="test"  width={300} height={200} layout="responsive"/>
                  </div>
                <div className="portfolio-text">
                <div className="mycard__details--date">
                {ProjectsItem.Issued}
                </div>
                    <div className="mycard__details--jobtitle">
               
                    {ProjectsItem.info}
                    
                    </div>
                </div>
                <div className="portfolio-links">
                  <a href={ProjectsItem.url} >   <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon> </a>

              
                </div>
            </div>
            </div>

      )

      

    })
  return(

   
    <div>
              <Head>
                <title>Omar Mokhtar-Projects</title>
                <meta name="description" content="UI/UX Design developer front-end developer" />
                <link rel="icon" href="../public/favicon.ico" />
      </Head>
      <Loader/>
           <div className="container">
    
           <div className="page__container project">

           <div className="mainpagetitle"  data-aos="fade-in" data-aos-duration="500">
           Projects
            </div>
          <div className="project__description">
          <p>
          I always look forward to my techniques and expanding my skill set.

            <br/>
Each of my projects - individual or collaborative - has provided me with some experience to help me in this area.
<br/>
I have some experiences that I was able to apply some of them in projects, and there are others that I know about some things that I could not work with, because the work environment in which I worked depended on other technologies,Which made me work the same way the environment depends.
            </p>
          </div>

         <div className="row">
           <div className="col-12">
             <div className="caseStudy m-5 mx-0" data-aos="fade-right" data-aos-duration="2000">
                <div className="caseStudy__img">
               
                {/* <img src="../images/casstudymain.png" alt="my image" className="img-fluid" /> */}
        
                <Image  alt="MyImage"  src="../public/images/casstudymain.png" width={500} height={500} layout="responsive" />

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

                   <Link href="./CaseStudy">
                      <a className="btn d-inline-block">Case Study UI/UX</a>
                    </Link>

             </div>
             
             
             </div>
           </div>

         </div>
      <div className="row">

      { Projectslist}
      </div>
          <div className="row">
          <div className=" mr-auto my-4 ">      <a href="https://www.linkedin.com/in/omarmokhtar22/" className="btn section__title--btn d-inline-block"  data-aos="fade-left" data-aos-duration="1000">Find more @ linkedin</a>
          </div>
          </div>

      

           </div>

    </div>
    </div>
)
}
   
}
export default Projects