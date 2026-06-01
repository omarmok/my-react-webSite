import { useState } from "react";
import { recommendations } from "../src/data/recommendations";

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

const RecommendationCard = ({ recommendation }) => {
  const [imageError, setImageError] = useState(false);
  const hasArabic = ARABIC_REGEX.test(recommendation.text || "");
  const cardDirection = hasArabic ? "rtl" : "ltr";
  const showImage = Boolean(recommendation.profileImageUrl) && !imageError;
  const initials = getInitials(recommendation.name);

  return (
    <article className="recommendation-card" dir={cardDirection}>
      <header className="recommendation-card__header">
        {showImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            className="recommendation-card__avatar"
            src={recommendation.profileImageUrl}
            alt={`${recommendation.name} profile photo`}
            loading="eager"
            onError={() => setImageError(true)}
          />
        ) : (
          <div
            className="recommendation-card__avatar recommendation-card__avatar--fallback"
            aria-label={`${recommendation.name} profile initials`}>
            {initials}
          </div>
        )}

        <div className="recommendation-card__identity">
          <h3 className="recommendation-card__name">{recommendation.name}</h3>
          <p className="recommendation-card__role">{recommendation.titleCompany}</p>
          {recommendation.linkedinUrl ? (
            <a
              href={recommendation.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="recommendation-card__profile"
              aria-label={`View ${recommendation.name} LinkedIn profile`}>
              LinkedIn Profile
            </a>
          ) : null}
        </div>
      </header>

      <p className="recommendation-card__text">{recommendation.text}</p>
    </article>
  );
};

const RecommendationsSection = ({ sectionId = "recommendations" }) => {
  const hasRecommendations = recommendations.length > 0;
  if (!hasRecommendations) {
    return null;
  }

  return (
    <section
      id={sectionId}
      className="recommendations-section"
      aria-labelledby="recommendations-title">
      <div className="recommendations-section__header">
        <h2 id="recommendations-title" className="section__title--maintitle">
          Recommendations
        </h2>
        <p className="recommendations-section__intro">
          Feedback from colleagues, managers, and professionals I&apos;ve worked
          with throughout my career.
        </p>
        <a
          href="https://www.linkedin.com/in/omarmokhtar22/"
          target="_blank"
          rel="noopener noreferrer"
          className="recommendations-section__linkedin-btn"
          aria-label="View Omar Mokhtar LinkedIn profile">
          View LinkedIn Profile
        </a>
      </div>
      <div className="recommendations-grid">
        {recommendations.map((recommendation) => (
          <RecommendationCard
            key={recommendation.id}
            recommendation={recommendation}
          />
        ))}
      </div>
    </section>
  );
};

export default RecommendationsSection;
