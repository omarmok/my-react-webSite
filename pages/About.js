
import { Component } from 'react';
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Head from 'next/head'
import { render } from 'react-dom';
import axios from 'axios';
import Certifications from '../components/Certifications';
import Tools from '../components/Tools';
import Loader from '../components/Loader';
import azhar from '../public/images/azhar.png'


class About extends Component{

  state ={

    Experience :[]
  }
  componentDidMount = () =>{
    axios.get('https://api.npoint.io/ba35b22a6f908f637bc8').then( res => { this.setState ({Experience :res.data.Experience})})
  
  }



  render(){
    const {Experience}= this.state;
    const Experiencelist = Experience.map( ( ExperienceItem) =>{

      return(
        
        <div className=" mycard"  data-aos="fade-up" data-aos-duration="2000" key={ExperienceItem.key}>
        <div className="mycard__details" >
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
             <title>Omar Mokhtar-About</title>
           </Head>
      
           <Loader/>


           <div className="container">
       
           <div className="page__container">

           <div className="mainpagetitle"  data-aos="fade-in" data-aos-duration="500">
            About Me
            </div>

         <div className="section__title">
           <div className="section__title--maintitle" data-aos="fade-right" data-aos-duration="1000">Experience</div>
           <div  data-aos="fade-left" data-aos-duration="1000">
                <a href="https://drive.google.com/file/d/1qmohDM5_31jg8aHfUuOBOALO2uuv9faK/view?usp=sharing"  className="btn section__title--btn"  download>DOWNLOAD RESUME</a>

           </div>
         </div>
          { Experiencelist}
        

          <div className="section__title mt-5">
           <div className="section__title--maintitle" data-aos="fade-right" data-aos-duration="1000">Education</div>
         </div>

         <div className=" mycard"  data-aos="fade-up" data-aos-duration="2000">
         <div className="mycard__details w-100 d-flex align-items-center  justify-content-between">
            <div className="mycard__details--jobtitle d-flex align-items-center "> 
            
                     <Image  alt="MyImage"   src={azhar} />
                     {/* <Image  alt="MyImage"  src="../public/images/azhar.png" width={150} height={150}  objectFit='cover'  /> */}


              <div className=" ">
              Bachelor of Physical
                  
                  <div className="d-block mycard__details--companyname">  Al-Azhar University</div>
              </div>
            </div>
            <div className="mycard__details--date"> 2004-2009</div>

        </div>
         </div>
         
         <Certifications/>

         <div className="section__title mt-5">
           <div className="section__title--maintitle" data-aos="fade-right" data-aos-duration="1000">Skills</div>
         </div>
         <Tools  />
           </div>

    </div>
    </div>
)
}
   
}
export default About