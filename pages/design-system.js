import React, { useState } from "react";
import Loader from "../components/Loader";
import { useTranslation } from "../src/i18n/useTranslation";

const REDIRECT_URL = "/PS-Design/DesignSystemDocumentation/index.html";
const WHATSAPP_URL = "https://wa.me/+966535468309";

const purple = "#6b47f5";
const ink = "#0f172a";
const inkMid = "#334155";
const inkLight = "#64748b";
const border = "#e2e8f0";
const bg = "#f8f7ff";
const purpleLight = "#ede9fd";

const SectionWrap = ({ children, background = "#fff" }) => (
  <section style={{ background, padding: "48px 0" }}>
    <div style={{ width: "min(960px, 100% - 48px)", margin: "0 auto" }}>
      {children}
    </div>
  </section>
);

const SectionLabel = ({ children }) => (
  <p
    style={{
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      color: purple,
      margin: "0 0 10px",
      display: "flex",
      alignItems: "center",
      gap: 8,
    }}>
    <span
      style={{
        width: 20,
        height: 2,
        background: purple,
        display: "inline-block",
        borderRadius: 2,
        flexShrink: 0,
      }}
    />
    {children}
  </p>
);

const SectionTitle = ({ children }) => (
  <h2
    style={{
      fontSize: "clamp(1.5rem, 3vw, 2rem)",
      fontWeight: 800,
      color: ink,
      margin: "0 0 20px",
      lineHeight: 1.25,
    }}>
    {children}
  </h2>
);

const SectionRule = () => (
  <div
    style={{
      width: 40,
      height: 3,
      background: purple,
      borderRadius: 3,
      margin: "0 0 28px",
    }}
  />
);

const SectionBody = ({ children, style = {} }) => (
  <p
    style={{
      fontSize: 16,
      color: inkMid,
      lineHeight: 1.8,
      margin: "0 0 16px",
      ...style,
    }}>
    {children}
  </p>
);

