
import { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Head from 'next/head'
import { render } from 'react-dom';
import axios from 'axios';
import Certifications from '../components/Certifications';


class About extends Component{

  state ={

    Experience :[]
  }
  componentDidMount = () =>{
    axios.get('https://api.npoint.io/902de4cb6e393d3d08fd').then( res => { this.setState ({Experience :res.data.Experience})})
  
  }



  render(){
    const {Experience}= this.state;
    const Experiencelist = Experience.map( ( ExperienceItem) =>{

      return(
        
        <div className=" mycard"  data-aos="fade-up" data-aos-duration="2000">
        <div className="mycard__details" key={ExperienceItem.key}>
            <div className="mycard__details--date">{ExperienceItem.date}</div>
            <div className="mycard__details--jobtitle">{ExperienceItem.jobtitle}</div>
            <div className="mycard__details--companyname"> {ExperienceItem.companyname}</div>

        </div>
        <div className="role"> {ExperienceItem.role} </div>
      
        </div>
      )

      

    })
  return(

   
    <div>
           <Head>
             <title>About</title> 
           </Head>
           <div className="container">
           
           <div className="page__container">

           <div className="mainpagetitle"  data-aos="fade-in" data-aos-duration="500">
            About Me
            </div>

         <div className="section__title">
           <div className="section__title--maintitle" data-aos="fade-right" data-aos-duration="1000">Experience</div>
           <div className="btn section__title--btn" download data-aos="fade-left" data-aos-duration="1000">DOWNLOAD RESUME</div>
         </div>
          { Experiencelist}
        

          <div className="section__title mt-5">
           <div className="section__title--maintitle" data-aos="fade-right" data-aos-duration="1000">Education</div>
         </div>

         <div className=" mycard"  data-aos="fade-up" data-aos-duration="2000">
         <div className="mycard__details w-100 d-flex align-items-center  justify-content-between">
            <div className="mycard__details--jobtitle d-flex align-items-center ">  <img src="/images/azhar.png" className="mx-3"/>
              <div className=" ">
              Bachelor of Physical
                  
                  <div className="d-block mycard__details--companyname">  Al-Azhar University</div>
              </div>
            </div>
            <div className="mycard__details--date"> 2004-2009</div>

        </div>
         </div>
         
         <Certifications/>

           </div>

    </div>
    </div>
)
}
   
}
export default About