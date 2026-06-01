import siteData from "../../data.json";

const baseUrl = "https://omarmokhtar.com";

const sourceProjects = Array.isArray(siteData?.Projects)
  ? siteData.Projects
  : [];
const sourceExperience = Array.isArray(siteData?.Experience)
  ? siteData.Experience
  : [];
const sourceCertifications = Array.isArray(siteData?.certifications)
  ? siteData.certifications
  : Array.isArray(siteData?.Certifications)
    ? siteData.Certifications
    : [];

const projectTranslations = {
  en: {
    1: {
      info: "Human Rights Commission (HRC) — Saudi Arabia",
      Issued: "Aug 2021 - Present",
      summary:
        "UX and UI modernization for a national government platform with a focus on clarity, service usability, and scalable interface patterns.",
      tags: ["Government Platform", "UX Leadership"],
    },
    2: {
      info: "Deanship of Information Technology",
      Issued: "Oct 2017 - Sep 2018",
      summary:
        "Information services platform improvements for university users, including interface refinement and front-end implementation support.",
      tags: ["University Platform", "Front-End Development"],
    },
    3: {
      info: "Mullak",
      Issued: "Mar 2019 - Present",
      summary:
        "Product experience work for a housing domain platform focused on streamlined workflows, data visibility, and service efficiency.",
      tags: ["Housing & Property", "Product Design"],
    },
    4: {
      info: "Idlelands",
      Issued: "Mar 2019 - Present",
      summary:
        "Service platform design for land and property-related processes, improving usability and decision support across core user journeys.",
      tags: ["Housing & Property", "Government Service"],
    },
    5: {
      info: "Majmaah University Portal",
      Issued: "Aug 2019 - Sep 2020",
      summary:
        "Unified student portal experience combining multiple academic services into one accessible dashboard for daily university tasks.",
      tags: ["University Platform", "Enterprise UX"],
    },
    6: {
      info: "Majmaah Charity",
      Issued: "May 2020 - Sep 2020",
      summary:
        "Digital platform design for a nonprofit organization with a focus on clear content structure and approachable service access.",
      tags: ["Nonprofit", "UI Design"],
    },
    7: {
      info: "MU Greetings Card",
      Issued: "Jun 2016 - Sep 2017",
      summary:
        "Interactive web-based greetings tool designed for lightweight publishing and branded communication inside the university ecosystem.",
      tags: ["UI Design", "Front-End Development"],
    },
  },
  ar: {
    1: {
      info: "هيئة حقوق الإنسان (HRC) — المملكة العربية السعودية",
      Issued: "أغسطس 2021 – الآن",
      summary:
        "تحديث تجربة وواجهة منصة حكومية وطنية مع التركيز على الوضوح، وسهولة استخدام الخدمات، وبناء أنماط واجهة قابلة للتوسع.",
      tags: ["منصة حكومية", "قيادة UX"],
    },
    2: {
      info: "عمادة تقنية المعلومات",
      Issued: "أكتوبر 2017 – سبتمبر 2018",
      summary:
        "تحسين تجربة منصة خدمات تقنية المعلومات لقطاع الجامعة، مع تطوير الواجهة ودعم التنفيذ على الواجهة الأمامية.",
      tags: ["منصة جامعية", "تطوير الواجهة الأمامية"],
    },
    3: {
      info: "ملّاك",
      Issued: "مارس 2019 – الآن",
      summary:
        "عمل تصميمي لمنتج رقمي في مجال الإسكان يركز على تبسيط الإجراءات، ووضوح البيانات، ورفع كفاءة تنفيذ الخدمات.",
      tags: ["إسكان وعقار", "تصميم المنتج"],
    },
    4: {
      info: "الأراضي البيضاء",
      Issued: "مارس 2019 – الآن",
      summary:
        "تصميم منصة خدمات مرتبطة بالأراضي والعقار لتحسين سهولة الاستخدام ودعم اتخاذ القرار عبر رحلات المستخدم الأساسية.",
      tags: ["إسكان وعقار", "خدمة حكومية"],
    },
    5: {
      info: "بوابة جامعة المجمعة",
      Issued: "أغسطس 2019 – سبتمبر 2020",
      summary:
        "تجربة بوابة طلابية موحّدة تجمع عدة خدمات أكاديمية في لوحة واحدة سهلة الوصول للاستخدام اليومي داخل الجامعة.",
      tags: ["منصة جامعية", "UX المؤسسي"],
    },
    6: {
      info: "جمعية المجمعة الخيرية",
      Issued: "مايو 2020 – سبتمبر 2020",
      summary:
        "تصميم منصة رقمية لجهة غير ربحية مع التركيز على تنظيم المحتوى بوضوح وإتاحة الوصول إلى الخدمات بشكل مريح.",
      tags: ["منظمة غير ربحية", "تصميم UI"],
    },
    7: {
      info: "بطاقة تهاني جامعة المجمعة",
      Issued: "يونيو 2016 – سبتمبر 2017",
      summary:
        "أداة ويب تفاعلية لبطاقات التهنئة، مصممة للنشر السريع والتواصل البصري المتسق ضمن بيئة الجامعة الرقمية.",
      tags: ["تصميم UI", "تطوير الواجهة الأمامية"],
    },
  },
};

const experienceTranslations = {
  en: {
    1: {
      date: "July 2025 - Present",
      jobtitle: "UX & DesignOps Lead",
      companyname: "Confidential Government",
      role: `Lead UX and DesignOps across a large-scale government enterprise platform, setting standards for UX processes, design governance, and system-wide consistency. Responsible for the creation and ongoing evolution of a scalable design system — ensuring accessibility and alignment across all digital products.

Work closely with product owners, business analysts, developers, and QA to translate complex requirements into clear, actionable design specifications. Oversee the full delivery cycle through design reviews, handoff, UX quality assurance, and UAT validation.

Collaborate directly with the development team on front-end implementation using HTML, CSS, and JavaScript — bridging design intent with production-quality delivery.`,
    },
    2: {
      date: "Jan 2025 - July 2025",
      jobtitle: "UI/UX Designer",
      companyname: "Confidential Government",
      role: `Contributed to the UX improvement process for an enterprise platform and companion mobile application. Built core components of the platform's design system and collaborated with business analysts, developers, and QA to ensure accurate implementation of UX and UI specifications.

Worked alongside the development team on page rebuilds using HTML, CSS, and JavaScript to maintain design fidelity across key interfaces.`,
    },
    3: {
      date: "Feb 2019 - Dec 2022",
      jobtitle: "UI/UX Designer",
      companyname: "National Housing Company (NHC)",
      role: "Designed wireframes, prototypes, and UI kits for web platforms serving national housing stakeholders. Delivered front-end implementation in HTML, CSS, JavaScript, and Vue.js. Collaborated with analysts, developers, and QA throughout the delivery lifecycle to ensure specifications were met with accuracy.",
    },
    4: {
      date: "2021 - 2022",
      jobtitle: "UI/UX Designer",
      companyname: "Human Rights Commission (HRC) — Freelance",
      role: `Led UX and UI efforts within a four-person team to redesign the Human Rights Commission's public platform over five months. Accountable for layout redesign, experience improvement, and prototyping — from early sketches through high-fidelity deliverables.

Collaborated with the development team on page rebuilds using HTML, Vue.js, and JavaScript.`,
    },
    5: {
      date: "Mar 2016 - Feb 2019",
      jobtitle: "UX/UI Engineer",
      companyname: "Al-Majma’ah University",
      role: "UX/UI designer and front-end developer for the university e-portal unit. Translated student and staff needs into digital solutions, collaborated with analysts, developers, and QA throughout the delivery lifecycle, and maintained close communication with academic stakeholders on product improvements and new requirements.",
    },
    6: {
      date: "Nov 2013 - Feb 2016",
      jobtitle: "UI Designer",
      companyname: "SURE International Technology - SURE",
      role: "Interface designer delivering digital solutions for government agencies and educational institutions — including the National Guard, Shaqra University, and the Saudi Food and Drug Authority. Worked within a collaborative design team across front-end implementation using HTML and CSS.",
    },
    7: {
      date: "May 2012 - 2013",
      jobtitle: "UX/UI Designer-Developer",
      companyname: "Jazan University",
      role: "UX/UI designer and front-end developer for the university e-portal unit. Gathered student and staff requirements, collaborated with analysts, developers, and QA to ensure delivery met specifications, and engaged stakeholders on product enhancements and new feature requests.",
    },
  },
  ar: {
    1: {
      date: "يوليو 2025 – الآن",
      jobtitle: "قائد تجربة المستخدم وعمليات التصميم",
      companyname: "جهة حكومية",
      role: `بصفتي قائد تجربة المستخدم وعمليات التصميم، أقود تحسين تجربة المستخدم الشاملة عبر المنصات المؤسسية وتطبيقات الجوال من خلال وضع عمليات، معايير، وحوكمة UX. أقود إنشاء وتطوير نظام تصميم قابل للتوسع يضمن الاتساق وقابلية الوصول والتوافق عبر جميع المنتجات الرقمية.

أتعاون عن قرب مع محللي الأعمال ومالكي المنتجات والمطورين وفرق ضمان الجودة لتحويل المتطلبات المعقدة إلى مخرجات تصميمية واضحة وقابلة للتنفيذ. أدعم دورة التسليم عبر مراجعات التصميم، وتسليم التطوير، وضمان جودة UX، واختبارات القبول للتأكد من تنفيذ دقيق يتماشى مع نية التصميم.

كما أتعاون مع فريق التطوير في إعادة بناء وتحسين واجهات المنصة باستخدام HTML وCSS وJavaScript لضمان الجدوى التقنية، ودقة التصميم، وجودة التسليم.`,
    },
    2: {
      date: "يناير 2023 – يوليو 2025",
      jobtitle: "مصمم واجهات وتجربة المستخدم",
      companyname: "جهة حكومية",
      role: `شاركت في تحسين تجربة المستخدم لمنصة مؤسسية وتطبيق جوال مرافق. ساهمت في بناء مكونات أساسية لنظام التصميم، وتعاونت مع محللي الأعمال والمطورين وضمان الجودة لضمان تطوير المنتج وفق مواصفات تجربة وواجهة المستخدم.

كما تعاونت مع فريق التطوير في إعادة بناء الصفحات الأساسية باستخدام HTML وCSS وJavaScript لضمان تطابق التصميم وجودة التنفيذ.`,
    },
    3: {
      date: "فبراير 2019 – ديسمبر 2022",
      jobtitle: "مصمم واجهات وتجربة المستخدم",
      companyname: "الشركة الوطنية للإسكان (NHC)",
      role: "مصمم واجهات وتجربة المستخدم يركز على رسم الهياكل السلكية، والنمذجة الأولية، وتطوير الواجهة الأمامية (HTML، CSS، JavaScript، Vue.js). أنشأت مجموعات واجهات وحلولًا تصميمية للمنصات، وتعاونت بشكل وثيق مع المحللين والمطورين وضمان الجودة لضمان التنفيذ وفق مواصفات UX وUI.",
    },
    4: {
      date: "2021 – 2022",
      jobtitle: "مصمم واجهات وتجربة المستخدم",
      companyname: "هيئة حقوق الإنسان في السعودية (عمل حر)",
      role: `قدت جهود UX/UI ضمن فريق مكوّن من 4 أفراد وأنجزنا المشروع خلال 5 أشهر. توليت إعادة تصميم التخطيطات وتحسين تجربة المستخدم عبر الرسومات السريعة، والهياكل السلكية، والنماذج الأولية.

تعاونت مع فريق التطوير لإعادة بناء الصفحات باستخدام HTML وVue.js وJavaScript.`,
    },
    5: {
      date: "مارس 2016 – فبراير 2019",
      jobtitle: "مهندس واجهات وتجربة المستخدم",
      companyname: "جامعة المجمعة",
      role: "مهندس واجهات وتجربة المستخدم بخبرة في تطوير الواجهة الأمامية (HTML، CSS، JavaScript) والتصميم المرئي ضمن وحدة البوابة الإلكترونية. ترجمت احتياجات الطلاب والموظفين إلى حلول رقمية، وتعاونت مع المحللين والمطورين وضمان الجودة، وتواصلت مع أصحاب المصلحة حول التحسين المستمر والاحتياجات الجديدة.",
    },
    6: {
      date: "نوفمبر 2013 – فبراير 2016",
      jobtitle: "مصمم واجهات",
      companyname: "شركة شور العالمية للتقنية (SURE)",
      role: "مصمم واجهات (HTML، CSS) عملت ضمن فريق التصميم لتقديم حلول لجهات حكومية وجامعات، بما في ذلك الحرس الوطني وجامعة شقراء وهيئة الغذاء والدواء.",
    },
    7: {
      date: "مايو 2012 – 2013",
      jobtitle: "مصمم ومطور واجهات وتجربة المستخدم",
      companyname: "جامعة جازان",
      role: "مصمم ومطور واجهات وتجربة المستخدم عمل على رسم الهياكل السلكية، وتطوير الواجهة الأمامية (HTML، CSS، JavaScript)، والتصميم المرئي لوحدة البوابة الإلكترونية. حددت احتياجات الطلاب والموظفين، وتعاونت مع المحللين والمطورين وضمان الجودة لضمان تلبية المتطلبات، وتواصلت مع أصحاب المصلحة لتحسين المنتجات وتطوير أفكار جديدة.",
    },
  },
};

