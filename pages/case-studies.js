import Loader from "../components/Loader";
import PageHeader from "../components/PageHeader";
import CaseStudyCard from "../components/CaseStudyCard";
import casstudymain from "../public/images/casstudymain.png";
import dsCaseCover from "../public/images/ds-3.png";
import { useTranslation } from "../src/i18n/useTranslation";

function CaseStudies() {
  const { dictionary, language, t } = useTranslation();
  const isRTL = language === "ar";
  const projectMeta = dictionary.projects;
  const cards = [
    {
      ...projectMeta.designSystemCaseStudy,
      href: "/design-system-case-study",
      image: dsCaseCover,
      kicker: isRTL ? "قيادة وأنظمة تصميم" : "Leadership & design systems",
    },
    {
      ...projectMeta.caseStudy,
      href: "/casestudy",
      image: casstudymain,
      kicker: isRTL ? "تصميم وتنفيذ" : "Design & front-end",
    },
  ];

  return (
    <div className="projects-page" dir={isRTL ? "rtl" : "ltr"}>
      <Loader />
      <PageHeader
        eyebrow={t("nav.links.caseStudy")}
        title={isRTL ? "كيف أفكر، وأقود، وأبني" : "How I think, lead, and build"}
        description={
          isRTL
            ? "دراستان من عملي: الأولى عن قيادة نظام تصميم مؤسسي وحوكمته، والثانية عن تصميم بوابة طلابية وتنفيذها."
            : "Two studies from my work: one on leading and governing an enterprise design system, the other on designing and building a student portal."
        }
      />
      <div className="container">
        <div className="page__container project case-studies">
          {cards.map((card, index) => (
            <CaseStudyCard card={card} priority={index === 0} key={card.href} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CaseStudies;
