import Image from "next/image";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import { useTranslation } from "../src/i18n/useTranslation";
import { translations } from "../src/i18n/translations";
import { useState } from "react";

const placeholderImage = "/images/omar.png";
const FEATURED_IDS = new Set([1, 2]);

// Split "Issued Aug 8, 2025 · No Expiration Date" into date + expiry flag
const parseIssued = (str) => {
  if (!str) return { date: "", noExpiry: false };
  const [date, ...rest] = str.split("·").map((s) => s.trim());
  const noExpiry = rest.some(
    (s) => /no expiration/i.test(s) || /بدون تاريخ/i.test(s),
  );
  return { date: date || "", noExpiry };
};

// Derive meaningful alt text from cert metadata and current language
const getAltText = (item, language, isFeatured) => {
  const name = item.info || "Certification";
  if (isFeatured) {
    return language === "ar"
      ? `شهادة ${name} صادرة باسم عمر مختار عايد`
      : `${name} certificate issued to Omar Mokhtar Ayed`;
  }
  return language === "ar"
    ? `شارة شهادة ${name}`
    : `${name} certification badge`;
};

// ─── Premium featured card: full-width image preview + body ──────────────────

const FeaturedCertCard = ({
  item,
  t,
  language,
  fallbackActive,
  onFallback,
}) => {
  const isBase64 =
    typeof item.image === "string" && item.image.startsWith("data:image");
  const imgSrc = fallbackActive || !item.image ? placeholderImage : item.image;
  const { date, noExpiry } = parseIssued(item.Issued);
  const altText = getAltText(item, language, true);

  return (
    <div
      className="mycard Certificationscard cert-card--featured"
      data-aos="fade-up"
      data-aos-duration="2000">
      {/* Floating badge overlaid on image */}
      <span className="cert-featured-badge" aria-hidden="true">
        {t("certifications.featuredBadge")}
      </span>

      {/* Full-width certificate preview */}
      <div className="cert-preview">
        {isBase64 ? (
          <img
            src={imgSrc}
            alt={altText}
            className="cert-preview__img"
            loading="lazy"
            onError={(e) => {
              if (e.currentTarget.src !== placeholderImage)
                e.currentTarget.src = placeholderImage;
            }}
          />
        ) : (
          <Image
            src={imgSrc}
            alt={altText}
            fill
            sizes="(max-width: 480px) calc(100vw - 64px), (max-width: 768px) calc(50vw - 40px), 520px"
            quality={90}
            className="cert-preview__img"
            loading="lazy"
            onError={onFallback}
          />
        )}
      </div>

      {/* Card body */}
      <div className="cert-card__body">
        {/* 1. Certificate name */}
        <h4 className="cert-card__name">{item.info}</h4>

        {/* 2. Skills / expertise tags */}
        {Array.isArray(item.skills) && item.skills.length > 0 && (
          <ul
            className="cert-skills"
            aria-label={t("certifications.skillsLabel")}>
            {item.skills.map((skill) => (
              <li key={skill} className="cert-skill-tag">
                {skill}
              </li>
            ))}
          </ul>
        )}

        {/* 3. Issue date */}
        {date && <p className="cert-issued-date">{date}</p>}

        {/* 4. No Expiration Date */}
        {noExpiry && (
          <p className="cert-no-expiry">{t("certifications.noExpiration")}</p>
        )}

        {/* 5. View Credential CTA */}
        {item.url && (
          <a
            href={item.url}
            className="cert-card__cta"
            rel="noopener noreferrer"
            target="_blank"
            title={t("certifications.showCredentialTitle")}
            aria-label={`${t("certifications.showCredential")}: ${item.info || ""}`}>
            {t("certifications.showCredential")}
            <FaExternalLinkSquareAlt aria-hidden="true" focusable="false" />
          </a>
        )}
      </div>
    </div>
  );
};

// ─── Compact regular card: improved side-by-side ──────────────────────────────

