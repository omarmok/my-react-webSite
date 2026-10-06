import Link from "next/link";
import Loader from "../components/Loader";
import PageHeader from "../components/PageHeader";
import Tools from "../components/Tools";
import siteData from "../data.json";
import { useTranslation } from "../src/i18n/useTranslation";

const getAboutCopy = (isRTL) =>
  isRTL
    ? {
        eyebrow: "نبذة عني",
        title: "خبرة تربط استراتيجية UX بالتسليم الفعلي",
        description:
          "أكثر من 19 عامًا في تصميم تجربة المستخدم وقيادة أنظمة التصميم وعمليات التصميم عبر منصات حكومية ومؤسسية وتعليمية.",
        summaryTitle: "قائد UX عملي بعقلية الأنظمة",
        summary:
          "أقود تجربة المستخدم للمنتجات الرقمية المعقدة في المملكة العربية السعودية. يجمع عملي بين استراتيجية التجربة، وأنظمة التصميم، والحوكمة، وفهم التنفيذ؛ حتى تستمر جودة القرار من الاكتشاف إلى المنتج الفعلي.",
        stats: [
          ["19+", "عامًا من الخبرة"],
          ["Government", "ومنصات مؤسسية"],
          ["Design-to-Code", "وعي بالتنفيذ"],
        ],
        specializationsTitle: "مجالات التخصص",
        specializations: [
          "قيادة UX",
          "Government UX",
          "أنظمة التصميم",
          "DesignOps",
          "تصميم المنتجات",
          "UX QA وUAT",
          "الوصولية",
          "التعاون مع الهندسة",
        ],
        approachTitle: "نهج القيادة",
        approach:
          "أحدد المعايير، أوحّد القرارات، وأقرّب فرق المنتج والأعمال والهندسة من مصدر واحد للحقيقة. ثم أحمي التجربة عبر مراجعات التصميم وUX QA وUAT ومواءمة التنفيذ.",
        achievementsTitle: "إنجازات مختارة",
        achievements: [
          {
            title: "نظام تصميم قابل للتوسع",
            body: "قيادة إنشاء وتطوير نظام تصميم يربط الاتساق والوصول والحوكمة بمنتجات رقمية متعددة.",
          },
          {
            title: "بوابة طلاب موحّدة",
            body: "جمع أكثر من 15 خدمة أكاديمية في نقطة وصول واحدة لطلاب جامعة المجمعة.",
          },
          {
            title: "تسليم حكومي متعدد التخصصات",
            body: "قيادة UX/UI ضمن فريق من أربعة أشخاص لتسليم مشروع هيئة حقوق الإنسان خلال خمسة أشهر.",
          },
          {
            title: "التصميم إلى التنفيذ",
            body: "العمل مباشرة مع فرق التطوير باستخدام HTML وCSS وJavaScript وVue.js لحماية دقة التنفيذ.",
          },
        ],
        timelineEyebrow: "المسار المهني",
        timelineTitle: "خبرة عبر الحكومة والإسكان والتعليم",
        timelineIntro:
          "محطات مختارة توضّح تطور الدور من تصميم الواجهات وتنفيذها إلى قيادة UX وDesignOps.",
        progressionLabel: "التطور المهني",
        roleLabel: "نطاق العمل",
        toolsTitle: "الأدوات والقدرات",
        relatedTitle: "استكشف الخبرة ذات الصلة",
        videoTitle: "لمحة عن خلفيتي ونهجي",
      }
    : {
        eyebrow: "About",
        title: "Experience that connects UX strategy to delivery",
        description:
          "19+ years across UX design, design systems, and DesignOps leadership in government, enterprise, and education platforms.",
        summaryTitle: "A hands-on UX leader with a systems mindset",
        summary:
          "I lead UX for complex digital products in Saudi Arabia. My work connects experience strategy, design systems, governance, and implementation awareness so the quality of a decision survives from discovery to the released product.",
        stats: [
          ["19+", "Years of experience"],
          ["Government", "& enterprise platforms"],
          ["Design-to-Code", "Implementation awareness"],
        ],
        specializationsTitle: "Areas of specialization",
        specializations: [
          "UX Leadership",
          "Government UX",
          "Design Systems",
          "DesignOps",
          "Product Design",
          "UX QA & UAT",
          "Accessibility",
          "Engineering Collaboration",
        ],
        approachTitle: "Leadership approach",
        approach:
          "I establish standards, make decisions explicit, and align product, business, and engineering around a shared source of truth. I then protect the experience through design reviews, UX QA, UAT, and implementation alignment.",
        achievementsTitle: "Selected achievements",
        achievements: [
          {
            title: "Scalable design system",
            body: "Leading the creation and evolution of a design system connecting consistency, accessibility, and governance across digital products.",
          },
          {
            title: "Unified student portal",
            body: "Brought 15+ academic services into one entry point for Majmaah University students.",
          },
          {
            title: "Cross-functional government delivery",
            body: "Led UX/UI within a four-person team to deliver the Human Rights Commission project over five months.",
          },
          {
            title: "Design-to-implementation",
            body: "Worked directly with engineering in HTML, CSS, JavaScript, and Vue.js to protect implementation quality.",
          },
        ],
        timelineEyebrow: "Career timeline",
        timelineTitle: "Experience across government, housing, and education",
        timelineIntro:
          "Selected roles showing the progression from interface design and implementation to UX and DesignOps leadership.",
        progressionLabel: "Career progression",
        roleLabel: "Scope",
        toolsTitle: "Tools and capabilities",
        relatedTitle: "Explore related expertise",
        videoTitle: "A short overview of my background and approach",
      };