const certificationTranslations = {
  en: {
    1: {
      info: "Design System Bootcamp",
      Issued: "Issued Aug 8, 2025 · No Expiration Date",
      skills: [
        "Design Tokens",
        "Figma Variables",
        "Component Architecture",
        "Design System Governance",
        "Documentation",
        "DesignOps",
        "Design System Adoption",
      ],
    },
    2: {
      info: "Google UX Design Professional Certificate",
      Issued: "Issued Aug 2022 · No Expiration Date",
      skills: [
        "User Research",
        "Personas",
        "User Journeys",
        "Information Architecture",
        "Wireframing",
        "Prototyping",
        "Usability Testing",
        "User-Centered Design",
      ],
    },
    3: { info: "PMI-ACP", Issued: "Issued Sep 2022 · No Expiration Date" },
    4: {
      info: "Creating a Design System with Adobe XD",
      Issued: "Jan 2021",
    },
    5: {
      info: "Customer Experience: Journey Mapping",
      Issued: "Aug 2020",
    },
    6: {
      info: "Git Essential Training: The Basics",
      Issued: "Aug 2020",
    },
    7: { info: "Learning Adobe XD", Issued: "Aug 2020" },
    8: { info: "Learning webpack 4", Issued: "Aug 2020" },
    9: { info: "UX Foundations: Interaction Design", Issued: "May 2020" },
    10: { info: "Interaction Design: Structure", Issued: "Apr 2020" },
    11: { info: "Sass Essential Training", Issued: "Apr 2020" },
  },
  ar: {
    1: {
      info: "معسكر نظام التصميم",
      Issued: "صادرة في 8 أغسطس 2025 · بدون تاريخ انتهاء",
      skills: [
        "توكنات التصميم",
        "متغيرات Figma",
        "بنية المكونات",
        "حوكمة نظام التصميم",
        "التوثيق",
        "عمليات التصميم",
        "تبني نظام التصميم",
      ],
    },
    2: {
      info: "شهادة جوجل المهنية في تصميم تجربة المستخدم",
      Issued: "صادرة في أغسطس 2022 · بدون تاريخ انتهاء",
      skills: [
        "أبحاث المستخدم",
        "شخصيات المستخدم",
        "رحلات المستخدم",
        "معمارية المعلومات",
        "الإطارات الشبكية",
        "النمذجة الأولية",
        "اختبار سهولة الاستخدام",
        "التصميم المتمحور حول المستخدم",
      ],
    },
    3: {
      info: "شهادة PMI-ACP",
      Issued: "صادرة في سبتمبر 2022 · بدون تاريخ انتهاء",
    },
    4: {
      info: "إنشاء نظام تصميم باستخدام Adobe XD",
      Issued: "يناير 2021",
    },
    5: {
      info: "تجربة العميل: رسم رحلة العميل",
      Issued: "أغسطس 2020",
    },
    6: {
      info: "تدريب أساسيات Git: الأساسيات",
      Issued: "أغسطس 2020",
    },
    7: { info: "تعلّم Adobe XD", Issued: "أغسطس 2020" },
    8: { info: "تعلّم Webpack 4", Issued: "أغسطس 2020" },
    9: { info: "أساسيات تجربة المستخدم: تصميم التفاعل", Issued: "مايو 2020" },
    10: { info: "تصميم التفاعل: الهيكلة", Issued: "أبريل 2020" },
    11: { info: "تدريب أساسيات Sass", Issued: "أبريل 2020" },
  },
};

const localizeCollection = (source = [], translationsById = {}) =>
  (Array.isArray(source) ? source : []).map((item) => ({
    ...item,
    ...(translationsById[item?.id] ?? {}),
  }));

const localizedData = {
  en: {
    projects: localizeCollection(sourceProjects, projectTranslations.en),
    experience: localizeCollection(sourceExperience, experienceTranslations.en),
    certifications: localizeCollection(
      sourceCertifications,
      certificationTranslations.en,
    ),
  },
  ar: {
    projects: localizeCollection(sourceProjects, projectTranslations.ar),
    experience: localizeCollection(sourceExperience, experienceTranslations.ar),
    certifications: localizeCollection(
      sourceCertifications,
      certificationTranslations.ar,
    ),
  },
};

