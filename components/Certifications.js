import Image from "next/image";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import { useTranslation } from "../src/i18n/useTranslation";
import { translations } from "../src/i18n/translations";
import { useEffect, useState } from "react";

const placeholderImage = "/images/omar.png";

const Certifications = ({ certifications }) => {
  const { t, dictionary, language } = useTranslation();

  const arabicCertificationData = Array.isArray(
    translations.ar?.data?.certifications
  )
    ? translations.ar.data.certifications
    : null;
  const safeCertifications =
    language === "ar" && Array.isArray(arabicCertificationData)
      ? arabicCertificationData
      : Array.isArray(certifications)
      ? certifications
      : [];

  const hasCertifications = safeCertifications.length > 0;
  const [nextImageFallbacks, setNextImageFallbacks] = useState({});

  useEffect(() => {
    console.log("CERTIFICATIONS_COUNT", safeCertifications.length);
  }, [safeCertifications.length]);

  const markImageFallback = (key) => {
    setNextImageFallbacks((prev) => {
      if (prev[key]) {
        return prev;
      }
      return { ...prev, [key]: true };
    });
  };

  return (
    <div>
      <div
        className="section__title mt-5 flex-column align-items-start"
        data-aos="fade-right"
        data-aos-duration="2000">
        <div className="section__title--maintitle">
          {t("certifications.title")}
        </div>
        <p>{t("certifications.description")}</p>
      </div>

      {hasCertifications ? (
        safeCertifications.map((item, index) => {
          const cardKey = item.id ?? index;
          const isBase64 =
            typeof item.image === "string" &&
            item.image.startsWith("data:image");
          const fallbackActive = Boolean(nextImageFallbacks[cardKey]);
          const remoteSource =
            fallbackActive || !item.image ? placeholderImage : item.image;

          return (
            <div
              className="mycard p-3 Certificationscard"
              data-aos="fade-up"
              data-aos-duration="2000"
              key={cardKey}>
              <div className="mycard__details m-0 p-0">
                <div className="d-flex flex-column gap-1">
                  <div className="mycard__details--date">{item.Issued}</div>

                  <div className="mycard__details--jobtitle">{item.info}</div>

                  <a
                    href={item.url}
                    className="mycard__details--url"
                    title={t("certifications.showCredentialTitle")}
                    rel="noopener noreferrer"
                    target="_blank"
                    aria-label={`View credential: ${item.info || ""}`}>
                    {t("certifications.showCredential")}{" "}
                    <FaExternalLinkSquareAlt aria-hidden="true" />
                  </a>
                </div>

                <div className="Certificationsimage">
                  {isBase64 ? (
                    <img
                      src={item.image || placeholderImage}
                      alt={item.info || "Certification logo"}
                      width={60}
                      height={60}
                      className={item.st}
                      onError={(event) => {
                        const current = event.currentTarget;
                        if (current.src !== placeholderImage) {
                          current.src = placeholderImage;
                        }
                      }}
                    />
                  ) : (
                    <Image
                      src={remoteSource}
                      alt={item.info || "Certification logo"}
                      width={60}
                      height={60}
                      sizes="60px"
                      quality={65}
                      className={item.st}
                      onError={() => markImageFallback(cardKey)}
                    />
                  )}
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div className="empty-certifications mt-3 text-center text-muted">
          <p>{t("certifications.emptyState")}</p>
        </div>
      )}
    </div>
  );
};

export default Certifications;
