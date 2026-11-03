import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import photo from "../public/images/omar.png";
import photoWebP from "../public/images/omar.webp";
import photoAVIF from "../public/images/omar.avif";

const REDIRECT_URL = "/PS-Design/DesignSystemDocumentation/index.html";

import { FaBehance, FaGithub, FaEnvelope, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { useTranslation } from "../src/i18n/useTranslation";
import ResumeModal from "../components/ResumeModal";
import { getWhatsAppAccessUrl } from "../src/data/contact";
import dsPreviewIcons from "../public/images/ds-1.png";
import dsPreviewSwitches from "../public/images/ds-3.png";
import dsPreviewRadius from "../public/images/ds-2.png";

const DS_PREVIEW_IMAGES = {
  icons: dsPreviewIcons,
  switches: dsPreviewSwitches,
  radius: dsPreviewRadius,
};

// Small lock glyph for "protected content" notes next to Design System links.
const LockIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
    <rect x="4" y="10" width="16" height="11" rx="2.5" stroke="currentColor" strokeWidth="2" />
    <path d="M8 10V7a4 4 0 1 1 8 0v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const ICON_LIBRARY = {
  calendar: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
      <rect
        x="3"
        y="5"
        width="18"
        height="16"
        rx="2.5"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M8 3v4M16 3v4M3 10h18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  ),
  building: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
      <path
        d="M3 10h18L12 4 3 10Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M5 10v8M9 10v8M15 10v8M19 10v8M3 18h18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  ),
  layers: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
      <path
        d="m12 3 8 4-8 4-8-4 8-4Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="m4 12 8 4 8-4m-16 5 8 4 8-4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  workflow: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
      <rect
        x="3"
        y="4"
        width="7"
        height="6"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <rect
        x="14"
        y="4"
        width="7"
        height="6"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <rect
        x="8.5"
        y="14"
        width="7"
        height="6"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M10 7h4M12 10v4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  ),
  certificate: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
      <rect
        x="4"
        y="3.5"
        width="16"
        height="17"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M8 8h8M8 12h8M8 16h5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle
        cx="17.5"
        cy="16.5"
        r="2.5"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  ),
  code: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
      <path
        d="m8 8-4 4 4 4m8-8 4 4-4 4m-4-11-2 14"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  implementation: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
      <rect
        x="3"
        y="4"
        width="18"
        height="14"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M8 21h8M12 18v3M8.5 10.5 7 12l1.5 1.5m7-3L17 12l-1.5 1.5m-5-4 3 5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  team: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
      <circle cx="8" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.8" />
      <circle
        cx="16.5"
        cy="7.5"
        r="2"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M3.5 19a4.5 4.5 0 0 1 9 0m1 0a3.5 3.5 0 0 1 7 0"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  ),
  governance: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
      <path
        d="M12 3 4.5 6v5c0 4.6 3.2 8.9 7.5 10 4.3-1.1 7.5-5.4 7.5-10V6L12 3Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="m9.5 12.5 1.8 1.8 3.4-3.8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  leadership: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
      <path
        d="M12 4 9.2 9h5.6L12 4Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="14" r="3" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M6 21a6 6 0 0 1 12 0"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  ),
  impact: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
      <path
        d="M4 18V9m6 9V5m6 13v-7m4 7H2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="m6 9 4-4 4 3 5-4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
};

const HeroStatIcon = ({ iconName }) => (
  <span className="hero-footer__icon" aria-hidden="true">
    {ICON_LIBRARY[iconName] ?? ICON_LIBRARY.layers}
  </span>
);

const SectionIcon = ({ iconName }) => (
  <span className="homepage-section-icon" aria-hidden="true">
    {ICON_LIBRARY[iconName] ?? ICON_LIBRARY.layers}
  </span>
);

