import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "../src/i18n/useTranslation";

const Footer = () => {
  const router = useRouter();
  const { language, t } = useTranslation();
  const isRTL = language === "ar";
  const buildInternalLinkProps = (href) => ({
    "aria-current": router.pathname === href ? "page" : undefined,
  });

  return (
    <footer className="footer" role="contentinfo" dir={isRTL ? "rtl" : "ltr"}>
      <div className="footer__inner">
        <Link
          href="/"
          className="footer__name"
          aria-label={t("footer.nameAriaLabel")}>
          {t("footer.name")}
        </Link>
        <p className="footer__subtitle">{t("footer.subtitle")}</p>

        <nav className="footer__nav" aria-label={t("footer.navAriaLabel")}>
          <Link
            href="/casestudy"
            className="footer__link"
            {...buildInternalLinkProps("/casestudy")}>
            {t("footer.links.caseStudies")}
          </Link>
          <span className="footer__dot" aria-hidden="true">
            ·
          </span>
          <Link
            href="/certifications"
            className="footer__link"
            {...buildInternalLinkProps("/certifications")}>
            {t("footer.links.certifications")}
          </Link>
          <span className="footer__dot" aria-hidden="true">
            ·
          </span>
          <Link
            href="/blog"
            className="footer__link"
            {...buildInternalLinkProps("/blog")}>
            {t("footer.links.blog")}
          </Link>
          <span className="footer__dot" aria-hidden="true">
            ·
          </span>
          <Link
            href="/recommendations"
            className="footer__link"
            {...buildInternalLinkProps("/recommendations")}>
            {t("footer.links.recommendations")}
          </Link>
          <span className="footer__dot" aria-hidden="true">
            ·
          </span>
          <Link
            href="/government-ux"
            className="footer__link"
            {...buildInternalLinkProps("/government-ux")}>
            {t("footer.links.governmentUx")}
          </Link>
          <span className="footer__dot" aria-hidden="true">
            ·
          </span>
          <Link
            href="/designops"
            className="footer__link"
            {...buildInternalLinkProps("/designops")}>
            {t("footer.links.designOps")}
          </Link>
          <span className="footer__dot" aria-hidden="true">
            ·
          </span>
          <Link
            href="/ux-lead"
            className="footer__link"
            {...buildInternalLinkProps("/ux-lead")}>
            {t("footer.links.uxLeadership")}
          </Link>
        </nav>

        <div className="footer__social" aria-label={t("footer.socialAriaLabel")}>
          <a
            href="https://www.linkedin.com/in/omarmokhtar22/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
            aria-label={t("footer.social.linkedinAria")}>
            LinkedIn
          </a>
          <span className="footer__dot" aria-hidden="true">
            ·
          </span>
          <a
            href="https://www.behance.net/Omar_Mokhtar"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
            aria-label={t("footer.social.behanceAria")}>
            Behance
          </a>
          <span className="footer__dot" aria-hidden="true">
            ·
          </span>
          <a
            href="https://github.com/omarmok"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
            aria-label={t("footer.social.githubAria")}>
            GitHub
          </a>
          <span className="footer__dot" aria-hidden="true">
            ·
          </span>
          <a
            href="mailto:omarmokhtarayed@hotmail.com"
            className="footer__link"
            aria-label={t("footer.social.emailAria")}>
            {t("footer.social.emailText")}
          </a>
        </div>

        <p className="footer__copyright">{t("footer.copyright")}</p>
      </div>
    </footer>
  );
};

export default Footer;
