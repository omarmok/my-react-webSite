import { Component } from 'react';
import Image from 'next/image'
import axios from 'axios';
import linkedin from '../public/images/LinkedIn_Logo.svg.png';
import { FaExternalLinkSquareAlt } from 'react-icons/fa';
import Link from 'next/link';
class Certifications extends Component{
    state ={

        Certifications :[]
      }
      componentDidMount = () =>{
        axios.get('https://api.npoint.io/6f0dae3cb9f69ee07ee5').then( res => { this.setState ({Certifications :res.data.Certifications})})
      
      }
    
    
    
      render(){
        const {Certifications}= this.state;
        const Certificationslist = Certifications.map( ( CertificationsItem) =>{
    
          return(
            
            <div className=" mycard p-3 Certificationscard"  data-aos="fade-up" data-aos-duration="2000" key={CertificationsItem.key}>
            <div className="mycard__details  m-0 p-0" >
              <div>
                <div className="mycard__details--date">{CertificationsItem.Issued}</div>
                <div className="mycard__details--jobtitle">{CertificationsItem.info}</div>
                <a  href={CertificationsItem.url}  className="mycard__details--url" title='Show credential ' rel="noopener noreferrer" target="_blank" >Show credential  <FaExternalLinkSquareAlt /> </a>

              </div>
                <div className="Certificationsimage">
                {/* <Image  src={linkedin} width={500} height={110} layout='responsive' alt=""/> */}
                <Image src={CertificationsItem.image} alt="course image"  width={100} height={100} layout='fixed' className={CertificationsItem.st} />
                {/* <Image  alt="MyImage"  src="../public/images/LinkedIn_Logo.svg.png" width={500} height={150} layout='responsive' /> */}
                </div>

                
    
            </div>
          
            </div>
          )
    
          
    
        })
        return(

   
            <div>
               
                 <div className="section__title mt-5 flex-column align-items-start" data-aos="fade-right" data-aos-duration="2000">
                   <div className="section__title--maintitle" >Certifications</div>
                   <p> I usually prefer use investment self learning to improve my experiences</p>
                 </div>
                  { Certificationslist}

                  <div className="mt-4 d-inline-block">
                  <a href="https://www.linkedin.com/in/omarmokhtar22/" title="" className="btn outlinebtn "> Linkedin For More</a>
                  </div>                
            </div>
        )


}

};

export default  Certifications
 
