import Link from "next/link";
import PageHeader from "../components/PageHeader";
import { useTranslation } from "../src/i18n/useTranslation";

const accent = "var(--theme-brand-primary)";
const ink = "var(--theme-text-primary)";
const inkMid = "var(--theme-text-secondary)";
const bg = "var(--theme-bg-subtle)";
const purpleLight = "var(--theme-brand-soft)";
const border = "var(--theme-border)";
const surface = "var(--theme-bg-surface)";
const card = "var(--theme-bg-card)";

const SectionLabel = ({ children }) => (
  <p
    style={{
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      color: accent,
      margin: "0 0 10px",
      display: "flex",
      alignItems: "center",
      gap: 8,
    }}>
    <span
      style={{
        width: 20,
        height: 2,
        background: accent,
        display: "inline-block",
        borderRadius: 2,
        flexShrink: 0,
      }}
    />
    {children}
  </p>
);

const Rule = () => (
  <div
    style={{
      width: 40,
      height: 3,
      background: accent,
      borderRadius: 3,
      margin: "0 0 28px",
    }}
  />
);

export default function UXLead() {
  const { language } = useTranslation();
  const isRTL = language === "ar";

  return (
    <div dir={isRTL ? "rtl" : "ltr"}>
      <PageHeader
        eyebrow={isRTL ? "قيادة تجربة المستخدم" : "UX Leadership"}
        title={
          isRTL
            ? "قائد تصميم تجربة المستخدم في المملكة العربية السعودية"
            : "UX Design Lead in Saudi Arabia"
        }
        description={
          isRTL
            ? "أكثر من 19 عامًا من قيادة استراتيجية تجربة المستخدم وحوكمة التصميم وتسليم المنتج للمنصات الحكومية والمؤسسية في المملكة العربية السعودية."
            : "Over 19 years of leading UX strategy, design governance, and product delivery for government and enterprise platforms across Saudi Arabia."
        }
        actions={[
          {
            href: "/projects",
            label: isRTL
              ? "استعراض أعمال قيادة UX"
              : "Explore UX Leadership Portfolio",
            variant: "solid",
          },
          {
            href: "/contact",
            label: isRTL ? "تواصل مع عمر مختار" : "تواصل معي",
            variant: "ghost",
          },
        ]}
      />

      {/* What UX Leadership Means */}
      <section style={{ background: surface, padding: "64px 0" }}>
        <div style={{ width: "min(960px, 100% - 48px)", margin: "0 auto" }}>
          <SectionLabel>{isRTL ? "نهج العمل" : "Approach"}</SectionLabel>
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3vw, 2rem)",
              fontWeight: 800,
              color: ink,
              margin: "0 0 16px",
            }}>
            {isRTL
              ? "ما تعنيه قيادة UX في الممارسة الفعلية"
              : "What UX Leadership Means in Practice"}
          </h2>
          <Rule />
          <p
            style={{
              fontSize: 16,
              color: inkMid,
              lineHeight: 1.8,
              margin: "0 0 16px",
              maxWidth: "68ch",
            }}>
            {isRTL
              ? "قيادة UX ليست مجرد إدارة التصميم — بل هي وضع الأُطر التي تجعل قرارات التصميم قابلة للتوسع ومستدامة ومتوافقة مع احتياجات العمل. تشمل استراتيجية التجربة، وحوكمة التصميم، ومعايير الجودة، وإدارة الفرق، والإشراف على دورة التسليم الكاملة."
              : "UX leadership is not just managing design — it's building the frameworks that make design decisions scalable, sustainable, and aligned with business needs. It spans experience strategy, design governance, quality standards, team enablement, and oversight of the full delivery cycle."}
          </p>
          <p
            style={{
              fontSize: 16,
              color: inkMid,
              lineHeight: 1.8,
              margin: "0 0 16px",
              maxWidth: "68ch",
            }}>
            {isRTL
              ? "في الدور الحالي ضمن قطاع حكومي، أقود تجربة المستخدم وعمليات التصميم عبر منصة مؤسسية واسعة النطاق — وضع معايير عمليات UX، وحوكمة التصميم، والاتساق على مستوى النظام. أتعاون عن كثب مع مالكي المنتجات، ومحللي الأعمال، والمطورين، وفرق ضمان الجودة لتحويل المتطلبات المعقدة إلى مخرجات تصميمية واضحة وقابلة للتنفيذ."
              : "In my current government role, I lead UX and DesignOps across a large-scale enterprise platform — setting standards for UX processes, design governance, and system-wide consistency. I collaborate closely with product owners, business analysts, developers, and QA to translate complex requirements into clear, actionable design specifications."}
          </p>
        </div>
      </section>

      {/* Core Disciplines */}
      <section style={{ background: bg, padding: "64px 0" }}>
        <div style={{ width: "min(960px, 100% - 48px)", margin: "0 auto" }}>
          <SectionLabel>
            {isRTL ? "التخصصات الأساسية" : "Core Disciplines"}
          </SectionLabel>
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3vw, 2rem)",
              fontWeight: 800,
              color: ink,
              margin: "0 0 16px",
            }}>
            {isRTL ? "مجالات الخبرة" : "Areas of Expertise"}
          </h2>
          <Rule />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 20,
              marginTop: 8,
            }}>
            {[
              {
                title: isRTL ? "استراتيجية تجربة المستخدم" : "UX Strategy",
                body: isRTL
                  ? "تعريف الاتجاه التجريبي بناءً على أبحاث المستخدم وأهداف العمل وقيود النظام — من الاكتشاف حتى التسليم."
                  : "Defining the experience direction based on user research, business goals, and system constraints — from discovery through delivery.",
              },
              {
                title: isRTL ? "حوكمة التصميم" : "Design Governance",
                body: isRTL
                  ? "بناء العمليات والمعايير وآليات المراجعة التي تحافظ على جودة التصميم واتساقه عبر الفرق والمنتجات."
                  : "Building the processes, standards, and review mechanisms that maintain design quality and consistency across teams and products.",
              },
              {
                title: isRTL
                  ? "قيادة أنظمة التصميم المؤسسية"
                  : "Enterprise Design System Leadership",
                body: isRTL
                  ? "إنشاء أنظمة تصميم قابلة للتوسع وقيادتها — بما في ذلك الأسس والمكونات والتوكنز والتوثيق والحوكمة."
                  : "Creating and leading scalable enterprise design systems — including foundations, components, tokens, documentation, and governance.",
              },
              {
                title: isRTL
                  ? "إدارة دورة التسليم"
                  : "Delivery Lifecycle Management",
                body: isRTL
                  ? "الإشراف على مراجعات التصميم والتسليم للتطوير وضمان جودة UX واختبار القبول لضمان دقة التنفيذ."
                  : "Overseeing design reviews, development handoff, UX quality assurance, and acceptance testing to ensure implementation accuracy.",
              },
              {
                title: isRTL
                  ? "البحث وملاءمة المنتج"
                  : "Research & Product Fit",
                body: isRTL
                  ? "إجراء أبحاث المستخدم وبناء الشخصيات وخرائط الرحلة لضمان توافق المنتج مع الاحتياجات الفعلية للمستخدم."
                  : "Conducting user research, building personas, and journey mapping to ensure product–user fit with real-world needs.",
              },
              {
                title: isRTL ? "التنفيذ الأمامي" : "Front-End Collaboration",
                body: isRTL
                  ? "التعاون مع فرق التطوير باستخدام HTML وCSS وJavaScript لتجسير الهوة بين نية التصميم والتسليم الإنتاجي."
                  : "Collaborating with engineering teams in HTML, CSS, and JavaScript to bridge the gap between design intent and production delivery.",
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  background: card,
                  borderRadius: 12,
                  padding: 24,
                  border: `1px solid ${border}`,
                }}>
                <h3
                  style={{
                    fontSize: 16,
                    fontWeight: 700,
                    color: ink,
                    margin: "0 0 10px",
                  }}>
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    color: inkMid,
                    lineHeight: 1.7,
                    margin: 0,
                  }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Track Record */}
      <section style={{ background: surface, padding: "64px 0" }}>
        <div style={{ width: "min(960px, 100% - 48px)", margin: "0 auto" }}>
          <SectionLabel>
            {isRTL ? "المسار المهني" : "Track Record"}
          </SectionLabel>
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3vw, 2rem)",
              fontWeight: 800,
              color: ink,
              margin: "0 0 16px",
            }}>
            {isRTL
              ? "قيادة UX عبر القطاعات الرئيسية"
              : "UX Leadership Across Key Sectors"}
          </h2>
          <Rule />
          <p
            style={{
              fontSize: 16,
              color: inkMid,
              lineHeight: 1.8,
              margin: "0 0 24px",
              maxWidth: "68ch",
            }}>
            {isRTL
              ? "عبر أكثر من 19 عامًا، قدت جهود UX في قطاعات الحكومة والإسكان والتعليم والمؤسسات. كل سياق جاء بمتطلبات مختلفة — من امتثال الوصول للمنصات الحكومية إلى تحديات توسع نظم التصميم في بيئات المؤسسات الكبيرة."
              : "Over 19+ years, I have led UX efforts across government, housing, education, and enterprise sectors. Each context brought distinct requirements — from compliance on government platforms to design system scaling challenges in large enterprise environments."}
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 12,
              marginBottom: 32,
            }}>
            {[
              isRTL ? "هيئة حقوق الإنسان" : "Human Rights Commission (HRC)",
              isRTL
                ? "الشركة الوطنية للإسكان"
                : "National Housing Company (NHC)",
              isRTL ? "جامعة المجمعة" : "Majmaah University",
              isRTL ? "جامعة جازان" : "Jazan University",
              isRTL ? "شركة SURE الدولية" : "SURE International Technology",
            ].map((org) => (
              <span
                key={org}
                style={{
                  padding: "8px 16px",
                  background: purpleLight,
                  borderRadius: 999,
                  fontSize: 14,
                  fontWeight: 600,
                  color: accent,
                }}>
                {org}
              </span>
            ))}
          </div>
          <Link
            href="/projects"
            style={{
              color: accent,
              fontWeight: 700,
              fontSize: 15,
              textDecoration: "underline",
              display: "inline-flex",
              alignItems: "center",
              minHeight: 44,
            }}>
            {isRTL
              ? "استعراض جميع أعمال المحفظة ←"
              : "Explore Full Portfolio →"}
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          background: `linear-gradient(135deg, ${accent} 0%, var(--theme-brand-strong) 100%)`,
          padding: "64px 0",
        }}>
        <div
          style={{
            width: "min(960px, 100% - 48px)",
            margin: "0 auto",
            textAlign: "center",
          }}>
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3vw, 2rem)",
              fontWeight: 800,
              color: "#fff",
              margin: "0 0 16px",
            }}>
            {isRTL
              ? "استعراض خبرة قيادة UX والنهج الكامل"
              : "Review UX Leadership Experience and Approach"}
          </h2>
          <p
            style={{
              fontSize: 16,
              color: "rgba(255,255,255,0.8)",
              maxWidth: "52ch",
              margin: "0 auto 32px",
              lineHeight: 1.7,
            }}>
            {isRTL
              ? "سواء كنت تبني منصة حكومية أو نظام تصميم مؤسسي أو تجربة مستخدم معقدة — استعرض المحفظة أو تواصل مباشرةً."
              : "Whether you're building a government platform, an enterprise design system, or a complex user experience — explore the portfolio or reach out directly."}
          </p>
          <div
            style={{
              display: "flex",
              gap: 12,
              justifyContent: "center",
              flexWrap: "wrap",
            }}>
            <Link
              href="/projects"
              style={{
                background: card,
                color: accent,
                padding: "14px 28px",
                borderRadius: 8,
                fontWeight: 700,
                fontSize: 15,
                textDecoration: "none",
              }}>
              {isRTL
                ? "استعراض أعمال قيادة UX"
                : "Explore UX Leadership Portfolio"}
            </Link>
            <Link
              href="/contact"
              style={{
                background: "rgba(255,255,255,0.15)",
                color: "#fff",
                padding: "14px 28px",
                borderRadius: 8,
                fontWeight: 700,
                fontSize: 15,
                textDecoration: "none",
                border: "1px solid rgba(255,255,255,0.3)",
              }}>
              {isRTL ? "تواصل مع عمر مختار" : "تواصل معي"}
            </Link>
          </div>
          <nav
            aria-label={isRTL ? "صفحات ذات صلة" : "Related expertise pages"}
            style={{ marginTop: 40 }}>
            <p
              style={{
                color: "rgba(255,255,255,0.6)",
                fontSize: 13,
                marginBottom: 12,
              }}>
              {isRTL ? "استكشف أيضًا:" : "Related expertise:"}
            </p>
            <div
              style={{
                display: "flex",
                gap: 16,
                justifyContent: "center",
                flexWrap: "wrap",
              }}>
              {[
                {
                  href: "/design-system",
                  label: isRTL
                    ? "أنظمة التصميم المؤسسية"
                    : "Enterprise Design Systems",
                },
                {
                  href: "/government-ux",
                  label: isRTL ? "تجربة المستخدم الحكومية" : "Government UX",
                },
                {
                  href: "/designops",
                  label: isRTL ? "حوكمة DesignOps" : "DesignOps Governance",
                },
                {
                  href: "/casestudy",
                  label: isRTL ? "دراسة حالة" : "Case Study",
                },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    color: "rgba(255,255,255,0.7)",
                    fontSize: 14,
                    textDecoration: "underline",
                    display: "inline-flex",
                    alignItems: "center",
                    minHeight: 44,
                  }}>
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </section>
    </div>
  );
}