function About({ experience = [] }) {
  const { dictionary, language } = useTranslation();
  const isRTL = language === "ar";
  const copy = getAboutCopy(isRTL);
  const experienceList = dictionary.data.experience ?? experience;

  return (
    <div dir={isRTL ? "rtl" : "ltr"}>
      <Loader />
      <PageHeader
        eyebrow={copy.eyebrow}
        title={copy.title}
        description={copy.description}
        actions={[
          {
            href: "/docs/Omar-Mokhtar-CV.pdf",
            label: dictionary.about.downloadButton,
            ariaLabel: dictionary.about.downloadTitle,
            target: "_self",
            variant: "solid",
          },
        ]}
      />

      <div className="about-page">
        <section className="about-overview" aria-labelledby="about-summary-title">
          <div className="about-overview__summary">
            <p className="portfolio-eyebrow">{copy.eyebrow}</p>
            <h2 id="about-summary-title">{copy.summaryTitle}</h2>
            <p>{copy.summary}</p>
          </div>
          <dl className="about-stats">
            {copy.stats.map(([value, label]) => (
              <div key={value}>
                <dt>{value}</dt>
                <dd>{label}</dd>
              </div>
            ))}
          </dl>
          <div className="about-overview__specializations">
            <h3>{copy.specializationsTitle}</h3>
            <ul>
              {copy.specializations.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <aside className="about-overview__approach">
            <h3>{copy.approachTitle}</h3>
            <p>{copy.approach}</p>
          </aside>
        </section>

        <section className="about-achievements" aria-labelledby="about-achievements-title">
          <p className="portfolio-eyebrow">{copy.achievementsTitle}</p>
          <h2 id="about-achievements-title">{copy.achievementsTitle}</h2>
          <div className="about-achievements__grid">
            {copy.achievements.map((item, index) => (
              <article key={item.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="about-timeline" aria-labelledby="about-timeline-title">
          <div className="about-timeline__header">
            <p className="portfolio-eyebrow">{copy.timelineEyebrow}</p>
            <h2 id="about-timeline-title">{copy.timelineTitle}</h2>
            <p>{copy.timelineIntro}</p>
          </div>
          <ol>
            {experienceList.map((item) => {
              const conciseRole = (item.role ?? "").split("\n\n")[0];
              const roleParagraphs = (item.role ?? "")
                .split("\n\n")
                .filter(Boolean);
              return (
                <li key={item.id}>
                  <div className="about-timeline__date">{item.date}</div>
                  <article>
                    <h3>{item.jobtitle}</h3>
                    <p className="about-timeline__company">{item.companyname}</p>
                    {item.progression ? (
                      <>
                        <p className="about-timeline__scope">
                          <strong>{copy.progressionLabel}:</strong>{" "}
                          {item.progression}
                        </p>
                        {roleParagraphs.map((paragraph, index) => (
                          <p
                            className="about-timeline__scope"
                            key={`${item.id}-scope-${index}`}>
                            {index === 0 ? (
                              <><strong>{copy.roleLabel}:</strong>{" "}</>
                            ) : null}
                            {paragraph}
                          </p>
                        ))}
                      </>
                    ) : (
                      <p className="about-timeline__scope">
                        <strong>{copy.roleLabel}:</strong> {conciseRole}
                      </p>
                    )}
                  </article>
                </li>
              );
            })}
          </ol>
        </section>

        <section className="about-tools" aria-labelledby="about-tools-title">
          <h2 id="about-tools-title" className="visually-hidden">
            {copy.toolsTitle}
          </h2>
          <Tools />
        </section>

        <section className="about-related" aria-labelledby="about-related-title">
          <h2 id="about-related-title">{copy.relatedTitle}</h2>
          <nav aria-label={copy.relatedTitle}>
            <Link href="/ux-lead">{isRTL ? "قيادة UX" : "UX Leadership"}</Link>
            <Link href="/government-ux">{isRTL ? "تجربة المستخدم الحكومية" : "Government UX"}</Link>
            <Link href="/designops">DesignOps</Link>
            <Link href="/certifications">{isRTL ? "الشهادات المهنية" : "Professional Certifications"}</Link>
          </nav>
        </section>

        <section className="about-video" aria-labelledby="about-video-title">
          <h2 id="about-video-title">{copy.videoTitle}</h2>
          <div className="about-video__frame">
            <iframe
              width="100%"
              height="500"
              src="https://www.youtube.com/embed/ISFsa-OOy0s?si=5WmsmNtYxwecNOq2"
              title={copy.videoTitle}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;

export async function getStaticProps() {
  const experience = Array.isArray(siteData?.Experience) ? siteData.Experience : [];

  return {
    props: { experience },
    revalidate: 3600,
  };
}
