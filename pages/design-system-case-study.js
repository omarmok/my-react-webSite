import Link from "next/link";
import Image from "next/image";
import Loader from "../components/Loader";
import PageHeader from "../components/PageHeader";
import { Glance, List, Section } from "../components/CaseStudyParts";
import DesignSystemAccess from "../components/DesignSystemAccess";
import { useTranslation } from "../src/i18n/useTranslation";
import radiusTokens from "../public/images/ds-2.png";
import switchDocs from "../public/images/ds-3.png";

const getCopy = (isRTL) =>
  isRTL
    ? {
        eyebrow: "دراسة حالة قيادية",
        title: "بناء نظام تصميم مؤسسي وحوكمته",
        description:
          "كيف أنشأت نظام تصميم لمنصة حكومية تضم 14 نظامًا، ووضعت القواعد التي تجعل الفرق الداخلية والشركات المنفذة تبني من مصدر واحد.",
        tags: ["أنظمة التصميم", "عمليات التصميم", "الحوكمة"],
        meta: [
          { label: "الدور", value: "مالك نظام التصميم وقائد تجربة المستخدم" },
          { label: "المدة", value: "2023 – الآن" },
          { label: "السياق", value: "منصة حكومية سرية" },
          { label: "الحالة", value: "قيد التطوير بإصدارات مرقّمة" },
        ],
        glanceTitle: "دراسة الحالة في 30 ثانية",
        glance: [
          ["المشكلة", "فرق داخلية وشركات خارجية تبني منصة واحدة، وتحتاج إلى مصدر مشترك للتصميم والكود."],
          ["دوري", "أنشأت النظام في Figma وفي الكود، وأملك قراراته، وكتبت قواعد حوكمته. وأشارك أصحاب المصلحة في تطوير أفكار الخدمات من مرحلة مبكرة."],
          ["ما بنيته", "Tokens ومكتبة مكونات وتوثيق ثنائي اللغة من 38 صفحة ومسار تسليم للشركات المنفذة."],
          ["النطاق", "14 نظامًا على منصة واحدة، و3 منصات من شركات أخرى أعمل على ضمّها."],
        ],
        problemLabel: "01 — المشكلة",
        problemTitle: "منصة كبيرة، وأيدٍ كثيرة تبنيها",
        problemBody:
          "يشارك في المنصة مصممون ومطورون من الفريق الداخلي ومن شركات خارجية. ومن دون قواعد مشتركة، يحل كل فريق المشكلة نفسها بطريقته، وتبتعد النسخ المحلية عن المعيار. لذلك لم يكن المطلوب مكتبة مكونات فقط، بل طريقة عمل يلتزم بها الجميع.",
        earlyLabel: "02 — قبل المتطلبات",
        earlyTitle: "حين تكون الخدمة ما زالت فكرة",
        earlyBody:
          "لا تصل كل خدمة إليّ بمتطلبات مكتملة. فكثير منها يبدأ بفكرة لدى فرق الأعمال، ونناقشها في اجتماعات مع أصحاب المصلحة: كيف يمكن أن تتطور، وما الذي ينقصها، وما القدرات التي قد تضيف قيمة. ثم أحوّل هذه النقاشات إلى تصاميم أولية نعود بها إليهم، فتصبح الفكرة شيئًا يمكن التعليق عليه بدل وصفه. أعدّل التصميم بناءً على ملاحظاتهم، وبعد اعتمادهم للاتجاه أطوّر التصميم النهائي.",
        builtLabel: "03 — ما بنيته",
        builtTitle: "نظام واحد في Figma وفي الكود",
        built: [
          ["236", "متغيرًا في SCSS", "للألوان والخطوط والمسافات والزوايا والظلال، تطابق الـ Tokens في Figma."],
          ["+30", "ملفًا للمكونات", "مكتبة SCSS مبنية على Bootstrap، تُجمَّع في ملف أنماط واحد."],
          ["38", "صفحة توثيق", "بالعربية والإنجليزية، للأسس والمكونات والأنماط والحوكمة."],
          ["4,371", "أيقونة", "في 61 فئة، بمكتبة قابلة للبحث."],
        ],
        decisionsLabel: "04 — القرارات الرئيسية",
        decisionsTitle: "أربعة قرارات صنعت الفرق",
        problemTag: "المشكلة",
        decisionTag: "القرار",
        whyTag: "لماذا",
        decisions: [
          {
            title: "Tokens واحدة للتصميم والكود",
            problem: "إذا اختلفت القيم بين Figma والكود، يبدأ التصميم والتنفيذ في الابتعاد عن بعضهما.",
            decision: "عرّفت القرارات البصرية كـ Tokens، وجعلت كل تغيير مؤثر يُحدَّث في Figma وفي SCSS معًا.",
            why: "يتحدث المصممون والمطورون باللغة نفسها، ويبقى ما يُصمَّم هو ما يُنفَّذ.",
            image: radiusTokens,
            alt: "صفحة Tokens الزوايا في توثيق نظام التصميم",
          },
          {
            title: "قالب واحد لتوثيق كل مكوّن",
            problem: "التوثيق المتفاوت يدفع الفرق إلى التخمين، أو إلى بناء مكوّن جديد بدل البحث عن الموجود.",
            decision: "وثّقت المكونات بقالب موحّد: التركيب، والحالات، وخصائص Figma مقابل واجهة الكود، والوصولية، وRTL، وما يُفعل وما لا يُفعل.",
            why: "يجد المصمم والمطور الإجابة نفسها في مكان واحد.",
            image: switchDocs,
            alt: "صفحة مكوّن المفتاح في توثيق نظام التصميم",
          },
          {
            title: "الشركات تبني على النظام، لا على نسخة منه",
            problem: "تعديل الأنماط المشتركة لخدمة مشروع واحد قد يكسر مشاريع أخرى.",
            decision: "تستلم كل شركة إصدارًا محددًا، وملفات SCSS للقراءة فقط. وأي إضافة تبقى في ملف الشركة حتى تُراجَع وتُدمج مركزيًا.",
            why: "لا تغيّر أي شركة المعيار وحدها، وكل تحسين معتمد يصل إلى جميع المشاريع.",
          },
          {
            title: "إدارة التغيير بدل منعه",
            problem: "النظام الذي لا يتغير يتجاوزه الجميع، والنظام الذي يتغير دون قواعد يكسر ما بُني عليه.",
            decision: "اعتمدت إصدارات دلالية وسجل تغييرات ثنائي اللغة. والتغيير الجذري يتطلب مراجعة واعتماد المالك وإرشادات ترحيل وجدولًا للإيقاف، والاستثناءات مؤقتة ومحددة النطاق.",
            why: "تعرف الفرق ما تغيّر وكيف تتكيف معه، ويتطور النظام دون مفاجآت.",
          },
        ],
        flowLabel: "05 — الحوكمة",
        flowTitle: "من استلام النظام إلى نشر التحسين",
        flowBody:
          "كتبت هذا المسار للشركات المنفذة، ويبدأ بسؤال بسيط: هل يوجد حل معتمد بالفعل؟ ولا يُنشر أي تغيير إلا بعد مراجعته مقابل التصميم والكود والوصولية والتوافق مع المشاريع القائمة.",
        flow: [
          ["تسليم النظام", "إصدار محدد وقواعد التزام واضحة."],
          ["الاعتماد", "البناء بالمكونات والـ Tokens كما هي."],
          ["البحث عن الموجود", "قبل إنشاء أي مكوّن أو فئة جديدة."],
          ["طلب مساهمة", "الحاجة والحل المقترح وسبب عدم كفاية الموجود."],
          ["مراجعة النظام", "استخدام الموجود، أو التطوير، أو التعديل، أو الرفض."],
          ["التطوير والتقديم", "التصميم والكود والحالات وأمثلة الاستخدام."],
          ["الجودة والاعتماد", "فحص شامل قبل الموافقة النهائية."],
          ["الدمج والنشر", "إصدار رسمي متاح لجميع الشركات."],
        ],
        roleLabel: "06 — دوري",
        roleTitle: "قيادة النظام وبناؤه في الوقت نفسه",
        role: [
          "مالك نظام التصميم، وصاحب الاعتماد النهائي للتغييرات والإصدارات والتغييرات الجذرية والاستثناءات",
          "أقود فريق التصميم الداخلي، وأوجّه أعمال التصميم لدى الشركات المنفذة",
          "أكتب SCSS والتوثيق بنفسي، وأعيد بناء المكونات لتطابق مواصفات Figma",
          "أراجع التنفيذ مع المطورين قبل الإطلاق",
          "أعمل مع فرق الأعمال وأصحاب المصلحة على تطوير أفكار الخدمات تصميميًا، بينما تبقى قرارات الأعمال واعتماد الاتجاه لديهم",
        ],
        scopeLabel: "07 — أين وصل النظام",
        scopeTitle: "يخدم منصة كاملة، ويمتد إلى شركاء جدد",
        scope: [
          ["14", "نظامًا", "على منصة واحدة ونظام تصميم واحد."],
          ["3", "منصات", "من شركات أخرى أعمل على ضمّها إلى النظام."],
          ["8", "مبادئ حوكمة", "تحكم كل مرحلة من مسار الشركاء."],
        ],
        scopeBody:
          "ما يظهر هنا ليس النسخة الأولى من النظام. فقد تطور عبر جولات متتالية من التحسين، بحسب ما احتاجته الخدمات، وما كشفه الاستخدام الفعلي، وما خرج من العمل مع المصممين والمطورين.",
        scopeNote: "حُذفت أسماء الجهة والمنتجات والتفاصيل الداخلية حفاظًا على السرية.",
        systemCta: "استعرض نظام التصميم",
        portalCta: "دراسة حالة بوابة الطلاب",
        projectsCta: "كل دراسات الحالة",
      }
    : {
        eyebrow: "Leadership case study",
        title: "Building and governing an enterprise design system",
        description:
          "How I created a design system for a government platform of 14 systems, and the rules that keep internal and vendor teams building from one source.",
        tags: ["Design Systems", "DesignOps", "Governance"],
        meta: [
          { label: "Role", value: "Design System Owner & UX Design Lead" },
          { label: "Timeline", value: "2023 – Present" },
          { label: "Context", value: "Confidential government platform" },
          { label: "Status", value: "In development, with versioned releases" },
        ],
        glanceTitle: "This case study in 30 seconds",
        glance: [
          ["Problem", "Internal and external teams build one platform and need a shared source for design and code."],
          ["My role", "I created the system in Figma and code, own its decisions, and wrote its governance. I also work with stakeholders on service ideas from an early stage."],
          ["What I built", "Tokens, a component library, 38 pages of bilingual documentation, and a vendor handover workflow."],
          ["Scope", "14 systems on one platform, with 3 platforms from other companies being brought on."],
        ],
        problemLabel: "01 — Problem",
        problemTitle: "A large platform, built by many hands",
        problemBody:
          "Designers and developers from the internal team and from external companies all work on the platform. Without shared rules, each team solves the same problem its own way, and local copies drift from the standard. So the job wasn't only a component library; it was a way of working everyone could follow.",
        earlyLabel: "02 — Before the requirements",
        earlyTitle: "When a service is still an idea",
        earlyBody:
          "Not every service reaches me with finished requirements. Many begin as an idea with a business team, and we work through it in meetings with stakeholders: how it could develop, what's missing, and which capabilities might add value. I turn those conversations into initial designs and bring them back for review, so the idea becomes something to react to rather than describe. I iterate on their feedback, and once they approve the direction, I develop the final design.",
        builtLabel: "03 — What I built",
        builtTitle: "One system, in Figma and in code",
        built: [
          ["236", "SCSS variables", "For color, typography, spacing, radius, and shadows, matching the Figma tokens."],
          ["30+", "Component stylesheets", "A Bootstrap-based SCSS library compiled into one stylesheet."],
          ["38", "Documentation pages", "In Arabic and English, covering foundations, components, patterns, and governance."],
          ["4,371", "Icons", "In 61 categories, in a searchable library."],
        ],
        decisionsLabel: "04 — Key decisions",
        decisionsTitle: "Four decisions that made the difference",
        problemTag: "Problem",
        decisionTag: "Decision",
        whyTag: "Why",
        decisions: [
          {
            title: "One set of tokens for design and code",
            problem: "When values differ between Figma and code, design and implementation start to drift apart.",
            decision: "I defined visual decisions as tokens, and made every impactful change update Figma and SCSS together.",
            why: "Designers and developers share one language, and what gets designed is what gets built.",
            image: radiusTokens,
            alt: "The radius tokens page in the design system documentation",
          },
          {
            title: "One template for every component",
            problem: "Uneven documentation leaves teams guessing, or building something new instead of finding what exists.",
            decision: "I documented components on one template: anatomy, states, Figma properties against the code API, accessibility, RTL, and do and don't.",
            why: "Designers and developers find the same answer in the same place.",
            image: switchDocs,
            alt: "The switch component page in the design system documentation",
          },
          {
            title: "Vendors build on the system, not on a copy",
            problem: "Editing shared styles to serve one project can break others.",
            decision: "Each company receives a specific release, with SCSS as read-only. Anything new stays in the company's own file until it is reviewed and merged centrally.",
            why: "No company changes the standard alone, and every approved improvement reaches all projects.",
          },
          {
            title: "Managing change instead of blocking it",
            problem: "A system that never changes gets bypassed, and one that changes without rules breaks what's built on it.",
            decision: "I set up semantic versioning and a bilingual changelog. Breaking changes need review, owner approval, migration guidance, and a deprecation timeline, and exceptions are temporary and scoped.",
            why: "Teams know what changed and how to adapt, and the system evolves without surprises.",
          },
        ],
        flowLabel: "05 — Governance",
        flowTitle: "From receiving the system to publishing an improvement",
        flowBody:
          "I wrote this workflow for vendor companies. It starts with a simple question: does an approved solution already exist? Nothing is published until it has been reviewed against design, code, accessibility, and compatibility with existing projects.",
        flow: [
          ["Handover", "A specific release and clear compliance rules."],
          ["Adoption", "Building with components and tokens as they are."],
          ["Reuse check", "Before creating any new component or class."],
          ["Contribution request", "The need, the proposal, and why what exists falls short."],
          ["System review", "Use what exists, develop, revise, or reject."],
          ["Development", "Design, code, states, and usage examples."],
          ["QA & approval", "A full check before final approval."],
          ["Merge & release", "An official release, available to every company."],
        ],
        roleLabel: "06 — My role",
        roleTitle: "Leading the system while building it",
        role: [
          "Design System Owner, with final approval on changes, releases, breaking changes, and exceptions",
          "Lead the internal design team and direct design work at vendor companies",
          "Write the SCSS and documentation myself, rebuilding components to match the Figma spec",
          "Review implementation with developers before release",
          "Work with business teams and stakeholders to develop service ideas through design, while business decisions and approval of the direction stay with them",
        ],
        scopeLabel: "07 — Where it stands",
        scopeTitle: "Serving a full platform, and reaching new partners",
        scope: [
          ["14", "Systems", "On one platform and one design system."],
          ["3", "Platforms", "From other companies that I am bringing onto the system."],
          ["8", "Governance principles", "Guiding every stage of the partner workflow."],
        ],
        scopeBody:
          "What you see here isn't the system's first version. It has moved through repeated rounds of refinement, shaped by what services needed, what real use revealed, and what came out of working with designers and developers.",
        scopeNote: "Organization names, product names, and internal details are omitted for confidentiality.",
        systemCta: "Explore the Design System",
        portalCta: "Student portal case study",
        projectsCta: "All case studies",
      };

