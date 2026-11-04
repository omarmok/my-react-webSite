import Link from "next/link";
import Image from "next/image";
import Loader from "../components/Loader";
import PageHeader from "../components/PageHeader";
import { Glance, List, Section } from "../components/CaseStudyParts";
import { useTranslation } from "../src/i18n/useTranslation";
import originalDashboard from "../public/images/casestudy/original-dashboard.webp";
import originalSchedule from "../public/images/casestudy/original-schedule.webp";
import originalAcademic from "../public/images/casestudy/original-academic-modal.webp";
import originalMobileSchedule from "../public/images/casestudy/original-mobile-schedule.webp";
import refreshedDashboard from "../public/images/casestudy/refreshed-dashboard.webp";
import refreshedMobile from "../public/images/casestudy/refreshed-mobile.webp";

const PROTOTYPE_HREF = "/student-portal/login.html";

const getCopy = (isRTL) =>
  isRTL
    ? {
        glanceTitle: "دراسة الحالة في 30 ثانية",
        glance: [
          ["المشكلة", "كان الطلاب يتنقلون بين 7 أنظمة منفصلة، لكل منها تسجيل دخول، لإنجاز مهام أكاديمية يومية."],
          ["دوري", "صممت تجربة المستخدم والواجهة، ونفذت الواجهة الأمامية بـ HTML وCSS وJavaScript."],
          ["ما نُفّذ", "بوابة عربية أولًا فيها جدول زمني، ولوحة واحدة للأنظمة، ودخول موحد عبر نفاذ."],
          ["النتيجة", "أكثر من 15 خدمة أصبحت في مكان واحد للطالب."],
        ],
        problemLabel: "01 — المشكلة",
        problemTitle: "المشكلة كانت في المسافة بين الأنظمة",
        problemBody:
          "لم يكن الخلل في نظام بعينه. كان الطالب يبدأ كل مهمة بالانتقال إلى نظام آخر وتسجيل دخول جديد، والجدول الدراسي، أكثر معلومة يحتاجها يوميًا، يتطلب عدة خطوات. ولم تكن الأنظمة مهيأة للجوال، رغم أن الطلاب يستخدمون هواتفهم بين المحاضرات.",
        mapBefore: "قبل: 7 أنظمة منفصلة",
        mapAfter: "بعد: بوابة واحدة",
        mapAfterBody: "جلسة واحدة عبر نفاذ، وأكثر من 15 خدمة في مكان واحد.",
        systems: ["النظام الأكاديمي", "بلاك بورد", "المكتبة الرقمية", "حجز الاختبارات", "النقل الجامعي", "البريد الإلكتروني", "اللجان والمجالس"],
        whoLabel: "02 — المستخدم",
        whoTitle: "طالب يأتي لمهمة محددة ويريد إنجازها بسرعة",
        whoBody:
          "استند هذا الملف إلى مقابلتين أو ثلاث مع الطلاب، فهو صورة عملية وليس شخصية مُتحققًا منها.",
        personaName: "فيصل",
        personaMeta: "ملف توضيحي · 21 عامًا · علوم الحاسب · السنة الثالثة",
        personaBody:
          "يستخدم هاتفه لكل شيء. يتحقق من جدوله صباحًا، ويبحث بين المحاضرات عن موعد اختبار أو معدله. لا يتصفح البوابة، بل يدخلها لمهمة واحدة.",
        needsTitle: "ما يحتاجه",
        needs: ["جدول اليوم دون تنقل", "الوصول إلى بلاك بورد دون تسجيل دخول منفصل", "معرفة المعدل وموعد الاختبار بسرعة"],
        painsTitle: "ما كان يعطله",
        pains: ["7 أنظمة بتسجيلات دخول مختلفة", "الإعلانات المهمة تبدو مثل الأخبار العامة", "لا شيء يعمل جيدًا على الهاتف"],
        decisionsLabel: "03 — القرارات الرئيسية",
        decisionsTitle: "أربعة قرارات شكّلت التجربة",
        problemTag: "المشكلة",
        decisionTag: "القرار",
        whyTag: "لماذا",
        decisions: [
          {
            title: "جدول يُقرأ بنظرة واحدة",
            problem: "الجدول هو أكثر معلومة يطلبها الطالب، لكنه كان داخل النظام الأكاديمي بعد عدة خطوات.",
            decision: "جعلته محور الصفحة: شبكة لخمسة أيام، تظهر فيها كل مادة في وقتها الفعلي، وتتميز المواد بالألوان. ويفتح الضغط على المادة تفاصيلها.",
            why: "يرى الطالب مدة كل محاضرة والفراغات بينها وشكل يومه، دون قراءة قائمة أو مغادرة الصفحة.",
            image: originalSchedule,
            alt: "الجدول الدراسي الأسبوعي في البوابة الأصلية، والمواد موزعة حسب أوقاتها",
          },
          {
            title: "لوحة واحدة لسبعة أنظمة، ودخول واحد",
            problem: "بلاك بورد والمكتبة وحجز الاختبارات والنقل وغيرها كانت تتطلب تسجيل دخول وتنقلًا منفصلًا.",
            decision: "جمعت الأنظمة السبعة في لوحة واحدة على الصفحة الرئيسية، خلف دخول موحد عبر نفاذ.",
            why: "لم تعد المهمة اليومية تبدأ بالانتقال بين الأنظمة، وأصبح الطالب يتابع كل طلباته من مكان واحد.",
            image: originalDashboard,
            alt: "الصفحة الرئيسية في البوابة الأصلية، وفيها بطاقة الطالب ولوحة الإعلانات ولوحة الأنظمة",
          },
          {
            title: "المعلومات الشخصية والدراسية على بُعد ضغطة",
            problem: "يحتاج الطالب إلى رقمه الجامعي أو معدله بسرعة، ولا ينبغي أن يبحث عنهما.",
            decision: "بطاقة طالب ثابتة فيها زران، للمعلومات الشخصية والدراسية، يفتح كل منهما نافذة مركزة.",
            why: "تظهر الإجابة بضغطة واحدة من البطاقة التي يراها الطالب كل مرة، دون صفحة ملف شخصي.",
            image: originalAcademic,
            alt: "نافذة المعلومات الدراسية في البوابة الأصلية، وفيها الرقم الجامعي والمعدل والمرشد الأكاديمي",
          },
          {
            title: "مصممة للهاتف",
            problem: "الطلاب على هواتفهم بين المحاضرات، والأنظمة لم تكن مهيأة للشاشات الصغيرة أو اللمس.",
            decision: "على الجوال يصبح كل يوم صفًا من المحاضرات يُسحب أفقيًا، والبطاقات بمقاس مناسب للمس.",
            why: "يصل الطالب إلى جدوله بسهولة من هاتفه، بين المحاضرات.",
            image: originalMobileSchedule,
            alt: "الجدول الدراسي على الجوال في البوابة الأصلية، وكل يوم في صف مستقل",
            mobile: true,
          },
        ],
        roleLabel: "04 — دوري",
        roleTitle: "من هيكلة التجربة إلى تنفيذها",
        role: [
          "هيكلة التجربة ولوحة التحكم",
          "تصميم مسارات الخدمات الأكاديمية",
          "واجهة متجاوبة بالعربية أولًا",
          "التعاون مع المحللين والمطورين وفرق ضمان الجودة",
          "تنفيذ الواجهة بـ HTML وCSS وJavaScript",
        ],
        outcomeLabel: "05 — النتيجة",
        outcomeTitle: "نقطة دخول واحدة للحياة الأكاديمية اليومية",
        outcomes: [
          ["+15", "خدمة طلابية", "أصبحت في مكان واحد للطالب، بعد أن كانت موزعة على 7 أنظمة منفصلة."],
          ["نفاذ", "دخول موحد", "يدخل الطالب عبر نفاذ ويتابع كل طلباته دون تكرار تسجيل الدخول."],
          ["RTL", "عربية أولًا", "تخطيط واتجاه وتفاعل بُني للاستخدام العربي اليومي."],
        ],
        outcomeNote: "نُفّذت البوابة فعليًا أثناء عملي في الجامعة، واستُبدلت بعد انتهاء عملي.",
        reflectionLabel: "06 — ما تعلمته",
        reflectionTitle: "ما نجح، وما كنت سأفعله بشكل مختلف",
        workedTitle: "ما نجح",
        worked: [
          "التعامل مع المسافة بين الأنظمة كمشكلة أساسية، بدل إعادة تصميم كل نظام وحده.",
          "تصميم الواجهة وتنفيذها بنفسي، فوصلت القرارات إلى الطلاب كما صُممت.",
        ],
        differentTitle: "ما كنت سأغيره",
        different: [
          "كان البحث محدودًا بمقابلتين أو ثلاث. اليوم كنت سأختبر مع عدد أكبر من الطلاب وأقيس زمن المهام قبل الإطلاق وبعده.",
          "استُبدلت البوابة بعد انتهاء عملي، فلا أملك بيانات استخدام طويلة المدى.",
        ],
        refreshLabel: "جرّبها الآن",
        refreshTitle: "نسخة تفاعلية محدّثة",
        refreshBody:
          "الشاشات أعلاه من التصميم الأصلي. وهذه نسخة تفاعلية محدّثة أعدتها لاحقًا ببيانات تجريبية، بحركة أقل وجدول يبدأ بما يحتاجه الطالب اليوم. وهي ليست ما نُفّذ وقتها.",
        refreshDesktopAlt: "النسخة المحدّثة من البوابة على شاشة كبيرة",
        refreshMobileAlt: "النسخة المحدّثة من الجدول على الجوال",
        nextDesign: "دراسة حالة نظام التصميم",
      }
    : {
        glanceTitle: "This case study in 30 seconds",
        glance: [
          ["Problem", "Students moved between 7 separate systems, each with its own login, for routine academic tasks."],
          ["My role", "I designed the UX and UI, and built the front end in HTML, CSS, and JavaScript."],
          ["What shipped", "An Arabic-first portal with a time-based schedule, one systems panel, and single sign-on through Nafath."],
          ["Result", "15+ services in one place for students."],
        ],
        problemLabel: "01 — Problem",
        problemTitle: "The problem was the space between systems",
        problemBody:
          "No single system was at fault. Every task started with a switch to another system and another login, and the timetable, the thing students checked most, took several steps to reach. The systems weren't built for phones either, even though students used theirs between classes.",
        mapBefore: "Before: 7 separate systems",
        mapAfter: "After: one portal",
        mapAfterBody: "One session through Nafath, and 15+ services in one place.",
        systems: ["Academic system", "Blackboard", "Digital library", "Exam booking", "Transportation", "Email", "Committees"],
        whoLabel: "02 — User",
        whoTitle: "A student with one task who wants it done quickly",
        whoBody:
          "This profile comes from two or three interviews with students, so it is a working picture rather than a validated persona.",
        personaName: "Faisal",
        personaMeta: "Illustrative profile · 21 · Computer Science · 3rd year",
        personaBody:
          "He uses his phone for almost everything. He checks his schedule in the morning, and looks up an exam date or his GPA between classes. He doesn't browse the portal; he arrives with one task.",
        needsTitle: "What he needs",
        needs: ["Today's schedule without navigating", "Blackboard without a separate login", "His GPA and exam date, quickly"],
        painsTitle: "What slowed him down",
        pains: ["7 systems with different logins", "Important notices looked like general news", "Nothing worked well on his phone"],
        decisionsLabel: "03 — Key decisions",
        decisionsTitle: "Four decisions that shaped the experience",
        problemTag: "Problem",
        decisionTag: "Decision",
        whyTag: "Why",
        decisions: [
          {
            title: "A schedule students can read at a glance",
            problem: "The timetable was the most-checked information in a student's day, but it sat several steps inside the academic system.",
            decision: "I made it the center of the page: a five-day grid where each course sits at its real time, with color separating courses. Selecting a course opens its details.",
            why: "Students see duration, gaps, and the shape of their day without reading a list or leaving the page.",
            image: originalSchedule,
            alt: "The weekly schedule in the original portal, with courses placed by their real times",
          },
          {
            title: "One panel for seven systems, one sign-in",
            problem: "Blackboard, the library, exam booking, transportation, and others each needed their own login and navigation.",
            decision: "All seven systems sit in one panel on the dashboard, behind single sign-on through Nafath.",
            why: "A routine task no longer starts with a switch between systems, and students follow all their requests from one place.",
            image: originalDashboard,
            alt: "The original portal dashboard with the student card, announcement board, and systems panel",
          },
          {
            title: "Personal and academic details one tap away",
            problem: "Students need a student ID or GPA quickly, and shouldn't have to look for them.",
            decision: "A persistent student card holds two buttons, personal and academic, each opening a focused modal.",
            why: "The answer appears in one tap from the card students see every visit, with no profile page.",
            image: originalAcademic,
            alt: "The academic details modal in the original portal, showing student ID, GPA, and advisor",
          },
          {
            title: "Built for the phone",
            problem: "Students were on their phones between classes, and the systems weren't built for small screens or touch.",
            decision: "On mobile, each day becomes a row of classes students swipe through, with cards sized for touch.",
            why: "Students can reach their schedule easily from their phone, between classes.",
            image: originalMobileSchedule,
            alt: "The mobile schedule in the original portal, with each day in its own row",
            mobile: true,
          },
        ],
        roleLabel: "04 — My role",
        roleTitle: "From experience structure to implementation",
        role: [
          "Experience and dashboard structure",
          "Academic service journey design",
          "Responsive, Arabic-first interface",
          "Collaboration with analysts, developers, and QA",
          "Front-end implementation in HTML, CSS, and JavaScript",
        ],
        outcomeLabel: "05 — Outcome",
        outcomeTitle: "One entry point for daily academic life",
        outcomes: [
          ["15+", "Student services", "Now in one place for students, instead of spread across 7 separate systems."],
          ["Nafath", "Single sign-on", "Students sign in through Nafath and track all their requests without repeated logins."],
          ["RTL", "Arabic-first", "Layout, direction, and interaction built for daily Arabic use."],
        ],
        outcomeNote: "The portal shipped during my time at the university and was replaced after I left.",
        reflectionLabel: "06 — What I learned",
        reflectionTitle: "What worked, and what I'd do differently",
        workedTitle: "What worked",
        worked: [
          "Treating the space between systems as the core problem, instead of redesigning each system on its own.",
          "Designing and building the interface myself, so decisions reached students as designed.",
        ],
        differentTitle: "What I'd change",
        different: [
          "Research was limited to two or three interviews. Today I would test with more students and measure task time before and after launch.",
          "The portal was replaced after I left, so I have no long-term usage data.",
        ],
        refreshLabel: "Try it now",
        refreshTitle: "A refreshed interactive demo",
        refreshBody:
          "The screens above are from the original design. This is an interactive demo I refreshed later with sample data, with less motion and a schedule that opens on what a student needs today. It is not what shipped at the time.",
        refreshDesktopAlt: "The refreshed portal on a large screen",
        refreshMobileAlt: "The refreshed schedule on a phone",
        nextDesign: "Design system case study",
      };