export const translations = {
  en: {
    nav: {
      links: {
        home: "Home",
        about: "About",
        certifications: "Certifications",
        work: "Projects",
        caseStudy: "Case Studies",
        casebook: "Design System",
        blog: "Blog",
        recommendations: "Recommendations",
        contact: "Contact",
        governmentUx: "Government UX",
        designopsNav: "DesignOps",
        uxLead: "UX Leadership",
      },
      more: "More",
      moreMenuAria: "Open more navigation links",
      brand: "UX & DesignOps Lead",
      logoAlt: "Omar Mokhtar personal logo",
      languageToggleButton: "العربية",
      languageToggleAria: "Switch language to Arabic",
      mobileMenu: {
        label: "Main navigation",
        open: "Open menu",
        close: "Close menu",
      },
    },
    footer: {
      madeWithLove: "© Omar Mokhtar — Designed and built from scratch",
      ariaLabel: "Visit Omar Mokhtar personal website",
    },
    loader: {
      loading: "Loading…",
    },
    audio: {
      playLabel: "Play audio introduction",
      pauseLabel: "Pause audio introduction",
      playButton: "Listen to My Summary",
      pauseButton: "Stop",
      fallbackText: "Your browser does not support audio playback.",
      cardTitle: "🎙️ About Omar Mokhtar",
      cardDesc:
        "Listen to a short introduction covering my experience in UX leadership, Design Systems, DesignOps, and government digital products.",
      collapseLabel: "Minimize audio player",
      expandLabel: "Expand audio player",
    },
    home: {
      hero: {
        role: "UX/UI Design Lead & DesignOps Practitioner — Saudi Arabia",
        certificationBadge: "Google UX Design Professional Certificate Holder",
        certificationTitle: "Google UX Design Professional Certificate",
        certVerified: "Verified",
        downloadButton: "Download Resume",
        downloadTitle: "Download Omar Mokhtar resume",
        resumeSubtext: "Available in PDF and Word formats",
        resumeOptionPdf: "Download PDF Resume",
        resumeOptionDocx: "Download Word Resume (.docx)",
      },
      paragraphs: [
        {
          text: "Over 19 years of UX practice in Saudi Arabia across government, education, and national housing — specializing in enterprise platforms, design systems, DesignOps, and product delivery.",
          tooltip:
            "Over 19 years of UX practice in Saudi Arabia across government, education, and national housing — specializing in enterprise platforms, design systems, DesignOps, and product delivery.",
        },
        {
          text: "I lead UX strategy and design governance, build scalable design systems, and work across the full delivery lifecycle — from discovery to production handoff — in close collaboration with product, engineering, and business teams.",
          tooltip:
            "I lead UX strategy and design governance, build scalable design systems, and work across the full delivery lifecycle — from discovery to production handoff — in close collaboration with product, engineering, and business teams.",
        },
      ],
      focusAreas: [
        "UX Leadership",
        "Design Systems",
        "DesignOps",
        "Government UX",
        "Product Design",
      ],
      stats: [
        { value: "19+", label: "Years Experience" },
        { value: "Government", label: "UX Specialist" },
        { value: "14+", label: "Products Delivered" },
        { value: "Cross-Functional", label: "Collaboration" },
      ],
      social: {
        behance: "Visit Omar Mokhtar on Behance",
        github: "Visit Omar Mokhtar on GitHub",
        linkedin: "Visit Omar Mokhtar on LinkedIn",
        email: "Send an email to Omar Mokhtar",
      },
      imageAlt: "Portrait of Omar Mokhtar",
    },
    about: {
      title: "About",
      downloadButton: "Download Resume",
      downloadTitle: "Download Omar Mokhtar resume",
      videoLink: "Watch a brief overview of my background and approach.",
      emptyExperience: "Experience data is currently unavailable.",
      certificationsTeaserTitle: "Professional Certifications",
      certificationsTeaserText:
        "Explore selected certifications covering UX Design, Design Systems, DesignOps, User Research, and Digital Product Design.",
      certificationsTeaserCta: "View Certifications",
    },
    certifications: {
      title: "Professional Certifications",
      description:
        "Industry-recognized certifications covering UX Design, Design Systems, DesignOps, User Research, and Digital Product Design.",
      pageIntro:
        "Professional certifications that strengthen my work across UX Design, Design Systems, DesignOps, User Research, and digital product design.",
      featuredTitle: "Featured Certifications",
      featuredBadge: "Featured",
      noExpiration: "No Expiration Date",
      allTitle: "Additional Certifications",
      skillsLabel: "Skills covered",
      showCredential: "View Credential",
      showCredentialTitle: "View credential in a new tab",
      emptyState:
        "Certifications will appear here once fresh data is available.",
    },
    tools: {
      title: "Tools",
    },
    blog: {
      byLine: "By Omar Mokhtar",
      ctaText: "Read Original LinkedIn Post",
      positiveLabel: "Positives:",
      negativeLabel: "Limitations:",
      posts: [
        {
          id: "levels",
          title:
            "Pity, Empathy, and Sympathy: Important Terms in User Experience",
          heroImageAlt:
            "Pity, Empathy, and Sympathy in UX Design - Understanding user experience design principles and emotional responses in design thinking",
          intro: [
            'Important Terms in User Experience. In defining the terms, we saw that they are very similar to what was mentioned in the hadith of the Prophet, may God bless him and grant him peace, "Whoever among you sees an evil, let him change it with his hand; if he is unable to do so, then with his tongue; if he is unable to do so, then with his heart, and that is the weakest of faith." We see clear guidance from our master the Prophet in dealing with problems.',
            "How do we connect them together? Let's come to the definitions:",
          ],
          definitions: [
            {
              heading: "1. Pity",
              lines: [
                "Pity means noticing a problem or difficulty and feeling sorry for it but not taking action to solve it; it is just pity.",
                'This is similar to "in your heart," in which the hadith is described as the weakest level of response.',
                "In user experience, pity doesn't make a big difference.",
              ],
              example:
                "Example: If a designer notices that users are having difficulty using an application but doesn't do anything about it, that's just compassion.",
            },
            {
              heading: "2. Empathy",
              lines: [
                "Empathy is understanding the problem and feeling sad or concerned for the person suffering from it, and trying to talk about it or take small steps to address it.",
                'This is similar to "change by the tongue" as in hadith.',
                "In UX, this means that the designer listens to the user's feedback and makes some adjustments, but these adjustments may not solve the problem entirely.",
              ],
              example:
                "UX example: The designer listens to the user's complaints and makes small changes to the interface to make it easier, but these changes may be superficial or insufficient.",
            },
            {
              heading: "3. Sympathy",
              lines: [
                "Sympathy is the highest level of responsiveness.",
                "It means not only understanding the problem but also putting yourself in the user's shoes and feeling what they feel.",
                'This is similar to "change by the hand," the most powerful level of action mentioned in hadith.',
                "In UX, empathy is what drives the designer to completely redesign the experience to better meet the users' needs and solve their problems comprehensively.",
              ],
              example:
                "UX example: The designer conducts deep research, tests the product as users do, and completely redesigns the application to solve all the problems that users face.",
            },
          ],
          conclusion: [
            {
              term: "Pity:",
              detail:
                'Just noticing the problem and feeling bad without taking action. This is similar to "change by the heart."',
            },
            {
              term: "Empathy:",
              detail:
                'Understanding the problem and trying to make small improvements. This is similar to "change by the tongue."',
            },
            {
              term: "Sympathy:",
              detail:
                'Deeply engaging with the problem and solving it from the ground up. This is like "hand-shifting."',
            },
          ],
          closing: [
            'As the hadith indicates, "change by hand" is the strongest form of action. In UX, empathy enables designers to deliver better experiences because it drives a deeper understanding of user needs and root causes.',
            "Ultimately, to be successful UX designers, we must aim for work to deliver effective solutions rather than merely offering distant sympathy or pity.",
          ],
          arabicQuote: [
            "(وما ينطق عن الهوى، إن هو إلا وحي يوحى)",
            "صلي الله عليه وسلم",
          ],
          ctaAria: "Read the original LinkedIn post about empathy levels in UX",
          ctaHref:
            "https://www.linkedin.com/posts/omarmokhtar22_ux-activity-7249664621257641984-Hwtv?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAyBkfYBusmou5-gf08ENyka9h55cIflNbw",
        },
        {
          id: "svg",
          title: "SVG in Web Development: Three Methods Compared",
          heroImageAlt:
            "SVG in Web Development - Three methods comparison for scalable vector graphics implementation in modern web projects",
          intro: [
            "As a UI/UX designer, I had an interesting discussion with our .NET and front-end developer about the best ways to use SVG in our web projects. After this, I decided to show them the differences between the three methods of using SVG.",
          ],
          methods: [
            {
              heading: "1. SVG as Inline Code in HTML",
              positives: [
                "Direct Embedding: You can put SVG directly into your HTML using the <svg> tag. This is good for small icons or graphics.",
                "Easy Styling: You can change the look of SVGs with CSS and JavaScript.",
                "Faster Loading: It can reduce the number of files the browser needs to load.",
              ],
              negatives: [
                "Bigger HTML File: Large SVGs can make your HTML file bigger.",
                "Complex HTML: Having many SVGs in HTML can make it hard to read and manage.",
              ],
            },
            {
              heading: "2. SVG as an Image",
              positives: [
                "Separate Files: Using the <img> tag with SVG keeps your HTML clean.",
                "Browser Caching: The browser can save SVG files, so it loads faster next time.",
                "Easy to Use: Simple to add to your web page.",
              ],
              negatives: [
                "Extra Request: The browser needs to load the SVG file separately, which can take a bit more time.",
                "Less Flexible: You can't easily style or interact with the SVG like you can with inline SVG.",
              ],
            },
            {
              heading: "3. SVG as a Font (Icon Fonts)",
              positives: [
                "Scalable Icons: SVG fonts are great for icons that can change size without losing quality.",
                "CSS Styling: You can change the color and size of SVG fonts with CSS.",
                "Text-like Behavior: SVG fonts work like text, so they are easy to align and position.",
              ],
              negatives: [
                "Single Color: SVG fonts usually only support one color.",
                "Accessibility Issues: SVG fonts are treated as text by screen readers, which can be tricky for accessibility.",
              ],
            },
          ],
          conclusion: [
            "Inline SVG: Best for small icons and when you need full CSS/JS control, but can make HTML larger.",
            "SVG as Image: Good for clean HTML and browser caching, but less flexible for styling.",
            "SVG Fonts: Great for scalable icons with CSS styling, but limited to single color and accessibility issues.",
          ],
          closing: [
            "Each method has its own benefits and drawbacks. The choice depends on your specific project needs, performance requirements, and design goals. Understanding these differences helps make better decisions when implementing SVG in web projects.",
          ],
          ctaAria: "Read the original LinkedIn post comparing SVG methods",
          ctaHref:
            "https://www.linkedin.com/posts/omarmokhtar22_as-a-uiux-designer-i-had-an-interesting-activity-7219603541919682560-xFKF?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAyBkfYBusmou5-gf08ENyka9h55cIflNbw",
        },
      ],
    },
    projects: {
      title: "Projects",
      description: [
        "Each project brought distinct constraints — from national government platforms to university portals — requiring systems thinking, stakeholder alignment, and delivery focus.",
        "Across every engagement, the goal was consistent: coherent, accessible, and production-ready design that holds up in real-world conditions.",
      ],
      descriptionTooltip:
        "Each project brought distinct constraints — from national government platforms to university portals — requiring systems thinking, stakeholder alignment, and delivery focus. Across every engagement, the goal was consistent: coherent, accessible, and production-ready design that holds up in real-world conditions.",
      caseStudy: {
        title: "Student Internal Portal",
        intro:
          "Majmaah University set out to consolidate fragmented student services into a single, unified portal. The challenge was designing an experience that reduced friction across a wide range of academic workflows for thousands of daily users.",
        tooltip:
          "Majmaah University set out to consolidate fragmented student services into a single, unified portal. The challenge was designing an experience that reduced friction across a wide range of academic workflows for thousands of daily users.",
        features: [
          "Single sign-on",
          "Providing more than 15 services",
          "View the news and events announced by the university",
          "Quick access: Submit applications across the various systems of the university and collect them in one place.",
          "Review their classes and exam schedules.",
        ],
        closing:
          "The portal consolidated critical student services into a single, accessible entry point — replacing multiple disconnected systems with a coherent and scalable experience.",
        button: "Review Case Study",
        buttonAria: "Read the full case study for the student internal portal",
        coverAlt: "Case study cover",
      },
      caseStudyExternal: {
        text: "View live prototype",
        aria: "Open the student portal live prototype in a new tab",
      },
      moreProjectsTitle: "Additional Projects",
      linkedInButton: {
        text: "View more on LinkedIn",
        aria: "Open Omar Mokhtar LinkedIn profile for additional projects",
      },
      projectCtaLabel: "View Project Details",
      projectTagsAria: "Project tags for {{project}}",
      projectLinkAria: "Open {{project}} project details in new tab",
    },
    caseStudyPage: {
      iframeTitle: "Figma case study",
      back: "Back to Projects",
      backAria: "Back to the projects page",
      checkWebsite: "View Live Student Portal Prototype",
      checkWebsiteAria: "View the student portal live prototype",
      hero: {
        title: "Majmaah University Student Portal",
        subtitle:
          "A unified Arabic student portal — consolidating academic services, schedule access, and university systems into a single daily dashboard.",
        tags: ["UX Case Study", "University Portal", "RTL"],
        meta: [
          { label: "Role", value: "UX/UI Engineer" },
          { label: "Timeline", value: "Aug 2019 – Sep 2020" },
          { label: "University", value: "Majmaah University, KSA" },
        ],
        imageAlt: "Majmaah University Student Portal dashboard",
      },
      overview: {
        label: "Overview",
        h2: "What this project was about",
        body1:
          "Majmaah University students were managing their academic lives across several disconnected systems — a separate login for Blackboard, another for exam booking, another for the library — with no central place to see their schedule or access services quickly.",
        body2:
          "This portal was designed to change that. The goal was one authenticated dashboard where a student could check their timetable, reach any university system, review personal and academic information, and handle administrative tasks — without switching between multiple sites or re-entering credentials.",
        body3:
          "I was responsible for the UX design and front-end implementation. The visual direction was deliberately kept soft and approachable — a teal and warm-orange palette, rounded cards, generous spacing — to avoid the heavy institutional feeling that government-facing systems tend to carry. Students spend real daily time in this portal, and it needed to feel like a useful tool rather than a formal system.",
        sidebarTitle: "What the portal covers",
        bullets: [
          "Academic schedule — interactive, time-based, clickable",
          "Quick access to all university systems in one panel",
          "Exam booking and university applications",
          "Announcements, events, and news",
          "Personal and academic information via modal overlays",
          "Important contacts and a feedback form",
          "Single sign-on — one session for everything",
        ],
      },
      problem: {
        label: "The Problem",
        h2: "What needed to change",
        intro:
          "The starting point was clear: students were doing too much work just to complete routine academic tasks. The friction wasn't in any single system — it was in the space between them.",
        cards: [
          {
            title: "Disconnected university systems",
            body: "Blackboard, the library, exam booking, and transportation required separate logins and separate navigation. Every routine task started with a context switch.",
          },
          {
            title: "No central place for the schedule",
            body: "The timetable — the most-checked piece of information in a student's day — required several steps to reach and wasn't connected to any other service.",
          },
          {
            title: "No mobile-friendly experience",
            body: "Students are constantly on their phones, especially between classes. The existing systems weren't built for small screens or touch interaction.",
          },
          {
            title: "No visual priority in information",
            body: "Critical tasks and passive content appeared at the same visual weight. Exam deadlines looked identical to general university news.",
          },
        ],
      },
      persona: {
        label: "Student Persona",
        h2: "Who I was designing for",
        intro:
          "Every decision in the portal traces back to a clear picture of who actually uses it and when. The profile below represents the typical daily pattern the design was built around.",
        name: "فيصل — Faisal",
        age: "21 · Computer Science · 3rd year",
        desc: "Faisal uses his phone for almost everything. He checks his schedule first thing in the morning, usually before getting out of bed. Between classes he quickly looks up exam dates or checks his GPA. He doesn't browse — he arrives at the portal with a specific task and wants it done in under a minute.",
        needsHeading: "What he needs",
        needs: [
          "See today's schedule without navigating into a sub-section",
          "Access Blackboard without a separate login",
          "Check his GPA and academic standing quickly",
          "Know his exam date without opening another system",
          "Submit an application without visiting the registrar",
        ],
        slowedHeading: "What slowed him down before",
        slowed: [
          "Seven separate systems, all with different logins",
          "The schedule lived inside the academic system, several clicks in",
          "Important announcements looked the same as general news",
          "Nothing worked properly on his phone",
          "No single place to find contact numbers or submit feedback",
        ],
      },
      uxDecisions: {
        label: "UX Decisions",
        h2: "How the portal was designed to work",
        intro:
          "Each decision below addresses a specific aspect of how students interact with academic services daily — from how the schedule is structured to how information surfaces without requiring navigation.",
        items: [
          {
            title: "The schedule was built as a real time-based grid",
            body: "Rather than displaying courses as a plain list, the schedule was implemented as a positioned time grid — courses appear as cards placed vertically according to their actual start and end times, across a five-day week view. Students can see duration, gaps between classes, and day structure at a glance. Color coding differentiates courses visually without requiring labels. The cards use soft rounded corners and consistent padding, keeping the grid readable without feeling like a spreadsheet.",
          },
          {
            title:
              "Clicking a course opens a modal that animates from the event itself",
            body: "When a student taps on a course card, the detail modal opens with a smooth animation that originates from the card position — on desktop, it scales from the event; on mobile, it slides up. This spatial relationship makes the interaction feel connected rather than disjointed. Course details — instructor, room, absences, and monthly grades — are all inside the modal. Pressing ESC or tapping the backdrop closes it and returns the student to exactly where they were in the schedule.",
          },
          {
            title:
              "Personal and academic information surface from a profile card",
            body: "A persistent student card in the sidebar holds two clearly labelled buttons — one for personal information, one for academic standing. Personal details (student ID, college, balance) and academic details (GPA, level, hall, warnings, advisor) each open as separate modals. Students who need their student ID for a form, or want to check their GPA quickly, get that in one tap from the same card they see every time they open the portal. No navigation to a profile page required.",
          },
          {
            title:
              "All university systems were consolidated into one access panel",
            body: "Seven university systems — Blackboard, the digital library, transportation, exam booking, the academic system, email, and committees — are presented as a visual grid of icon-and-label cards. Each card uses a subtle neumorphic shadow that depresses on hover, giving tactile feedback on both mouse and touch. Students see all available systems at the same level, scan to what they need, and tap once. The session is already authenticated — no separate login, no context switching to a different tab.",
          },
          {
            title: "RTL was the primary layout direction, not an adaptation",
            body: "The portal is built for Arabic-speaking students and Arabic is set as the foundational layout direction — direction:rtl at the body level, not applied section by section. The 29LT Bukra font handles Arabic script at all weights with proper readability at small sizes. Carousels are configured with rtl:true so slide order and swipe direction both behave correctly. Navigation, modal positioning, and reading flow all follow Arabic convention naturally rather than being mirrored from an LTR version.",
          },
          {
            title:
              "Announcements, events, and news are surfaced on the dashboard",
            body: "University announcements, upcoming events, and news are all visible from the main dashboard without requiring navigation to a dedicated section. Each is presented in a contained panel, visually separated from the schedule and systems areas by clear section spacing. The separation keeps the page organized even as content density increases — students can scan down the page and recognize which zone they are in without reading headers.",
          },
          {
            title:
              "Contacts and feedback are accessible at the end of one scroll",
            body: "Important university contact numbers are grouped in collapsible sections — students can expand the category they need (IT support, academic advising) without seeing every number at once. The feedback form sits directly below with a short, welcoming Arabic prompt. No navigation, no separate page — a student with a question or suggestion can submit it from the same session without breaking their workflow.",
          },
          {
            title: "Mobile behavior was built in from the start",
            body: "The schedule switches from a side-by-side day grid to a vertically stacked layout on small screens, keeping course information legible without horizontal scrolling. Scroll-triggered animations (AOS) are disabled below 800px to reduce frame cost on mobile devices. System cards and course cards are sized for touch — large enough to tap accurately without precision targeting. The layout uses a consistent grid that reflows cleanly at the main breakpoints rather than collapsing awkwardly.",
          },
        ],
      },
      features: {
        label: "Key Features",
        h2: "What the portal includes",
        intro:
          "The portal covers the full range of daily student needs — academic, administrative, and informational — in a single authenticated session. Features are grouped by context on the dashboard, so students can reach what they need by scanning down the page rather than navigating through menus.",
        items: [
          {
            icon: "🗓️",
            name: "Academic Schedule",
            note: "Time-based grid, color-coded courses, clickable cards with modal detail",
          },
          {
            icon: "👤",
            name: "Personal Information",
            note: "Modal overlay — student ID, college, scholarship balance",
          },
          {
            icon: "🎓",
            name: "Academic Information",
            note: "Modal overlay — GPA, level, hall, warnings, academic advisor",
          },
          {
            icon: "📚",
            name: "Blackboard",
            note: "One tap from the systems panel — authenticated session",
          },
          {
            icon: "🏛️",
            name: "Digital Library",
            note: "Direct access to research databases and academic resources",
          },
          {
            icon: "🚌",
            name: "University Transportation",
            note: "Bus routes and schedule information",
          },
          {
            icon: "📝",
            name: "Exam Booking",
            note: "Reserve exam seats without leaving the portal",
          },
          {
            icon: "📋",
            name: "University Applications",
            note: "Submit administrative requests from the dashboard",
          },
          {
            icon: "📢",
            name: "Announcements",
            note: "University-wide notices surfaced on the main dashboard",
          },
          {
            icon: "🎉",
            name: "Events & Activities",
            note: "Upcoming campus events and academic calendar",
          },
          {
            icon: "☎️",
            name: "Important Contacts",
            note: "Collapsible groups — IT, advising, admin — always reachable",
          },
          {
            icon: "💬",
            name: "Feedback",
            note: "Simple form at the bottom — no navigation, no separate page",
          },
        ],
      },
    },
    contact: {
      title: "Contact",
      form: {
        name: "Name",
        email: "Email Address",
        subject: "Subject",
        message: "Your message",
        subjectPlaceholder: "Subject",
        submitButton: "Send Message",
        submitAria: "Send message through contact form",
      },
      whatsapp: "Reach me directly on WhatsApp.",
      whatsappAria: "Open WhatsApp chat with Omar Mokhtar",
      successAlert: "✅ Message sent successfully!",
      failureAlert:
        "Sorry, your message could not be sent right now. Please try again later or contact me directly via WhatsApp.",
    },
    casebook: {
      hero: {
        title: "Design System Showcase",
        subtitle:
          "A private showcase of selected design system work, component architecture, documentation, and implementation practices.",
      },
      overview: {
        label: "Overview",
        body: "This private showcase presents a comprehensive approach to building scalable digital products and maintaining consistency between design and development across multiple platforms and user experiences.",
      },
      includes: {
        label: "What This Showcase Includes",
        items: [
          {
            title: "Design Foundations",
            description:
              "Core visual and interaction standards that unify product experiences.",
          },
          {
            title: "Reusable Components",
            description:
              "Production-ready UI patterns designed for repeatable implementation.",
          },
          {
            title: "Design Tokens",
            description:
              "Tokenized decisions that connect design intent to front-end delivery.",
          },
          {
            title: "Figma Variables",
            description:
              "Structured variables to support theme consistency and scalable updates.",
          },
          {
            title: "SCSS Architecture",
            description:
              "Maintainable styling structure optimized for team collaboration.",
          },
          {
            title: "Documentation",
            description:
              "Clear usage guidelines, behavior notes, and implementation references.",
          },
          {
            title: "Accessibility",
            description:
              "Inclusive standards integrated into components and interaction patterns.",
          },
          {
            title: "Governance",
            description:
              "Processes that support quality, ownership, and long-term consistency.",
          },
        ],
      },
      foundations: {
        label: "Design Foundations",
        intro:
          "The foundation layer defines the standards that keep interfaces cohesive and reliable across products, teams, and releases.",
        items: [
          "Color System",
          "Typography",
          "Spacing",
          "Border Radius",
          "Iconography",
          "Shadows / Elevation",
          "Accessibility standards",
        ],
      },
      components: {
        label: "Components",
        intro:
          "Reusable components are documented with behavior, states, and implementation expectations to accelerate delivery without sacrificing consistency.",
        items: [
          "Buttons",
          "Cards",
          "Alerts",
          "Tags",
          "Navigation",
          "Breadcrumbs",
          "Loaders",
          "Forms",
          "Tables",
        ],
      },
      implementation: {
        label: "Implementation & DesignOps",
        intro:
          "This layer connects design decisions to engineering execution through structured standards and operational clarity.",
        items: [
          "Component architecture",
          "Naming conventions",
          "SCSS structure",
          "Documentation standards",
          "Design-to-development workflow",
          "Governance and maintainability",
        ],
      },
      access: {
        title: "Request Access",
        description:
          "This showcase is shared privately for selected evaluation purposes. If you would like to explore the full design system, please enter the provided access password or contact me for a guided walkthrough.",
        passwordLabel: "Access Password",
        passwordPlaceholder: "Enter access password",
        accessButton: "View Design System",
        passwordError:
          "The password you entered is incorrect. If you would like access to the Design System showcase, please contact me and I will be happy to provide access and walk you through the system.",
      },
    },
    meta: {
      "/": {
        title:
          "Omar Mokhtar — UX Design Lead Saudi Arabia | DesignOps & Government UX Expert",
        description:
          "UX Design Lead and DesignOps practitioner in Saudi Arabia with 19+ years across government digital transformation, enterprise platforms, and scalable design systems. Google UX Design Certificate holder.",
        keywords:
          "UX Design Lead Saudi Arabia, UI UX Expert Saudi Arabia, DesignOps Specialist Saudi Arabia, Government UX Expert, Design System Lead, Government Digital Transformation, Enterprise UX Designer, Omar Mokhtar",
        canonical: baseUrl,
        ogImage: `${baseUrl}/images/omar.png`,
        ogLocale: "en_US",
        language: "English",
        structuredData: {
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Omar Mokhtar",
          alternateName: ["Omar Mokhtar", "Omar M. Mokhtar", "عمر مختار"],
          jobTitle: "UX/UI Design Lead",
          description:
            "UX Design Lead with 19+ years of experience in government digital transformation, enterprise UX, and scalable design systems across Saudi Arabia",
          url: baseUrl,
          image: `${baseUrl}/images/omar.png`,
          hasOccupation: [
            { "@type": "Occupation", name: "UX/UI Design Lead" },
            { "@type": "Occupation", name: "Design Systems Specialist" },
            { "@type": "Occupation", name: "DesignOps Practitioner" },
            { "@type": "Occupation", name: "Government UX Specialist" },
          ],
          nationality: { "@type": "Country", name: "Saudi Arabia" },
          address: {
            "@type": "PostalAddress",
            addressCountry: "SA",
            addressRegion: "Saudi Arabia",
          },
          sameAs: [
            "https://www.linkedin.com/in/omarmokhtar22/",
            "https://www.behance.net/Omar_Mokhtar",
            "https://github.com/omarmok",
          ],
          worksFor: {
            "@type": "Organization",
            name: "Government of Saudi Arabia",
            address: { "@type": "PostalAddress", addressCountry: "SA" },
          },
          hasCredential: {
            "@type": "EducationalOccupationalCredential",
            name: "Google UX Design Professional Certificate",
            credentialCategory: "Professional Certificate",
          },
        },
      },
      "/about": {
        title:
          "Omar Mokhtar — UX Design Lead, DesignOps & Government UX | Career & Experience",
        description:
          "19+ years of UX leadership across Saudi Arabia's government, education, and enterprise sectors. Expert in design systems, DesignOps, and government digital transformation. Google UX Design Certificate holder.",
        keywords:
          "Omar Mokhtar, Omar Mokhtar UX Lead, Omar Mokhtar Design Systems, Omar Mokhtar DesignOps, Omar Mokhtar Government UX, UX Design Lead Saudi Arabia",
        canonical: `${baseUrl}/about`,
        ogImage: `${baseUrl}/images/omar.png`,
        ogLocale: "en_US",
        language: "English",
      },
      "/blog": {
        title: "UX Design Insights — Omar Mokhtar | Design Blog & Articles",
        description:
          "UX and UI design insights from Omar Mokhtar — covering design thinking, user empathy, SVG implementation, and front-end development best practices.",
        keywords:
          "UX Design Blog, UI Design Articles, Design Thinking Saudi Arabia, User Empathy UX, SVG Web Development, Design Insights",
        canonical: `${baseUrl}/blog`,
        ogImage: `${baseUrl}/images/blog-hero.jpg`,
        ogLocale: "en_US",
        language: "English",
      },
      "/projects": {
        title:
          "UX Portfolio — Omar Mokhtar | Government & Enterprise UX Case Studies",
        description:
          "Portfolio of UX case studies by Omar Mokhtar — government platforms, design systems, university portals, and enterprise product design across Saudi Arabia.",
        keywords:
          "Omar Mokhtar UX, Omar Mokhtar Product Design, Government UX Projects Saudi Arabia, Enterprise UX Projects, Design Systems Experience",
        canonical: `${baseUrl}/projects`,
        ogImage: `${baseUrl}/images/projects-hero.jpg`,
        ogLocale: "en_US",
        language: "English",
      },
      "/contact": {
        title:
          "Contact Omar Mokhtar — UX Design Lead & DesignOps Consultant | Saudi Arabia",
        description:
          "Get in touch with Omar Mokhtar for UX collaboration, design system consultation, government digital experience projects, or enterprise product design inquiries.",
        keywords:
          "Contact UX Design Lead Saudi Arabia, Design Consultation Saudi Arabia, Government UX Consultant, DesignOps Services, Hire UX Designer Saudi Arabia",
        canonical: `${baseUrl}/contact`,
        ogImage: `${baseUrl}/images/omar.png`,
        ogLocale: "en_US",
        language: "English",
      },
      "/recommendations": {
        title: "Recommendations | Omar Mokhtar",
        description:
          "Professional recommendations and testimonials for Omar Mokhtar, UX Design Lead and DesignOps practitioner.",
        keywords:
          "Omar Mokhtar recommendations, UX testimonials, DesignOps testimonials, LinkedIn recommendations",
        canonical: `${baseUrl}/recommendations`,
        ogImage: `${baseUrl}/images/omar.png`,
        ogLocale: "en_US",
        language: "English",
      },
      "/certifications": {
        title: "Professional Certifications | Omar Mokhtar",
        description:
          "Selected professional certifications in UX Design, Design Systems, DesignOps, User Research, and Digital Product Design by Omar Mokhtar.",
        keywords:
          "Omar Mokhtar certifications, Omar Mokhtar UX certifications, Design System Bootcamp, Google UX Design Professional Certificate, DesignOps, User Research",
        canonical: `${baseUrl}/certifications`,
        ogImage: `${baseUrl}/images/omar.png`,
        ogLocale: "en_US",
        language: "English",
      },
      "/casestudy": {
        title:
          "Majmaah University Student Portal — UX Case Study | Omar Mokhtar",
        description:
          "UX case study: consolidating 7 university systems into a single RTL-first student portal for Majmaah University. Covers research, design decisions, accessibility, and measurable outcomes.",
        keywords:
          "Majmaah University Portal UX Case Study, University Portal Design Saudi Arabia, RTL UX Design, Student Dashboard Design, Arabic UX Design, Government Education UX",
        canonical: `${baseUrl}/casestudy`,
        ogImage: `${baseUrl}/images/casstudymain.png`,
        ogLocale: "en_US",
        language: "English",
      },
      "/ux-lead": {
        title:
          "UX Design Lead Saudi Arabia — Omar Mokhtar | UX Strategy & Delivery",
        description:
          "Omar Mokhtar leads UX strategy, design governance, and end-to-end product delivery for enterprise and government platforms in Saudi Arabia. 19+ years of UX leadership experience.",
        keywords:
          "Omar Mokhtar UX Lead, UX Design Lead Saudi Arabia, Omar Mokhtar UX Leadership Experience, UX Strategy Saudi Arabia, Design Governance",
        canonical: `${baseUrl}/ux-lead`,
        ogImage: `${baseUrl}/images/omar.png`,
        ogLocale: "en_US",
        language: "English",
      },
      "/designops": {
        title:
          "DesignOps Specialist Saudi Arabia — Omar Mokhtar | Design Operations",
        description:
          "Design operations, governance, and scalable processes for enterprise teams. Omar Mokhtar builds DesignOps frameworks that connect design intent to production-quality delivery in Saudi Arabia.",
        keywords:
          "Omar Mokhtar DesignOps, DesignOps Saudi Arabia, DesignOps Practitioner Saudi Arabia, Design Operations Specialist, Design System Operations",
        canonical: `${baseUrl}/designops`,
        ogImage: `${baseUrl}/images/omar.png`,
        ogLocale: "en_US",
        language: "English",
      },
      "/government-ux": {
        title:
          "Government UX Expert Saudi Arabia — Omar Mokhtar | Digital Transformation",
        description:
          "Specialist in Saudi Arabia government digital experience design. Omar Mokhtar has led UX for government platforms including HRC, NHC, and national-scale enterprise systems aligned with Vision 2030.",
        keywords:
          "Omar Mokhtar Government UX, Government UX Saudi Arabia, Saudi Vision 2030 UX, Government Digital Transformation UX, Public Sector UX Design",
        canonical: `${baseUrl}/government-ux`,
        ogImage: `${baseUrl}/images/omar.png`,
        ogLocale: "en_US",
        language: "English",
      },
      "/design-system": {
        title: "Design System Showcase | Omar Mokhtar",
        description:
          "Private showcase access page for selected professional walkthrough requests.",
        keywords: "Private Showcase, Request Access, UX Leadership, DesignOps",
        canonical: `${baseUrl}/design-system`,
        ogImage: `${baseUrl}/images/omar.png`,
        ogLocale: "en_US",
        language: "English",
        robots:
          "noindex, nofollow, noarchive, nosnippet, noimageindex, max-snippet:0, max-image-preview:none, max-video-preview:0",
        googlebot: "noindex, nofollow",
      },
      default: {
        title: "Omar Mokhtar — UX Design Lead & DesignOps Specialist",
        description:
          "UX Design Lead with 19+ years of experience in government digital transformation, enterprise platforms, and scalable design systems across Saudi Arabia.",
        keywords:
          "UX Designer Saudi Arabia, UI Designer, User Experience, DesignOps",
        canonical: baseUrl,
        ogImage: `${baseUrl}/images/omar.png`,
        ogLocale: "en_US",
        language: "English",
      },
    },
    data: localizedData.en,
  },
  ar: {
    nav: {
      links: {
        home: "الرئيسية",
        about: "من أنا",
        certifications: "الشهادات",
        work: "المشاريع",
        caseStudy: "دراسات الحالة",
        casebook: "نظام التصميم",
        blog: "المدونة",
        recommendations: "التوصيات",
        contact: "تواصل",
        governmentUx: "UX الحكومي",
        designopsNav: "DesignOps",
        uxLead: "قيادة UX",
      },
      more: "المزيد",
      moreMenuAria: "افتح روابط تنقل إضافية",
      brand: "UX & DesignOps Lead",
      logoAlt: "شعار عمر مختار الشخصي",
      languageToggleButton: "English",
      languageToggleAria: "التبديل إلى اللغة الإنجليزية",
      mobileMenu: {
        label: "القائمة الرئيسية",
        open: "افتح القائمة",
        close: "أغلق القائمة",
      },
    },
    footer: {
      madeWithLove: "© عمر مختار — مُصمَّم ومطوَّر من الصفر",
      ariaLabel: "زيارة موقع عمر مختار الشخصي",
    },
    loader: {
      loading: "جاري التحميل…",
    },
    audio: {
      playLabel: "تشغيل المقدمة الصوتية",
      pauseLabel: "إيقاف مؤقت للمقدمة الصوتية",
      playButton: "استمع إلى ملخصي",
      pauseButton: "إيقاف",
      fallbackText: "المتصفح لا يدعم تشغيل الصوت.",
      cardTitle: "🎙️ نبذة صوتية عن عمر مختار",
      cardDesc:
        "استمع إلى مقدمة قصيرة أشارك فيها خبرتي في قيادة تجربة المستخدم، وأنظمة التصميم، وعمليات التصميم، والعمل على المنتجات والمنصات الرقمية.",
      collapseLabel: "تصغير مشغل الصوت",
      expandLabel: "توسيع مشغل الصوت",
    },
    home: {
      hero: {
        role: "قائد تصميم تجربة المستخدم وعمليات التصميم — المملكة العربية السعودية",
        certificationBadge:
          "حاصل على شهادة جوجل المهنية في تصميم تجربة المستخدم",
        certificationTitle: "شهادة جوجل في تصميم تجربة المستخدم",
        certVerified: "موثّق",
        downloadButton: "تحميل السيرة الذاتية",
        downloadTitle: "تحميل سيرة عمر مختار الذاتية",
        resumeSubtext: "متاحة بصيغتي PDF و Word",
        resumeOptionPdf: "تحميل السيرة الذاتية PDF",
        resumeOptionDocx: "تحميل السيرة الذاتية Word (.docx)",
      },
      paragraphs: [
        {
          text: "أكثر من 19 عامًا من الخبرة في تجربة المستخدم داخل المملكة العربية السعودية عبر قطاعات حكومية وتعليمية وإسكانية، مع تخصص في المنصات المؤسسية وأنظمة التصميم وعمليات التصميم وتسليم المنتجات.",
          tooltip:
            "أكثر من 19 عامًا من الخبرة في تجربة المستخدم داخل المملكة العربية السعودية عبر قطاعات حكومية وتعليمية وإسكانية، مع تخصص في المنصات المؤسسية وأنظمة التصميم وعمليات التصميم وتسليم المنتجات.",
        },
        {
          text: "أقود استراتيجية تجربة المستخدم وحوكمة التصميم، وأبني أنظمة تصميم قابلة للتوسع، وأعمل عبر دورة التسليم الكاملة — من الاكتشاف حتى التسليم للتطوير — بالتعاون مع فرق المنتج والهندسة والأعمال.",
          tooltip:
            "أقود استراتيجية تجربة المستخدم وحوكمة التصميم، وأبني أنظمة تصميم قابلة للتوسع، وأعمل عبر دورة التسليم الكاملة — من الاكتشاف حتى التسليم للتطوير — بالتعاون مع فرق المنتج والهندسة والأعمال.",
        },
      ],
      focusAreas: [
        "قيادة تجربة المستخدم",
        "أنظمة التصميم",
        "عمليات التصميم",
        "تجربة المستخدم الحكومية",
        "تصميم المنتجات",
      ],
      stats: [
        { value: "19+", label: "سنة خبرة" },
        { value: "حكومي", label: "متخصص UX" },
        { value: "14+", label: "منتجًا مُسلَّمًا" },
        { value: "متعدد التخصصات", label: "تعاون" },
      ],
      social: {
        behance: "زيارة عمر مختار على Behance",
        github: "زيارة عمر مختار على GitHub",
        linkedin: "زيارة عمر مختار على LinkedIn",
        email: "إرسال بريد إلكتروني إلى عمر مختار",
      },
      imageAlt: "صورة عمر مختار",
    },
    about: {
      title: "من أنا",
      downloadButton: "تحميل السيرة الذاتية",
      downloadTitle: "تحميل سيرة عمر مختار الذاتية",
      videoLink:
        "للاطلاع على نبذة موجزة عن خلفيتي وأسلوب عملي، يمكنك مشاهدة هذا الفيديو.",
      emptyExperience: "بيانات الخبرة غير متوفرة حاليًا.",
      certificationsTeaserTitle: "الشهادات المهنية",
      certificationsTeaserText:
        "استعرض شهادات مختارة تغطي تصميم تجربة المستخدم، وأنظمة التصميم، وعمليات التصميم، وأبحاث المستخدم، وتصميم المنتجات الرقمية.",
      certificationsTeaserCta: "عرض الشهادات",
    },
    certifications: {
      title: "الشهادات المهنية",
      description:
        "شهادات مهنية معتمدة تغطي تصميم تجربة المستخدم، وأنظمة التصميم، وعمليات التصميم، وأبحاث المستخدم، وتصميم المنتجات الرقمية.",
      pageIntro:
        "شهادات مهنية تدعم عملي في تصميم تجربة المستخدم، وأنظمة التصميم، وعمليات التصميم، وأبحاث المستخدم، وتصميم المنتجات الرقمية.",
      featuredTitle: "الشهادات المهنية البارزة",
      featuredBadge: "مميزة",
      noExpiration: "غير محدودة الصلاحية",
      allTitle: "شهادات أخرى",
      skillsLabel: "المهارات المغطاة",
      showCredential: "عرض الشهادة",
      showCredentialTitle: "عرض الشهادة في نافذة جديدة",
      emptyState: "سيتم عرض الشهادات هنا حال توفر بيانات جديدة.",
    },
    tools: {
      title: "الأدوات",
    },
    blog: {
      byLine: "بقلم عمر مختار",
      ctaText: "اقرأ منشور لينكدإن الأصلي",
      positiveLabel: "الإيجابيات:",
      negativeLabel: "السلبيات:",
      posts: [
        {
          id: "levels",
          title:
            "الشفقة، التعاطف، والتعاطف العميق: مصطلحات مهمة في تجربة المستخدم",
          heroImageAlt:
            "الشفقة والتعاطف والتعاطف العميق في تصميم تجربة المستخدم - فهم مبادئ تجربة المستخدم والاستجابات العاطفية في التفكير التصميمي",
          intro: [
            'مصطلحات مهمة في تجربة المستخدم. عندما عرفنا المصطلحات، وجدنا أنها مشابهة جدًا لما ورد في حديث رسول الله ﷺ: "من رأى منكم منكراً فليغيره بيده، فإن لم يستطع فبلسانه، فإن لم يستطع فبقلبه، وذلك أضعف الإيمان". نرى هدىً واضحًا من نبينا في التعامل مع المشكلات.',
            "كيف نربط بينها؟ لننتقل إلى التعاريف:",
          ],
          definitions: [
            {
              heading: "1. الشفقة",
              lines: [
                "الشفقة هي أن تلاحظ مشكلة أو صعوبة وتشعر بالحزن عليها دون أن تبادر بحلها؛ هي مجرد شعور.",
                "هذا يشبه ما ورد في الحديث عن 'في قلبك'، حيث يُوصف بأنه أضعف درجات الاستجابة.",
                "في تجربة المستخدم، لا تحدث الشفقة فرقًا كبيرًا.",
              ],
              example:
                "مثال: إذا لاحظ المصمم أن المستخدمين يواجهون صعوبة في التطبيق ولم يفعل شيئًا، فهذه شفقة فقط.",
            },
            {
              heading: "2. التعاطف",
              lines: [
                "التعاطف يعني فهم المشكلة والشعور بالحزن أو القلق تجاه من يعاني منها، ومحاولة الحديث عنها أو اتخاذ خطوات بسيطة لمعالجتها.",
                "يشبه هذا ما ورد في الحديث عن 'التغيير باللسان'.",
                "في UX، يعني هذا أن المصمم يستمع إلى ملاحظات المستخدم ويُجري بعض التعديلات، لكن هذه التعديلات قد لا تحل المشكلة بالكامل.",
              ],
              example:
                "مثال في تجربة المستخدم: يستمع المصمم لشكاوى المستخدم ويجري تغييرات صغيرة على الواجهة لتسهيلها، لكنها قد تظل سطحية أو غير كافية.",
            },
            {
              heading: "3. التعاطف العميق",
              lines: [
                "التعاطف العميق هو أعلى مستويات الاستجابة.",
                "يعني ألا تكتفي بفهم المشكلة، بل تضع نفسك مكان المستخدم وتُشعر بما يشعر به.",
                "هذا يشبه 'التغيير باليد'، أقوى مستويات العمل المذكورة في الحديث.",
                "في تجربة المستخدم، يدفعنا هذا النوع من التعاطف لإعادة تصميم التجربة بالكامل لتلبية احتياجات المستخدمين وحل مشاكلهم بشكل شامل.",
              ],
              example:
                "مثال UX: يجري المصمم بحثًا عميقًا، ويختبر المنتج كما يفعل المستخدمون، ويُعيد تصميم التطبيق لحل كل العقبات التي يواجهونها.",
            },
          ],
          conclusion: [
            {
              term: "الشفقة:",
              detail:
                "مجرد ملاحظة المشكلة والشعور بالسوء بدون عمل. يشبه 'التغيير بالقلب'.",
            },
            {
              term: "التعاطف:",
              detail:
                "فهم المشكلة والسعي إلى تحسينات صغيرة. يشبه 'التغيير باللسان'.",
            },
            {
              term: "التعاطف العميق:",
              detail:
                "الانخراط الكامل مع المشكلة وحلها من الأساس. يشبه 'التغيير باليد'.",
            },
          ],
          closing: [
            "كما يورد الحديث، 'التغيير باليد' هو أقوى شكل للعمل. في UX، يمنحنا التعاطف القدرة على تقديم أفضل تجربة لأنه يدفعنا لفهم احتياجات المستخدم وحل المشاكل من جذورها.",
            "في النهاية، لكي ننجح كمصممي تجربة المستخدم، يجب أن نسعى لتقديم حلول فعلية بدلًا من الاكتفاء بالتعاطف أو الشفقة من بعيد.",
          ],
          arabicQuote: [
            "(وما ينطق عن الهوى، إن هو إلا وحي يوحى)",
            "صلى الله عليه وسلم",
          ],
          ctaAria:
            "اقرأ منشور لينكدإن الأصلي حول درجات التعاطف في تجربة المستخدم",
          ctaHref:
            "https://www.linkedin.com/posts/omarmokhtar22_ux-activity-7249664621257641984-Hwtv?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAyBkfYBusmou5-gf08ENyka9h55cIflNbw",
        },
        {
          id: "svg",
          title: "SVG في تطوير الويب: مقارنة بين ثلاث طرق",
          heroImageAlt:
            "SVG في تطوير الويب - مقارنة بين ثلاث طرق لتنفيذ الرسومات المتجهة القابلة للتوسع في المشاريع الحديثة",
          intro: [
            "بصفتي مصمم واجهات وتجربة المستخدم، أجريت نقاشًا ممتعًا مع مطور .NET والمطور الأمامي حول أفضل طرق استخدام SVG في مشاريع الويب. بعد ذلك، قررت أن أوضح لهم الفروقات بين الطرق الثلاث لاستخدام SVG.",
          ],
          methods: [
            {
              heading: "1. SVG ككود مضمن داخل HTML",
              positives: [
                "التضمين المباشر: يمكنك وضع SVG داخل HTML باستخدام وسم <svg>، وهذا مناسب للرموز أو الرسومات الصغيرة.",
                "سهولة التنسيق: يمكنك تغيير مظهر SVG بواسطة CSS وJavaScript.",
                "تحميل أسرع: يقلل عدد الملفات التي يحتاج المتصفح لتحميلها.",
              ],
              negatives: [
                "زيادة حجم HTML: قد يجعل SVG الكبير ملف HTML أكبر.",
                "تعقيد HTML: وجود العديد من SVG ضمن HTML قد يصعب قراءة الكود وإدارته.",
              ],
            },
            {
              heading: "2. SVG كصورة",
              positives: [
                "ملفات منفصلة: استخدام وسم <img> مع SVG يحافظ على نظافة HTML.",
                "التخزين المؤقت: يمكن للمتصفح حفظ ملف SVG، ما يجعل التحميل أسرع لاحقًا.",
                "سهولة الاستخدام: من السهل إضافته إلى الصفحة.",
              ],
              negatives: [
                "طلب إضافي: يحتاج المتصفح إلى تحميل ملف SVG منفصل، مما قد يطيل زمن التحميل قليلًا.",
                "مرونة أقل: لا يمكنك تنسيق SVG أو التفاعل معه بسهولة كما في SVG المضمن.",
              ],
            },
            {
              heading: "3. SVG كخط أيقونات",
              positives: [
                "أيقونات قابلة للتكبير: خطوط SVG ممتازة للأيقونات التي تتغير أحجامها دون فقد جودة.",
                "تنسيق CSS: يمكنك تغيير اللون والحجم عبر CSS.",
                "سلوك مشابه للنص: تتصرف مثل النص، مما يسهل محاذاتها.",
              ],
              negatives: [
                "لون واحد: عادةً ما تدعم خطوط SVG لونًا واحدًا.",
                "قضايا في الوصول: تعامل قارئات الشاشة خطوط SVG كنص، ما قد يعقّد الوصول.",
              ],
            },
          ],
          conclusion: [
            "SVG المضمن: أفضل للرموز الصغيرة وعندما تحتاج تحكمًا كاملاً بالـ CSS/JS، لكنه قد يزيد حجم HTML.",
            "SVG كصورة: مناسب لصفحات HTML النظيفة والتخزين المؤقت، لكنه أقل مرونة للتنسيق.",
            "خطوط SVG: ممتازة للأيقونات القابلة للتكبير مع تنسيق CSS، لكنها مقيدة بلون واحد وتواجه تحديات في الوصول.",
          ],
          closing: [
            "لكل طريقة مزايا وعيوب. يعتمد الاختيار على احتياجات مشروعك ومتطلبات الأداء وأهداف التصميم. فهم هذه الفروق يساعدك على اتخاذ قرارات أذكى عند استخدام SVG في مشاريع الويب.",
          ],
          ctaAria: "اقرأ منشور لينكدإن الذي يقارن طرق استخدام SVG",
          ctaHref:
            "https://www.linkedin.com/posts/omarmokhtar22_as-a-uiux-designer-i-had-an-interesting-activity-7219603541919682560-xFKF?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAyBkfYBusmou5-gf08ENyka9h55cIflNbw",
        },
      ],
    },
    projects: {
      title: "المشاريع ودراسات الحالة",
      description: [
        "كل مشروع جاء بمتطلبات مختلفة — من منصات حكومية على المستوى الوطني إلى بوابات جامعية — مما استوجب التفكير المنظومي، والتوافق مع أصحاب المصلحة، والتركيز على التسليم.",
        "في كل تعاون، كان الهدف ثابتًا: تصميم متسق وشامل وجاهز للإنتاج يصمد في ظروف العمل الفعلية.",
      ],
      descriptionTooltip:
        "كل مشروع جاء بمتطلبات مختلفة — من منصات حكومية على المستوى الوطني إلى بوابات جامعية — مما استوجب التفكير المنظومي، والتوافق مع أصحاب المصلحة، والتركيز على التسليم. في كل تعاون، كان الهدف ثابتًا: تصميم متسق وشامل وجاهز للإنتاج يصمد في ظروف العمل الفعلية.",
      caseStudy: {
        title: "بوابة الطالب الداخلية",
        intro:
          "أدركت جامعة المجمعة الحاجة إلى توحيد خدمات الطلاب المتفرقة في بوابة واحدة متكاملة. كان التحدي تصميم تجربة تقلل من التعقيد عبر مجموعة واسعة من المهام الأكاديمية اليومية لآلاف المستخدمين.",
        tooltip:
          "استهدفت جامعة المجمعة توحيد خدمات الطلاب المتفرقة ضمن بوابة واحدة متكاملة. تمحور التحدي حول تصميم تجربة تقلل الاحتكاك عبر المهام الأكاديمية اليومية لآلاف المستخدمين.",
        features: [
          "دخول موحد",
          "توفير أكثر من 15 خدمة",
          "عرض الأخبار والفعاليات المعلنة",
          "وصول سريع: تقديم الطلبات عبر أنظمة الجامعة المختلفة وجمعها في مكان واحد.",
          "مراجعة الدروس وجداول الامتحانات.",
        ],
        closing:
          "وحّدت البوابة الخدمات الطلابية الأساسية في نقطة وصول واحدة — بديلًا عن أنظمة متفرقة، وتجربة أكثر اتساقًا وقابلية للتوسع.",
        button: "مراجعة دراسة الحالة",
        buttonAria: "قراءة دراسة الحالة الكاملة لبوابة الطالب الداخلية",
        coverAlt: "غلاف دراسة الحالة",
      },
      caseStudyExternal: {
        text: "عرض النموذج المباشر",
        aria: "فتح النموذج المباشر لبوابة الطالب الداخلية في تبويب جديد",
      },
      moreProjectsTitle: "مشاريع إضافية",
      linkedInButton: {
        text: "اكتشف المزيد على لينكدإن",
        aria: "زيارة حساب عمر مختار على لينكدإن لمزيد من المشاريع",
      },
      projectCtaLabel: "عرض تفاصيل المشروع",
      projectTagsAria: "وسوم المشروع {{project}}",
      projectLinkAria: "فتح تفاصيل مشروع {{project}} في علامة تبويب جديدة",
    },
    caseStudyPage: {
      iframeTitle: "دراسة حالة في فيجما",
      back: "العودة إلى المشاريع",
      backAria: "الرجوع إلى صفحة المشاريع",
      checkWebsite: "عرض النموذج الحي لبوابة الطلاب",
      checkWebsiteAria: "عرض النموذج الحي لبوابة الطالب الداخلية",
      hero: {
        title: "بوابة طلاب جامعة المجمعة",
        subtitle:
          "بوابة أكاديمية موحدة باللغة العربية — تجمع الخدمات الطلابية والجدول الدراسي وأنظمة الجامعة في لوحة تحكم واحدة للاستخدام اليومي.",
        tags: ["دراسة حالة UX", "بوابة جامعية", "RTL"],
        meta: [
          { label: "الدور", value: "مهندس UX/UI" },
          { label: "المدة", value: "أغسطس 2019 – سبتمبر 2020" },
          {
            label: "الجامعة",
            value: "جامعة المجمعة، المملكة العربية السعودية",
          },
          { label: "المنصة", value: "ويب · عربي RTL" },
        ],
        imageAlt: "لوحة تحكم بوابة طلاب جامعة المجمعة",
      },
      overview: {
        label: "نظرة عامة",
        h2: "عن ماذا كان هذا المشروع؟",
        body1:
          "كان طلاب جامعة المجمعة يديرون حياتهم الأكاديمية عبر أنظمة متفرقة — دخول منفصل لـ Blackboard، وآخر لحجز الاختبارات، وثالث للمكتبة — دون وجود مكان مركزي يتيح لهم الاطلاع على جدولهم أو الوصول إلى الخدمات بسهولة.",
        body2:
          "جاءت هذه البوابة لتُغيّر ذلك. الهدف كان إنشاء لوحة تحكم موحدة يدخل إليها الطالب مرة واحدة، فيجد جدوله الدراسي، ويصل إلى أي نظام جامعي، ويراجع معلوماته الشخصية والأكاديمية، وينجز مهامه الإدارية — كل ذلك دون التنقل بين مواقع مختلفة أو إعادة إدخال بياناته.",
        body3:
          "تولّيت تصميم تجربة المستخدم وتطوير الواجهة الأمامية. كان التوجه البصري مقصودًا في اعتماد اللمسة الناعمة والمريحة — لوحة ألوان مؤلفة من الأخضر المزرق والبرتقالي الدافئ، وبطاقات ذات زوايا مستديرة، ومسافات واسعة — للابتعاد عن الطابع المؤسسي الثقيل الذي تحمله الأنظمة الحكومية عادةً. الطالب يقضي وقتًا حقيقيًا يوميًا في هذه البوابة، وكان من الضروري أن تشعره بأنها أداة مفيدة لا نظامًا رسميًا.",
        sidebarTitle: "ما تغطيه البوابة",
        bullets: [
          "الجدول الدراسي — تفاعلي، مبني على الوقت الفعلي، قابل للضغط",
          "وصول سريع لجميع أنظمة الجامعة في لوحة واحدة",
          "حجز الاختبارات والطلبات الجامعية",
          "الإعلانات والفعاليات والأخبار",
          "المعلومات الشخصية والأكاديمية عبر نوافذ تفاعلية",
          "جهات الاتصال الهامة ونموذج الملاحظات",
          "دخول موحد — جلسة واحدة لكل شيء",
        ],
      },
      problem: {
        label: "المشكلة",
        h2: "ما الذي كان بحاجة إلى تغيير",
        intro:
          "كانت نقطة البداية واضحة: الطلاب كانوا يبذلون جهدًا كبيرًا لإنجاز مهام أكاديمية روتينية. لم تكن المشكلة في نظام بعينه — بل كانت في الفراغ بين هذه الأنظمة.",
        cards: [
          {
            title: "أنظمة جامعية متشتتة",
            body: "Blackboard، والمكتبة، وحجز الاختبارات، والنقل الجامعي — كل منها يتطلب دخولًا منفصلاً وتنقلًا مستقلاً. كل مهمة روتينية كانت تبدأ بتحويل السياق والبحث عن الرابط الصحيح.",
          },
          {
            title: "الجدول الدراسي بعيد عن متناول اليد",
            body: "الجدول الدراسي — أكثر المعلومات التي يراجعها الطالب يوميًا — كان يتطلب عدة خطوات للوصول إليه، دون أي ربط بالخدمات الأخرى.",
          },
          {
            title: "لا تجربة متوافقة مع الجوال",
            body: "الطلاب يستخدمون هواتفهم باستمرار، خاصةً بين المحاضرات. الأنظمة القائمة لم تكن مصممة للشاشات الصغيرة أو اللمس.",
          },
          {
            title: "لا أولوية بصرية في عرض المعلومات",
            body: "المهام الحرجة والمحتوى العادي ظهرا بنفس الوزن البصري. مواعيد الاختبارات كانت تبدو مطابقة لأخبار الجامعة العامة.",
          },
        ],
      },
      persona: {
        label: "شخصية الطالب",
        h2: "من كنت أصمّم له؟",
        intro:
          "كل قرار في البوابة يعود إلى صورة واضحة عمن يستخدمها فعلًا، ومتى. الملف أدناه يمثّل النمط اليومي الذي بُني التصميم حوله.",
        name: "فيصل — Faisal",
        age: "٢١ · علوم الحاسب · السنة الثالثة",
        desc: "يعتمد فيصل على هاتفه في كل شيء تقريبًا. يطّلع على جدوله الدراسي أول شيء في الصباح — في الغالب قبل أن يغادر السرير. في الفترات بين المحاضرات يبحث سريعًا عن مواعيد الاختبارات أو يتحقق من معدله. لا يتصفح البوابة — يفتحها وهو يعرف بالضبط ما يريده، ويريد إنجازه في أقل من دقيقة.",
        needsHeading: "ما يحتاجه",
        needs: [
          "الاطلاع على جدول اليوم دون التنقل إلى قسم فرعي",
          "الدخول إلى Blackboard دون تسجيل دخول منفصل",
          "التحقق من معدله التراكمي ومستواه الأكاديمي بسرعة",
          "معرفة موعد اختباره دون فتح نظام آخر",
          "تقديم طلب دون زيارة مبنى شؤون الطلاب",
        ],
        slowedHeading: "ما كان يعيق مساره قبلًا",
        slowed: [
          "سبعة أنظمة منفصلة، كل منها ببياناته الخاصة",
          "الجدول الدراسي مخبأ داخل النظام الأكاديمي بعد عدة نقرات",
          "الإعلانات الهامة تبدو مطابقة للأخبار العادية",
          "لا شيء يعمل بشكل جيد على الجوال",
          "لا مكان موحد للعثور على أرقام التواصل أو تقديم ملاحظة",
        ],
      },
      uxDecisions: {
        label: "قرارات UX",
        h2: "كيف صُمِّمت البوابة لتعمل",
        intro:
          "كل قرار أدناه يعالج جانبًا محددًا من طريقة تفاعل الطلاب مع الخدمات الأكاديمية يوميًا — بدءًا من بنية الجدول وصولًا إلى كيفية ظهور المعلومات دون الحاجة إلى التنقل.",
        items: [
          {
            title: "الجدول بُني كشبكة زمنية حقيقية",
            body: "بدلًا من عرض المقررات كقائمة نصية، صُمِّم الجدول كشبكة زمنية مرئية — تظهر فيها المقررات كبطاقات موضوعة رأسيًا بحسب أوقات البداية والنهاية الفعلية، عبر أسبوع مكوّن من خمسة أيام. يستطيع الطالب بنظرة واحدة معرفة مدة المحاضرة، والفترات بين المقررات، وهيكل يومه بالكامل. الألوان تُميّز بين المقررات بصريًا دون الحاجة إلى توضيحات نصية، والبطاقات ذات زوايا ناعمة وتباعد متسق تجعل الشبكة مقروءة دون أن تبدو جداول بيانات.",
          },
          {
            title: "الضغط على مقرر يفتح نافذة تنبثق من مكانه مباشرة",
            body: "حين يضغط الطالب على بطاقة مقرر، تفتح النافذة التفصيلية بحركة سلسة تنبع من موضع البطاقة نفسه — على الكمبيوتر تتمدد من المقرر، وعلى الجوال تنزلق من الأسفل. هذه العلاقة المكانية تجعل التفاعل طبيعيًا غير مقطوع. تفاصيل المقرر — الأستاذ، القاعة، الغيابات، الدرجات الشهرية — كلها داخل النافذة. الضغط على ESC أو خارج النافذة يغلقها ويعيد الطالب إلى نفس موضعه في الجدول تمامًا.",
          },
          {
            title: "بطاقة الملف الشخصي تتيح الوصول الفوري للمعلومات",
            body: "بطاقة الطالب الدائمة في الشريط الجانبي تحمل زرّين واضحي التسمية — زر للمعلومات الشخصية وآخر للوضع الأكاديمي. التفاصيل الشخصية (الرقم الجامعي، الكلية، الرصيد) والتفاصيل الأكاديمية (المعدل، المستوى، القاعة، الإنذارات، المشرف) تفتح كل منها في نافذة منفصلة. الطالب الذي يحتاج رقمه الجامعي لتعبئة نموذج، أو يريد التحقق من معدله، يجده بنقرة واحدة من البطاقة ذاتها التي تظهر له في كل زيارة — دون الذهاب إلى صفحة ملف شخصي.",
          },
          {
            title: "جميع أنظمة الجامعة في لوحة وصول واحدة",
            body: "سبعة أنظمة جامعية — Blackboard، والمكتبة الرقمية، والنقل الجامعي، وحجز الاختبارات، والنظام الأكاديمي، والبريد الجامعي، واللجان — تظهر كشبكة بصرية من بطاقات أيقونة ونص. كل بطاقة تحمل ظلًا ناعمًا يبدو كأنه منبثق من السطح ويعكس الاتجاه عند التحويم، ما يمنح إحساسًا ملموسًا بالتفاعل. الطالب يرى جميع الأنظمة المتاحة في مستوى واحد، يتعرف على ما يحتاجه، ويضغط مرة واحدة فيدخل مباشرة — الجلسة مفعّلة بالفعل، لا حاجة لتسجيل دخول جديد ولا للتبديل بين التبويبات.",
          },
          {
            title: "اتجاه RTL كان الأساس، لا مجرد تعديل",
            body: "البوابة مبنية لطلاب ناطقين بالعربية، والعربية هي الاتجاه الأساسي للتصميم — direction:rtl على مستوى الصفحة كاملة، لا قسمًا قسمًا. خط 29LT Bukra يتولى قراءة النص العربي بجميع الأوزان بوضوح مريح حتى في الأحجام الصغيرة. الكاروسيلات مُهيأة بـ rtl:true حتى يكون ترتيب الشرائح واتجاه السحب كما يتوقعه المستخدم. التنقل، ومواضع النوافذ، وتسلسل القراءة — كلها تسير بالاتجاه العربي الطبيعي، لا كانعكاس لنسخة LTR.",
          },
          {
            title: "الإعلانات والفعاليات والأخبار مرئية من لوحة التحكم مباشرة",
            body: "إعلانات الجامعة، والفعاليات القادمة، والأخبار — كلها ظاهرة من الصفحة الرئيسية دون الحاجة للتنقل إلى قسم مخصص. كل منها في لوحة محتواة، مفصولة بمسافة بصرية واضحة عن قسم الجدول وقسم الأنظمة. هذا الفصل يحافظ على نظام الصفحة حتى حين يزداد المحتوى — الطالب يمرر للأسفل ويشعر أنه يتنقل بين مناطق مرتبة دون الحاجة لقراءة العناوين.",
          },
          {
            title: "جهات الاتصال والملاحظات في متناول اليد بتمرير واحد",
            body: "أرقام التواصل الهامة مُجمَّعة في أقسام قابلة للطي — يفتح الطالب الفئة التي يحتاجها (الدعم التقني، الإرشاد الأكاديمي) دون أن يُغرق بجميع الأرقام دفعة واحدة. نموذج الملاحظات يقع مباشرة تحته مع نص ترحيبي بالعربية. لا تنقل، لا صفحة منفصلة — الطالب الذي لديه سؤال أو اقتراح يقدّمه من نفس الجلسة دون قطع مساره.",
          },
          {
            title: "تجربة الجوال مدروسة منذ البداية",
            body: "الجدول ينتقل من شبكة أيام متجاورة إلى تخطيط عمودي متراكم على الشاشات الصغيرة، مما يُبقي معلومات المقررات مقروءة دون الحاجة للتمرير الأفقي. حركات الدخول التدريجي (AOS) مُعطّلة دون عرض 800 بكسل لتقليل الحمل على أجهزة الجوال. بطاقات الأنظمة وبطاقات المقررات مُصممة بحجم يناسب اللمس — واسعة بما يكفي للضغط بدقة دون الحاجة لتحديد دقيق. التخطيط يُعيد ترتيب نفسه بسلاسة عند نقاط الكسر الرئيسية بدلًا من الانهيار المفاجئ.",
          },
        ],
      },
      features: {
        label: "المميزات الرئيسية",
        h2: "ما تشمله البوابة",
        intro:
          "تغطي البوابة النطاق الكامل لاحتياجات الطالب اليومية — أكاديميًا وإداريًا ومعلوماتيًا — في جلسة موحدة. المميزات مُجمَّعة حسب السياق في لوحة التحكم، حتى يصل الطالب لما يحتاجه بالتمرير للأسفل لا بالتنقل عبر القوائم.",
        items: [
          {
            icon: "🗓️",
            name: "الجدول الدراسي",
            note: "شبكة زمنية مرئية، مقررات ملونة، بطاقات قابلة للضغط مع تفاصيل في نافذة تفاعلية",
          },
          {
            icon: "👤",
            name: "المعلومات الشخصية",
            note: "نافذة تفاعلية — الرقم الجامعي، الكلية، الرصيد الدراسي",
          },
          {
            icon: "🎓",
            name: "المعلومات الأكاديمية",
            note: "نافذة تفاعلية — المعدل التراكمي، المستوى، القاعة، الإنذارات، المشرف الأكاديمي",
          },
          {
            icon: "📚",
            name: "Blackboard",
            note: "نقرة واحدة من لوحة الأنظمة — جلسة مفعّلة بالفعل",
          },
          {
            icon: "🏛️",
            name: "المكتبة الرقمية",
            note: "وصول مباشر للقواعد البحثية والمصادر الأكاديمية",
          },
          {
            icon: "🚌",
            name: "النقل الجامعي",
            note: "خطوط الحافلات ومعلومات المواعيد",
          },
          {
            icon: "📝",
            name: "حجز الاختبارات",
            note: "حجز مقعد الاختبار دون مغادرة البوابة",
          },
          {
            icon: "📋",
            name: "الطلبات الجامعية",
            note: "تقديم الطلبات الإدارية من لوحة التحكم مباشرة",
          },
          {
            icon: "📢",
            name: "الإعلانات",
            note: "إعلانات الجامعة ظاهرة في لوحة التحكم الرئيسية",
          },
          {
            icon: "🎉",
            name: "الفعاليات والأنشطة",
            note: "الفعاليات القادمة والتقويم الأكاديمي",
          },
          {
            icon: "☎️",
            name: "جهات الاتصال الهامة",
            note: "مجموعات قابلة للطي — تقنية المعلومات، الإرشاد، الإدارة — في متناول اليد دائمًا",
          },
          {
            icon: "💬",
            name: "الملاحظات",
            note: "نموذج بسيط في الأسفل — لا تنقل، لا صفحة منفصلة",
          },
        ],
      },
    },
    contact: {
      title: "تواصل",
      form: {
        name: "الاسم",
        email: "البريد الإلكتروني",
        subject: "الموضوع",
        message: "رسالتك",
        subjectPlaceholder: "الموضوع",
        submitButton: "إرسال الرسالة",
        submitAria: "إرسال رسالة عبر نموذج التواصل",
      },
      whatsapp: "تواصل معي مباشرة عبر واتساب.",
      whatsappAria: "افتح محادثة واتساب مع عمر مختار",
      successAlert: "✅ تم إرسال الرسالة بنجاح!",
      failureAlert:
        "عذرًا، تعذر إرسال رسالتك الآن. يرجى المحاولة لاحقًا أو التواصل معي مباشرة عبر واتساب.",
    },
    casebook: {
      hero: {
        title: "عرض نظام التصميم",
        subtitle:
          "عرض خاص يقدّم نماذج مختارة من أعمال نظام التصميم، وهيكلة المكونات، والتوثيق، وممارسات التنفيذ.",
      },
      overview: {
        label: "نظرة عامة",
        body: "يعرض هذا العرض الخاص منهجية متكاملة لبناء منتجات رقمية قابلة للتوسع والحفاظ على الاتساق بين التصميم والتطوير عبر مختلف المنصات وتجارب المستخدم.",
      },
      includes: {
        label: "ما الذي يتضمنه هذا العرض",
        items: [
          {
            title: "أسس التصميم",
            description:
              "معايير بصرية وتفاعلية أساسية تضمن اتساق التجربة عبر المنتجات.",
          },
          {
            title: "مكونات قابلة لإعادة الاستخدام",
            description:
              "أنماط واجهة جاهزة للتطبيق المتكرر بجودة تنفيذية عالية.",
          },
          {
            title: "التوكنز التصميمية",
            description:
              "قرارات تصميمية موحّدة تربط بين نية التصميم والتنفيذ البرمجي.",
          },
          {
            title: "متغيرات فيجما",
            description:
              "بنية متغيرات تدعم قابلية التوسع والاتساق عبر السمات المختلفة.",
          },
          {
            title: "هيكلة SCSS",
            description:
              "تنظيم مرن وقابل للصيانة يسهّل التعاون بين فرق التصميم والتطوير.",
          },
          {
            title: "التوثيق",
            description:
              "إرشادات واضحة للاستخدام، وحالات المكوّنات، ومراجع التنفيذ.",
          },
          {
            title: "إمكانية الوصول",
            description:
              "معايير شمولية مدمجة في المكونات وأنماط التفاعل من البداية.",
          },
          {
            title: "الحوكمة",
            description:
              "آليات تضمن الجودة والملكية والاستمرارية على المدى الطويل.",
          },
        ],
      },
      foundations: {
        label: "أسس التصميم",
        intro:
          "تُحدد طبقة الأسس المعايير التي تحافظ على اتساق الواجهات وموثوقيتها عبر المنتجات والفرق والإصدارات.",
        items: [
          "نظام الألوان",
          "الطباعة",
          "المسافات",
          "أنصاف الأقطار",
          "الأيقونات",
          "الظلال / مستويات الارتفاع",
          "معايير إمكانية الوصول",
        ],
      },
      components: {
        label: "المكونات",
        intro:
          "تُوثَّق المكونات القابلة لإعادة الاستخدام مع السلوك والحالات ومتطلبات التنفيذ لتسريع التسليم مع الحفاظ على الاتساق.",
        items: [
          "الأزرار",
          "البطاقات",
          "التنبيهات",
          "الوسوم",
          "التنقل",
          "مسارات التنقل",
          "مؤشرات التحميل",
          "النماذج",
          "الجداول",
        ],
      },
      implementation: {
        label: "التنفيذ وعمليات التصميم",
        intro:
          "تربط هذه الطبقة قرارات التصميم بالتنفيذ الهندسي عبر معايير منظمة ووضوح تشغيلي.",
        items: [
          "هيكلة المكونات",
          "معايير التسمية",
          "بنية SCSS",
          "معايير التوثيق",
          "سير العمل بين التصميم والتطوير",
          "الحوكمة وقابلية الصيانة",
        ],
      },
      access: {
        title: "طلب الوصول",
        description:
          "هذا العرض يُشارك بشكل خاص لأغراض تقييم محددة. إذا رغبت في استعراض نظام التصميم بالكامل، يمكنك إدخال كلمة المرور المتاحة لديك أو التواصل معي للحصول على جولة إرشادية.",
        passwordLabel: "كلمة المرور",
        passwordPlaceholder: "أدخل كلمة المرور",
        accessButton: "عرض نظام التصميم",
        passwordError:
          "كلمة المرور التي أدخلتها غير صحيحة. إذا كنت ترغب في الوصول إلى عرض نظام التصميم، يرجى التواصل معي، وسأكون سعيدًا بمنحك صلاحية الوصول وشرح النظام لك.",
      },
    },
    meta: {
      "/": {
        title:
          "عمر مختار — قائد تصميم تجربة المستخدم في السعودية | DesignOps وتحويل رقمي حكومي",
        description:
          "قائد تجربة المستخدم وعمليات التصميم في المملكة العربية السعودية، بخبرة تزيد على 19 عامًا في المنصات الحكومية الرقمية وأنظمة التصميم والمنتجات المؤسسية. حاصل على شهادة جوجل المهنية في UX.",
        keywords:
          "قائد تصميم تجربة المستخدم السعودية, خبير UX السعودية, DesignOps السعودية, تجربة المستخدم الحكومية, نظام التصميم, التحويل الرقمي الحكومي, عمر مختار",
        canonical: baseUrl,
        ogImage: `${baseUrl}/images/omar.png`,
        ogLocale: "ar_SA",
        language: "Arabic",
        structuredData: {
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Omar Mokhtar",
          alternateName: ["Omar Mokhtar", "Omar M. Mokhtar", "عمر مختار"],
          jobTitle: "قائد تصميم تجربة المستخدم وعمليات التصميم",
          description:
            "قائد تجربة المستخدم بخبرة أكثر من 19 عامًا في التحويل الرقمي الحكومي والمنصات المؤسسية وأنظمة التصميم في المملكة العربية السعودية",
          url: baseUrl,
          image: `${baseUrl}/images/omar.png`,
          hasOccupation: [
            { "@type": "Occupation", name: "UX/UI Design Lead" },
            { "@type": "Occupation", name: "Design Systems Specialist" },
            { "@type": "Occupation", name: "DesignOps Practitioner" },
            { "@type": "Occupation", name: "Government UX Specialist" },
          ],
          nationality: { "@type": "Country", name: "Saudi Arabia" },
          address: {
            "@type": "PostalAddress",
            addressCountry: "SA",
            addressRegion: "Saudi Arabia",
          },
          sameAs: [
            "https://www.linkedin.com/in/omarmokhtar22/",
            "https://www.behance.net/Omar_Mokhtar",
            "https://github.com/omarmok",
          ],
          worksFor: {
            "@type": "Organization",
            name: "حكومة المملكة العربية السعودية",
            address: { "@type": "PostalAddress", addressCountry: "SA" },
          },
          hasCredential: {
            "@type": "EducationalOccupationalCredential",
            name: "شهادة جوجل المهنية في تصميم تجربة المستخدم",
            credentialCategory: "Professional Certificate",
          },
        },
      },
      "/about": {
        title:
          "عمر مختار — قائد UX وDesignOps وخبير التجربة الحكومية | الخبرة والمسار",
        description:
          "أكثر من 19 عامًا من قيادة تجربة المستخدم عبر القطاعات الحكومية والتعليمية والمؤسسية في المملكة العربية السعودية. خبرة متعمقة في أنظمة التصميم وعمليات التصميم والتحويل الرقمي. حاصل على شهادة جوجل المهنية في UX.",
        keywords:
          "عمر مختار, عمر مختار تجربة المستخدم, عمر مختار مصمم تجربة المستخدم, عمر مختار أنظمة التصميم, عمر مختار DesignOps, عمر مختار السعودية",
        canonical: `${baseUrl}/about`,
        ogImage: `${baseUrl}/images/omar.png`,
        ogLocale: "ar_SA",
        language: "Arabic",
      },
      "/blog": {
        title: "رؤى تصميم UX — عمر مختار | مقالات ومدونة التصميم",
        description:
          "رؤى وأفكار في تصميم UX/UI من عمر مختار — التفكير التصميمي، التعاطف مع المستخدم، تطوير الويب SVG، وأفضل ممارسات تطوير الواجهة الأمامية.",
        keywords:
          "مدونة UX السعودية, مقالات تصميم تجربة المستخدم, التفكير التصميمي, تعاطف UX, SVG ويب, رؤى التصميم",
        canonical: `${baseUrl}/blog`,
        ogImage: `${baseUrl}/images/blog-hero.jpg`,
        ogLocale: "ar_SA",
        language: "Arabic",
      },
      "/projects": {
        title: "محفظة UX — عمر مختار | دراسات حالة حكومية ومؤسسية",
        description:
          "محفظة دراسات حالة UX لعمر مختار — المنصات الحكومية وأنظمة التصميم والبوابات الجامعية وتصميم المنتجات المؤسسية في المملكة العربية السعودية.",
        keywords:
          "عمر مختار UX, مشاريع تجربة المستخدم الحكومية, دراسات حالة UX السعودية, عمر مختار تصميم تجربة المستخدم, أنظمة التصميم السعودية",
        canonical: `${baseUrl}/projects`,
        ogImage: `${baseUrl}/images/projects-hero.jpg`,
        ogLocale: "ar_SA",
        language: "Arabic",
      },
      "/contact": {
        title: "تواصل مع عمر مختار — قائد UX ومستشار DesignOps | السعودية",
        description:
          "تواصل مع عمر مختار للتعاون في مشاريع UX، استشارات نظام التصميم، مشاريع التجربة الرقمية الحكومية، أو استفسارات تصميم المنتجات المؤسسية.",
        keywords:
          "تواصل قائد UX السعودية, استشارات التصميم السعودية, مستشار UX حكومي, خدمات DesignOps, توظيف مصمم UX السعودية",
        canonical: `${baseUrl}/contact`,
        ogImage: `${baseUrl}/images/omar.png`,
        ogLocale: "ar_SA",
        language: "Arabic",
      },
      "/recommendations": {
        title: "التوصيات المهنية | عمر مختار",
        description:
          "توصيات وشهادات مهنية لعمر مختار في قيادة تجربة المستخدم وعمليات التصميم.",
        keywords:
          "توصيات عمر مختار, شهادات مهنية UX, توصيات لينكدإن, توصيات DesignOps",
        canonical: `${baseUrl}/recommendations`,
        ogImage: `${baseUrl}/images/omar.png`,
        ogLocale: "ar_SA",
        language: "Arabic",
      },
      "/certifications": {
        title: "الشهادات المهنية | عمر مختار",
        description:
          "شهادات مهنية مختارة في تصميم تجربة المستخدم، وأنظمة التصميم، وعمليات التصميم، وأبحاث المستخدم، وتصميم المنتجات الرقمية لدى عمر مختار.",
        keywords:
          "شهادات عمر مختار المهنية, عمر مختار UX, معسكر نظام التصميم, شهادة جوجل المهنية في تصميم تجربة المستخدم, عمر مختار أنظمة التصميم",
        canonical: `${baseUrl}/certifications`,
        ogImage: `${baseUrl}/images/omar.png`,
        ogLocale: "ar_SA",
        language: "Arabic",
      },
      "/design-system": {
        title: "عرض نظام التصميم | عمر مختار",
        description: "صفحة وصول خاصة لطلب استعراض نظام التصميم بشكل انتقائي.",
        keywords: "عرض خاص, طلب وصول, قيادة UX, DesignOps",
        canonical: `${baseUrl}/design-system`,
        ogImage: `${baseUrl}/images/omar.png`,
        ogLocale: "ar_SA",
        language: "Arabic",
        robots:
          "noindex, nofollow, noarchive, nosnippet, noimageindex, max-snippet:0, max-image-preview:none, max-video-preview:0",
        googlebot: "noindex, nofollow",
      },
      "/casestudy": {
        title: "بوابة طلاب جامعة المجمعة — دراسة حالة UX | عمر مختار",
        description:
          "دراسة حالة UX: توحيد 7 أنظمة جامعية في بوابة طلابية واحدة بدعم RTL أصلي لجامعة المجمعة. تشمل البحث وقرارات التصميم وإمكانية الوصول والنتائج الفعلية.",
        keywords:
          "دراسة حالة بوابة جامعة المجمعة, تصميم بوابة جامعية السعودية, تصميم RTL UX, تصميم لوحة الطالب, تصميم UX بالعربية, UX التعليم الحكومي",
        canonical: `${baseUrl}/casestudy`,
        ogImage: `${baseUrl}/images/casstudymain.png`,
        ogLocale: "ar_SA",
        language: "Arabic",
      },
      "/ux-lead": {
        title:
          "قائد تصميم تجربة المستخدم في السعودية — عمر مختار | استراتيجية وتسليم UX",
        description:
          "عمر مختار يقود استراتيجية تجربة المستخدم وحوكمة التصميم وتسليم المنتج الشامل للمنصات الحكومية والمؤسسية في المملكة العربية السعودية. خبرة 19+ عامًا في قيادة UX.",
        keywords:
          "عمر مختار قائد تجربة المستخدم, قائد UX السعودية, استراتيجية UX السعودية, قيادة UX حكومي, حوكمة التصميم",
        canonical: `${baseUrl}/ux-lead`,
        ogImage: `${baseUrl}/images/omar.png`,
        ogLocale: "ar_SA",
        language: "Arabic",
      },
      "/designops": {
        title: "متخصص DesignOps في السعودية — عمر مختار | عمليات التصميم",
        description:
          "عمليات التصميم والحوكمة والعمليات القابلة للتوسع للفرق المؤسسية. عمر مختار يبني أطر DesignOps التي تربط نية التصميم بالتسليم الإنتاجي في المملكة العربية السعودية.",
        keywords:
          "عمر مختار DesignOps, DesignOps السعودية, متخصص عمليات التصميم, عمليات نظام التصميم, ممارس DesignOps السعودية",
        canonical: `${baseUrl}/designops`,
        ogImage: `${baseUrl}/images/omar.png`,
        ogLocale: "ar_SA",
        language: "Arabic",
      },
      "/government-ux": {
        title: "خبير UX الحكومي السعودي — عمر مختار | التحويل الرقمي",
        description:
          "متخصص في تصميم التجربة الرقمية الحكومية السعودية. قاد عمر مختار UX لمنصات حكومية تشمل هيئة حقوق الإنسان والشركة الوطنية للإسكان وأنظمة مؤسسية كبيرة متوافقة مع رؤية 2030.",
        keywords:
          "عمر مختار تجربة المستخدم الحكومية, UX حكومي السعودية, رؤية 2030 UX, التحويل الرقمي الحكومي UX, عمر مختار السعودية",
        canonical: `${baseUrl}/government-ux`,
        ogImage: `${baseUrl}/images/omar.png`,
        ogLocale: "ar_SA",
        language: "Arabic",
      },
      default: {
        title: "عمر مختار — قائد تصميم تجربة المستخدم وعمليات التصميم",
        description:
          "قائد تجربة المستخدم بخبرة أكثر من 19 عامًا في التحويل الرقمي الحكومي والمنصات المؤسسية وأنظمة التصميم في المملكة العربية السعودية.",
        keywords:
          "مصمم UX السعودية, مصمم واجهات المستخدم, تجربة المستخدم, DesignOps",
        canonical: baseUrl,
        ogImage: `${baseUrl}/images/omar.png`,
        ogLocale: "ar_SA",
        language: "Arabic",
      },
    },
    data: localizedData.ar,
  },
};
