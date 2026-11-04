import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Loader from "../components/Loader";
import PageHeader from "../components/PageHeader";
import DesignSystemAccess from "../components/DesignSystemAccess";
import DesignSystemPreviewGallery from "../components/DesignSystemPreviewGallery";
import { useTranslation } from "../src/i18n/useTranslation";
import { getWhatsAppAccessUrl } from "../src/data/contact";
import designSystemPreviewOne from "../public/images/ds-1.png";
import designSystemPreviewTwo from "../public/images/ds-2.png";
import designSystemPreviewThree from "../public/images/ds-3.png";

const purple = "var(--theme-brand-primary)";
const ink = "var(--theme-text-primary)";
const inkMid = "var(--theme-text-secondary)";
const border = "var(--theme-border)";
const bg = "var(--theme-bg-subtle)";
const surface = "var(--theme-bg-surface)";

const SectionWrap = ({ children, background = surface }) => (
  <section style={{ background, padding: "48px 0" }}>
    <div className="site-container">{children}</div>
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
  const router = useRouter();
  const { dictionary, language } = useTranslation();
  const isRTL = language === "ar";
  const copy = isRTL
    ? {
        heroLabel: "نظام التصميم · معاينة خاصة",
        heroTitle: "نظام تصميم متكامل، من الـ Tokens إلى كود الإنتاج",
        heroDescription:
          "نظام تصميم مؤسسي أنشأته وأملكه، تعمل عليه منصة حكومية تضم 14 نظامًا وتطبيقاتها على الجوال والويب: مكونات وTokens في Figma، ومكتبة SCSS مبنية على Bootstrap، وتوثيق ثنائي اللغة. التوثيق الكامل محمي، ويمكنك الدخول بكلمة المرور أو طلب الصلاحية.",
        heroEnter: "الدخول بكلمة المرور",
        heroRequest: "اطلب الصلاحية عبر واتساب",
        valueLabel: "قيمة النظام",
        valueTitle: "ما الذي بنيته، بالأرقام المؤكدة",
        valueBody:
          "صممت النظام في Figma وكتبت كوده بنفسي، فيبقى التصميم والتنفيذ مصدرًا واحدًا يعمل منه المصممون والمطورون وفرق الشركات المنفذة.",
        valueItems: [
          ["01", "الـ Tokens", "236 متغيرًا في SCSS تطابق Tokens في Figma للألوان والخطوط والمسافات والزوايا والظلال."],
          ["02", "المكونات", "أكثر من 30 ملف أنماط للمكونات، وكل مكوّن موثّق بقالب واحد: التركيب والحالات وخصائص Figma مقابل واجهة الكود."],
          ["03", "التوثيق", "موقع ثنائي اللغة من 38 صفحة يغطي الأسس والمكونات والأنماط والحوكمة، مع مكتبة قابلة للبحث من 4,371 أيقونة في 61 فئة."],
          ["04", "RTL والوصولية", "مكونات عربية أولًا تنعكس فيها الأيقونات والفواصل تلقائيًا، مع ملاحظات وصولية في مواصفات كل مكوّن."],
          ["05", "من التصميم إلى الكود", "أي تغيير مؤثر يُحدَّث في Figma وفي SCSS معًا، ويُعاد بناء المكونات في الكود لتطابق المواصفات."],
          ["06", "الحوكمة", "إصدارات مرقّمة، وسجل تغييرات ثنائي اللغة، ومراجعة مساهمات تتطلب موافقة مصمم ومطور، ومسار تسليم للشركات المنفذة."],
        ],
        heroBody:
          "يقدم هذا العرض الخاص أمثلة مختارة توضح كيف تم توظيف أنظمة التصميم، وممارسات DesignOps، والتوثيق، وحوكمة التصميم، والتنفيذ البرمجي لبناء تجارب رقمية متسقة وقابلة للتوسع.",
        heroBody2:
          "تم تطوير هذا النظام من خلال خبرات عملية في منصات حكومية، ومنتجات مؤسسية، وجهات تعليمية، ومبادرات رقمية واسعة النطاق.",
        experienceLabel: "Experience Highlight",
        experienceTitle: "أكثر من 19 عامًا من الخبرة",
        experienceBody:
          "يستند هذا العرض إلى خبرتي المهنية في تصميم تجربة المستخدم والواجهات وتنفيذ الواجهات الأمامية، ويبرز تركيزي الحالي على أنظمة التصميم وحوكمة التصميم وعمليات التصميم.",
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
          "معاينة صغيرة من توثيق نظام التصميم، تشمل التوكنز، والمكونات، وإرشادات التنفيذ، وأمثلة تسليم العمل للمطورين.",
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
        ],
        previewHighlightsTitle: "أبرز ما يقدمه نظام التصميم",
        previewHighlights: [
          "توثيق Design Tokens",
          "مكتبة مكونات",
          "إرشادات الاستخدام",
          "أمثلة Design-to-Code",
          "دعم تسليم العمل للمطورين",
          "جاهز لـ RTL والتصميم المتجاوب",
        ],
      }
    : {
        heroLabel: "Design System · Private preview",
        heroTitle: "A complete design system, from tokens to production code",
        heroDescription:
          "An enterprise design system I created and own, used across a government platform of 14 systems and its mobile and web apps: Figma components and tokens, a Bootstrap-based SCSS library, and bilingual documentation. The full documentation is protected; sign in with a password or request access.",
        heroEnter: "Sign in with a password",
        heroRequest: "Request access on WhatsApp",
        valueLabel: "Why it matters",
        valueTitle: "What I built, in verified numbers",
        valueBody:
          "I designed the system in Figma and wrote its code myself, so design and implementation stay one source that designers, developers, and vendor teams all build from.",
        valueItems: [
          ["01", "Tokens", "236 SCSS variables matching the Figma tokens for color, typography, spacing, radius, and shadows."],
          ["02", "Components", "30+ component stylesheets, each documented on one template: anatomy, states, and Figma properties against the code API."],
          ["03", "Documentation", "A 38-page bilingual site covering foundations, components, patterns, and governance, with a searchable library of 4,371 icons in 61 categories."],
          ["04", "RTL & accessibility", "Arabic-first components where icons and separators mirror automatically, with accessibility notes in every component spec."],
          ["05", "Design-to-code", "Any impactful change is updated in Figma and SCSS together, and components are rebuilt in code to match the spec."],
          ["06", "Governance", "Versioned releases, a bilingual changelog, contribution review with designer and engineer approval, and a handover workflow for vendor teams."],
        ],
        heroBody:
          "A private showcase presenting selected examples of how Design Systems, DesignOps practices, documentation, design governance, and front-end implementation were combined to create scalable and consistent digital experiences.",
        heroBody2:
          "Built through real-world work across government platforms, enterprise products, universities, and large-scale digital initiatives.",
        experienceLabel: "Experience Highlight",
        experienceTitle: "19+ Years of Experience",
        experienceBody:
          "The showcase draws on my professional background in UX/UI design and front-end implementation, highlighting my current focus on design systems, design governance, and DesignOps.",
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
          "A small preview of the design system documentation, including tokens, components, implementation guidance, and developer handoff examples.",
        previewOpenLabel: "Open design system preview",
        previewCloseLabel: "Close preview",
        previewImages: [
          {
            src: designSystemPreviewOne,
            alt: "Preview of the design system documentation, screen one",
          },
          {
            src: designSystemPreviewTwo,
            alt: "Preview of the design system documentation, screen two",
          },
          {
            src: designSystemPreviewThree,
            alt: "Preview of the design system documentation, screen three",
          },
        ],
        previewHighlightsTitle: "Design System Highlights",
        previewHighlights: [
          "Design Tokens Documentation",
          "Components Library",
          "Usage Guidelines",
          "Design-to-Code Examples",
          "Developer Handoff Support",
          "RTL & Responsive Ready",
        ],
      };
  const supportLinks = [
    {
      href: "/design-system-case-study",
      label: isRTL ? "دراسة حالة نظام التصميم" : "Design system case study",
    },
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

  return (
    <div className="page-container" dir={isRTL ? "rtl" : "ltr"}>
      <Loader />
      <PageHeader
        eyebrow={copy.heroLabel}
        title={copy.heroTitle}
        description={copy.heroDescription}
        actions={[
          { href: "#ds-access", label: copy.heroEnter, variant: "solid" },
          {
            href: getWhatsAppAccessUrl(language),
            label: copy.heroRequest,
            variant: "ghost",
            target: "_blank",
          },
        ]}
      />

      <SectionWrap>
        <SectionLabel>{copy.valueLabel}</SectionLabel>
        <SectionTitle>{copy.valueTitle}</SectionTitle>
        <SectionRule />
        <SectionBody style={{ maxWidth: "74ch", marginBottom: 24 }}>
          {copy.valueBody}
        </SectionBody>
        <div className="design-system-model">
          {copy.valueItems.map(([number, title, body]) => (
            <article key={title}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
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

      <DesignSystemAccess />

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

    </div>
  );
};

export default DesignSystemPage;
