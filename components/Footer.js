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
        {/* Identity */}
        <div className="footer__identity">
          <Link
            href="/"
            className="footer__name"
            aria-label="Omar Mokhtar — Homepage">
            Omar Mokhtar
          </Link>
          <p className="footer__title">
            {isRTL
              ? "قائد تجربة المستخدم وعمليات التصميم "
              : "UX/UI Design Lead"}
          </p>
        </div>

        {/* Core expertise — internal authority pages */}
        <nav
          className="footer__expertise"
          aria-label={isRTL ? "صفحات التخصص الرئيسية" : "Core expertise pages"}>
          <h3 className="footer__heading">{isRTL ? "الخبرات" : "Expertise"}</h3>
          <ul className="footer__links" role="list">
            <li>
              <Link
                href="/government-ux"
                className="footer__link"
                {...buildInternalLinkProps("/government-ux")}>
                {isRTL ? "تجربة المستخدم الحكومية" : "Government UX"}
              </Link>
            </li>
            <li>
              <Link
                href="/designops"
                className="footer__link"
                {...buildInternalLinkProps("/designops")}>
                {isRTL ? "DesignOps" : "DesignOps"}
              </Link>
            </li>
            <li>
              <Link
                href="/ux-lead"
                className="footer__link"
                {...buildInternalLinkProps("/ux-lead")}>
                {isRTL ? "قيادة UX" : "UX Leadership"}
              </Link>
            </li>
          </ul>
        </nav>

        {/* Contact */}
        <div className="footer__contact">
          <h3 className="footer__heading">{isRTL ? "تواصل" : "Connect"}</h3>
          <a
            href="https://www.linkedin.com/in/omarmokhtar22/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
            aria-label="Connect with Omar Mokhtar on LinkedIn">
            LinkedIn
          </a>
          <a
            href="https://www.behance.net/Omar_Mokhtar"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
            aria-label="View Omar Mokhtar portfolio on Behance">
            Behance
          </a>
          <Link
            href="/contact"
            className="footer__link"
            aria-label={isRTL ? "تواصل مع عمر مختار" : "تواصل معي"}
            {...buildInternalLinkProps("/contact")}>
            {isRTL ? "تواصل" : "Contact"}
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
