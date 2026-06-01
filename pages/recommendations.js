import Loader from "../components/Loader";
import PageHeader from "../components/PageHeader";
import RecommendationsSection from "../components/RecommendationsSection";
import { useTranslation } from "../src/i18n/useTranslation";

export default function RecommendationsPage() {
  const { language } = useTranslation();
  const isRTL = language === "ar";

  return (
    <div>
      <Loader />
      <PageHeader
        eyebrow={isRTL ? "التوصيات" : "Recommendations"}
        title={
          isRTL ? "توصيات مهنية" : "Professional Recommendations"
        }
        description={
          isRTL
            ? "توصيات موثقة من لينكدإن عند توفرها."
            : "Verified LinkedIn recommendations when available."
        }
      />

      <div className="container">
        <div className="page__container recommendations-page">
          <RecommendationsSection sectionId="recommendations" />
        </div>
      </div>
    </div>
  );
}
