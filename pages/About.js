import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Head from 'next/head';
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
        const response = await axios.get('https://api.npoint.io/8e1204c7ff27fd1a6c68');
        setExperience(response.data.Experience);
      } catch (error) {
        console.error('Error fetching experience data:', error);
      }
    };

    fetchData();
  }, []);

  const renderExperienceList = () => {
    return experience.map((experienceItem) => (
      <div className="mycard" data-aos="fade-up" data-aos-duration="2000" key={experienceItem.key}>
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
      <Head>
        <title>Omar Mokhtar-About</title>
      </Head>
      <Loader />
      <div className="container">
        <div className="page__container">
          <h1 className="d-flex justify-content-between mainpagetitle mb-3 aos-init aos-animate" data-aos="fade-in" data-aos-duration="500">
            About Me

            <div className="d-flex downloadresume"><a href="https://drive.google.com/file/d/1h2G61LIlwnHWcgW_5gVbaEP0YswOez6O/view?usp=sharing" class="btn section__title--btn btn mt-3 mx-2 homebtn" target="_blank" rel="noopener noreferrer"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"></path></svg> DOWNLOAD RESUME</a></div>
          </h1>
          {renderExperienceList()}
          {/* Render the Tools component */}
          <Certifications />
          <Tools />
          {/* Other parts of your JSX content */}
        </div>
      </div>
    </div>
  );
}

export default About;
