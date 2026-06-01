import { useState } from "react";
import Link from "next/link";
import { recommendations } from "../src/data/recommendations";
import { useTranslation } from "../src/i18n/useTranslation";

const ARABIC_REGEX = /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF]/;

const getInitials = (name = "") => {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) {
    return "NA";
  }
  if (parts.length === 1) {
    return parts[0].slice(0, 2).toUpperCase();
  }
  return `${parts[0][0] ?? ""}${parts[1][0] ?? ""}`.toUpperCase();
};

const RecommendationCard = ({ recommendation, isRTL }) => {
  const name = recommendation.name ?? "";
  const title = recommendation.titleCompany ?? recommendation.position ?? "";
  const profileImageUrl =
    recommendation.profileImageUrl ?? recommendation.image ?? "";
  const text = recommendation.text ?? "";
  const linkedinUrl = recommendation.linkedinUrl ?? "";
  const [imageError, setImageError] = useState(false);
  const hasArabic = ARABIC_REGEX.test(text);
  const cardDirection = hasArabic ? "rtl" : "ltr";
  const showImage = Boolean(profileImageUrl) && !imageError;
  const initials = getInitials(name);

  return (
    <article className="recommendation-card" dir={cardDirection}>
      <header className="recommendation-card__header">
        {showImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            className="recommendation-card__avatar"
            src={profileImageUrl}
            alt={`${name} profile photo`}
            loading="eager"
            onError={() => setImageError(true)}
          />
        ) : (
          <div
            className="recommendation-card__avatar recommendation-card__avatar--fallback"
            aria-label={`${name} profile initials`}>
            {initials}
          </div>
        )}

        <div className="recommendation-card__identity">
          <h3 className="recommendation-card__name">{name}</h3>
          <p className="recommendation-card__role">{title}</p>
          {linkedinUrl ? (
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="recommendation-card__profile"
              aria-label={
                isRTL
                  ? `عرض ملف ${name} على لينكدإن`
                  : `View ${name} LinkedIn profile`
              }>
              {isRTL ? "ملف لينكدإن" : "LinkedIn Profile"}
            </a>
          ) : null}
        </div>
      </header>

      <p className="recommendation-card__text">{text}</p>
    </article>
  );
};

const RecommendationsSection = ({
  sectionId = "recommendations",
  maxItems,
  showViewAllLink = false,
}) => {
  const { language } = useTranslation();
  const isRTL = language === "ar";
  const hasRecommendations = recommendations.length > 0;
  if (!hasRecommendations) {
    return null;
  }
  const items = Number.isInteger(maxItems)
    ? recommendations.slice(0, maxItems)
    : recommendations;
  const isTruncated = items.length < recommendations.length;

  return (
    <section
      id={sectionId}
      className="recommendations-section"
      aria-labelledby="recommendations-title"
      dir={isRTL ? "rtl" : "ltr"}>
      <div className="recommendations-section__header">
        <h2 id="recommendations-title" className="section__title--maintitle">
          {isRTL ? "التوصيات" : "Recommendations"}
        </h2>
        <p className="recommendations-section__intro">
          {isRTL
            ? "آراء من زملاء ومديرين ومهنيين عملت معهم خلال مسيرتي المهنية."
            : "Feedback from colleagues, managers, and professionals I&apos;ve worked with throughout my career."}
        </p>
        <a
          href="https://www.linkedin.com/in/omarmokhtar22/"
          target="_blank"
          rel="noopener noreferrer"
          className="recommendations-section__linkedin-btn"
          aria-label={
            isRTL
              ? "عرض ملف عمر مختار على لينكدإن"
              : "View Omar Mokhtar LinkedIn profile"
          }>
          {isRTL ? "عرض ملف لينكدإن" : "View LinkedIn Profile"}
        </a>
      </div>
      <div className="recommendations-grid">
        {items.map((recommendation) => (
          <RecommendationCard
            key={recommendation.id ?? recommendation.linkedinUrl ?? recommendation.name}
            recommendation={recommendation}
            isRTL={isRTL}
          />
        ))}
      </div>
      {showViewAllLink && isTruncated ? (
        <Link className="recommendations-section__view-all" href="/recommendations">
          {isRTL ? "عرض جميع التوصيات" : "View all recommendations"}
        </Link>
      ) : null}
    </section>
  );
};

export default RecommendationsSection;
