import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import Loader from "../components/Loader";
import PageHeader from "../components/PageHeader";
import DesignSystemPreviewGallery from "../components/DesignSystemPreviewGallery";
import { useTranslation } from "../src/i18n/useTranslation";
import whatsappQr from "../public/images/whatsapp-qr.png";
import designSystemPreviewOne from "../public/images/ds-1.png";
import designSystemPreviewTwo from "../public/images/ds-2.png";
import designSystemPreviewThree from "../public/images/ds-3.png";
import designSystemPreviewFour from "../public/images/ds-4.png";
import designSystemPreviewFive from "../public/images/ds-5.png";

const REDIRECT_URL = "/PS-Design/DesignSystemDocumentation/index.html";
const WHATSAPP_URL = "https://wa.me/+966535468309";

const purple = "var(--theme-brand-primary)";
const ink = "var(--theme-text-primary)";
const inkMid = "var(--theme-text-secondary)";
const inkLight = "var(--theme-text-muted)";
const border = "var(--theme-border)";
const bg = "var(--theme-bg-subtle)";
const surface = "var(--theme-bg-surface)";
const card = "var(--theme-bg-card)";

const SectionWrap = ({ children, background = surface }) => (
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

const teaserBulletStyle = {
  background: surface,
  border: `1px solid ${border}`,
  borderRadius: 10,
  padding: "14px 16px",
  display: "flex",
  alignItems: "flex-start",
  gap: 10,
};

const DesignSystemPage = () => {
  const router = useRouter();
  const { dictionary, language } = useTranslation();
  const casebook = dictionary.casebook;
  const isRTL = language === "ar";
  const copy = isRTL
    ? {
        heroLabel: "Private Design System Showcase",
        heroTitle: "عرض خاص لنظام التصميم",
        heroBody:
          "يقدم هذا العرض الخاص أمثلة مختارة توضح كيف تم توظيف أنظمة التصميم، وممارسات DesignOps، والتوثيق، وحوكمة التصميم، والتنفيذ البرمجي لبناء تجارب رقمية متسقة وقابلة للتوسع.",
        heroBody2:
          "تم تطوير هذا النظام من خلال خبرات عملية في منصات حكومية، ومنتجات مؤسسية، وجهات تعليمية، ومبادرات رقمية واسعة النطاق.",
        experienceLabel: "Experience Highlight",
        experienceTitle: "أكثر من 19 عامًا من الخبرة",
        experienceBody:
          "يعكس هذا العرض ما يقارب عقدين من الخبرة في تجربة المستخدم، وتصميم الواجهات، وأنظمة التصميم، وDesignOps، وتطوير الواجهات الأمامية، وتصميم المنتجات الرقمية.",
        discoverLabel: "What You'll Discover Inside",
        discoverTitle: "ماذا ستجد بالداخل؟",
        discoverBody:
          "يقدم هذا العرض الخاص نظرة عملية على كيفية تخطيط نظام تصميم حقيقي وتنفيذه وتوثيقه وتطويره ليخدم منتجات رقمية متعددة.",
        discoverLead: "يتضمن العرض أمثلة مختارة تغطي:",
        discoverItems: [
          "أسس النظام البصري، بما يشمل الألوان والخطوط والمسافات وDesign Tokens",
          "مكونات واجهات قابلة لإعادة الاستخدام مع شرح المبادئ التي تم الاعتماد عليها في تصميمها",
          "آليات العمل بين التصميم والتطوير للحفاظ على الاتساق بين Figma والتنفيذ الفعلي",
          "أساليب التوثيق المستخدمة لدعم المصممين والمطورين وفرق المنتجات",
          "أمثلة حقيقية على ممارسات DesignOps لتحسين الحوكمة والتعاون وقابلية التوسع",
          "أمثلة من التنفيذ البرمجي توضح كيفية تحويل معايير التصميم إلى واجهات جاهزة للاستخدام",
          "خبرات ودروس مستفادة من إدارة الاتساق عبر منتجات وفرق عمل متعددة",
        ],
        beyondLabel: "Beyond Code",
        beyondTitle: "أكثر من مجرد كود",
        beyondBody: "لا يقتصر نظام التصميم هذا على التنفيذ البرمجي فقط.",
        beyondLead: "يتضمن العرض أمثلة توضح:",
        beyondItems: [
          "مكتبات ومكونات Figma",
          "Design Tokens وإدارة المتغيرات",
          "معايير التوثيق",
          "إرشادات استخدام المكونات",
          "آليات حوكمة التصميم",
          "التعاون بين التصميم والتطوير",
          "التنفيذ البرمجي للواجهات",
          "الحفاظ على الاتساق بين بيئة التصميم والتنفيذ الفعلي",
        ],
        beyondClose:
          "وتوضح الأمثلة المختارة كيف يتم الربط بين مكونات Figma وDesign Tokens والتوثيق والتنفيذ البرمجي لبناء نظام تصميم قابل للتوسع والاستدامة.",
        previewLabel: "لمحة من التوثيق",
        previewTitle: "معاينة نظام التصميم",
        previewBody:
          "معاينة صغيرة من توثيق نظام PS Design System، تشمل التوكنز، والمكونات، وإرشادات التنفيذ، وأمثلة تسليم العمل للمطورين.",
        previewOpenLabel: "فتح معاينة نظام التصميم",
        previewCloseLabel: "إغلاق المعاينة",
        previewImages: [
          {
            src: designSystemPreviewOne,
            alt: "معاينة من توثيق نظام التصميم - الشاشة الأولى",
          },
          {
            src: designSystemPreviewTwo,
            alt: "معاينة من توثيق نظام التصميم - الشاشة الثانية",
          },
          {
            src: designSystemPreviewThree,
            alt: "معاينة من توثيق نظام التصميم - الشاشة الثالثة",
          },
          {
            src: designSystemPreviewFour,
            alt: "معاينة من توثيق نظام التصميم - الشاشة الرابعة",
          },
          {
            src: designSystemPreviewFive,
            alt: "معاينة من توثيق نظام التصميم - الشاشة الخامسة",
          },
        ],
        previewHighlightsTitle: "أبرز ما يقدمه PS Design System",
        previewHighlights: [
          "توثيق Design Tokens",
          "مكتبة مكونات",
          "إرشادات الاستخدام",
          "أمثلة Design-to-Code",
          "دعم تسليم العمل للمطورين",
          "جاهز لـ RTL والتصميم المتجاوب",
        ],
        accessLabel: "Request Access",
        accessTitle: "الدخول إلى عرض نظام التصميم",
        accessBody:
          "إذا تم تزويدك بكلمة مرور الوصول، يمكنك إدخالها أدناه للمتابعة.",
        accessButtonLabel: "الدخول إلى نظام التصميم",
        noticeTitle: "تنويه مهم:",
        noticeBody:
          "يتم منح بيانات الوصول بشكل فردي، ولا يُسمح بمشاركتها أو إعادة توزيعها أو استخدامها من قبل أي طرف آخر.",
        contactTitle: "هل تحتاج إلى صلاحية الوصول؟",
        contactBody:
          "يتم منح صلاحيات الوصول بشكل فردي لأغراض التقييم المهني، والمقابلات الوظيفية، وجلسات الاستعراض المتخصصة.",
        contactBody2:
          "إذا كنت ترغب في الحصول على صلاحية الوصول أو استعراض النظام بشكل مباشر، يمكنك التواصل معي عبر واتساب من خلال مسح رمز QR أدناه.",
        qrTitle: "التواصل عبر واتساب",
        qrBody:
          "امسح رمز QR للتواصل معي مباشرة وطلب صلاحية الوصول أو ترتيب جلسة استعراض للنظام.",
        whatsappLabel: "التواصل عبر واتساب",
        whatsappAria: "التواصل عبر واتساب",
        qrHint: "امسح الرمز للتواصل مباشرة",
        qrAlt: "رمز QR للتواصل عبر واتساب",
      }
    : {
        heroLabel: "Private Design System Showcase",
        heroTitle: "Private Design System Showcase",
        heroBody:
          "A private showcase presenting selected examples of how Design Systems, DesignOps practices, documentation, design governance, and front-end implementation were combined to create scalable and consistent digital experiences.",
        heroBody2:
          "Built through real-world work across government platforms, enterprise products, universities, and large-scale digital initiatives.",
        experienceLabel: "Experience Highlight",
        experienceTitle: "19+ Years of Experience",
        experienceBody:
          "The showcase reflects nearly two decades of experience across UX, UI, Design Systems, DesignOps, Front-End Development, and digital product design.",
        discoverLabel: "What You'll Discover Inside",
        discoverTitle: "What You'll Discover Inside",
        discoverBody:
          "This private showcase provides a behind-the-scenes look at how a production Design System was planned, implemented, documented, and scaled across multiple digital products.",
        discoverLead: "Inside, you'll find selected examples covering:",
        discoverItems: [
          "Design foundations, color systems, typography, spacing, and design tokens",
          "Reusable UI components and the principles behind their design decisions",
          "Design-to-development workflows that helped maintain consistency between Figma and implementation",
          "Documentation approaches used to support designers, developers, and product teams",
          "Real examples of DesignOps practices used to improve collaboration, governance, and scalability",
          "Front-end implementation examples demonstrating how design standards were translated into production-ready code",
          "Lessons learned from maintaining consistency across multiple products and teams",
        ],
        beyondLabel: "Beyond Code",
        beyondTitle: "Beyond Code",
        beyondBody:
          "This Design System extends beyond front-end implementation.",
        beyondLead: "The showcase includes examples of:",
        beyondItems: [
          "Figma libraries and reusable components",
          "Design tokens and variable management",
          "Documentation standards",
          "Component usage guidelines",
          "Design governance workflows",
          "Design-to-development collaboration",
          "Front-end implementation",
          "Maintaining consistency between design assets and production environments",
        ],
        beyondClose:
          "Selected examples demonstrate how Figma components, design tokens, documentation, and front-end implementation are connected to support a scalable design system.",
        previewLabel: "Documentation Preview",
        previewTitle: "Design System Preview",
        previewBody:
          "A small preview of the PS Design System documentation, including tokens, components, implementation guidance, and developer handoff examples.",
        previewOpenLabel: "Open design system preview",
        previewCloseLabel: "Close preview",
        previewImages: [
          {
            src: designSystemPreviewOne,
            alt: "Preview of the PS Design System documentation, screen one",
          },
          {
            src: designSystemPreviewTwo,
            alt: "Preview of the PS Design System documentation, screen two",
          },
          {
            src: designSystemPreviewThree,
            alt: "Preview of the PS Design System documentation, screen three",
          },
          {
            src: designSystemPreviewFour,
            alt: "Preview of the PS Design System documentation, screen four",
          },
          {
            src: designSystemPreviewFive,
            alt: "Preview of the PS Design System documentation, screen five",
          },
        ],
        previewHighlightsTitle: "PS Design System Highlights",
        previewHighlights: [
          "Design Tokens Documentation",
          "Components Library",
          "Usage Guidelines",
          "Design-to-Code Examples",
          "Developer Handoff Support",
          "RTL & Responsive Ready",
        ],
        accessLabel: "Request Access",
        accessTitle: "Access the Design System Showcase",
        accessBody:
          "If you have received an access password, enter it below to continue.",
        accessButtonLabel: "Access Design System",
        noticeTitle: "Please note:",
        noticeBody:
          "Access credentials are issued individually and should not be shared, redistributed, or reused by other parties.",
        contactTitle: "Need Access?",
        contactBody:
          "Access credentials are shared individually for evaluation, hiring discussions, and professional walkthroughs.",
        contactBody2:
          "If you would like access or a guided overview of the system, you can contact me directly by scanning the QR code below.",
        qrTitle: "Contact via WhatsApp",
        qrBody:
          "Scan the QR code to contact me directly and request access or arrange a walkthrough of the Design System.",
        whatsappLabel: "Contact via WhatsApp",
        whatsappAria: "Contact via WhatsApp",
        qrHint: "Scan to contact directly",
        qrAlt: "QR code to contact via WhatsApp",
      };
  const supportLinks = [
    {
      href: "/government-ux",
      label: isRTL ? "تجربة المستخدم الحكومية" : "Government UX",
    },
    {
      href: "/designops",
      label: "DesignOps",
    },
    {
      href: "/ux-lead",
      label: isRTL ? "قيادة UX" : "UX Leadership",
    },
  ];
  const buildSupportLinkProps = (href) => ({
    "aria-current": router.pathname === href ? "page" : undefined,
  });

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
        if (
          typeof window !== "undefined" &&
          window.history &&
          typeof window.history.replaceState === "function"
        ) {
          window.history.replaceState(
            { source: "design-system-login" },
            "",
            "/",
          );
        }
        window.location.assign(REDIRECT_URL);
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
      <PageHeader
        eyebrow={copy.heroLabel}
        title={copy.heroTitle}
        description={[copy.heroBody, copy.heroBody2]}
      />

      <SectionWrap background={bg}>
        <SectionLabel>{copy.experienceLabel}</SectionLabel>
        <SectionTitle>{copy.experienceTitle}</SectionTitle>
        <SectionRule />
        <div
          style={{
            background: card,
            border: `1px solid ${border}`,
            borderRadius: 14,
            padding: "24px",
            boxShadow: "0px 10px 30px rgba(15, 23, 42, 0.06)",
          }}>
          <SectionBody style={{ marginBottom: 0 }}>
            {copy.experienceBody}
          </SectionBody>
        </div>
      </SectionWrap>

      <SectionWrap>
        <SectionLabel>{copy.discoverLabel}</SectionLabel>
        <SectionTitle>{copy.discoverTitle}</SectionTitle>
        <SectionRule />
        <SectionBody style={{ maxWidth: "74ch", marginBottom: 8 }}>
          {copy.discoverBody}
        </SectionBody>
        <SectionBody
          style={{ maxWidth: "74ch", marginBottom: 16, fontWeight: 600 }}>
          {copy.discoverLead}
        </SectionBody>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 12,
          }}>
          {copy.discoverItems.map((item) => (
            <div key={item} style={teaserBulletStyle}>
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: purple,
                  flexShrink: 0,
                  marginTop: 7,
                }}
              />
              <span style={{ fontSize: 14, color: inkMid, lineHeight: 1.65 }}>
                {item}
              </span>
            </div>
          ))}
        </div>
      </SectionWrap>

      <SectionWrap background={bg}>
        <SectionLabel>{copy.beyondLabel}</SectionLabel>
        <SectionTitle>{copy.beyondTitle}</SectionTitle>
        <SectionRule />
        <SectionBody style={{ maxWidth: "74ch", marginBottom: 8 }}>
          {copy.beyondBody}
        </SectionBody>
        <SectionBody
          style={{ maxWidth: "74ch", marginBottom: 16, fontWeight: 600 }}>
          {copy.beyondLead}
        </SectionBody>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 12,
            marginBottom: 16,
          }}>
          {copy.beyondItems.map((item) => (
            <div key={item} style={teaserBulletStyle}>
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: purple,
                  flexShrink: 0,
                  marginTop: 7,
                }}
              />
              <span style={{ fontSize: 14, color: inkMid, lineHeight: 1.65 }}>
                {item}
              </span>
            </div>
          ))}
        </div>
        <SectionBody style={{ maxWidth: "74ch", marginBottom: 0 }}>
          {copy.beyondClose}
        </SectionBody>
      </SectionWrap>

      <SectionWrap>
        <SectionLabel>
          {isRTL ? "صفحات مرجعية داعمة" : "Supporting Authority Pages"}
        </SectionLabel>
        <SectionTitle>
          {isRTL ? "استكشف الخبرات ذات الصلة" : "Explore Related Expertise"}
        </SectionTitle>
        <SectionRule />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 12,
          }}>
          {supportLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              {...buildSupportLinkProps(link.href)}
              style={{
                background: surface,
                border: `1px solid ${border}`,
                borderRadius: 10,
                padding: "14px 16px",
                textDecoration: "none",
                color: ink,
                fontSize: 14,
                fontWeight: 700,
                display: "block",
              }}>
              {link.label}
            </Link>
          ))}
        </div>
      </SectionWrap>

      <SectionWrap background={bg}>
        <SectionLabel>{copy.previewLabel}</SectionLabel>
        <SectionTitle>{copy.previewTitle}</SectionTitle>
        <SectionRule />
        <SectionBody style={{ maxWidth: "74ch", marginBottom: 24 }}>
          {copy.previewBody}
        </SectionBody>
        <DesignSystemPreviewGallery
          items={copy.previewImages}
          highlightsTitle={copy.previewHighlightsTitle}
          highlights={copy.previewHighlights}
          openLabel={copy.previewOpenLabel}
          closeLabel={copy.previewCloseLabel}
        />
      </SectionWrap>

      <SectionWrap>
        <SectionLabel>{copy.accessLabel}</SectionLabel>
        <SectionTitle>{copy.accessTitle}</SectionTitle>
        <SectionRule />
        <div
          style={{
            background: card,
            border: `1px solid ${border}`,
            borderRadius: 14,
            padding: "22px",
            boxShadow: "0px 8px 24px rgba(15, 23, 42, 0.05)",
          }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 18,
              alignItems: "flex-start",
            }}>
            <div style={{ flex: "1.5 1 420px", minWidth: 0 }}>
              <SectionBody style={{ marginBottom: 16, maxWidth: "60ch" }}>
                {copy.accessBody}
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
                  {isLoading ? "..." : copy.accessButtonLabel}
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
            <aside
              style={{
                flex: "1 1 400px",
                maxWidth: 400,
                width: "100%",
                marginInlineStart: "auto",
                background: bg,
                border: `1px solid ${border}`,
                borderRadius: 12,
                padding: "14px",
                textAlign: "center",
              }}>
              <h3
                style={{
                  margin: "0 0 6px",
                  fontSize: 18,
                  fontWeight: 800,
                  color: ink,
                }}>
                {copy.contactTitle}
              </h3>
              <SectionBody style={{ marginBottom: 6, fontSize: 14 }}>
                {copy.contactBody}
              </SectionBody>
              <SectionBody style={{ marginBottom: 12, fontSize: 14 }}>
                {copy.contactBody2}
              </SectionBody>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={copy.whatsappAria}
                style={{ display: "inline-block", textDecoration: "none" }}>
                <div
                  style={{
                    background: surface,
                    border: `1px solid ${border}`,
                    borderRadius: 10,
                    padding: 10,
                    display: "inline-block",
                  }}>
                  <Image
                    src={whatsappQr}
                    alt={copy.qrAlt}
                    width={170}
                    height={170}
                    style={{ width: "100%", maxWidth: 170, height: "auto" }}
                  />
                </div>
                <p
                  style={{
                    margin: "8px 0 6px",
                    color: inkLight,
                    fontSize: 12,
                    fontWeight: 600,
                    lineHeight: 1.45,
                  }}>
                  {copy.qrHint}
                </p>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 7,
                    fontSize: 14,
                    fontWeight: 700,
                    color: purple,
                    textDecoration: "none",
                  }}>
                  {/* <Image
                    src={whatsappIcon}
                    alt=""
                    aria-hidden="true"
                    width={18}
                    height={18}
                    style={{ flexShrink: 0 }}
                  /> */}
                  {copy.whatsappLabel}
                </span>
              </a>
            </aside>
          </div>
        </div>
      </SectionWrap>
    </div>
  );
};

export default DesignSystemPage;
