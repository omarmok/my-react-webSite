import Link from "next/link";
import PageHeader from "../components/PageHeader";
import { useTranslation } from "../src/i18n/useTranslation";

const accent = "#6b47f5";
const ink = "#0f172a";
const inkMid = "#334155";
const bg = "#f8f7ff";
const purpleLight = "#ede9fd";
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

export default function GovernmentUX() {
  const { language } = useTranslation();
  const isRTL = language === "ar";

  return (
    <div dir={isRTL ? "rtl" : "ltr"}>
      <PageHeader
        eyebrow={isRTL ? "تجربة المستخدم الحكومية" : "Government UX"}
        title={
          isRTL
            ? "خبير تجربة المستخدم الحكومية في المملكة العربية السعودية"
            : "Government Digital Experience — Saudi Arabia"
        }
        description={
          isRTL
            ? "قيادة تصميم التجربة الرقمية للمنصات الحكومية السعودية — المتوافقة مع رؤية 2030 ومتطلبات الخدمة العامة."
            : "Leading digital experience design for Saudi government platforms — aligned with Vision 2030 and public service delivery standards."
        }
        actions={[
          {
            href: "/casestudy",
            label: isRTL
              ? "مراجعة دراسات حالة UX الحكومي"
              : "Review Government UX Case Studies",
            variant: "solid",
          },
          {
            href: "/contact",
            label: isRTL ? "تواصل مع عمر مختار" : "تواصل معي",
            variant: "ghost",
          },
        ]}
      />

      {/* Context */}
      <section style={{ background: "#fff", padding: "64px 0" }}>
        <div style={{ width: "min(960px, 100% - 48px)", margin: "0 auto" }}>
          <SectionLabel>{isRTL ? "السياق" : "Context"}</SectionLabel>
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3vw, 2rem)",
              fontWeight: 800,
              color: ink,
              margin: "0 0 16px",
            }}>
            {isRTL
              ? "تصميم الخدمات الحكومية الرقمية في السعودية"
              : "Designing Saudi Government Digital Services"}
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
              ? "المنصات الحكومية تواجه متطلبات فريدة: يجب أن تخدم طيفًا واسعًا من المستخدمين، وتلتزم بمعايير المؤسسية الرسمية، وتعمل بموثوقية تحت حمل عالٍ — كل ذلك مع الحفاظ على الوضوح والبساطة للمستخدمين ذوي مستويات الإلمام الرقمي المتفاوتة."
              : "Government platforms face unique demands: they must serve a wide spectrum of users, comply with official institutional standards, and operate reliably under high load — all while maintaining clarity and simplicity for users across varying digital literacy levels."}
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
              ? "في إطار رؤية 2030، باتت الجهات الحكومية السعودية تستثمر بجدية في رقمنة الخدمات وتحسين تجربة المواطن الرقمية. قيادة UX في هذا السياق تعني الموازنة بين الامتثال والابتكار، وبين متطلبات المؤسسة وسهولة الاستخدام الفعلية."
              : "Under Vision 2030, Saudi government entities are investing seriously in service digitization and citizen digital experience improvement. UX leadership in this context means balancing compliance with innovation, and institutional requirements with genuine usability."}
          </p>
        </div>
      </section>

      {/* Key Challenges & Approach */}
      <section style={{ background: bg, padding: "64px 0" }}>
        <div style={{ width: "min(960px, 100% - 48px)", margin: "0 auto" }}>
          <SectionLabel>
            {isRTL ? "التحديات والنهج" : "Challenges & Approach"}
          </SectionLabel>
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3vw, 2rem)",
              fontWeight: 800,
              color: ink,
              margin: "0 0 16px",
            }}>
            {isRTL
              ? "تحديات UX الحكومي وكيفية التعامل معها"
              : "Government UX Challenges & How I Address Them"}
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
                challenge: isRTL
                  ? "تعدد أصحاب المصلحة"
                  : "Multiple Stakeholders",
                approach: isRTL
                  ? "بناء عمليات واضحة لجمع المتطلبات وترتيب أولوياتها ومراجعة التصميم — مع الحفاظ على مسار تصميمي واحد وموثق."
                  : "Building clear processes for requirements gathering, prioritization, and design review — maintaining a single, documented design path.",
              },
              {
                challenge: isRTL
                  ? "دعم اللغة العربية RTL"
                  : "Arabic & RTL Support",
                approach: isRTL
                  ? "التصميم للعربية أولًا — وليس مجرد عكس تصميم LTR — لضمان التجربة الطبيعية للمستخدم العربي."
                  : "Designing Arabic-first — not simply mirroring an LTR design — to ensure a natural experience for Arabic-speaking users.",
              },
              {
                challenge: isRTL
                  ? "الأنظمة الإرثية القائمة"
                  : "Legacy Systems Integration",
                approach: isRTL
                  ? "تصميم تجربة حديثة فوق بنية تحتية قائمة — استخدام طبقات التجريد لتقليل التعقيد الظاهر للمستخدم."
                  : "Designing a modern experience on top of existing infrastructure — using abstraction layers to reduce visible complexity for users.",
              },
              {
                challenge: isRTL
                  ? "التطور المستمر للمتطلبات"
                  : "Evolving Requirements",
                approach: isRTL
                  ? "بناء أنظمة تصميم مرنة وموثقة تستوعب التغيير دون الحاجة إلى إعادة التصميم الكامل مع كل متطلب جديد."
                  : "Building flexible, documented design systems that accommodate change without requiring a full redesign with every new requirement.",
              },
              {
                challenge: isRTL
                  ? "الاتساق عبر المنصات"
                  : "Cross-Platform Consistency",
                approach: isRTL
                  ? "تأسيس نظام تصميم موحد يضمن الاتساق عبر تطبيقات الويب والجوال وواجهات الإدارة الداخلية."
                  : "Establishing a unified design system that ensures consistency across web, mobile, and internal administration interfaces.",
              },
              {
                challenge: isRTL
                  ? "ضمان الجودة والتسليم"
                  : "Quality Assurance & Handoff",
                approach: isRTL
                  ? "الإشراف على مراجعات التصميم ومراحل التسليم واختبارات القبول لضمان دقة تنفيذ مواصفات UX."
                  : "Overseeing design reviews, handoff stages, and acceptance testing to ensure UX specifications are implemented accurately.",
              },
            ].map((item) => (
              <div
                key={item.challenge}
                style={{
                  background: "#fff",
                  borderRadius: 12,
                  padding: 24,
                  border: `1px solid ${border}`,
                }}>
                <h3
                  style={{
                    fontSize: 14,
                    fontWeight: 700,
                    color: accent,
                    margin: "0 0 8px",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}>
                  {item.challenge}
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    color: inkMid,
                    lineHeight: 1.7,
                    margin: 0,
                  }}>
                  {item.approach}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Highlights */}
      <section style={{ background: "#fff", padding: "64px 0" }}>
        <div style={{ width: "min(960px, 100% - 48px)", margin: "0 auto" }}>
          <SectionLabel>
            {isRTL ? "المشاريع الحكومية" : "Government Projects"}
          </SectionLabel>
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3vw, 2rem)",
              fontWeight: 800,
              color: ink,
              margin: "0 0 16px",
            }}>
            {isRTL ? "مشاريع حكومية رئيسية" : "Key Government Projects"}
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
              ? "عبر مسيرتي المهنية، عملت على منصات حكومية وشبه حكومية تخدم المواطنين في المملكة العربية السعودية — من هيئة حقوق الإنسان إلى الشركة الوطنية للإسكان وبوابات الجامعات الحكومية."
              : "Across my career, I have led UX on government and quasi-government platforms serving citizens in Saudi Arabia — from the Human Rights Commission to the National Housing Company and government university portals."}
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 12,
              marginBottom: 32,
            }}>
            {[
              {
                name: isRTL
                  ? "هيئة حقوق الإنسان (HRC)"
                  : "Human Rights Commission (HRC)",
                detail: isRTL
                  ? "منصة حكومية وطنية"
                  : "National government platform",
              },
              {
                name: isRTL
                  ? "الشركة الوطنية للإسكان (NHC)"
                  : "National Housing Company (NHC)",
                detail: isRTL
                  ? "منصة إسكان وطنية"
                  : "National housing platform",
              },
              {
                name: isRTL ? "جامعة المجمعة" : "Majmaah University",
                detail: isRTL
                  ? "بوابة التعليم الحكومي"
                  : "Government education portal",
              },
              {
                name: isRTL ? "الأراضي البيضاء" : "Idlelands",
                detail: isRTL
                  ? "خدمة حكومية للأراضي"
                  : "Government land service",
              },
            ].map((org) => (
              <div
                key={org.name}
                style={{
                  padding: "12px 20px",
                  background: purpleLight,
                  borderRadius: 10,
                  border: `1px solid ${border}`,
                }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: accent }}>
                  {org.name}
                </div>
                <div style={{ fontSize: 12, color: inkMid, marginTop: 2 }}>
                  {org.detail}
                </div>
              </div>
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
              ? "مراجعة دراسات حالة تجربة المستخدم الحكومية"
              : "Review Government Digital Experience Work"}
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
              ? "أُحضر خبرة تصميم الخدمات العامة الرقمية وفهمًا عميقًا للسياق الحكومي السعودي إلى كل مشروع."
              : "I bring digital public service design experience and a deep understanding of the Saudi government context to every project."}
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
                ? "مراجعة دراسات حالة UX الحكومي"
                : "Review Government UX Case Studies"}
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
                  href: "/designops",
                  label: isRTL ? "حوكمة DesignOps" : "DesignOps Governance",
                },
                {
                  href: "/about",
                  label: isRTL ? "عن عمر مختار" : "About Omar Mokhtar",
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
