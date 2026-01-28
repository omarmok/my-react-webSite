import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";
import Loader from "../components/Loader";
import siteData from "../data.json";
import casstudymain from "../public/images/casstudymain.png";
import { useTranslation } from "../src/i18n/useTranslation";

const Projects = ({ projects = [] }) => {
  const { dictionary, t } = useTranslation();
  const projectMeta = dictionary.projects;
  const projectItems = dictionary.data.projects ?? projects;

  useEffect(() => {
    let cleanup = () => {};

    const enableTooltips = async () => {
      if (!document.querySelector('[data-bs-toggle="tooltip"]')) {
        return;
      }
      const bootstrap = await import("bootstrap/dist/js/bootstrap.bundle.min.js");
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
    return (
      <div
        className="col-12 col-lg-6 "
        data-aos="fade-up"
        data-aos-duration="3000"
        key={ProjectsItem.id ?? ProjectsItem.url ?? index}>
        <div className="portfolio-item">
          <div className="portfolio-img">
            <Image
              className="img-fluid"
              src={ProjectsItem.image}
              alt={ProjectsItem.title || "Project thumbnail"}
              width={300}
              height={200}
              sizes="(min-width: 992px) 25vw, 50vw"
              quality={70}
              style={{ height: "auto", width: "100%" }}
            />
            <div className="mycard__details--date">
              {ProjectsItem.Issued}
            </div>
            <div className="mycard__details--jobtitle">
              {ProjectsItem.info}
            </div>
          </div>

          <div className="portfolio-links">
            <a
              href={ProjectsItem.url}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={t("projects.projectLinkAria", {
                project: ProjectsItem.info,
              })}>
              <FontAwesomeIcon icon={faExternalLinkAlt} aria-hidden="true" focusable="false" />
            </a>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div>
      <Loader />
      <div className="container">
        <div className="page__container project">
          <h1
            className="mainpagetitle"
            data-aos="fade-in"
            data-aos-duration="500">
            {projectMeta.title}
          </h1>
          <div
            className="project__description"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title={projectMeta.descriptionTooltip}>
            {projectMeta.description.map((line, index) => (
              <p key={`project-desc-${index}`}>
                {line}
                <br />
              </p>
            ))}
          </div>

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
                    href="./CaseStudy"
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
          <div className="row">{Projectslist}</div>
          <div className="row">
            <div className="mr-auto my-4 ">
              <a
                href="https://www.linkedin.com/in/omarmokhtar22/"
                className="btn section__title--btn d-inline-block more_btn_project"
                data-aos="fade-left"
                data-aos-duration="1000"
                aria-label={projectMeta.linkedInButton.aria}>
                {projectMeta.linkedInButton.text}
              </a>
            </div>
          </div>
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
