import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "../src/i18n/useTranslation";

const Footer = () => {
  const router = useRouter();
  const { language } = useTranslation();
  const isRTL = language === "ar";
  const buildInternalLinkProps = (href) => ({
    "aria-current": router.pathname === href ? "page" : undefined,
  });

  return (
    <footer className="footer" role="contentinfo" dir={isRTL ? "rtl" : "ltr"}>
      <div className="footer__inner">
        <Link href="/" className="footer__name" aria-label="Omar Mokhtar — Homepage">
          Omar Mokhtar
        </Link>
        <p className="footer__subtitle">UX/UI Lead · Design Systems · DesignOps</p>

        <nav className="footer__nav" aria-label="Footer navigation">
          <Link
            href="/casestudy"
            className="footer__link"
            {...buildInternalLinkProps("/casestudy")}>
            {isRTL ? "دراسات الحالة" : "Case Studies"}
          </Link>
          <span className="footer__dot" aria-hidden="true">
            ·
          </span>
          <Link
            href="/certifications"
            className="footer__link"
            {...buildInternalLinkProps("/certifications")}>
            {isRTL ? "الشهادات" : "Certifications"}
          </Link>
          <span className="footer__dot" aria-hidden="true">
            ·
          </span>
          <Link
            href="/blog"
            className="footer__link"
            {...buildInternalLinkProps("/blog")}>
            {isRTL ? "المدونة" : "Blog"}
          </Link>
          <span className="footer__dot" aria-hidden="true">
            ·
          </span>
          <Link
            href="/recommendations"
            className="footer__link"
            {...buildInternalLinkProps("/recommendations")}>
            {isRTL ? "التوصيات" : "Recommendations"}
          </Link>
          <span className="footer__dot" aria-hidden="true">
            ·
          </span>
          <Link
            href="/government-ux"
            className="footer__link"
            {...buildInternalLinkProps("/government-ux")}>
            {isRTL ? "تجربة المستخدم الحكومية" : "Government UX"}
          </Link>
          <span className="footer__dot" aria-hidden="true">
            ·
          </span>
          <Link
            href="/designops"
            className="footer__link"
            {...buildInternalLinkProps("/designops")}>
            DesignOps
          </Link>
          <span className="footer__dot" aria-hidden="true">
            ·
          </span>
          <Link
            href="/ux-lead"
            className="footer__link"
            {...buildInternalLinkProps("/ux-lead")}>
            {isRTL ? "قيادة UX" : "UX Leadership"}
          </Link>
        </nav>

        <div className="footer__social" aria-label="Social links">
          <a
            href="https://www.linkedin.com/in/omarmokhtar22/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
            aria-label="LinkedIn profile">
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
            aria-label="Behance profile">
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
            aria-label="GitHub profile">
            GitHub
          </a>
          <span className="footer__dot" aria-hidden="true">
            ·
          </span>
          <a
            href="mailto:omarmokhtarayed@hotmail.com"
            className="footer__link"
            aria-label="Send email to Omar Mokhtar">
            Email
          </a>
        </div>

        <p className="footer__copyright">
          {isRTL
            ? "© 2026 عمر مختار. جميع الحقوق محفوظة."
            : "© 2026 Omar Mokhtar. All rights reserved."}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