const DesignSystemPage = () => {
  const { dictionary, language } = useTranslation();
  const casebook = dictionary.casebook;
  const isRTL = language === "ar";

  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Admin note:
  // Password configuration location: .env.local
  // Variable name: DESIGN_SYSTEM_PASSWORD
  // After updating the value, restart the app.
  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setShowError(false);

    try {
      const response = await fetch("/api/design-system-login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (response.ok) {
        window.location.replace(REDIRECT_URL);
        return;
      }
    } catch {
      // network error falls through to error state
    }

    setIsLoading(false);
    setShowError(true);
    setPassword("");
  };

  return (
    <div className="page-container" dir={isRTL ? "rtl" : "ltr"}>
      <Loader />

      <section
        style={{
          background: `linear-gradient(160deg, ${ink} 0%, #1e1654 100%)`,
          padding: "64px 0 56px",
        }}>
        <div style={{ width: "min(960px, 100% - 48px)", margin: "0 auto" }}>
          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              fontWeight: 900,
              color: "#fff",
              lineHeight: 1.15,
              margin: "0 0 16px",
              maxWidth: "20ch",
            }}>
            {casebook.hero.title}
          </h1>
          <p
            style={{
              fontSize: "clamp(15px, 2vw, 17px)",
              color: "rgba(255,255,255,0.68)",
              maxWidth: "58ch",
              lineHeight: 1.75,
              margin: 0,
            }}>
            {casebook.hero.subtitle}
          </p>
        </div>
      </section>

      <SectionWrap>
        <SectionLabel>{casebook.overview.label}</SectionLabel>
        <SectionTitle>{casebook.overview.label}</SectionTitle>
        <SectionRule />
        <SectionBody style={{ maxWidth: "70ch", marginBottom: 0 }}>
          {casebook.overview.body}
        </SectionBody>
      </SectionWrap>

      <SectionWrap background={bg}>
        <SectionLabel>{casebook.includes.label}</SectionLabel>
        <SectionTitle>{casebook.includes.label}</SectionTitle>
        <SectionRule />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 14,
          }}>
          {casebook.includes.items.map((item) => (
            <div
              key={item.title}
              style={{
                background: "#fff",
                border: `1px solid ${border}`,
                borderRadius: 12,
                padding: "20px 18px",
                borderTop: `3px solid ${purple}`,
              }}>
              <div
                style={{
                  fontWeight: 700,
                  fontSize: 15,
                  color: ink,
                  marginBottom: 8,
                }}>
                {item.title}
              </div>
              <div style={{ fontSize: 14, color: inkMid, lineHeight: 1.7 }}>
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </SectionWrap>

      <SectionWrap>
        <SectionLabel>{casebook.foundations.label}</SectionLabel>
        <SectionTitle>{casebook.foundations.label}</SectionTitle>
        <SectionRule />
        <SectionBody style={{ maxWidth: "64ch" }}>
          {casebook.foundations.intro}
        </SectionBody>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 12,
          }}>
          {casebook.foundations.items.map((item) => (
            <div
              key={item}
              style={{
                background: bg,
                border: `1px solid ${border}`,
                borderRadius: 10,
                padding: "14px 16px",
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}>
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: purple,
                  flexShrink: 0,
                }}
              />
              <span style={{ fontSize: 14, color: inkMid }}>{item}</span>
            </div>
          ))}
        </div>
      </SectionWrap>

      <SectionWrap background={bg}>
        <SectionLabel>{casebook.components.label}</SectionLabel>
        <SectionTitle>{casebook.components.label}</SectionTitle>
        <SectionRule />
        <SectionBody style={{ maxWidth: "64ch" }}>
          {casebook.components.intro}
        </SectionBody>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 12,
          }}>
          {casebook.components.items.map((item) => (
            <div
              key={item}
              style={{
                background: "#fff",
                border: `1px solid ${border}`,
                borderRadius: 10,
                padding: "14px 16px",
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}>
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: purple,
                  flexShrink: 0,
                }}
              />
              <span style={{ fontSize: 14, color: inkMid }}>{item}</span>
            </div>
          ))}
        </div>
      </SectionWrap>

      <SectionWrap>
        <SectionLabel>{casebook.implementation.label}</SectionLabel>
        <SectionTitle>{casebook.implementation.label}</SectionTitle>
        <SectionRule />
        <SectionBody style={{ maxWidth: "64ch" }}>
          {casebook.implementation.intro}
        </SectionBody>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {casebook.implementation.items.map((item, index) => (
            <div
              key={item}
              style={{
                display: "grid",
                gridTemplateColumns: "auto 1fr",
                gap: 16,
                padding: "18px 0",
                borderBottom:
                  index < casebook.implementation.items.length - 1
                    ? `1px solid ${border}`
                    : "none",
                alignItems: "center",
              }}>
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 8,
                  background: purpleLight,
                  color: purple,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 13,
                  fontWeight: 800,
                  flexShrink: 0,
                }}>
                {String(index + 1).padStart(2, "0")}
              </div>
              <div style={{ fontSize: 15, color: inkMid, lineHeight: 1.65 }}>
                {item}
              </div>
            </div>
          ))}
        </div>
      </SectionWrap>

      <SectionWrap background={bg}>
        <SectionLabel>{casebook.access.title}</SectionLabel>
        <SectionTitle>{casebook.access.title}</SectionTitle>
        <SectionRule />

        <div
          style={{
            background: "#fff",
            border: `1px solid ${border}`,
            borderRadius: 14,
            padding: "24px",
            boxShadow: "0px 10px 30px rgba(15, 23, 42, 0.06)",
          }}>
          <SectionBody style={{ marginBottom: 20 }}>
            {casebook.access.description}
          </SectionBody>
          <form onSubmit={handleSubmit} noValidate>
            <label
              htmlFor="casebook-password"
              className="form-label fw-semibold">
              {casebook.access.passwordLabel}
            </label>
            <input
              id="casebook-password"
              name="casebook-password"
              type="password"
              autoComplete="current-password"
              className="form-control"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
                if (showError) {
                  setShowError(false);
                }
              }}
              placeholder={casebook.access.passwordPlaceholder}
              aria-describedby={
                showError ? "casebook-password-error" : undefined
              }
            />
            <button
              type="submit"
              className="btn btn-warning mt-3"
              disabled={isLoading}>
              {isLoading ? "..." : casebook.access.accessButton}
            </button>
            {showError ? (
              <p
                id="casebook-password-error"
                className="text-danger mt-3 mb-0"
                role="alert"
                aria-live="assertive">
                {casebook.access.passwordError}
              </p>
            ) : null}
          </form>
        </div>
      </SectionWrap>

      <div style={{ padding: "12px 0 40px" }}>
        <div
          style={{
            width: "min(960px, 100% - 48px)",
            margin: "0 auto",
            color: inkLight,
            fontSize: 13,
            lineHeight: 1.6,
            textAlign: isRTL ? "right" : "left",
          }}>
          <p style={{ margin: 0 }}>
            {language === "ar"
              ? "يمكن ترتيب جلسة استعراض وشرح لنظام التصميم عند الطلب."
              : "A guided walkthrough of the design system can be arranged upon request."}
          </p>
          <p style={{ margin: "10px 0 0" }}>
            {language === "ar"
              ? "إذا كنت ترغب في الاطلاع على النظام بشكل أعمق أو مناقشة هيكليته وطريقة تنفيذه والقرارات التصميمية المتبعة، يمكنك التواصل معي مباشرة عبر واتساب."
              : "If you would like to explore the system in more detail or discuss its architecture, implementation approach, and design decisions, feel free to contact me via WhatsApp."}
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={
              language === "ar"
                ? "التواصل عبر واتساب"
                : "Contact me on WhatsApp"
            }
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              marginTop: 10,
              fontSize: 14,
              fontWeight: 600,
              color: purple,
              textDecoration: "none",
            }}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              focusable="false">
              <path
                fill="#25D366"
                d="M12 2a10 10 0 0 0-8.73 14.88L2 22l5.27-1.23A10 10 0 1 0 12 2z"
              />
              <path
                fill="#fff"
                d="M17.61 14.84c-.23-.11-1.33-.65-1.53-.72-.2-.08-.35-.12-.5.12-.15.23-.58.72-.71.86-.13.15-.27.17-.5.06-.23-.12-.97-.35-1.85-1.12-.69-.61-1.15-1.36-1.29-1.59-.13-.23-.01-.35.1-.46.1-.1.23-.27.35-.4.12-.13.15-.23.23-.38.08-.15.04-.29-.02-.4-.06-.12-.5-1.21-.69-1.66-.18-.43-.37-.38-.5-.39l-.43-.01c-.15 0-.4.06-.61.29-.21.23-.8.78-.8 1.9 0 1.12.82 2.2.94 2.35.12.15 1.61 2.46 3.9 3.45.54.24.97.38 1.29.49.54.17 1.03.15 1.42.09.43-.06 1.33-.54 1.52-1.06.19-.52.19-.97.13-1.06-.06-.09-.21-.15-.44-.26z"
              />
            </svg>
            {language === "ar"
              ? "التواصل عبر واتساب"
              : "Contact me on WhatsApp"}
          </a>
        </div>
      </div>
    </div>
  );
};

export default DesignSystemPage;
