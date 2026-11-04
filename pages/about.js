import Link from "next/link";
import Loader from "../components/Loader";
import PageHeader from "../components/PageHeader";
import ResumeModal from "../components/ResumeModal";
import Tools from "../components/Tools";
import siteData from "../data.json";
import { useTranslation } from "../src/i18n/useTranslation";

const getAboutCopy = (isRTL) =>
  isRTL
    ? {
        eyebrow: "نبذة عني",
        title: "أصمم تجارب رقمية أفضل، وأقود الأنظمة التي تقف خلفها.",
        description:
          "قائد تصميم تجربة المستخدم بخبرة تتجاوز 19 عامًا. أجمع بين تصميم تجربة المستخدم وتطوير الواجهة الأمامية، فأحوّل أنظمة التصميم المعقدة إلى واجهات قابلة لإعادة الاستخدام ومتجاوبة وسهلة الوصول باستخدام HTML وCSS وSCSS وJavaScript، لمنصات حكومية ومؤسسية في الرياض.",
        projectsButton: "استعرض المشاريع",
        summaryEyebrow: "نظرة مهنية",
        summaryTitle: "من تصميم الويب في 2007 إلى قيادة تجربة المستخدم وعمليات التصميم",
        pathLabel: "المسار",
        path: ["تصميم الويب", "تصميم تجربة المستخدم والواجهات", "تطوير الواجهات المؤسسية", "أنظمة التصميم", "عمليات التصميم", "قيادة تجربة المستخدم"],
        summary: [
          "بدأت عام 2007 مصمم ويب مبتدئًا أبني الصفحات يدويًا بـ HTML، ولم تفارقني هذه العادة. من تصميم الواجهات لجهات حكومية وجامعية، إلى تطوير الواجهات في الشركة الوطنية للإسكان، ثم قيادة تجربة المستخدم اليوم، عملت دائمًا على طرفي التسليم: التصميم والتنفيذ.",
          "أقود اليوم تجربة المستخدم لمنصة حكومية مؤسسية تضم 14 نظامًا، ولتطبيق منفصل على الجوال والويب للعمل خارج المكاتب، يجمع خدمات مختارة من هذه الأنظمة، مثل الحالات الأمنية والمخالفات. وهي منتجات عربية أولًا تدعم RTL وتخدم إجراءات تشغيلية معقدة. أقود فريق تصميم متعدد التخصصات، وأضع المعايير التي تصمم وفقها فرق الشركات المنفذة الخارجية، وأملك نظام التصميم الذي يحافظ على اتساق عمل الجميع.",
          "ما يهمني هو أن يصمد القرار التصميمي حتى التسليم. لا يكتمل التصميم إلا حين يصل إلى المستخدم كما أُريد له، لذلك أبذل في الـ Tokens والتوثيق والمراجعات والكود الجهد نفسه الذي أبذله في الشاشات.",
        ],
        stats: [
          ["19+", "عامًا في التصميم الرقمي منذ 2007"],
          ["14", "نظامًا تحت منصة واحدة، على نظام تصميم واحد"],
          ["3", "منصات من شركات أخرى أعمل على ضمّها إلى نظام التصميم"],
        ],
        approachTitle: "كيف أقود",
        approach:
          "أجعل المعايير واضحة وقابلة للمراجعة: مصدر واحد للمكونات والـ Tokens، ومسار واضح لاقتراح التغييرات، ومراجعة للتصميم قبل أن يصل إلى المطورين. ثم أراجع التنفيذ مقابل التصميم، لأن الجودة تُحسم في التنفيذ بقدر ما تُحسم في Figma.",
        leadershipEyebrow: "القيادة",
        leadershipTitle: "قيادة الجودة عبر الفرق الداخلية والخارجية",
        leadershipIntro:
          "نوعان من القيادة أفصل بينهما بوضوح: فريق تصميم متعدد التخصصات أقوده مباشرة، وفرق لدى شركات منفذة أوجّه أعمالها التصميمية وأراجعها، مع مراجعات تصميم وضمان جودة ومعايير مكونات موحّدة للجميع.",
        leadership: [
          {
            title: "فريق تصميم متعدد التخصصات",
            body: "أقود فريق التصميم الداخلي عبر أنظمة المنصة وتطبيقيها على الجوال والويب: أحدد التوجه التصميمي، وأنسّق العمل، وأدير مراجعات التصميم وضمان جودته قبل التسليم للمطورين، وأحافظ على معايير UX/UI والالتزام بنظام التصميم.",
          },
          {
            title: "فرق الشركات المنفذة",
            body: "أقدّم التوجيه والملاحظات التصميمية لمصممي الشركات المنفذة الخارجية، وأراجع مخرجاتهم للتأكد من التزامها بنظام التصميم، وأوائم عملهم مع معايير الفريق الداخلي.",
          },
          {
            title: "الهندسة وأصحاب المصلحة",
            body: "أعمل مع محللي الأعمال والمطورين وفرق ضمان الجودة على النطاق والتسليم، وأراجع التنفيذ مع المطورين الداخليين ومطوري الشركات المنفذة قبل الإطلاق.",
          },
        ],
        frontendEyebrow: "الواجهة الأمامية",
        frontendTitle: "تطوير الواجهة الأمامية: من التصميم إلى الكود",
        frontendIntro:
          "لا أكتفي بتسليم ملفات Figma. أكتب بنفسي الكود الذي يحوّل نظام التصميم إلى واجهات حقيقية، وأراجع تنفيذ الفرق الأخرى مقابل المواصفات، دون أن أقدّم نفسي مطوّر Full-Stack.",
        frontendStackLabel: "التقنيات التي أعمل بها",
        frontendStack: ["HTML5", "CSS3", "SCSS/Sass", "JavaScript", "Bootstrap", "Vue.js"],
        frontend: [
          {
            title: "بنية HTML دلالية",
            body: "ترميز للصفحات والمكونات يعتمد على العناوين والتسميات والمعالم الصحيحة، مع ARIA حين لا تكفي العناصر الأصلية.",
          },
          {
            title: "CSS وتخطيطات متجاوبة",
            body: "شبكات وتخطيطات تعمل من جداول البيانات العريضة على الشاشات الكبيرة حتى شاشات الجوال.",
          },
          {
            title: "بنية SCSS",
            body: "مكتبة SCSS متعددة الطبقات (المساعدات والمكونات والأنماط المشتركة والصفحات) تُجمَّع في ملف أنماط واحد، وتضم أكثر من 30 ملفًا للمكونات.",
          },
          {
            title: "سلوك الواجهات بـ JavaScript",
            body: "تفاعلات المكونات مثل النوافذ الحوارية وعارض الصور والخطوات ورفع الملفات، مكتوبة بـ JavaScript.",
          },
          {
            title: "واجهات مبنية على Bootstrap",
            body: "Bootstrap أساسًا للتخطيط والأدوات المساعدة، مع فئات المكونات الخاصة بنظام التصميم فوقه.",
          },
          {
            title: "الـ Tokens داخل الكود",
            body: "236 متغيرًا في SCSS للألوان والخطوط والمسافات والزوايا والظلال، تطابق الـ Tokens في Figma.",
          },
          {
            title: "RTL والوصولية",
            body: "تخطيطات عربية أولًا تنعكس فيها الأيقونات والفواصل تلقائيًا في RTL، مع ملاحظات وصولية في مواصفات كل مكوّن.",
          },
          {
            title: "اتساق المكونات وفحص الواجهة",
            body: "مراجعة تنفيذ الفريق الداخلي والشركات المنفذة مقابل مواصفات Figma، وتوثيق خصائص كل مكوّن في Figma مقابل واجهته في الكود.",
          },
        ],
        frontendEvidence:
          "أين يظهر ذلك: نظام التصميم لمنصة حكومية مؤسسية، وأكتب مكتبة SCSS الخاصة به وأطوّرها بنفسي منذ 2023؛ ومجموعات الواجهات والصفحات الفعلية في الشركة الوطنية للإسكان (HTML وCSS وJavaScript وVue.js)؛ وبوابات جامعتي المجمعة وجازان.",
        expertiseEyebrow: "الخبرات الأساسية",
        expertiseTitle: "ست مساحات أعمل فيها يوميًا",
        expertise: [
          {
            title: "قيادة تجربة المستخدم وتصميم المنتجات",
            body: "تحديد التوجه التصميمي، وإدارة مراجعات التصميم، وتحويل المتطلبات المعقدة إلى قرارات منتج واضحة.",
          },
          {
            title: "هندسة أنظمة التصميم",
            body: "بنية Tokens عبر Figma Variables، وواجهات مكونات بمتغيراتها وحالاتها، وتوثيق يستخدمه المصممون والمطورون معًا.",
          },
          {
            title: "عمليات التصميم والحوكمة",
            body: "إصدارات مرقّمة، ومسارات للمساهمة والمراجعة، وسياسات للتغييرات الجذرية والاستثناءات، وملاحظات إصدار.",
          },
          {
            title: "تجربة المستخدم المؤسسية والحكومية",
            body: "إجراءات كثيفة البيانات: إدارة القضايا، والنماذج المعقدة، وجداول البيانات، والتقييم الإرشادي، وهندسة المعلومات.",
          },
          {
            title: "تصميم المنتجات للويب والجوال",
            body: "تجربة منتج متكاملة لمنصة ويب وتطبيق جوال مرافق لها، من هندسة المعلومات إلى النماذج الأولية والإطلاق.",
          },
          {
            title: "الوصولية والتصميم العربي أولًا",
            body: "واجهات عربية أولًا بانعكاس RTL صحيح، وتوثيق ثنائي اللغة، ومبادئ WCAG 2.1 مضمّنة في مواصفات المكونات.",
          },
        ],
        achievementsEyebrow: "أثر مختار",
        achievementsTitle: "ما بنيته، وما الذي يغيّره",
        achievements: [
          {
            title: "نظام تصميم مؤسسي أنشأته وأملكه",
            body: "مبني عبر مكونات Figma والـ Tokens، ومكتبة HTML/SCSS مبنية على Bootstrap، وموقع توثيق ثنائي اللغة من 38 صفحة يضم مكتبة من 4,371 أيقونة. وأنا المالك المسمّى للنظام وصاحب الاعتماد النهائي للتغييرات والإصدارات.",
          },
          {
            title: "بنية Tokens ومعايير موحّدة للمكونات",
            body: "Tokens للألوان والخطوط والمسافات والزوايا وحالات المكونات، وكل مكوّن موثّق بقالب واحد: التركيب، والحالات، وخصائص Figma مقابل واجهة الكود، والوصولية، وRTL.",
          },
          {
            title: "حوكمة تمتد إلى الشركات المنفذة",
            body: "إصدارات دلالية، ومراجعة مساهمات تتطلب موافقة مصمم ومطور، وسياسة للتغييرات الجذرية مع إرشادات الترحيل، ومسار تسليم للشركاء حتى تبني الفرق الخارجية على المكونات المعتمدة بدل نسخ محلية.",
          },
          {
            title: "التصميم والتطوير في حلقة واحدة",
            body: "أعيد بناء المكونات بـ SCSS لتطابق مواصفات Figma، وأستبعد المكونات المكررة دون كسر الشاشات القائمة، وأراجع التنفيذ قبل الإطلاق.",
          },
        ],
        timelineEyebrow: "المسار المهني",
        timelineTitle: "19 عامًا، من تصميم الويب إلى قيادة تجربة المستخدم",
        timelineIntro:
          "كل الأدوار منذ 2007 بمسمياتها وتواريخها الرسمية. تتداخل بعض الفترات حين تزامن العمل الحر أو التعاقدي مع وظيفة أخرى.",
        progressionLabel: "التطور المهني",
        roleLabel: "نطاق العمل",
        credentialsEyebrow: "المؤهلات",
        credentialsTitle: "الشهادات والتعليم",
        certificationsTitle: "الشهادات المهنية",
        certifications: [
          ["Design System Bootcamp", "Maven · أغسطس 2025"],
          ["PMI-ACP, Agile Certified Practitioner", "PMI · أغسطس 2022"],
          ["Google UX Design Professional Certificate", "Google / Coursera · أغسطس 2022"],
          ["Creating a Design System with Adobe XD", "LinkedIn Learning · يناير 2021"],
          ["Customer Experience: Journey Mapping", "LinkedIn Learning · أغسطس 2020"],
          ["UX Foundations: Interaction Design", "LinkedIn Learning · مايو 2020"],
        ],
        training: ["تدريب تصميم وتطوير الويب", "IBM Education Services · 2007"],
        educationTitle: "التعليم",
        education: ["بكالوريوس التربية الرياضية", "جامعة الأزهر · 2009"],
        languagesTitle: "اللغات",
        languages: ["العربية — اللغة الأم", "الإنجليزية — كفاءة مهنية في العمل"],
        certificationsLink: "عرض كل الشهادات",
        toolsTitle: "الأدوات والقدرات",
        relatedTitle: "استكشف الخبرة ذات الصلة",
        videoTitle: "لمحة عن خلفيتي ونهجي",
      }
    : {
        eyebrow: "About",
        title: "Designing better digital experiences. Leading the systems behind them.",
        description:
          "UX Design Lead with 19+ years in digital design. I bridge UX design and front-end development, turning complex design systems into reusable, responsive, and accessible interfaces built with HTML, CSS, SCSS, and JavaScript for government and enterprise platforms in Riyadh.",
        projectsButton: "View projects",
        summaryEyebrow: "Professional overview",
        summaryTitle: "From web design in 2007 to UX and DesignOps leadership",
        pathLabel: "Path",
        path: ["Web Design", "UI/UX Design", "Enterprise Interface Development", "Design Systems", "DesignOps", "UX Leadership"],
        summary: [
          "I started in 2007 as a junior web designer, building pages by hand in HTML, and that habit never left. Through UI design for government and university clients, interface development at the National Housing Company, and UX leadership today, I have always worked on both sides of the handoff: design and implementation.",
          "Today I lead UX for an enterprise government platform of 14 systems, and a separate field app for mobile and web that brings selected services from those systems together, such as security cases and violations. These are Arabic-first, RTL products for complex operational workflows. I lead a multidisciplinary design team, set the standards external vendor teams design to, and own the design system that keeps all of that work consistent.",
          "What I care about is decisions that survive delivery. A design is only finished when it ships the way it was intended, so I put as much effort into tokens, documentation, reviews, and code as into the screens themselves.",
        ],
        stats: [
          ["19+", "Years in digital design, since 2007"],
          ["14", "Systems under one platform, on one design system"],
          ["3", "Platforms from other companies I am bringing onto the design system"],
        ],
        approachTitle: "How I lead",
        approach:
          "I make standards explicit and reviewable: one source of truth for components and tokens, a clear path for proposing changes, and design reviews before anything reaches developers. Then I check the build against the design, because quality is decided in implementation as much as in Figma.",
        leadershipEyebrow: "Leadership",
        leadershipTitle: "Leading quality across internal and external teams",
        leadershipIntro:
          "Two kinds of leadership, kept distinct: a multidisciplinary design team I lead directly, and vendor teams whose design work I direct and review, with design reviews, design QA, and shared component standards for everyone.",
        leadership: [
          {
            title: "Multidisciplinary design team",
            body: "I lead the internal design team across the platform's systems and its mobile and web apps: setting design direction, coordinating work, running design reviews and design QA before developer handoff, and holding UX/UI standards and design system use.",
          },
          {
            title: "External vendor teams",
            body: "I give design direction and feedback to designers at external vendor companies, review their deliverables for design system compliance, and align their work with the internal team's standards.",
          },
          {
            title: "Engineering & stakeholders",
            body: "I work with business analysts, developers, and QA on scope and handoff, and review the implementation with internal and vendor developers before release.",
          },
        ],
        frontendEyebrow: "Front-end",
        frontendTitle: "Frontend Development & Design-to-Code",
        frontendIntro:
          "I don't stop at Figma files. I write the code that turns the design system into real interfaces, and I review other teams' implementations against the spec. I'm not a full-stack engineer, but the front end is part of my daily work.",
        frontendStackLabel: "What I work with",
        frontendStack: ["HTML5", "CSS3", "SCSS/Sass", "JavaScript", "Bootstrap", "Vue.js"],
        frontend: [
          {
            title: "Semantic HTML structure",
            body: "Page and component markup built on proper headings, labels, and landmarks, with ARIA only where native elements are not enough.",
          },
          {
            title: "CSS & responsive layouts",
            body: "Grids and layouts that hold from wide data tables on desktop down to mobile screens.",
          },
          {
            title: "SCSS architecture",
            body: "A layered SCSS library (helpers, components, shared styles, and pages) compiled into one stylesheet, with 30+ component partials.",
          },
          {
            title: "JavaScript UI behavior",
            body: "Component interactions such as dialogs, image sliders, steppers, and file uploaders, written in JavaScript.",
          },
          {
            title: "Bootstrap-based interfaces",
            body: "Bootstrap as the layout and utility base, with the design system's own component classes on top.",
          },
          {
            title: "Design tokens in code",
            body: "236 SCSS variables for color, typography, spacing, radius, and shadows, matching the tokens in Figma.",
          },
          {
            title: "RTL & accessibility",
            body: "Arabic-first layouts where icons and separators mirror automatically in RTL, with accessibility notes in every component spec.",
          },
          {
            title: "Component consistency & front-end QA",
            body: "Reviewing internal and vendor implementations against the Figma spec, and documenting each component's Figma properties against its code API.",
          },
        ],
        frontendEvidence:
          "Where this shows up: the design system for an enterprise government platform, whose SCSS library I have written and maintained hands-on since 2023; UI kits and production pages at the National Housing Company (HTML, CSS, JavaScript, Vue.js); and university portals at Majmaah and Jazan.",
        expertiseEyebrow: "Core expertise",
        expertiseTitle: "Six areas I work in every day",
        expertise: [
          {
            title: "UX & product design leadership",
            body: "Setting design direction, running design reviews, and turning complex requirements into clear product decisions.",
          },
          {
            title: "Design systems architecture",
            body: "Token architecture in Figma variables, component APIs with variants and states, and documentation that designers and developers both use.",
          },
          {
            title: "DesignOps & governance",
            body: "Versioned releases, contribution and review workflows, breaking-change and exception policies, and release notes.",
          },
          {
            title: "Enterprise & government UX",
            body: "Dense, data-heavy workflows: case management, complex forms, data tables, heuristic evaluation, and information architecture.",
          },
          {
            title: "Product design for web and mobile",
            body: "End-to-end product UX for a web platform and its field mobile app, from information architecture to prototypes and release.",
          },
          {
            title: "Accessibility & RTL-first design",
            body: "Arabic-first interfaces with correct RTL mirroring, bilingual documentation, and WCAG 2.1 principles built into component specs.",
          },
        ],
        achievementsEyebrow: "Selected impact",
        achievementsTitle: "What I built, and what it changes",
        achievements: [
          {
            title: "An enterprise design system, created and owned",
            body: "Built across Figma components and tokens, a Bootstrap-based HTML/SCSS library, and a 38-page bilingual documentation site with a 4,371-icon library. I am the named owner, with final approval on changes and releases.",
          },
          {
            title: "Token architecture and component standards",
            body: "Tokens for color, typography, spacing, radius, and component states, with every component documented on one template: anatomy, states, Figma properties against the code API, accessibility, and RTL.",
          },
          {
            title: "Governance that extends to vendors",
            body: "Semantic versioning, a contribution review that needs one designer and one engineer approval, a breaking-change policy with migration guidance, and a partner handover workflow so external teams build on approved components instead of local copies.",
          },
          {
            title: "Design and development in one loop",
            body: "I rebuild components in SCSS to match the Figma spec, retire duplicates without breaking screens already in production, and review implementation before release.",
          },
        ],
        timelineEyebrow: "Career timeline",
        timelineTitle: "19 years, from web design to UX leadership",
        timelineIntro:
          "Every role since 2007, with official titles and dates. Some periods overlap where freelance or contract work ran alongside another role.",
        progressionLabel: "Career progression",
        roleLabel: "Scope",
        credentialsEyebrow: "Credentials",
        credentialsTitle: "Certifications and education",
        certificationsTitle: "Professional certifications",
        certifications: [
          ["Design System Bootcamp", "Maven · Aug 2025"],
          ["PMI-ACP, Agile Certified Practitioner", "PMI · Aug 2022"],
          ["Google UX Design Professional Certificate", "Google / Coursera · Aug 2022"],
          ["Creating a Design System with Adobe XD", "LinkedIn Learning · Jan 2021"],
          ["Customer Experience: Journey Mapping", "LinkedIn Learning · Aug 2020"],
          ["UX Foundations: Interaction Design", "LinkedIn Learning · May 2020"],
        ],
        training: ["Web Design & Development Training", "IBM Education Services · 2007"],
        educationTitle: "Education",
        education: ["Bachelor of Physical Education", "Al-Azhar University · 2009"],
        languagesTitle: "Languages",
        languages: ["Arabic — Native", "English — Professional working proficiency"],
        certificationsLink: "View all certifications",
        toolsTitle: "Tools and capabilities",
        relatedTitle: "Explore related expertise",
        videoTitle: "A short overview of my background and approach",
      };

