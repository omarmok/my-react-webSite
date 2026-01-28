import { useTranslation } from "../src/i18n/useTranslation";

const Loader = () => {
  const { t } = useTranslation();
  return (
    <div className="loader fadeoutt" role="status" aria-live="polite">
      <span className="loader__spinner" aria-hidden="true" />
      <span className="visually-hidden">
        {t("loader.loading")}
      </span>
    </div>
  );
};

export default Loader;