const CaseStudy = () => {
  const { dictionary, language } = useTranslation();
  const cs = dictionary.caseStudyPage;
  const isRTL = language === "ar";
  const copy = getCopy(isRTL);

  return (
    <div className="page-container" dir={isRTL ? "rtl" : "ltr"}>
      <Loader />
      <PageHeader
        eyebrow={dictionary?.nav?.links?.caseStudy}
        title={cs.hero.title}
        description={cs.hero.subtitle}
        tags={cs.hero.tags}
        meta={cs.hero.meta}
      />

      <div className="case-study-hero-image-wrap">
        <div className="case-study-hero-image">
          <Image
            src="/images/casstudymain.png"
            alt={cs.hero.imageAlt}
            width={1200}
            height={1029}
            className="case-study-hero-image__media"
            priority
          />
        </div>
      </div>

      <Glance title={copy.glanceTitle} items={copy.glance} />

      <Section label={copy.problemLabel} title={copy.problemTitle}>
        <p className="cs-body">{copy.problemBody}</p>
        <div className="cs-map">
          <div>
            <h3>{copy.mapBefore}</h3>
            <ul>
              {copy.systems.map((system) => (
                <li key={system}>{system}</li>
              ))}
            </ul>
          </div>
          <span className="cs-map__arrow" aria-hidden="true">
            {isRTL ? "←" : "→"}
          </span>
          <div className="cs-map__after">
            <h3>{copy.mapAfter}</h3>
            <p>{copy.mapAfterBody}</p>
          </div>
        </div>
      </Section>

      <Section tone="subtle" label={copy.whoLabel} title={copy.whoTitle}>
        <p className="cs-body">{copy.whoBody}</p>
        <div className="cs-persona">
          <div className="cs-persona__intro">
            <h3>{copy.personaName}</h3>
            <p className="cs-persona__meta">{copy.personaMeta}</p>
            <p>{copy.personaBody}</p>
          </div>
          <div>
            <h4>{copy.needsTitle}</h4>
            <List items={copy.needs} />
          </div>
          <div>
            <h4>{copy.painsTitle}</h4>
            <List items={copy.pains} />
          </div>
        </div>
      </Section>

      <Section label={copy.decisionsLabel} title={copy.decisionsTitle}>
        <div className="cs-decisions">
          {copy.decisions.map((item, index) => (
            <article
              className={`cs-decision${item.mobile ? " cs-decision--mobile" : ""}`}
              key={item.title}>
              <div className="cs-decision__text">
                <span className="cs-decision__number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{item.title}</h3>
                <dl>
                  <dt>{copy.problemTag}</dt>
                  <dd>{item.problem}</dd>
                  <dt>{copy.decisionTag}</dt>
                  <dd>{item.decision}</dd>
                  <dt>{copy.whyTag}</dt>
                  <dd>{item.why}</dd>
                </dl>
              </div>
              <figure className="cs-decision__media">
                <Image
                  src={item.image}
                  alt={item.alt}
                  sizes="(min-width: 992px) 50vw, 100vw"
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </figure>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="subtle" label={copy.roleLabel} title={copy.roleTitle}>
        <List items={copy.role} />
      </Section>

      <Section label={copy.outcomeLabel} title={copy.outcomeTitle}>
        <div className="case-study-outcome-grid">
          {copy.outcomes.map(([value, title, body]) => (
            <article key={title}>
              <strong>{value}</strong>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
        <p className="cs-note">{copy.outcomeNote}</p>
      </Section>

      <Section
        tone="subtle"
        label={copy.reflectionLabel}
        title={copy.reflectionTitle}>
        <div className="cs-reflection">
          <div>
            <h3>{copy.workedTitle}</h3>
            <List items={copy.worked} />
          </div>
          <div>
            <h3>{copy.differentTitle}</h3>
            <List items={copy.different} />
          </div>
        </div>
      </Section>

      <Section label={copy.refreshLabel} title={copy.refreshTitle}>
        <p className="cs-body">{copy.refreshBody}</p>
        <div className="cs-refresh">
          <figure>
            <Image
              src={refreshedDashboard}
              alt={copy.refreshDesktopAlt}
              sizes="(min-width: 992px) 70vw, 100vw"
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </figure>
          <figure>
            <Image
              src={refreshedMobile}
              alt={copy.refreshMobileAlt}
              sizes="(min-width: 992px) 24vw, 60vw"
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </figure>
        </div>
        <div className="cs-actions">
          <Link
            href={PROTOTYPE_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
            aria-label={cs.checkWebsiteAria}>
            {cs.checkWebsite}
          </Link>
          <Link href="/design-system-case-study" className="btn outlinebtn">
            {copy.nextDesign}
          </Link>
          <Link href="/case-studies" className="btn outlinebtn" aria-label={cs.backAria}>
            {cs.back}
          </Link>
        </div>
      </Section>
    </div>
  );
};

export default CaseStudy;