const NumberedList = ({ items }) =>
  items.map((item, index) => (
    <article key={item.title}>
      <span>{String(index + 1).padStart(2, "0")}</span>
      <h3>{item.title}</h3>
      <p>{item.body}</p>
    </article>
  ));

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
        actionsSlot={<ResumeModal />}
        actions={[
          {
            href: "/projects",
            label: copy.projectsButton,
            variant: "ghost",
          },
        ]}
      />

      <div className="about-page">
        <section className="about-overview" aria-labelledby="about-summary-title">
          <div className="about-overview__summary">
            <p className="portfolio-eyebrow">{copy.summaryEyebrow}</p>
            <h2 id="about-summary-title">{copy.summaryTitle}</h2>
            <ol className="about-overview__path" aria-label={copy.pathLabel}>
              {copy.path.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
            {copy.summary.map((paragraph) => (
              <p className="about-overview__text" key={paragraph.slice(0, 24)}>
                {paragraph}
              </p>
            ))}
          </div>
          <div className="about-overview__aside">
            <dl className="about-stats">
              {copy.stats.map(([value, label]) => (
                <div key={value}>
                  <dt>{value}</dt>
                  <dd>{label}</dd>
                </div>
              ))}
            </dl>
            <aside className="about-overview__approach">
              <h3>{copy.approachTitle}</h3>
              <p>{copy.approach}</p>
            </aside>
          </div>
        </section>

        <section
          className="about-achievements about-achievements--three"
          aria-labelledby="about-leadership-title">
          <p className="portfolio-eyebrow">{copy.leadershipEyebrow}</p>
          <h2 id="about-leadership-title">{copy.leadershipTitle}</h2>
          <p className="about-achievements__intro">{copy.leadershipIntro}</p>
          <div className="about-achievements__grid">
            <NumberedList items={copy.leadership} />
          </div>
        </section>

        <section
          className="about-achievements about-frontend"
          aria-labelledby="about-frontend-title">
          <p className="portfolio-eyebrow">{copy.frontendEyebrow}</p>
          <h2 id="about-frontend-title">{copy.frontendTitle}</h2>
          <p className="about-achievements__intro">{copy.frontendIntro}</p>
          <div className="about-frontend__stack">
            <h3>{copy.frontendStackLabel}</h3>
            <ul>
              {copy.frontendStack.map((item) => (
                <li key={item} dir="ltr">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="about-achievements__grid">
            <NumberedList items={copy.frontend} />
          </div>
          <p className="about-frontend__evidence">{copy.frontendEvidence}</p>
        </section>

        <section className="about-achievements" aria-labelledby="about-expertise-title">
          <p className="portfolio-eyebrow">{copy.expertiseEyebrow}</p>
          <h2 id="about-expertise-title">{copy.expertiseTitle}</h2>
          <div className="about-achievements__grid">
            <NumberedList items={copy.expertise} />
          </div>
        </section>

        <section className="about-achievements" aria-labelledby="about-achievements-title">
          <p className="portfolio-eyebrow">{copy.achievementsEyebrow}</p>
          <h2 id="about-achievements-title">{copy.achievementsTitle}</h2>
          <div className="about-achievements__grid">
            <NumberedList items={copy.achievements} />
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

        <section className="about-credentials" aria-labelledby="about-credentials-title">
          <p className="portfolio-eyebrow">{copy.credentialsEyebrow}</p>
          <h2 id="about-credentials-title">{copy.credentialsTitle}</h2>
          <div className="about-credentials__grid">
            <div>
              <h3>{copy.certificationsTitle}</h3>
              <ul>
                {[...copy.certifications, copy.training].map(([name, meta]) => (
                  <li key={name}>
                    <span className="about-credentials__name">{name}</span>
                    <span className="about-credentials__meta">{meta}</span>
                  </li>
                ))}
              </ul>
              <Link href="/certifications" className="about-credentials__link">
                {copy.certificationsLink}
              </Link>
            </div>
            <div>
              <h3>{copy.educationTitle}</h3>
              <ul>
                <li>
                  <span className="about-credentials__name">{copy.education[0]}</span>
                  <span className="about-credentials__meta">{copy.education[1]}</span>
                </li>
              </ul>
              <h3>{copy.languagesTitle}</h3>
              <ul>
                {copy.languages.map((item) => (
                  <li key={item}>
                    <span className="about-credentials__name">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
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
            <Link href="/design-system-case-study">{isRTL ? "دراسة حالة نظام التصميم" : "Design system case study"}</Link>
            <Link href="/design-system">{isRTL ? "نظام التصميم" : "Design System"}</Link>
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
