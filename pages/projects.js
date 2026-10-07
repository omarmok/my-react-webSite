import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";
import Loader from "../components/Loader";
import PageHeader from "../components/PageHeader";
import siteData from "../data.json";
import casstudymain from "../public/images/casstudymain.png";
import { useTranslation } from "../src/i18n/useTranslation";

const Projects = ({ projects = [] }) => {
  const { dictionary, language, t } = useTranslation();
  const isRTL = language === "ar";
  const projectMeta = dictionary.projects;
  const projectItems = dictionary.data.projects ?? projects;
  const roleByProject = {
    1: isRTL ? "مصمم UI/UX" : "UI/UX Designer",
    2: isRTL ? "مهندس UX/UI" : "UX/UI Engineer",
    3: isRTL ? "مصمم UI/UX" : "UI/UX Designer",
    4: isRTL ? "مصمم UI/UX" : "UI/UX Designer",
    5: isRTL ? "مهندس UX/UI" : "UX/UI Engineer",
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
          <div className="row">
            <div className="col-12">
              <div
                className="caseStudy m-1 mx-0"
                data-aos="fade-right"
                data-aos-duration="2000">
                <div className="caseStudy__img">
                  <Image
                    alt={projectMeta.caseStudy.coverAlt}
                    src={casstudymain}
                    priority
                    sizes="(min-width: 992px) 50vw, 100vw"
                    quality={75}
                    style={{ height: "auto", width: "100%" }}
                  />
                </div>
                <div className="caseStudy__description">
                  <div className="title">{projectMeta.caseStudy.title}</div>
                  <p
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title={projectMeta.caseStudy.tooltip}>
                    {projectMeta.caseStudy.intro}
                  </p>
                  <ul className="blog-list">
                    {projectMeta.caseStudy.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                  <p>{projectMeta.caseStudy.closing}</p>

                  <Link
                    href="/casestudy"
                    className="btn btn-warning"
                    aria-label={projectMeta.caseStudy.buttonAria}>
                    {projectMeta.caseStudy.button}{" "}
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="external-link-alt"
                      className="svg-inline--fa fa-external-link-alt fa-w-16 "
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512">
                      <path
                        fill="currentColor"
                        d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>

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
