import React from "react";
import Certifications from "../components/Certifications";
import Tools from "../components/Tools";
import Loader from "../components/Loader";
import { FaDownload } from "react-icons/fa";
import siteData from "../data.json";
import { useTranslation } from "../src/i18n/useTranslation";

function About({ experience = [], certifications = [] }) {
  const { dictionary } = useTranslation();
  const experienceList = dictionary.data.experience ?? experience;
  const {
    title,
    downloadButton,
    downloadTitle,
    videoLink,
    emptyExperience,
  } = dictionary.about;
  const certificationsList = Array.isArray(certifications) ? certifications : [];

  const renderExperienceList = () => {
    return experienceList.map((experienceItem, index) => (
      <div
        className="mycard"
        data-aos="fade-up"
        data-aos-duration="2000"
        key={experienceItem.id || index}>
        <div className="mycard__details flex-column align-items-start">
          <div className="mycard__details--date">{experienceItem.date}</div>
          <div className="mycard__details--jobtitle">
            {experienceItem.jobtitle}
          </div>
          <div className="mycard__details--companyname">
            {experienceItem.companyname}
          </div>
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
            data-aos-duration="500">
            {title}
            <div className="d-flex downloadresume">
              <a
                href="https://drive.google.com/file/d/1FdxcD3kPWXA-lyKWJLV3M8aLV6G1FGXo/view"
                className="btn section__title--btn mt-3 homebtn"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={downloadTitle}
                title={downloadTitle}>
                <FaDownload />
                {downloadButton}
              </a>
            </div>
          </div>

          {experienceList.length > 0 ? (
            renderExperienceList()
          ) : (
            <p>{emptyExperience}</p>
          )}

          <Certifications certifications={certificationsList} />

          <Tools />

          <div className="mt-5 section__title--maintitle">
            {videoLink}
          </div>
          <div className="mb-3 mycard aos-init aos-animate findMore">
            <iframe
              width="100%"
              height="500"
              src="https://www.youtube.com/embed/ISFsa-OOy0s?si=5WmsmNtYxwecNOq2"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

export async function getStaticProps() {
  const experience = Array.isArray(siteData?.Experience)
    ? siteData.Experience
    : [];
  const certifications = Array.isArray(siteData?.Certifications)
    ? siteData.Certifications
    : [];

  return {
    props: {
      experience,
      certifications,
    },
    revalidate: 3600,
  };
}
