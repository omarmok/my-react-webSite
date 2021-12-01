import Head from 'next/head'
import Link from "next/link"
import Image from 'next/image'
import case1 from '../public/images/case1.png'
import walidInfo from '../public/images/walidInfo.png'
import color from '../public/images/color.png'
import screenshoot from '../public/images/screenshoot.png'
import Loader from '../components/Loader'
const CaseStudy = () => {
    return(


        
        <div >
         
         <Head>
                <title>Omar Mokhtar-Case Study</title>
          
        </Head>
        <Loader/>
        <div className="container">

        <div className="page__container project">

            <div className="mainpagetitle"  data-aos="fade-in" data-aos-duration="500">
              Student Internal Portal
            </div>
          <div className="casestudyContainer" data-aos="fade-up" data-aos-duration="2000">
          <Image  alt="MyImage"  src={case1}  layout="responsive" />
          {/* <Image  alt="MyImage"  src="../public/images/case1.png" width={900} height={450} layout='responsive' objectFit='contain' /> */}

        
              <h3 className="fw-bold">My Role</h3>

                <p>
                I was the UX Designer UI Designer UI Developer in a team of 6 and we completed this project over the course of 10 weeks.
<br/>
 I was in competitives analysis and user research.
<br/>
 I was also responsible for coming up with ideas for designing the layout, and for improving the overall user experience using sketching, wireframing and Prototyping. 
<br/>
Moreover, I was involved with the development team, as we used HTML and Javascript to build portal . 

<br/>
Working closely with analysist ,developers and QA testers ensuring that the product is developed according to experience and design specifications.

                </p>
         

              <div className="Persona mt-5">
                  <h3 className="fw-bold">Persona</h3>
                <p>I created a character after I conducted a research by a member of the Deanship of Information Technology team through their experience in solving students' problems</p>
           
  <div className="row">
             
  <div className="col col-lg-4 mx-auto mt-5">

<div className="walidInfo">
<div className="walidInfo__name">Walid ALolah</div>
<div className="walidInfo__Image">
<Image  alt="MyImage"  src={walidInfo}  layout="responsive" />

</div>
<div className=" d-flex walidInfo__Details">
      <div className="info">
        <span>Age</span>
        20
      </div>
      <div className="info">
        <span>Education</span>
        Faculty of Dentistry at Al Zulfi
      </div>
      <div className="info">
        <span>Location</span>
        Al Zulfi
      </div>

</div>


</div>

</div>



</div>


<div className="row">
<div className="col col-lg-6 mt-3 ">
<div className="Problems">
<div className="walidInfo__name">Problems</div>

<ul>
  <li>
  When requesting each service, each service must be entered separately in more than 15 services provided by the university, which requires entering 15 times according to the services.
  </li>
  <li>
  Difficulty recognizing the study schedule and examination schedule
The lack of detailed information about each service to know the importance or how to benefit from the service.                </li>


<li>

To follow up on each application, the student must review the application in his portal.                </li>

<li>
Unfamiliarity with the activities, advertisements or services provided by the entity.
  </li>

</ul>
</div>

</div>

<div className="col col-lg-6 mt-3 ">
<div className="Problems">
<div className="walidInfo__name">Goals</div>

<ul>
  <li>
  Enabling the student to use the service through the unified portal and not to go to the service site itself and follow the progress of the application through the portal.
  </li>
  <li>
  Availability of an area screen for the study schedule and exams.        
     </li>


<li>

Provide a screen for advertisements and events of the entity for each student separately.               </li>

<li>
Availability of a screen for university activities in general.  </li>
<li>
Provide phone numbers of interest to the student. </li>
</ul>
</div>

</div>
</div>

  </div>

                {/* <Image  alt="MyImage"  src="../public/images/Persona.png" width={900} height={350} layout='responsive' objectFit='contain' /> */}
                <Image  alt="MyImage"  src={color}  width={900} height={500} layout="responsive" />
                <Image  alt="MyImage"  src={screenshoot}  width={900} height={1500} layout="responsive" />
                {/* <Image  alt="MyImage"  src="../public/images/color.png" width={900} height={500} layout='responsive' objectFit='contain' />
                <Image  alt="MyImage"  src="../public/images/screenshoot.png" width={900} height={1500} layout='responsive' objectFit='contain' /> */}
        
        <Link href="/Projects">
              <a className="btn d-inline-block me-2 my-2">Back to Projects</a>
              
        </Link>

        <Link href="http://omarmokhtar.com/SU/index.html">
              <a className="btn outlinebtn  d-inline-block me-2 my-2">Check website</a>

        </Link>

          </div>
         
            </div>
        </div>


        </div>

    )
}
export default CaseStudy