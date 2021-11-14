import { Component } from 'react';

import axios from 'axios';

class Certifications extends Component{
    state ={

        Certifications :[]
      }
      componentDidMount = () =>{
        axios.get('https://api.npoint.io/902de4cb6e393d3d08fd').then( res => { this.setState ({Certifications :res.data.Certifications})})
      
      }
    
    
    
      render(){
        const {Certifications}= this.state;
        const Certificationslist = Certifications.map( ( CertificationsItem) =>{
    
          return(
            
            <div className=" mycard p-3 Certificationscard"  data-aos="fade-up" data-aos-duration="2000">
            <div className="mycard__details d-flex justify-content-between align-items-center m-0 p-0" key={CertificationsItem.key}>
              <div>
                <div className="mycard__details--date">{CertificationsItem.Issued}</div>
                <div className="mycard__details--jobtitle">{CertificationsItem.info}</div>
              </div>
                <div className="Certificationsimage"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/2560px-LinkedIn_Logo.svg.png" className="w-100" alt=""/></div>
    
            </div>
          
            </div>
          )
    
          
    
        })
        return(

   
            <div>
               
                 <div className="section__title mt-5">
                   <div className="section__title--maintitle" data-aos="fade-right" data-aos-duration="2000">Certifications</div>
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
 
