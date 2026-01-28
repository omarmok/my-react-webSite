
import { useTranslation } from "../src/i18n/useTranslation";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="footer text-center">
      <a
        href="https://omarmokhtar.com/"
        target="_self"
        aria-label={t("footer.ariaLabel")}
      >
        {t("footer.madeWithLove")}
      </a>
    </div>
  );
};

export default Footer;
