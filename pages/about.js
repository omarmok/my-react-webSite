import React from "react";
import Link from "next/link";
import Tools from "../components/Tools";
import Loader from "../components/Loader";
import PageHeader from "../components/PageHeader";
import siteData from "../data.json";
import { useTranslation } from "../src/i18n/useTranslation";

function About({ experience = [] }) {
  const { dictionary, language } = useTranslation();
  const experienceList = dictionary.data.experience ?? experience;
  const { title, downloadButton, downloadTitle, videoLink, emptyExperience } =
    dictionary.about;
  const isRTL = language === "ar";
  const headerDescription = isRTL
    ? "مسيرة مهنية تمتد لأكثر من 19 عامًا في تصميم تجربة المستخدم وقيادة أنظمة التصميم وعمليات التصميم عبر قطاعات حكومية ومؤسسية وتعليمية."
    : "A 19+ year journey across UX design, design systems, and DesignOps leadership in government, enterprise, and education platforms.";

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
      <PageHeader
        eyebrow={isRTL ? "الخبرة المهنية" : "Professional Experience"}
        title={title}
        description={headerDescription}
        actions={[
          {
            href: "/docs/Omar-Mokhtar-CV.pdf",
            label: downloadButton,
            ariaLabel: downloadTitle,
            target: "_self",
            variant: "solid",
          },
        ]}
      />

      <div className="container">
        <div className="page__container">
          {experienceList.length > 0 ? (
            renderExperienceList()
          ) : (
            <p>{emptyExperience}</p>
          )}

          <Tools />

          <div className="mycard mt-4">
            <h2 className="section__title--maintitle mb-3">
              {isRTL ? "استكمل صورة الخبرة" : "Explore Related Expertise"}
            </h2>
            <ul className="mb-0">
              <li>
                <Link href="/ux-lead">
                  {isRTL
                    ? "خبرة عمر مختار عايد في قيادة تجربة المستخدم"
                    : "Omar Mokhtar Ayed UX Leadership Experience"}
                </Link>
              </li>
              <li>
                <Link href="/government-ux">
                  {isRTL
                    ? "مشاريع تجربة المستخدم الحكومية"
                    : "Government UX Projects"}
                </Link>
              </li>
              <li>
                <Link href="/designops">
                  {isRTL
                    ? "ممارسة عمر مختار عايد في عمليات التصميم"
                    : "DesignOps Practice"}
                </Link>
              </li>
              <li>
                <Link href="/certifications">
                  {isRTL
                    ? "الشهادات المهنية في UX وأنظمة التصميم"
                    : "Professional Certifications in UX & Design Systems"}
                </Link>
              </li>
            </ul>
          </div>

          <div className="mt-5 section__title--maintitle">{videoLink}</div>
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
              allowFullScreen></iframe>
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

  return {
    props: {
      experience,
    },
    revalidate: 3600,
  };
}