function DesignSystemCaseStudy() {
  const { language } = useTranslation();
  const isRTL = language === "ar";
  const copy = getCopy(isRTL);

  return (
    <div className="page-container" dir={isRTL ? "rtl" : "ltr"}>
      <Loader />
      <PageHeader
        eyebrow={copy.eyebrow}
        title={copy.title}
        description={copy.description}
        tags={copy.tags}
        meta={copy.meta}
      />

      <Glance title={copy.glanceTitle} items={copy.glance} />

      <Section label={copy.problemLabel} title={copy.problemTitle}>
        <p className="cs-body" style={{ marginBottom: 0 }}>
          {copy.problemBody}
        </p>
      </Section>

      <Section tone="subtle" label={copy.earlyLabel} title={copy.earlyTitle}>
        <p className="cs-body" style={{ marginBottom: 0 }}>
          {copy.earlyBody}
        </p>
      </Section>

      <Section label={copy.builtLabel} title={copy.builtTitle}>
        <div className="cs-stats">
          {copy.built.map(([value, title, body]) => (
            <article key={title}>
              <strong dir="ltr">{value}</strong>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="subtle" label={copy.decisionsLabel} title={copy.decisionsTitle}>
        <div className="cs-decisions">
          {copy.decisions.map((item, index) => (
            <article
              className={`cs-decision${item.image ? "" : " cs-decision--text"}`}
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
              {item.image ? (
                <figure className="cs-decision__media">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    sizes="(min-width: 992px) 50vw, 100vw"
                    style={{ width: "100%", height: "auto", display: "block" }}
                  />
                </figure>
              ) : null}
            </article>
          ))}
        </div>
      </Section>

      <Section label={copy.flowLabel} title={copy.flowTitle}>
        <p className="cs-body">{copy.flowBody}</p>
        <ol className="cs-flow">
          {copy.flow.map(([title, body]) => (
            <li key={title}>
              <h3>{title}</h3>
              <p>{body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="subtle" label={copy.roleLabel} title={copy.roleTitle}>
        <List items={copy.role} />
      </Section>

      <Section label={copy.scopeLabel} title={copy.scopeTitle}>
        <p className="cs-body">{copy.scopeBody}</p>
        <div className="case-study-outcome-grid">
          {copy.scope.map(([value, title, body]) => (
            <article key={title}>
              <strong>{value}</strong>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
        <p className="cs-note">{copy.scopeNote}</p>
      </Section>

      <DesignSystemAccess />

      <div className="cs-section">
        <div className="site-container">
          <div className="cs-actions">
            <Link href="/design-system" className="btn outlinebtn">
              {copy.systemCta}
            </Link>
            <Link href="/casestudy" className="btn outlinebtn">
              {copy.portalCta}
            </Link>
            <Link href="/case-studies" className="btn outlinebtn">
              {copy.projectsCta}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DesignSystemCaseStudy;
