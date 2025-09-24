import { useEffect, useState } from 'react';
import Image from 'next/image';
import axios from 'axios';
import { FaExternalLinkSquareAlt } from 'react-icons/fa';

const Certifications = () => {
  const [certifications, setCertifications] = useState([]);

  useEffect(() => {
    axios.get('https://api.npoint.io/ba35b22a6f908f637bc8')
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
        <p>I usually prefer investing in self-learning to improve my experiences.</p>
      </div>
      
      {certifications.map((certificationItem, index) => (
        <div 
          className="mycard p-3 Certificationscard" 
          data-aos="fade-up" 
          data-aos-duration="2000" 
          key={certificationItem.id || index} 
        >
          <div className="mycard__details m-0 p-0">
            <div>
              <div className="mycard__details--date">{certificationItem.Issued}</div>
              <div className="mycard__details--jobtitle">{certificationItem.info}</div>
              <a 
                href={certificationItem.url} 
                className="mycard__details--url" 
                title="Show credential" 
                rel="noopener noreferrer" 
                target="_blank"
              >
                Show credential <FaExternalLinkSquareAlt />
              </a>
            </div>
            <div className="Certificationsimage">
              <Image 
                src={certificationItem.image} 
                alt="course image" 
                width={50} 
                height={50} 
                layout="fixed" 
                className={certificationItem.st} 
              />
            </div>
          </div>
        </div>
      ))}

    </div>
  );
};

export default Certifications;
