
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Head from 'next/head'
import axios from 'axios';


class Projects extends Component{

  state ={

    Projects :[]
  }
  componentDidMount = () =>{
    axios.get('https://api.npoint.io/ba35b22a6f908f637bc8').then( res => { this.setState ({Projects :res.data.Projects})})
  
  }



  render(){
    const {Projects}= this.state;
    const Projectslist = Projects.map( ( ProjectsItem) =>{

      return(
            <div class="col-4 col-lg-4 " data-aos="fade-up" data-aos-duration="3000"  key={ProjectsItem.key}>
            <div class="portfolio-item">
                <div class="portfolio-img"><img class="img-fluid" src="http://omarmokhtar.com/assets/img/portfolio/students.jpg" /></div>
                <div class="portfolio-text">
                <div className="mycard__details--date">
                {ProjectsItem.Issued}
                </div>
                    <div className="mycard__details--jobtitle">
               
                    {ProjectsItem.info}
                    
                    </div>
                </div>
                <div class="portfolio-links">
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

         <div className="section__title mb-5">
           <div className="section__title--maintitle" data-aos="fade-right" data-aos-duration="1000">Projects</div>
           <a href="https://www.linkedin.com/in/omarmokhtar22/" className="btn section__title--btn"  data-aos="fade-left" data-aos-duration="1000">Find more @ linkedin</a>
         </div>
      <div className="row">

      { Projectslist}
      </div>
        

      

           </div>

    </div>
    </div>
)
}
   
}
export default Projects