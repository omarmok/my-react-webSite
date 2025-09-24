import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import Certifications from '../components/Certifications';
import Tools from '../components/Tools';
import Loader from '../components/Loader';
import azhar from '../public/images/azhar.png';
import { FaDownload } from 'react-icons/fa';

function About() {
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.npoint.io/6f0dae3cb9f69ee07ee5');
        if (response.data && response.data.Experience) {
          setExperience(response.data.Experience);
        } else {
          console.error("Invalid API response structure:", response.data);
        }
      } catch (error) {
        console.error('Error fetching experience data:', error);
      }
    };

    fetchData();
  }, []);

  const renderExperienceList = () => {
    return experience.map((experienceItem, index) => (
      <div 
        className="mycard" 
        data-aos="fade-up" 
        data-aos-duration="2000" 
        key={experienceItem.id || index} // ✅ Using unique ID if available, otherwise fallback to index
      >
        <div className="mycard__details flex-column align-items-start">
          <div className="mycard__details--date">{experienceItem.date}</div>
          <div className="mycard__details--jobtitle">{experienceItem.jobtitle}</div>
          <div className="mycard__details--companyname">{experienceItem.companyname}</div>
        </div>
        <div className="role">{experienceItem.role}</div>
      </div>
    ));
  };

  return (
    <div>
      <Loader />
      
      <div className="container">
        <div className="page__container">
          <div 
            className="d-flex justify-content-between mainpagetitle mb-3 aos-init aos-animate" 
            data-aos="fade-in" 
            data-aos-duration="500"
          >
            About
            <div className="d-flex downloadresume">
              <a 
                href="https://drive.google.com/file/d/1OUFTx0mAgvXiS2FmSHFPwekYrRvniFjh/view" 
                className="btn section__title--btn mt-3 homebtn" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaDownload />
                Download Resume 
              </a>
            </div>
          </div>

       
          {experience.length > 0 ? renderExperienceList() : <p>Loading experience...</p>}



          {/* Render Certifications & Tools components */}
          <Certifications />

          <Tools />

       <div className="mt-5  section__title--maintitle">  You can find more about me in this video</div>
        <div className='mb-3  mycard aos-init aos-animate findMore'>
      
            <iframe
              width="100%"
              height="500"
              src="https://www.youtube.com/embed/ISFsa-OOy0s?si=5WmsmNtYxwecNOq2"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>


      </div>
    </div>
  );
}

export default About;
