import Image from "next/image";
import { FaExternalLinkSquareAlt } from "react-icons/fa";

const Certifications = ({ certifications = [] }) => {
  return (
    <div>
      <div
        className="section__title mt-5 flex-column align-items-start"
        data-aos="fade-right"
        data-aos-duration="2000">
        <div className="section__title--maintitle">Certifications</div>
        <p>
          I usually prefer investing in self-learning to improve my experiences.
        </p>
      </div>

      {certifications.map((certificationItem, index) => (
        <div
          className="mycard p-3 Certificationscard"
          data-aos="fade-up"
          data-aos-duration="2000"
          key={certificationItem.id || index}>
          <div className="mycard__details m-0 p-0">
            <div className="d-flex flex-column gap-1">
              <div className="mycard__details--date">
                {certificationItem.Issued}
              </div>
              <div className="mycard__details--jobtitle">
                {certificationItem.info}
              </div>
              <a
                href={certificationItem.url}
                className="mycard__details--url"
                title="Show credential"
                rel="noopener noreferrer"
                target="_blank"
                aria-label={`View credential: ${certificationItem.info || ""}`}>
                Show credential{" "}
                <FaExternalLinkSquareAlt aria-hidden="true" focusable="false" />
              </a>
            </div>
            <div className="Certificationsimage">
              <Image
                src={certificationItem.image}
                alt={certificationItem.info || "Certification logo"}
                width={60}
                height={60}
                sizes="60px"
                quality={65}
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
