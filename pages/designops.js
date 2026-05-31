import Link from "next/link";
import PageHeader from "../components/PageHeader";
import { useTranslation } from "../src/i18n/useTranslation";

const accent = "#6b47f5";
const ink = "#0f172a";
const inkMid = "#334155";
const bg = "#f8f7ff";
const border = "#e2e8f0";

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

export default function DesignOps() {
  const { language } = useTranslation();
  const isRTL = language === "ar";

  return (
    <div dir={isRTL ? "rtl" : "ltr"}>
      <PageHeader
        eyebrow={isRTL ? "عمليات التصميم" : "Design Operations"}
        title={
          isRTL
            ? "حوكمة DesignOps وعمليات التصميم"
            : "DesignOps Governance & Design Operations"
        }
        description={
          isRTL
            ? "بناء العمليات والأنظمة والحوكمة التي تجعل تسليم التصميم قابلًا للتوسع ومتسقًا وموثوقًا به عبر الفرق المؤسسية."
            : "Building the processes, systems, and governance that make design delivery scalable, consistent, and reliable across enterprise teams."
        }
        actions={[
          {
            href: "/casestudy",
            label: isRTL
              ? "مراجعة دراسات حالة DesignOps"
              : "Review DesignOps Case Studies",
            variant: "solid",
          },
          {
            href: "/contact",
            label: isRTL ? "تواصل مع عمر مختار" : "تواصل معي",
            variant: "ghost",
          },
        ]}
      />

      {/* What is DesignOps */}
      <section style={{ background: "#fff", padding: "64px 0" }}>
        <div style={{ width: "min(960px, 100% - 48px)", margin: "0 auto" }}>
          <SectionLabel>{isRTL ? "التعريف" : "Definition"}</SectionLabel>
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3vw, 2rem)",
              fontWeight: 800,
              color: ink,
              margin: "0 0 16px",
            }}>
            {isRTL ? "ما هو DesignOps؟" : "What is DesignOps?"}
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
              ? "DesignOps — عمليات التصميم — هي الطبقة التشغيلية التي تمكّن فرق التصميم من العمل بفاعلية وكفاءة واتساق على نطاق واسع. إنها مجموعة العمليات والمعايير والبنية التحتية التي تدعم نقل التصميم من الفكرة إلى الإنتاج بتعقيد أقل وتأثير أكبر."
              : "DesignOps is the operational layer that enables design teams to work effectively, efficiently, and consistently at scale. It is the set of processes, standards, and infrastructure that supports moving design from idea to production with less friction and greater impact."}
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
              ? "في البيئات المؤسسية والحكومية — حيث تتعدد الأنظمة والفرق وأصحاب المصلحة — يصبح DesignOps ضرورة استراتيجية لا مجرد ممارسة تشغيلية. يضمن أن قرارات التصميم متسقة ومحكومة وقابلة للصيانة عبر منتجات ودورات إصدار متعددة."
              : "In enterprise and government environments — where systems, teams, and stakeholders multiply — DesignOps becomes a strategic necessity rather than an operational nicety. It ensures design decisions are consistent, governed, and maintainable across multiple products and release cycles."}
          </p>
        </div>
      </section>

      {/* DesignOps Pillars */}
      <section style={{ background: bg, padding: "64px 0" }}>
        <div style={{ width: "min(960px, 100% - 48px)", margin: "0 auto" }}>
          <SectionLabel>{isRTL ? "ركائز العمل" : "Pillars"}</SectionLabel>
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3vw, 2rem)",
              fontWeight: 800,
              color: ink,
              margin: "0 0 16px",
            }}>
            {isRTL ? "إطار حوكمة DesignOps" : "DesignOps Governance Framework"}
          </h2>
          <Rule />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 20,
            }}>
            {[
              {
                title: isRTL
                  ? "نظام التصميم المؤسسي القابل للتوسع"
                  : "Scalable Enterprise Design System",
                body: isRTL
                  ? "بناء وقيادة مكتبات مكونات منظمة مع توكنز التصميم والتوثيق والمبادئ التوجيهية — ضمان الاتساق عبر المنتجات والفرق."
                  : "Building and leading structured component libraries with design tokens, documentation, and guidelines — ensuring consistency across products and teams.",
              },
              {
                title: isRTL
                  ? "تنسيق عملية التسليم"
                  : "Delivery Process Orchestration",
                body: isRTL
                  ? "تعريف مراحل مراجعة التصميم والتسليم للتطوير وضمان الجودة — تحويل العملية التصميمية من خطوط غير رسمية إلى بروتوكولات قابلة للتكرار."
                  : "Defining design review stages, developer handoff protocols, and QA checkpoints — turning informal design flow into repeatable, predictable protocols.",
              },
              {
                title: isRTL ? "بنية التوثيق" : "Documentation Architecture",
                body: isRTL
                  ? "بناء أنظمة توثيق واضحة تُمكّن فرق التطوير وضمان الجودة والمنتج من العمل من مصادر حقيقة واحدة وموثوقة."
                  : "Building clear documentation systems that enable development, QA, and product teams to work from a single, reliable source of truth.",
              },
              {
                title: isRTL ? "حوكمة التصميم" : "Design Governance",
                body: isRTL
                  ? "وضع قواعد ومبادئ واضحة للمكونات والتوكنز وقرارات التصميم — ضمان صحة النظام على المدى الطويل."
                  : "Establishing clear rules and principles for components, tokens, and design decisions — ensuring long-term system integrity.",
              },
              {
                title: isRTL
                  ? "تكامل سير عمل التطوير"
                  : "Development Workflow Integration",
                body: isRTL
                  ? "التعاون مع فرق التطوير باستخدام HTML وCSS وJavaScript لضمان الجدوى التقنية ودقة التنفيذ."
                  : "Collaborating with development teams in HTML, CSS, and JavaScript to ensure technical feasibility and implementation accuracy.",
              },
              {
                title: isRTL ? "قياس جودة UX" : "UX Quality Measurement",
                body: isRTL
                  ? "الإشراف على اختبارات قبول UX وعمليات تدقيق جودة التصميم للتحقق من أن ما يُنفَّذ يعكس نية التصميم بدقة."
                  : "Overseeing UX acceptance testing and design quality audit processes to verify that what gets built accurately reflects design intent.",
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  background: "#fff",
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

      {/* Outcomes */}
      <section style={{ background: "#fff", padding: "64px 0" }}>
        <div style={{ width: "min(960px, 100% - 48px)", margin: "0 auto" }}>
          <SectionLabel>{isRTL ? "النتائج" : "Outcomes"}</SectionLabel>
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3vw, 2rem)",
              fontWeight: 800,
              color: ink,
              margin: "0 0 16px",
            }}>
            {isRTL
              ? "ما يُحقّقه DesignOps الفعّال"
              : "What Effective DesignOps Governance Delivers"}
          </h2>
          <Rule />
          <ul
            style={{
              paddingLeft: isRTL ? 0 : 20,
              paddingRight: isRTL ? 20 : 0,
              listStyle: "disc",
            }}>
            {[
              isRTL
                ? "تسليم منتجات أكثر اتساقًا عبر الفرق المتعددة"
                : "More consistent product delivery across multiple teams",
              isRTL
                ? "تقليل الاحتكاك بين التصميم والتطوير في دورات التسليم"
                : "Reduced friction between design and development in delivery cycles",
              isRTL
                ? "أنظمة تصميم تتطور مع المنتج دون أن تنهار"
                : "Design systems that evolve with the product without breaking down",
              isRTL
                ? "قرارات تصميم قابلة للتدقيق والتتبع والمراجعة"
                : "Design decisions that are auditable, traceable, and reviewable",
              isRTL
                ? "فرق قادرة على العمل باستقلالية ضمن حدود واضحة ومتفق عليها"
                : "Teams able to work independently within clear, agreed boundaries",
            ].map((item) => (
              <li
                key={item}
                style={{
                  fontSize: 16,
                  color: inkMid,
                  lineHeight: 1.8,
                  marginBottom: 10,
                }}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          background: `linear-gradient(135deg, ${accent} 0%, #4f35c4 100%)`,
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
              ? "مراجعة إطار حوكمة DesignOps"
              : "Review the DesignOps Governance Framework"}
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
              ? "من وضع عملية التسليم الأولى إلى إنشاء إطار DesignOps كامل — استعرض دراسات الحالة أو تواصل مباشرةً."
              : "From establishing your first delivery process to building a full DesignOps framework — review case studies or reach out directly."}
          </p>
          <div
            style={{
              display: "flex",
              gap: 12,
              justifyContent: "center",
              flexWrap: "wrap",
            }}>
            <Link
              href="/casestudy"
              style={{
                background: "#fff",
                color: accent,
                padding: "14px 28px",
                borderRadius: 8,
                fontWeight: 700,
                fontSize: 15,
                textDecoration: "none",
              }}>
              {isRTL
                ? "مراجعة دراسات حالة DesignOps"
                : "Review DesignOps Case Studies"}
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
                  href: "/ux-lead",
                  label: isRTL ? "قيادة UX" : "UX Leadership",
                },
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
                  href: "/projects",
                  label: isRTL
                    ? "استعراض المحفظة"
                    : "Explore Portfolio Projects",
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
