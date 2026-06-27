import React from "react";
import Link from "next/link";
import Loader from "../components/Loader";
import Certifications from "../components/Certifications";
import PageHeader from "../components/PageHeader";
import siteData from "../data.json";
import { useTranslation } from "../src/i18n/useTranslation";

export default function CertificationsPage({ certifications = [] }) {
  const { t, language } = useTranslation();
  const isRTL = language === "ar";

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
          <Certifications
            certifications={certifications}
            showSectionHeader={false}
          />

          <div className="mycard mt-4">
            <h2 className="section__title--maintitle mb-3">
              {isRTL ? "روابط الخبرة المرتبطة" : "Related Expertise Links"}
            </h2>
            <ul className="mb-0">
              <li>
                <Link href="/ux-lead">
                  {isRTL
                    ? "خبرة عمر مختار عايد في قيادة تجربة المستخدم"
                    : "Omar Mokhtar Ayed UX Leadership Experience"}
                </Link>
              </li>
              <li>
                <Link href="/designops">
                  {isRTL
                    ? "ممارسة عمر مختار عايد في عمليات التصميم"
                    : "Omar Mokhtar Ayed DesignOps Practice"}
                </Link>
              </li>
              <li>
                <Link href="/government-ux">
                  {isRTL
                    ? "مشاريع تجربة المستخدم الحكومية"
                    : "Government UX Projects"}
                </Link>
              </li>
              <li>
                <Link href="/casestudy">
                  {isRTL
                    ? "دراسة حالة تفصيلية في تصميم التجربة"
                    : "Detailed UX Case Study"}
                </Link>
              </li>
              <li>
                <Link href="/projects">
                  {isRTL
                    ? "مشاريع تصميم المنتجات وUX"
                    : "Product Design & UX Projects"}
                </Link>
              </li>
            </ul>
          </div>
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
