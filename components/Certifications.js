import { useEffect, useState } from 'react';
import Image from 'next/image';
import axios from 'axios';
import linkedin from '../public/images/LinkedIn_Logo.svg.png';
import { FaExternalLinkSquareAlt } from 'react-icons/fa';

const Certifications = () => {
  const [certifications, setCertifications] = useState([]);

  useEffect(() => {
    axios.get('https://api.npoint.io/8e1204c7ff27fd1a6c68')
      .then((res) => {
        setCertifications(res.data.Certifications);
      })
      .catch((error) => {
        console.error('Error fetching certifications data:', error);
      });
  }, []);

  return (
    <div>
      <div className="section__title mt-5 flex-column align-items-start" data-aos="fade-right" data-aos-duration="2000">
        <div className="section__title--maintitle">Certifications</div>
        <p>I usually prefer using investment in self-learning to improve my experiences</p>
      </div>
      {certifications.map((certificationItem) => (
        <div className="mycard p-3 Certificationscard" data-aos="fade-up" data-aos-duration="2000" key={certificationItem.key}>
          <div className="mycard__details m-0 p-0">
            <div>
              <div className="mycard__details--date">{certificationItem.Issued}</div>
              <div className="mycard__details--jobtitle">{certificationItem.info}</div>
              <a href={certificationItem.url} className="mycard__details--url" title="Show credential" rel="noopener noreferrer" target="_blank">
                Show credential <FaExternalLinkSquareAlt />
              </a>
            </div>
            <div className="Certificationsimage">
              <Image src={certificationItem.image} alt="course image" width={50} height={50} layout="fixed" className={certificationItem.st} />
            </div>
          </div>
        </div>
      ))}
      <div className="mt-4 d-inline-block">
        <a href="https://www.linkedin.com/in/omarmokhtar22/" title="" className="btn outlinebtn">
          Linkedin For More
        </a>
      </div>
    </div>
  );
};

export default Certifications;