export default function Home() {
  useEffect(() => {
    let cleanup = () => {};

    const enableTooltips = async () => {
      if (!document.querySelector('[data-bs-toggle="tooltip"]')) return;
      const bootstrap =
        await import("bootstrap/dist/js/bootstrap.bundle.min.js");
      const Tooltip = bootstrap.Tooltip || bootstrap.default?.Tooltip;
      if (!Tooltip) return;
      const instances = Array.from(
        document.querySelectorAll('[data-bs-toggle="tooltip"]'),
      ).map((el) => new Tooltip(el));
      cleanup = () => instances.forEach((i) => i.dispose?.());
    };

    let idleId;
    let timeoutId;
    if (typeof window !== "undefined" && "requestIdleCallback" in window) {
      idleId = window.requestIdleCallback(() => void enableTooltips());
    } else {
      timeoutId = window.setTimeout(() => void enableTooltips(), 200);
    }

    return () => {
      if (
        typeof window !== "undefined" &&
        idleId !== undefined &&
        "cancelIdleCallback" in window
      )
        window.cancelIdleCallback(idleId);
      if (timeoutId) window.clearTimeout(timeoutId);
      cleanup();
    };
  }, []);

  const { dictionary, language } = useTranslation();
  const { hero, paragraphs, focusAreas, stats, social, imageAlt } =
    dictionary.home;
  const isRTL = language === "ar";
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const strategyCopy = isRTL
    ? {
        credibilityTitle: "دليل الموثوقية المهنية",
        credibilityIntro:
          "إثباتات مهنية مختصرة تؤكد الخبرة في قيادة UX والتسليم عالي الجودة.",
        credibilityItems: [
          {
            icon: "certificate",
            title: "شهادة Google UX",
            detail: "اعتماد مهني معترف به في تجربة المستخدم.",
          },
          {
            icon: "code",
            title: "خبرة Design-to-Code",
            detail: "ربط قرارات التصميم بالتنفيذ الفعلي.",
          },
          {
            icon: "implementation",
            title: "تنفيذ الواجهة الأمامية",
            detail: "أكتب HTML وCSS وSCSS وJavaScript بنفسي.",
          },
          {
            icon: "team",
            title: "قيادة متعددة التخصصات",
            detail: "مواءمة المنتج والهندسة وتجربة المستخدم.",
          },
          {
            icon: "governance",
            title: "حوكمة UX",
            detail: "معايير جودة قابلة للتوسع والاستدامة.",
          },
        ],
        designSystemEyebrow: "نظام التصميم · معاينة خاصة",
        designSystemTitle: "نظام تصميم متكامل، من الـ Tokens إلى كود الإنتاج",
        designSystemIntro:
          "أقوى دليل عملي على خبرتي: نظام تصميم مؤسسي أنشأته وأملكه، تعمل عليه منصة حكومية تضم 14 نظامًا وتطبيقاتها على الجوال والويب. بنيته في Figma وفي الكود، وأطوّر الاثنين بنفسي.",
        designSystemFacts: [
          ["الـ Tokens", "236 متغيرًا في SCSS تطابق Tokens في Figma للألوان والخطوط والمسافات والزوايا والظلال."],
          ["المكونات", "أكثر من 30 ملف أنماط للمكونات، وكل مكوّن موثّق بحالاته وخصائص Figma مقابل واجهة الكود وملاحظات الوصولية."],
          ["التوثيق", "موقع ثنائي اللغة من 38 صفحة، مع مكتبة قابلة للبحث من 4,371 أيقونة."],
          ["RTL", "مكونات عربية أولًا تنعكس فيها الأيقونات والفواصل تلقائيًا في RTL."],
          ["من التصميم إلى الكود", "Figma وSCSS يُحدَّثان معًا، مع إصدارات مرقّمة وسجل تغييرات ثنائي اللغة."],
        ],
        designSystemLockNote:
          "التوثيق الكامل محمي. ادخل بكلمة مرور الوصول، أو اطلب الصلاحية عبر واتساب.",
        designSystemPreviewTitle: "شاشات حقيقية من التوثيق",
        designSystemPreviewImages: [
          ["icons", "صفحة الأيقونات في توثيق نظام التصميم"],
          ["switches", "صفحة مكوّن المفتاح (Switch) في توثيق نظام التصميم"],
          ["radius", "صفحة الزوايا (Radius) في توثيق نظام التصميم"],
        ],
        designSystemDescription:
          "يسلط هذا القسم الضوء على كيف أخلق أنظمة تصميم تدعم الموثوقية والتسليم السريع مع اتساق بصري ومواصفات تنفيذية واضحة.",
        designSystemCta: "الوصول إلى قسم نظام التصميم →",
        designSystemCards: [
          {
            icon: "certificate",
            title: "الأساسيات",
            detail:
              "الرموز، الطباعة، المساحات، الألوان، قواعد الوصول، والتناسق البصري.",
          },
          {
            icon: "layers",
            title: "المكونات",
            detail:
              "مكونات واجهة قابلة لإعادة الاستخدام، المتغيرات، الحالات، الاستجابة، وأنماط جاهزة للتطبيق.",
          },
          {
            icon: "governance",
            title: "الحوكمة والتوثيق",
            detail:
              "إرشادات الاستخدام، تسليم التصميم، معايير الجودة، والتعاون بين الفرق.",
          },
        ],
        designSystemFeatures: [
          "رموز التصميم",
          "مكتبة المكونات",
          "التوثيق",
          "معايير الوصولية",
          "سير عمل التصميم إلى الكود",
          "الحوكمة",
        ],
        designSystemAccess: {
          label: "طلب الوصول",
          title: "الدخول إلى نظام التصميم",
          body: "لديك كلمة مرور؟ أدخلها لفتح التوثيق الكامل.",
          buttonLabel: "الدخول إلى نظام التصميم",
          learnMoreLabel: "استعرض نظام التصميم",
          orLabel: "ليس لديك كلمة مرور؟",
          whatsappButton: "اطلب الصلاحية عبر واتساب",
          learnMoreHref: "/design-system",
          contactTitle: "هل تحتاج إلى صلاحية الوصول؟",
          contactBody:
            "يتم منح صلاحيات الوصول بشكل فردي لتقييم قدرات النظام والمراجعات المهنية.",
          contactBody2:
            "إذا كنت ترغب في الوصول أو استعراض النظام، يمكنك التواصل عبر واتساب باستخدام رمز QR أدناه.",
          qrHint: "امسح الرمز للتواصل مباشرة",
          qrAlt: "رمز QR للتواصل عبر واتساب",
          whatsappLabel: "التواصل عبر واتساب",
          whatsappAria: "التواصل عبر واتساب",
        },
        highlightsTitle: "خبرة تجربة المستخدم الحكومية",
        highlightsIntro:
          "ملخصات مختصرة بصياغة تراعي السرية، تركز على التحدي والدور والنتيجة.",
        highlights: [
          {
            heading: "توحيد تجربة منصة خدمات متعددة المجالات",
            challenge:
              "تعدد مسارات الخدمة واختلاف منطق الواجهات بين فرق وقطاعات مختلفة.",
            role: "قيادة استراتيجية UX وتوجيه قرارات التصميم وتنسيق التنفيذ مع فرق التطوير.",
            outcome: "تحسين وضوح الرحلات ورفع اتساق التجربة بين الخدمات.",
          },
          {
            heading: "تفعيل DesignOps لمنظومة تصميم مؤسسية",
            challenge:
              "تفاوت جودة القرارات التصميمية وصعوبة الحفاظ على الاتساق عبر الإصدارات.",
            role: "قيادة DesignOps وأنظمة التصميم مع مواءمة مسار التصميم إلى التطوير.",
            outcome: "تقليل التباين بين الإصدارات وتحسين سرعة وجودة التسليم.",
          },
        ],
        highlightsCta: "عرض الخبرة",
        highlightsSectionCta: "استكشف خبرة UX الحكومية →",
        authorityTitle: "مجالات الخبرة الأساسية",
        authorityItems: [
          {
            icon: "building",
            title: "تجربة المستخدم الحكومية",
            body: "تصميم خدمات رقمية حكومية واضحة وموثوقة.",
            href: "/government-ux",
          },
          {
            icon: "layers",
            title: "Design System",
            body: "أنظمة مكونات قابلة للتوسع والاتساق.",
            href: "/design-system",
          },
          {
            icon: "workflow",
            title: "DesignOps",
            body: "تشغيل تصميم يربط UX بالتطوير بكفاءة.",
            href: "/designops",
          },
          {
            icon: "leadership",
            title: "قيادة UX",
            body: "قيادة فرق متعددة التخصصات نحو قرارات فعّالة.",
            href: "/ux-lead",
          },
        ],
        authorityCta: "استكشاف المجال",
        impactTitle: "أثر قابل للقياس",
        impactItems: [
          {
            icon: "layers",
            title: "خفض الازدواجية",
            detail: "تقليل تكرار الواجهات عبر مكونات موحدة.",
          },
          {
            icon: "workflow",
            title: "تسريع دورات التسليم",
            detail: "تسريع التحويل من التصميم إلى التنفيذ.",
          },
          {
            icon: "governance",
            title: "رفع الاتساق",
            detail: "رفع اتساق التجربة بين المنتجات والشاشات.",
          },
          {
            icon: "team",
            title: "تعزيز التعاون بين التصميم والتطوير",
            detail: "تقليل فجوات الفهم عبر مراجعات مشتركة وUX QA.",
          },
        ],
      }
    : {
        credibilityTitle: "Credibility Snapshot",
        credibilityIntro:
          "Concise proof points that validate strategic UX leadership.",
        credibilityItems: [
          {
            icon: "certificate",
            title: "Google UX Certification",
            detail: "Industry-recognized UX credential.",
          },
          {
            icon: "code",
            title: "Design-to-Code Experience",
            detail: "Bridging design and implementation.",
          },
          {
            icon: "implementation",
            title: "Front-End Implementation",
            detail: "Hands-on HTML, CSS, SCSS, and JavaScript.",
          },
          {
            icon: "team",
            title: "Cross-Functional Leadership",
            detail: "Product, engineering, and UX alignment.",
          },
          {
            icon: "governance",
            title: "UX Governance",
            detail: "Scalable quality standards.",
          },
        ],
        designSystemEyebrow: "Design System · Private preview",
        designSystemTitle: "A complete design system, from tokens to production code",
        designSystemIntro:
          "The strongest evidence of my work: an enterprise design system I created and own, used across a government platform of 14 systems and its mobile and web apps. I built it in Figma and in code, and I maintain both.",
        designSystemFacts: [
          ["Tokens", "236 SCSS variables matching the Figma tokens for color, typography, spacing, radius, and shadows."],
          ["Components", "30+ component stylesheets, each documented with states, Figma properties against the code API, and accessibility notes."],
          ["Documentation", "A 38-page bilingual site with a searchable library of 4,371 icons."],
          ["RTL", "Arabic-first components where icons and separators mirror automatically in RTL."],
          ["Design-to-code", "Figma and SCSS updated together, with versioned releases and a bilingual changelog."],
        ],
        designSystemLockNote:
          "The full documentation is protected. Sign in with your access password, or request access on WhatsApp.",
        designSystemPreviewTitle: "Real screens from the documentation",
        designSystemPreviewImages: [
          ["icons", "Iconography page from the design system documentation"],
          ["switches", "Switch component page from the design system documentation"],
          ["radius", "Radius tokens page from the design system documentation"],
        ],
        designSystemDescription:
          "A portfolio highlight that explains why design systems are one of my strongest areas — built to support consistent experiences, faster delivery, and collaborative product teams.",
        designSystemCta: "Access the Design System Showcase →",
        designSystemCards: [
          {
            icon: "certificate",
            title: "Foundations",
            detail:
              "Tokens, typography, spacing, colors, accessibility rules, and visual consistency.",
          },
          {
            icon: "layers",
            title: "Components",
            detail:
              "Reusable UI components, variants, states, responsive behavior, and implementation-ready patterns.",
          },
          {
            icon: "governance",
            title: "Governance & Documentation",
            detail:
              "Usage guidelines, design handoff, QA standards, documentation, and collaboration between design and development teams.",
          },
        ],
        designSystemFeatures: [
          "Design Tokens",
          "Component Library",
          "Documentation",

          "Design-to-Code Workflow",
          "Governance",
        ],
        designSystemAccess: {
          label: "Request Access",
          title: "Enter the design system",
          body: "Have a password? Enter it to open the full documentation.",
          buttonLabel: "Access Design System",
          learnMoreLabel: "Explore the Design System",
          orLabel: "No password yet?",
          whatsappButton: "Request access on WhatsApp",
          learnMoreHref: "/design-system",
          contactTitle: "Need Access?",
          contactBody:
            "Access credentials are shared individually for evaluation, hiring discussions, and professional walkthroughs.",
          contactBody2:
            "If you would like access or a guided overview of the system, you can contact me directly by scanning the QR code below.",
          qrHint: "Scan to contact directly",
          qrAlt: "QR code to contact via WhatsApp",
          whatsappLabel: "Contact via WhatsApp",
          whatsappAria: "Contact via WhatsApp",
        },
        highlightsTitle: "Government UX Experience Highlights",
        highlightsIntro:
          "Confidentiality-safe summaries focused on challenge, role, and outcome.",
        highlights: [
          {
            heading: "Multi-domain Government Service Experience Unification",
            challenge:
              "Service journeys were fragmented, with uneven interaction models across multiple teams and modules.",
            role: "UX Lead responsible for experience direction, decision governance, and delivery alignment.",
            outcome:
              "Improved clarity in critical journeys and strengthened cross-service consistency.",
          },
          {
            heading: "Enterprise DesignOps Operating Model Enablement",
            challenge:
              "Design decisions were decentralized, creating quality variance between release cycles.",
            role: "DesignOps Practitioner and Design System Lead bridging UX strategy with implementation discipline.",
            outcome:
              "Reduced release variance and improved delivery speed with stronger quality controls.",
          },
        ],
        highlightsCta: "View Experience",
        highlightsSectionCta: "Explore Government UX →",
        authorityTitle: "Core Practice Areas",
        authorityItems: [
          {
            icon: "building",
            title: "Government UX",
            body: "UX leadership for public-sector digital services.",
            href: "/government-ux",
          },
          {
            icon: "layers",
            title: "Design Systems",
            body: "Scalable component systems for consistency and reuse.",
            href: "/design-system",
          },
          {
            icon: "workflow",
            title: "DesignOps",
            body: "Operational workflows connecting UX strategy to delivery.",
            href: "/designops",
          },
          {
            icon: "leadership",
            title: "UX Leadership",
            body: "Cross-functional decision-making for UX outcomes.",
            href: "/ux-lead",
          },
        ],
        authorityCta: "Explore area",
        impactTitle: "Quantified Impact",
        impactItems: [
          {
            icon: "layers",
            title: "Reduced Duplication",
            detail: "Reduced repetitive UI patterns through shared standards.",
          },
          {
            icon: "workflow",
            title: "Faster Delivery Cycles",
            detail: "Improved speed from design to implementation.",
          },
          {
            icon: "governance",
            title: "Improved Consistency",
            detail:
              "Raised cross-product consistency with clearer design rules.",
          },
          {
            icon: "team",
            title: "Stronger Design–Development Collaboration",
            detail: "Reduced ambiguity through joint reviews and UX QA.",
          },
        ],
      };

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
    <div className="home-main">
      <div className="container">
        <div className="index__details">
          <div className="row align-items-stretch g-0">
            {/* ── Left column: photo card ── */}
            <div className="col-lg-4 col-12">
              <div className="profile-left">
                <div className="home-image">
                  <div className="overlay" aria-hidden="true" />
                  <picture>
                    <source srcSet={photoAVIF.src} type="image/avif" />
                    <source srcSet={photoWebP.src} type="image/webp" />
                    <Image
                      alt={imageAlt}
                      src={photo}
                      loading="eager"
                      priority
                      quality={85}
                      sizes="(min-width: 1400px) 340px, (min-width: 1200px) 300px, (min-width: 992px) 280px, 100vw"
                      style={{
                        width: "100%",
                        height: "100%",
                        display: "block",
                        objectFit: "cover",
                      }}
                    />
                  </picture>
                  <div className="downloadresume">
                    <ResumeModal variant="home" />
                  </div>
                </div>
              </div>
            </div>

            {/* ── Right column: content ── */}
            <div className="col-lg-8 col-12 hero-content-column">
              <div className="hero-content">
                {/* 1 · Name + title */}
                <div className="title">
                  <h1 className="myname fw-bold">{hero.name}</h1>
                  <span className="hero-role">{hero.role}</span>
                </div>

                {/* 2 · Expertise tags */}
                {Array.isArray(focusAreas) && focusAreas.length > 0 && (
                  <ul
                    className="home-expertise"
                    aria-label="Areas of expertise">
                    {focusAreas.map((tag) => (
                      <li key={tag} className="home-expertise__tag">
                        {tag}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Quick navigation — surfaces key portfolio pages early */}
                <div
                  className="homepage-hero-nav"
                  aria-label={isRTL ? "روابط سريعة" : "Quick navigation"}>
                  <Link
                    href="/design-system"
                    className="homepage-hero-nav__cta homepage-hero-nav__cta--primary">
                    {isRTL ? "استعرض نظام التصميم" : "Explore the Design System"} →
                  </Link>
                  <Link
                    href="/government-ux"
                    className="homepage-hero-nav__cta homepage-hero-nav__cta--secondary">
                    {isRTL ? "استكشف خبراتي الحكومية" : "Explore Government UX"} →
                  </Link>
                </div>

                <p className="homepage-hero-nav__note">
                  <LockIcon />
                  {isRTL
                    ? "معاينة محمية: ادخل بكلمة المرور أو اطلب صلاحية الوصول."
                    : "Protected preview: sign in with a password or request access."}
                </p>

                {/* 3 · Professional summary */}
                <div className="hero-summary">
                  {paragraphs.map((paragraph, index) => (
                    <p key={`para-${index}`}>{paragraph.text}</p>
                  ))}
                </div>

                {/* 4 · Trust signal — Google UX credential */}
                <a
                  href="https://www.coursera.org/account/accomplishments/professional-cert/7HGU76DTMDGG"
                  className="googlecertificated"
                  target="_blank"
                  rel="noopener noreferrer"
                  title={hero.certificationTitle}
                  aria-label={`${hero.certificationTitle} — ${hero.certVerified}`}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="18"
                    viewBox="0 0 24 24"
                    width="18"
                    aria-hidden="true"
                    focusable="false"
                    style={{ flexShrink: 0 }}>
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                    <path d="M1 1h22v22H1z" fill="none" />
                  </svg>
                  <span className="googlecertificated__title">
                    {hero.certificationBadge}
                  </span>
                  <span
                    className="googlecertificated__verified"
                    aria-label={hero.certVerified}>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      aria-hidden="true"
                      focusable="false">
                      <circle cx="7" cy="7" r="7" fill="#22c55e" />
                      <path
                        d="M4 7l2 2.5L10 4.5"
                        stroke="#fff"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {hero.certVerified}
                  </span>
                </a>

                {/* 5 · Stats + social */}
                <div className="hero-footer">
                  {/* Stat items with icons — drawn from translations */}
                  {Array.isArray(stats) && stats.length > 0 && (
                    <div
                      className="hero-footer__stats"
                      aria-label="Profile highlights">
                      {stats.map((stat, i) => (
                        <article
                          key={`stat-${i}`}
                          className="hero-footer__item">
                          <HeroStatIcon iconName={stat.icon} />
                          <div className="hero-footer__item-text">
                            <span className="hero-footer__value">
                              {stat.value}
                            </span>
                            <span className="hero-footer__label">
                              {stat.label}
                            </span>
                          </div>
                        </article>
                      ))}
                    </div>
                  )}

                  {/* Social profile links */}
                  <nav className="hero-social" aria-label="Social profiles">
                    <a
                      href="https://www.linkedin.com/in/omarmokhtar22/"
                      aria-label={social.linkedin}
                      title={social.linkedin}>
                      <FaLinkedin aria-hidden="true" focusable="false" />
                    </a>
                    <a
                      href="https://www.behance.net/Omar_Mokhtar"
                      aria-label={social.behance}
                      title={social.behance}>
                      <FaBehance aria-hidden="true" focusable="false" />
                    </a>
                    <a
                      href="https://github.com/omarmok"
                      aria-label={social.github}
                      title={social.github}>
                      <FaGithub aria-hidden="true" focusable="false" />
                    </a>
                    <a
                      href="mailto:omarmokhtarayed@hotmail.com"
                      aria-label={social.email}
                      title={social.email}>
                      <FaEnvelope aria-hidden="true" focusable="false" />
                    </a>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section
          className="homepage-designsystem homepage-designsystem--featured"
          id="design-system-preview"
          aria-labelledby="homepage-designsystem-title"
          dir={isRTL ? "rtl" : "ltr"}>
          <div className="homepage-designsystem__columns">
            <div className="homepage-designsystem__content">
              <p className="homepage-designsystem__eyebrow">
                {strategyCopy.designSystemEyebrow}
              </p>
              <h2
                id="homepage-designsystem-title"
                className="homepage-section-title">
                {strategyCopy.designSystemTitle}
              </h2>
              <p className="homepage-designsystem__subtitle">
                {strategyCopy.designSystemIntro}
              </p>

              <dl className="homepage-designsystem__facts">
                {strategyCopy.designSystemFacts.map(([term, detail]) => (
                  <div key={term}>
                    <dt>{term}</dt>
                    <dd>{detail}</dd>
                  </div>
                ))}
              </dl>

              <div className="homepage-designsystem__ctas">
                <Link
                  href={strategyCopy.designSystemAccess.learnMoreHref}
                  className="homepage-designsystem__cta">
                  {strategyCopy.designSystemAccess.learnMoreLabel} →
                </Link>
              </div>
              <p className="homepage-designsystem__lock">
                <LockIcon />
                {strategyCopy.designSystemLockNote}
              </p>
            </div>

            <div className="homepage-designsystem__access-panel">
              <div className="homepage-designsystem__access-panel-inner">
                <h3 className="homepage-designsystem__access-title">
                  {strategyCopy.designSystemAccess.title}
                </h3>
                <p className="homepage-designsystem__access-body">
                  {strategyCopy.designSystemAccess.body}
                </p>

                <form onSubmit={handleSubmit} noValidate>
                  <label
                    htmlFor="designsystem-password"
                    className="homepage-designsystem__access-label-input">
                    {dictionary.casebook.access.passwordLabel}
                  </label>
                  <input
                    id="designsystem-password"
                    name="designsystem-password"
                    type="password"
                    autoComplete="current-password"
                    className="form-control homepage-designsystem__access-input"
                    value={password}
                    onChange={(event) => {
                      setPassword(event.target.value);
                      if (loginError) {
                        setLoginError(null);
                      }
                    }}
                    placeholder={dictionary.casebook.access.passwordPlaceholder}
                    aria-describedby={
                      loginError ? "designsystem-password-error" : undefined
                    }
                    aria-invalid={loginError === "passwordError"}
                  />
                  <button
                    type="submit"
                    className="btn btn-warning homepage-designsystem__access-button"
                    disabled={isLoading}>
                    {isLoading
                      ? "..."
                      : strategyCopy.designSystemAccess.buttonLabel}
                  </button>
                  {loginError ? (
                    <p
                      id="designsystem-password-error"
                      className="homepage-designsystem__access-error"
                      role="alert"
                      aria-live="assertive">
                      {dictionary.casebook.access[loginError]}
                    </p>
                  ) : null}
                </form>

                <div className="homepage-designsystem__request">
                  <p>{strategyCopy.designSystemAccess.orLabel}</p>
                  <a
                    href={getWhatsAppAccessUrl(language)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whatsapp-cta">
                    <FaWhatsapp aria-hidden="true" focusable="false" />
                    {strategyCopy.designSystemAccess.whatsappButton}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <figure className="homepage-designsystem__preview">
            <figcaption>{strategyCopy.designSystemPreviewTitle}</figcaption>
            <div className="homepage-designsystem__preview-grid">
              {strategyCopy.designSystemPreviewImages.map(([key, alt]) => (
                <Link
                  key={key}
                  href={strategyCopy.designSystemAccess.learnMoreHref}
                  className="homepage-designsystem__shot"
                  aria-label={`${alt} — ${strategyCopy.designSystemAccess.learnMoreLabel}`}>
                  <Image
                    src={DS_PREVIEW_IMAGES[key]}
                    alt={alt}
                    sizes="(min-width: 992px) 33vw, 90vw"
                    style={{ width: "100%", height: "auto", display: "block" }}
                  />
                </Link>
              ))}
            </div>
          </figure>
        </section>

        <section
          className="homepage-credibility"
          aria-labelledby="homepage-credibility-title"
          dir={isRTL ? "rtl" : "ltr"}>
          <h2
            id="homepage-credibility-title"
            className="homepage-section-title">
            {strategyCopy.credibilityTitle}
          </h2>
          <p className="homepage-credibility__intro">
            {strategyCopy.credibilityIntro}
          </p>
          <div className="homepage-credibility__grid">
            {strategyCopy.credibilityItems.map((item) => (
              <article key={item.title} className="homepage-proof-card">
                <SectionIcon iconName={item.icon} />
                <h3 className="homepage-proof-card__title">{item.title}</h3>
                <p className="homepage-proof-card__detail">{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          className="homepage-highlights"
          aria-labelledby="homepage-highlights-title"
          dir={isRTL ? "rtl" : "ltr"}>
          <h2 id="homepage-highlights-title" className="homepage-section-title">
            {strategyCopy.highlightsTitle}
          </h2>
          <p className="homepage-highlights__intro">
            {strategyCopy.highlightsIntro}
          </p>
          <div className="homepage-highlights__grid">
            {strategyCopy.highlights.map((item) => (
              <article key={item.heading} className="homepage-highlight-card">
                <h3 className="homepage-highlight-card__title">
                  {item.heading}
                </h3>
                <dl className="homepage-highlight-card__details">
                  <dt>{isRTL ? "التحدي" : "Challenge"}</dt>
                  <dd>{item.challenge}</dd>
                  <dt>{isRTL ? "الدور" : "Role"}</dt>
                  <dd>{item.role}</dd>
                  <dt>{isRTL ? "النتيجة" : "Outcome"}</dt>
                  <dd>{item.outcome}</dd>
                </dl>
              </article>
            ))}
          </div>
          <div className="homepage-highlights__footer">
            <Link href="/government-ux" className="homepage-highlights__cta">
              {strategyCopy.highlightsSectionCta}
            </Link>
          </div>
        </section>

        <section
          className="homepage-authority"
          aria-labelledby="homepage-authority-title"
          dir={isRTL ? "rtl" : "ltr"}>
          <h2 id="homepage-authority-title" className="homepage-section-title">
            {strategyCopy.authorityTitle}
          </h2>
          <div className="homepage-authority__grid">
            {strategyCopy.authorityItems.map((item) => (
              <article key={item.title} className="homepage-authority-card">
                <SectionIcon iconName={item.icon} />
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <Link
                  href={item.href}
                  className="homepage-authority-card__link">
                  {strategyCopy.authorityCta}
                </Link>
              </article>
            ))}
          </div>

          <div className="homepage-impact">
            <h3 className="homepage-impact__title">
              {strategyCopy.impactTitle}
            </h3>
            <div className="homepage-impact__grid">
              {strategyCopy.impactItems.map((impact) => (
                <article key={impact.title} className="homepage-impact-card">
                  <SectionIcon iconName={impact.icon} />
                  <h4>{impact.title}</h4>
                  <p>{impact.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
