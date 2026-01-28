import Link from "next/link";
import Loader from "../components/Loader";
import { useTranslation } from "../src/i18n/useTranslation";

const CaseStudy = () => {
  const figmaUrl = "https://crane-palm-14859740.figma.site/";
  const { dictionary } = useTranslation();
  const { iframeTitle, back, backAria, checkWebsite, checkWebsiteAria } =
    dictionary.caseStudyPage;

  return (
    <div className="page-container ">
      <Loader />

      <div className="container">
        <section className="my-4">
          <div
            style={{
              width: "100%",
              height: "100vh",
              borderRadius: 0,
              overflow: "hidden",
              background: "#000",
              position: "relative",
            }}
          >
            <iframe
              title={iframeTitle}
              src={figmaUrl}
              style={{
                border: "none",
                width: "100%",
                height: "100%",
                display: "block",
              }}
              loading="lazy"
              allowFullScreen
            />
          </div>
        </section>

        <div className="project">
          <div
            className="casestudyContainer"
            style={{ padding: 0, marginTop: 0, background: "transparent", boxShadow: "none" }}
          >
            <div className="row mt-3 mb-3">
              <div className="col">
                <Link
                  href="/Projects"
                  className="btn d-inline-block me-2 my-2"
                  aria-label={backAria}
                >
                  {back}
                </Link>
              </div>

              <div className="col">
                <Link
                  href="https://omarmok.github.io/studentCode/"
                  className="btn outlinebtn d-inline-block me-2 my-2"
                  aria-label={checkWebsiteAria}
                >
                  {checkWebsite}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
