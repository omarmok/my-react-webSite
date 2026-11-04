import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";
import Loader from "../components/Loader";
import PageHeader from "../components/PageHeader";
import siteData from "../data.json";
import { useTranslation } from "../src/i18n/useTranslation";

const Projects = ({ projects = [] }) => {
  const { dictionary, language, t } = useTranslation();
  const isRTL = language === "ar";
  const projectMeta = dictionary.projects;
  const projectItems = dictionary.data.projects ?? projects;
  const roleByProject = {
    1: isRTL ? "مصمم UI/UX" : "UI/UX Designer",
    2: isRTL ? "مصمم ويب" : "Web Designer",
    3: isRTL ? "مصمم UI/UX" : "UI/UX Designer",
    4: isRTL ? "مصمم UI/UX" : "UI/UX Designer",
    5: isRTL ? "مصمم ويب" : "Web Designer",
    6: isRTL ? "تصميم واجهات المستخدم" : "UI Design",
    7: isRTL ? "تصميم وتنفيذ الواجهة" : "UI & Front-End",
  };

  useEffect(() => {
    let cleanup = () => {};

    const enableTooltips = async () => {
      if (!document.querySelector('[data-bs-toggle="tooltip"]')) {
        return;
      }
      const bootstrap =
        await import("bootstrap/dist/js/bootstrap.bundle.min.js");
      const Tooltip = bootstrap.Tooltip || bootstrap.default?.Tooltip;
      if (!Tooltip) {
        return;
      }
      const tooltipTriggerList = Array.from(
        document.querySelectorAll('[data-bs-toggle="tooltip"]'),
      );
      const tooltipInstances = tooltipTriggerList.map(
        (tooltipTriggerEl) => new Tooltip(tooltipTriggerEl),
      );
      cleanup = () => {
        tooltipInstances.forEach((instance) => {
          if (typeof instance.dispose === "function") {
            instance.dispose();
          }
        });
      };
    };

    const scheduleTooltips = () => {
      void enableTooltips();
    };

    let idleId;
    let timeoutId;

    if (typeof window !== "undefined" && "requestIdleCallback" in window) {
      idleId = window.requestIdleCallback(scheduleTooltips);
    } else {
      timeoutId = window.setTimeout(scheduleTooltips, 200);
    }

    return () => {
      if (
        typeof window !== "undefined" &&
        idleId !== undefined &&
        "cancelIdleCallback" in window
      ) {
        window.cancelIdleCallback(idleId);
      }
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
      cleanup();
    };
  }, []);

  const Projectslist = projectItems.map((ProjectsItem, index) => {
    const tags = Array.isArray(ProjectsItem.tags)
      ? ProjectsItem.tags.slice(0, 3)
      : [];

    return (
      <div
        id={`project-${ProjectsItem.id}`}
        className="col-12 col-lg-6"
        data-aos="fade-up"
        data-aos-duration="1200"
        key={ProjectsItem.id ?? ProjectsItem.url ?? index}>
        <article className="portfolio-item more-project-card h-100">
          <div className="portfolio-img more-project-card__media">
            <Image
              className="img-fluid"
              src={ProjectsItem.image}
              alt={ProjectsItem.title || "Project thumbnail"}
              width={720}
              height={480}
              sizes="(min-width: 992px) 46vw, 100vw"
              quality={75}
              loading="lazy"
              style={{ height: "100%", width: "100%" }}
            />
          </div>

          <div className="more-project-card__content">
            <div className="more-project-card__meta">
              <span>{tags[0] ?? (isRTL ? "مشروع رقمي" : "Digital Product")}</span>
              <span>{ProjectsItem.Issued}</span>
            </div>
            <h3 className="mycard__details--jobtitle more-project-card__title">
              {ProjectsItem.info}
            </h3>

            <p className="more-project-card__role">
              <strong>{isRTL ? "دوري:" : "My role:"}</strong>{" "}
              {roleByProject[ProjectsItem.id] ?? (isRTL ? "تصميم UI/UX" : "UI/UX Design")}
            </p>

            {ProjectsItem.summary ? (
              <div className="more-project-card__challenge">
                <span>{isRTL ? "التحدي" : "Challenge"}</span>
                <p className="more-project-card__description">
                  {ProjectsItem.summary}
                </p>
              </div>
            ) : null}

            {tags.length > 0 ? (
              <ul
                className="more-project-card__tags"
                aria-label={t("projects.projectTagsAria", {
                  project: ProjectsItem.info,
                })}>
                {tags.map((tag) => (
                  <li
                    className="more-project-card__tag"
                    key={`${ProjectsItem.id ?? index}-${tag}`}>
                    {tag}
                  </li>
                ))}
              </ul>
            ) : null}

            <div className="portfolio-links more-project-card__cta">
              <a
                href={ProjectsItem.url}
                target="_blank"
                rel="noreferrer noopener"
                className="btn"
                aria-label={t("projects.projectLinkAria", {
                  project: ProjectsItem.info,
                })}>
                <span>{projectMeta.projectCtaLabel}</span>
                <FontAwesomeIcon
                  icon={faExternalLinkAlt}
                  aria-hidden="true"
                  focusable="false"
                />
              </a>
            </div>
          </div>
        </article>
      </div>
    );
  });

  return (
    <div className="projects-page">
      <Loader />
      <PageHeader
        eyebrow={t("nav.links.work")}
        title={projectMeta.title}
        description={projectMeta.description}
      />
      <div className="container">
        <div className="page__container project">
          <Link href="/case-studies" className="projects-case-link">
            {isRTL ? "اقرأ دراسات الحالة" : "Read the case studies"}
            <span aria-hidden="true">{isRTL ? " ←" : " →"}</span>
          </Link>

          <div className="section__title mt-3 mb-3">
            <div
              className="section__title--maintitle"
              data-aos="fade-right"
              data-aos-duration="1000">
              {projectMeta.moreProjectsTitle}
            </div>
          </div>
          <div className="row g-4 more-projects-grid">{Projectslist}</div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

export async function getStaticProps() {
  const projects = Array.isArray(siteData?.Projects) ? siteData.Projects : [];

  return {
    props: {
      projects,
    },
    revalidate: 3600,
  };
}
