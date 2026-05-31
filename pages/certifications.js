import React from "react";
import Loader from "../components/Loader";
import Certifications from "../components/Certifications";
import PageHeader from "../components/PageHeader";
import siteData from "../data.json";
import { useTranslation } from "../src/i18n/useTranslation";

export default function CertificationsPage({ certifications = [] }) {
  const { t } = useTranslation();

  return (
    <div>
      <Loader />
      <PageHeader
        eyebrow={t("nav.links.certifications")}
        title={t("certifications.title")}
        description={t("certifications.pageIntro")}
      />

      <div className="container">
        <div className="page__container">
          <Certifications certifications={certifications} showSectionHeader={false} />
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const source = Array.isArray(siteData?.Certifications)
    ? siteData.Certifications
    : Array.isArray(siteData?.certifications)
      ? siteData.certifications
      : [];

  return {
    props: { certifications: source },
    revalidate: 3600,
  };
}
