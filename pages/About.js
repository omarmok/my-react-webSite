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
          <h1 className="mainpagetitle" data-aos="fade-in" data-aos-duration="500">
            About Me
          </h1>
          {renderExperienceList()}
          {/* Other parts of your JSX content */}
        </div>
      </div>
    </div>
  );
}

export default About;