const RegularCertCard = ({ item, t, language, fallbackActive, onFallback }) => {
  const isBase64 =
    typeof item.image === "string" && item.image.startsWith("data:image");
  const imgSrc = fallbackActive || !item.image ? placeholderImage : item.image;
  const { date, noExpiry } = parseIssued(item.Issued);
  const altText = getAltText(item, language, false);

  return (
    <div
      className="mycard p-3 Certificationscard"
      data-aos="fade-up"
      data-aos-duration="2000">
      <div className="mycard__details m-0 p-0">
        <div className="d-flex flex-column gap-1">
          <div className="mycard__details--jobtitle">{item.info}</div>

          {date && (
            <div className="mycard__details--date cert-issued-date">{date}</div>
          )}

          {noExpiry && (
            <div className="cert-no-expiry">
              {t("certifications.noExpiration")}
            </div>
          )}

          {item.url && (
            <a
              href={item.url}
              className="mycard__details--url mt-2"
              title={t("certifications.showCredentialTitle")}
              rel="noopener noreferrer"
              target="_blank"
              aria-label={`${t("certifications.showCredential")}: ${item.info || ""}`}>
              {t("certifications.showCredential")}{" "}
              <FaExternalLinkSquareAlt aria-hidden="true" focusable="false" />
            </a>
          )}
        </div>

        <div className="Certificationsimage">
          {isBase64 ? (
            <img
              src={item.image || placeholderImage}
              alt={altText}
              width={72}
              height={72}
              className={item.st}
              loading="lazy"
              style={{ objectFit: "contain" }}
              onError={(e) => {
                if (e.currentTarget.src !== placeholderImage)
                  e.currentTarget.src = placeholderImage;
              }}
            />
          ) : (
            <Image
              src={imgSrc}
              alt={altText}
              width={72}
              height={72}
              sizes="72px"
              quality={80}
              className={item.st}
              loading="lazy"
              style={{ objectFit: "contain" }}
              onError={onFallback}
            />
          )}
        </div>
      </div>
    </div>
  );
};

// ─── Main Certifications section ─────────────────────────────────────────────

const Certifications = ({ certifications, showSectionHeader = true }) => {
  const { t, language } = useTranslation();
  const SectionHeadingTag = showSectionHeader ? "h3" : "h2";
  const incomingCertifications = Array.isArray(certifications)
    ? certifications
    : [];

  const localizedCertificationData = Array.isArray(
    translations?.[language]?.data?.certifications,
  )
    ? translations[language].data.certifications
    : null;

  const allCerts = Array.isArray(localizedCertificationData)
    ? incomingCertifications.length > 0
      ? localizedCertificationData.filter((item) =>
          incomingCertifications.some((cert) => cert?.id === item?.id),
        )
      : localizedCertificationData
    : incomingCertifications;

  const [fallbacks, setFallbacks] = useState({});
  const markFallback = (key) =>
    setFallbacks((prev) => (prev[key] ? prev : { ...prev, [key]: true }));

  const featuredCerts = allCerts.filter((c) => FEATURED_IDS.has(c.id));
  const otherCerts = allCerts.filter((c) => !FEATURED_IDS.has(c.id));

  const renderFeatured = (item, index) => {
    const cardKey = item.id ?? index;
    return (
      <FeaturedCertCard
        key={cardKey}
        item={item}
        t={t}
        language={language}
        fallbackActive={Boolean(fallbacks[cardKey])}
        onFallback={() => markFallback(cardKey)}
      />
    );
  };

  const renderRegular = (item, index) => {
    const cardKey = item.id ?? `other-${index}`;
    return (
      <RegularCertCard
        key={cardKey}
        item={item}
        t={t}
        language={language}
        fallbackActive={Boolean(fallbacks[cardKey])}
        onFallback={() => markFallback(cardKey)}
      />
    );
  };

  return (
    <div>
      {showSectionHeader ? (
        <div
          className="section__title mt-5 flex-column align-items-start cert-section-header"
          data-aos="fade-right"
          data-aos-duration="2000">
          <h2 className="section__title--maintitle" style={{ margin: 0 }}>
            {t("certifications.title")}
          </h2>
          <p className="cert-section-desc">{t("certifications.description")}</p>
        </div>
      ) : null}

      {allCerts.length === 0 ? (
        <div className="empty-certifications mt-3 text-center text-muted">
          <p>{t("certifications.emptyState")}</p>
        </div>
      ) : (
        <>
          {/* ── Featured certifications — 2-col grid on desktop ── */}
          {featuredCerts.length > 0 && (
            <section aria-label={t("certifications.featuredTitle")}>
              <SectionHeadingTag className="cert-section-heading">
                {t("certifications.featuredTitle")}
              </SectionHeadingTag>
              <div className="cert-featured-grid">
                {featuredCerts.map(renderFeatured)}
              </div>
            </section>
          )}

          {/* ── Additional certifications ── */}
          {otherCerts.length > 0 && (
            <section aria-label={t("certifications.allTitle")}>
              {featuredCerts.length > 0 && (
                <SectionHeadingTag className="cert-section-heading cert-section-heading--secondary">
                  {t("certifications.allTitle")}
                </SectionHeadingTag>
              )}
              {otherCerts.map(renderRegular)}
            </section>
          )}
        </>
      )}
    </div>
  );
};

export default Certifications;
