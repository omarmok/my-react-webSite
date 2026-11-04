import { useId, useState } from "react";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { getWhatsAppAccessUrl } from "../src/data/contact";
import { useTranslation } from "../src/i18n/useTranslation";
import whatsappQr from "../public/images/whatsapp-qr.png";

const REDIRECT_URL = "/PS-Design/DesignSystemDocumentation/index.html";

const getCopy = (isRTL) =>
  isRTL
    ? {
        label: "الوصول",
        title: "الدخول إلى نظام التصميم",
        intro: "طريقتان للوصول إلى التوثيق الكامل:",
        passwordTitle: "لديك كلمة مرور؟",
        passwordBody: "أدخل كلمة مرور الوصول التي وصلتك لفتح التوثيق الكامل.",
        submit: "الدخول إلى نظام التصميم",
        noticeTitle: "تنويه مهم:",
        noticeBody:
          "يتم منح بيانات الوصول بشكل فردي، ولا يُسمح بمشاركتها أو إعادة توزيعها أو استخدامها من قبل أي طرف آخر.",
        requestTitle: "هل تحتاج إلى صلاحية الوصول؟",
        requestBody:
          "يتم منح صلاحيات الوصول بشكل فردي لأغراض التقييم المهني، والمقابلات الوظيفية، وجلسات الاستعراض المتخصصة.",
        requestBody2: "راسلني على واتساب لطلب الصلاحية أو ترتيب جلسة استعراض للنظام.",
        whatsappButton: "اطلب الصلاحية عبر واتساب",
        qrLead: "أو امسح الرمز من جوالك",
        qrAlt: "رمز QR للتواصل عبر واتساب",
      }
    : {
        label: "Access",
        title: "Enter the design system",
        intro: "Two ways into the full documentation:",
        passwordTitle: "Have a password?",
        passwordBody: "Enter the access password you received to open the full documentation.",
        submit: "Access Design System",
        noticeTitle: "Please note:",
        noticeBody:
          "Access credentials are issued individually and should not be shared, redistributed, or reused by other parties.",
        requestTitle: "Need Access?",
        requestBody:
          "Access credentials are shared individually for evaluation, hiring discussions, and professional walkthroughs.",
        requestBody2: "Message me on WhatsApp to request access or arrange a walkthrough of the system.",
        whatsappButton: "Request access on WhatsApp",
        qrLead: "Or scan the code with your phone",
        qrAlt: "QR code to contact via WhatsApp",
      };

// Password sign-in and access request for the protected documentation.
// Admin note: the password lives in .env.local as DESIGN_SYSTEM_PASSWORD; restart the app after changing it.
const DesignSystemAccess = () => {
  const { dictionary, language } = useTranslation();
  const access = dictionary.casebook.access;
  const copy = getCopy(language === "ar");
  const fieldId = useId();
  const titleId = useId();
  const errorId = useId();
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setLoginError(null);

    try {
      const response = await fetch("/api/design-system-login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (response.ok) {
        window.history.replaceState({ source: "design-system-login" }, "", "/");
        window.location.assign(REDIRECT_URL);
        return;
      }

      if (response.status === 401) {
        setLoginError("passwordError");
        setPassword("");
      } else if (response.status === 500) {
        setLoginError("serverError");
      } else {
        setLoginError("requestError");
      }
    } catch {
      setLoginError("networkError");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="ds-access" className="ds-access" aria-labelledby={titleId}>
      <div className="site-container">
        <p className="cs-label">{copy.label}</p>
        <h2 id={titleId} className="ds-access__title">
          {copy.title}
        </h2>
        <p className="ds-access__intro">{copy.intro}</p>
        <div className="ds-access__grid">
          <div className="ds-access__card">
            <h3>{copy.passwordTitle}</h3>
            <p>{copy.passwordBody}</p>
            <form onSubmit={handleSubmit} noValidate>
              <label htmlFor={fieldId} className="form-label fw-semibold">
                {access.passwordLabel}
              </label>
              <input
                id={fieldId}
                name="casebook-password"
                type="password"
                autoComplete="current-password"
                className="form-control"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                  if (loginError) {
                    setLoginError(null);
                  }
                }}
                placeholder={access.passwordPlaceholder}
                aria-describedby={loginError ? errorId : undefined}
                aria-invalid={loginError === "passwordError"}
              />
              <button
                type="submit"
                className="btn btn-warning ds-access__submit"
                disabled={isLoading}>
                {isLoading ? "..." : copy.submit}
              </button>
              {loginError ? (
                <p
                  id={errorId}
                  className="text-danger mt-3 mb-0"
                  role="alert"
                  aria-live="assertive">
                  {access[loginError]}
                </p>
              ) : null}
            </form>
            <p className="ds-access__notice">
              <strong>{copy.noticeTitle}</strong> {copy.noticeBody}
            </p>
          </div>

          <div className="ds-access__card">
            <h3>{copy.requestTitle}</h3>
            <p>{copy.requestBody}</p>
            <p>{copy.requestBody2}</p>
            <a
              href={getWhatsAppAccessUrl(language)}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-cta whatsapp-cta--solid">
              <FaWhatsapp aria-hidden="true" focusable="false" />
              {copy.whatsappButton}
            </a>
            <div className="ds-access__qr">
              <Image src={whatsappQr} alt={copy.qrAlt} width={112} height={112} />
              <p>{copy.qrLead}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignSystemAccess;
