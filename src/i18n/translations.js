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
      Issued: "2016 - 2019",
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
      Issued: "2016 – 2019",
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
      date: "Jan 2023 - Present",
      jobtitle: "UX Design Lead",
      companyname: "Confidential Government",
      progression: "UI/UX Designer (Jan 2023) → UX Design Lead (Jul 2025)",
      role: `Joined as a UI/UX Designer on a large-scale enterprise platform and its companion mobile app, building the core components of the design system with business analysts, developers, and QA.

Promoted in July 2025 to UX Design Lead. I now lead the internal design team, give design direction to external vendor teams, and own the design system and its governance across web and mobile products.`,
    },
    3: {
      date: "Feb 2019 - Dec 2022",
      jobtitle: "Interface Development Specialist",
      companyname: "National Housing Company (NHC)",
      role: "UX/UI design and front-end development in the BS – Technology department. I designed national housing web platforms and built them myself, from wireframes and prototypes to responsive production pages in HTML, CSS, JavaScript, and Vue.js, and created UI kits and reusable front-end components shared with engineering and QA.",
    },
    4: {
      date: "2021 - 2022",
      jobtitle: "UI/UX Designer",
      companyname: "Human Rights Commission (HRC) — Freelance",
      role: `Led UX and UI work on a five-month redesign of the Human Rights Commission's public platform. Accountable for layout redesign, experience improvement, and prototyping — from early sketches through high-fidelity deliverables.

Collaborated with the development team on page rebuilds using HTML, Vue.js, and JavaScript.`,
    },
    5: {
      date: "Mar 2016 - Jan 2019",
      jobtitle: "Web Designer",
      companyname: "Majmaah University — Deanship of Information Technology",
      role: "Contracted through an external company. Designed and built the front end (HTML, CSS, JavaScript) of university portals and web applications, including the University Web Portal, Electronic Services Portal, Recruitment Portal, and University Housing Portal. Worked directly with deans and IT leadership on new services and improvements.",
    },
    6: {
      date: "2012 - Feb 2016",
      jobtitle: "UI Designer",
      companyname: "SURE International Technology",
      role: "Interface designer delivering digital solutions for government agencies and educational institutions — including the National Guard, Shaqra University, and the Saudi Food and Drug Authority. Worked within a collaborative design team across front-end implementation using HTML and CSS.",
    },
    7: {
      date: "May 2012 - 2013",
      jobtitle: "UI/UX Designer & Developer",
      companyname: "Jazan University",
      role: "UX/UI designer and front-end developer for the university e-portal unit. Gathered student and staff requirements, collaborated with analysts, developers, and QA to ensure delivery met specifications, and engaged stakeholders on product enhancements and new feature requests.",
    },
    8: {
      date: "2007 - 2012",
      jobtitle: "Junior Web Designer → Web Designer",
      companyname: "Earlier career · several companies",
      role: "Web interface design and HTML page building — the foundation for the UI/UX, front-end, and design system work that followed.",
    },
  },
  ar: {
    1: {
      date: "يناير 2023 – الآن",
      jobtitle: "قائد تصميم تجربة المستخدم",
      companyname: "جهة حكومية",
      progression: "مصمم واجهات وتجربة المستخدم (يناير 2023) ← قائد تصميم تجربة المستخدم (يوليو 2025)",
      role: `انضممت بصفتي مصمم واجهات وتجربة المستخدم في منصة مؤسسية واسعة النطاق وتطبيق جوال مرافق لها، وبنيت المكونات الأساسية لنظام التصميم بالتعاون مع محللي الأعمال والمطورين وفرق ضمان الجودة.

تمت ترقيتي في يوليو 2025 إلى قائد تصميم تجربة المستخدم. أقود اليوم فريق التصميم الداخلي، وأوجّه أعمال التصميم لدى فرق الشركات المنفذة الخارجية، وأملك نظام التصميم وحوكمته عبر منتجات الويب والجوال.`,
    },
    3: {
      date: "فبراير 2019 – ديسمبر 2022",
      jobtitle: "أخصائي تطوير واجهات",
      companyname: "الشركة الوطنية للإسكان (NHC)",
      role: "تصميم تجربة المستخدم والواجهات وتطوير الواجهة الأمامية في إدارة BS – التقنية. صممت منصات الإسكان الوطنية وبنيتها بنفسي، من الهياكل السلكية والنماذج الأولية إلى صفحات فعلية متجاوبة بـ HTML وCSS وJavaScript وVue.js، وأنشأت مجموعات واجهات ومكونات قابلة لإعادة الاستخدام يتشاركها فريقا الهندسة وضمان الجودة.",
    },
    4: {
      date: "2021 – 2022",
      jobtitle: "مصمم واجهات وتجربة المستخدم",
      companyname: "هيئة حقوق الإنسان في السعودية (عمل حر)",
      role: `قدت أعمال UX/UI في مشروع إعادة تصميم استمر 5 أشهر. توليت إعادة تصميم التخطيطات وتحسين تجربة المستخدم عبر الرسومات السريعة، والهياكل السلكية، والنماذج الأولية.

تعاونت مع فريق التطوير لإعادة بناء الصفحات باستخدام HTML وVue.js وJavaScript.`,
    },
    5: {
      date: "مارس 2016 – يناير 2019",
      jobtitle: "مصمم ويب",
      companyname: "جامعة المجمعة — عمادة تقنية المعلومات",
      role: "عبر شركة متعاقدة خارجية. صممت وبنيت الواجهة الأمامية (HTML وCSS وJavaScript) لبوابات الجامعة وتطبيقاتها، ومنها البوابة الإلكترونية للجامعة، وبوابة الخدمات الإلكترونية، وبوابة التوظيف، وبوابة الإسكان الجامعي. وعملت مباشرة مع العمداء وقيادة تقنية المعلومات على الخدمات الجديدة وتحسين الأنظمة القائمة.",
    },
    6: {
      date: "2012 – فبراير 2016",
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
    8: {
      date: "2007 – 2012",
      jobtitle: "مصمم ويب مبتدئ ← مصمم ويب",
      companyname: "بداية المسيرة · عدة شركات",
      role: "تصميم واجهات الويب وبناء الصفحات بـ HTML، وهو الأساس الذي قام عليه عملي اللاحق في تجربة المستخدم والواجهات والواجهة الأمامية وأنظمة التصميم.",
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
      moreSheetTitle: "More",
      moreSheetClose: "Close more menu",
      bottomNavLabel: "Primary navigation",
      utilitiesLabel: "Explore more",
      languageLabel: "Language",
      themeLabel: "Appearance",
      themeLight: "Light mode",
      themeDark: "Dark mode",
      brand: "UX & DesignOps Lead",
      logoAlt: "Omar Mokhtar Ayed personal logo",
      languageToggleButton: "العربية",
      languageToggleAria: "Switch language to Arabic",
      themeToggle: {
        switchToDark: "Switch to dark mode",
        switchToLight: "Switch to light mode",
      },
      mobileMenu: {
        label: "Main navigation",
        open: "Open menu",
        close: "Close menu",
        buttonOpen: "Menu",
        buttonClose: "Close",
      },
    },
    footer: {
      name: "Omar Mokhtar Ayed",
      nameAriaLabel: "Omar Mokhtar Ayed — Homepage",
      subtitle: "UX/UI Lead · Design Systems · DesignOps",
      navAriaLabel: "Footer navigation",
      links: {
        caseStudies: "Case Studies",
        certifications: "Certifications",
        blog: "Blog",
        recommendations: "Recommendations",
        governmentUx: "Government UX",
        designOps: "DesignOps",
        uxLeadership: "UX Leadership",
      },
      socialAriaLabel: "Social links",
      social: {
        linkedinAria: "LinkedIn profile",
        behanceAria: "Behance profile",
        githubAria: "GitHub profile",
        emailAria: "Send email to Omar Mokhtar Ayed",
        emailText: "Email",
      },
      copyright: "© 2026 Omar Mokhtar Ayed. All rights reserved.",
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
      cardTitle: "🎙️ About Omar Mokhtar Ayed",
      cardDesc:
        "Listen to a short introduction covering my experience in UX leadership, Design Systems, DesignOps, and government digital products.",
      collapseLabel: "Minimize audio player",
      expandLabel: "Expand audio player",
    },
    home: {
      hero: {
        name: "Omar Mokhtar Ayed",
        role: "UX & DesignOps Lead",
        certificationBadge: "Google UX Design Professional Certificate Holder",
        certificationTitle: "Google UX Design Professional Certificate",
        certVerified: "Verified",
        downloadButton: "Download Resume",
        downloadTitle: "Download Omar Mokhtar Ayed resume",
        resumeSubtext: "Available in PDF and Word formats",
        resumeOptionPdf: "Download PDF Resume",
        resumeOptionDocx: "Download Word Resume (.docx)",
      },
      paragraphs: [
        {
          text: "UX & DesignOps Lead with 19+ years of experience, from web design in 2007 to leading UX for enterprise and government platforms. I lead a multidisciplinary design team, architect and govern design systems, and give design direction across internal and external teams. I often come in early, meeting with stakeholders and business teams to shape a service idea before its requirements are settled, and stay with it through to final design.",
          tooltip:
            "UX & DesignOps Lead with 19+ years of experience, from web design in 2007 to leading UX for enterprise and government platforms. I lead a multidisciplinary design team, architect and govern design systems, and give design direction across internal and external teams. I often come in early, meeting with stakeholders and business teams to shape a service idea before its requirements are settled, and stay with it through to final design.",
        },
        {
          text: "I also build what I design: I write the HTML, CSS, SCSS, and JavaScript behind the components I specify, so the bridge between design and engineering is part of my daily work, not a handoff.",
          tooltip:
            "I also build what I design: I write the HTML, CSS, SCSS, and JavaScript behind the components I specify, so the bridge between design and engineering is part of my daily work, not a handoff.",
        },
      ],
      focusAreas: [
        "Design Systems Architecture",
        "Enterprise UX",
        "Frontend Development",
      ],
      stats: [
        { icon: "calendar", value: "19+", label: "Years Experience" },
        { icon: "building", value: "Government", label: "UX Specialist" },
        { icon: "impact", value: "14", label: "Systems on one design system" },
        { icon: "layers", value: "Design System", label: "Leadership" },
      ],
      social: {
        behance: "Visit Omar Mokhtar Ayed on Behance",
        github: "Visit Omar Mokhtar Ayed on GitHub",
        linkedin: "Visit Omar Mokhtar Ayed on LinkedIn",
        email: "Send an email to Omar Mokhtar Ayed",
      },
      imageAlt: "Portrait of Omar Mokhtar Ayed",
    },
    about: {
      title: "About",
      downloadButton: "Download Resume",
      downloadTitle: "Download Omar Mokhtar Ayed resume",
      modalTitle: "Get my CV",
      modalText: "Choose how you would like to open it.",
      modalWord: "Download Word",
      modalWordMeta: "Editable .docx file",
      modalPdf: "View PDF",
      modalPdfMeta: "Opens in a new browser tab",
      modalClose: "Close",
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
      byLine: "By Omar Mokhtar Ayed",
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
      designSystemCaseStudy: {
        title: "Enterprise Design System & Governance",
        intro:
          "How I created a design system for a government platform of 14 systems, and the rules that keep internal and vendor teams building from one source.",
        tooltip:
          "A leadership case study on design systems architecture, DesignOps, and vendor design governance.",
        features: [
          "236 SCSS token variables matching Figma",
          "30+ component stylesheets on Bootstrap",
          "38 pages of bilingual documentation",
          "An 8-stage workflow for vendor teams",
        ],
        closing:
          "Names and internal details are omitted for confidentiality.",
        button: "Read the Case Study",
        buttonAria: "Read the design system case study",
        coverAlt: "A component page from the design system documentation",
      },
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
        text: "Try the interactive prototype",
        aria: "Open the student portal interactive prototype in a new tab",
      },
      moreProjectsTitle: "Additional Projects",
      linkedInButton: {
        text: "View more on LinkedIn",
        aria: "Open Omar Mokhtar Ayed LinkedIn profile for additional projects",
      },
      projectCtaLabel: "View Project Details",
      projectTagsAria: "Project tags for {{project}}",
      projectLinkAria: "Open {{project}} project details in new tab",
    },
    caseStudyPage: {
      iframeTitle: "Figma case study",
      back: "All Case Studies",
      backAria: "Back to all case studies",
      checkWebsite: "Try the Interactive Prototype",
      checkWebsiteAria: "Open the student portal interactive prototype in a new tab",
      hero: {
        title: "Majmaah University Student Portal",
        subtitle:
          "A unified Arabic student portal — consolidating academic services, schedule access, and university systems into a single daily dashboard.",
        tags: ["UX Case Study", "University Portal", "RTL"],
        meta: [
          { label: "Role", value: "Web Designer" },
          { label: "Timeline", value: "2016 – 2019, during my time at the university" },
          { label: "Status", value: "Shipped; replaced after I left" },
          { label: "University", value: "Majmaah University, KSA" },
        ],
        imageAlt: "Majmaah University Student Portal dashboard",
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
      whatsappAria: "Open WhatsApp chat with Omar Mokhtar Ayed",
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
        serverError:
          "Design System access is unavailable because of a server configuration issue. Please contact the site administrator.",
        networkError:
          "Could not connect to the server. Check your connection and try again.",
        requestError:
          "Unable to sign in right now. Please try again later.",
      },
    },
    meta: {
      "/": {
        title:
          "Omar Mokhtar | UX & DesignOps Lead",
        description:
          "UX & DesignOps Lead in Riyadh with 19+ years of experience in UX leadership, design systems, DesignOps, enterprise UX, and hands-on frontend development in HTML, CSS, SCSS, and JavaScript.",
        keywords:
          "UX & DesignOps Lead, UX Leadership, Design Systems, DesignOps, Enterprise UX, Frontend Development, HTML, CSS, SCSS, JavaScript, Design-to-Code, UX Design Lead Riyadh, Government UX Expert, Design System Lead, Government Digital Transformation, Enterprise UX Designer, Arabic UX Design, Design Systems Saudi Arabia, Omar Mokhtar Ayed, مصمم تجربة مستخدم السعودية, قائد تجربة المستخدم, خبير UX حكومي, قائد DesignOps الخليج, تحول رقمي رؤية 2030, نظام تصميم مؤسسي, تجربة المستخدم الحكومية, تصميم الأنظمة الحكومية, UX السعودية, UX الخليج, Government UX Saudi Arabia",
        canonical: baseUrl,
        ogImage: `${baseUrl}/images/omar.png`,
        ogLocale: "en_US",
        language: "English",
        structuredData: {
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Omar Mokhtar Ayed",
          alternateName: ["Omar Mokhtar Ayed", "Omar M. Mokhtar", "عمر مختار"],
          jobTitle: "UX & DesignOps Lead",
          description:
            "UX & DesignOps Lead with 19+ years of experience combining UX leadership, design systems architecture, DesignOps, and hands-on frontend development in HTML, CSS, SCSS, and JavaScript.",
          url: baseUrl,
          image: `${baseUrl}/images/omar.png`,
          hasOccupation: [
            { "@type": "Occupation", name: "UX & DesignOps Lead" },
            { "@type": "Occupation", name: "Design Systems Specialist" },
            { "@type": "Occupation", name: "DesignOps Practitioner" },
            { "@type": "Occupation", name: "Government UX Specialist" },
          ],
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
        title: "About Omar Mokhtar | UX & DesignOps Lead",
        description:
          "UX & DesignOps Lead in Riyadh with 19+ years in digital design. Leads a multidisciplinary design team, builds and governs enterprise design systems, and writes the HTML, CSS, SCSS, and JavaScript behind them.",
        keywords:
          "Omar Mokhtar, Omar Mokhtar Ayed, UX & DesignOps Lead, UX Leadership, Design Systems, Design System Architect, DesignOps, Enterprise UX, Frontend Development, HTML, CSS, SCSS, JavaScript, Design-to-Code, Riyadh",
        canonical: `${baseUrl}/about`,
        ogImage: `${baseUrl}/images/omar.png`,
        ogLocale: "en_US",
        language: "English",
      },
      "/blog": {
        title:
          "UX Design Insights — Omar Mokhtar Ayed | Design Blog & Articles",
        description:
          "UX and UI design insights from Omar Mokhtar Ayed — covering design thinking, user empathy, SVG implementation, and front-end development best practices.",
        keywords:
          "UX Design Blog, UI Design Articles, Design Thinking Saudi Arabia, User Empathy UX, SVG Web Development, Design Insights",
        canonical: `${baseUrl}/blog`,
        ogImage: `${baseUrl}/images/blog-hero.jpg`,
        ogLocale: "en_US",
        language: "English",
      },
      "/projects": {
        title:
          "UX Portfolio — Omar Mokhtar Ayed | Government & Enterprise UX Case Studies",
        description:
          "Portfolio of UX case studies by Omar Mokhtar Ayed — government platforms, design systems, university portals, and enterprise product design across Saudi Arabia.",
        keywords:
          "Omar Mokhtar Ayed UX, Omar Mokhtar Ayed Product Design, Government UX Projects Saudi Arabia, Enterprise UX Projects, Design Systems Saudi Arabia, Arabic UX Design, Government UX Saudi Arabia, مصمم تجربة مستخدم السعودية, نظام تصميم مؤسسي, تجربة المستخدم الحكومية, خبير UX حكومي",
        canonical: `${baseUrl}/projects`,
        ogImage: `${baseUrl}/images/projects-hero.jpg`,
        ogLocale: "en_US",
        language: "English",
      },
      "/contact": {
        title:
          "Contact Omar Mokhtar Ayed — UX Design Lead & DesignOps Consultant | Saudi Arabia",
        description:
          "Get in touch with Omar Mokhtar Ayed for UX collaboration, design system consultation, government digital experience projects, or enterprise product design inquiries.",
        keywords:
          "Contact UX Design Lead Saudi Arabia, Design Consultation Saudi Arabia, Government UX Consultant, DesignOps Services, Hire UX Designer Saudi Arabia",
        canonical: `${baseUrl}/contact`,
        ogImage: `${baseUrl}/images/omar.png`,
        ogLocale: "en_US",
        language: "English",
      },
      "/recommendations": {
        title: "Recommendations | Omar Mokhtar Ayed",
        description:
          "Professional recommendations and testimonials for Omar Mokhtar Ayed, UX Design Lead and DesignOps practitioner.",
        keywords:
          "Omar Mokhtar Ayed recommendations, UX testimonials, DesignOps testimonials, LinkedIn recommendations",
        canonical: `${baseUrl}/recommendations`,
        ogImage: `${baseUrl}/images/omar.png`,
        ogLocale: "en_US",
        language: "English",
      },
      "/certifications": {
        title: "Professional Certifications | Omar Mokhtar Ayed",
        description:
          "Selected professional certifications in UX Design, Design Systems, DesignOps, User Research, and Digital Product Design by Omar Mokhtar Ayed.",
        keywords:
          "Omar Mokhtar Ayed certifications, Omar Mokhtar Ayed UX certifications, Design System Bootcamp, Google UX Design Professional Certificate, DesignOps, User Research",
        canonical: `${baseUrl}/certifications`,
        ogImage: `${baseUrl}/images/omar.png`,
        ogLocale: "en_US",
        language: "English",
      },
      "/case-studies": {
        title: "Case Studies | Omar Mokhtar",
        description:
          "Case studies by Omar Mokhtar on leading an enterprise design system and on designing and building an Arabic-first student portal.",
        keywords:
          "UX Case Studies, Design System Case Study, DesignOps, Enterprise UX, Product Design, Omar Mokhtar",
        canonical: `${baseUrl}/case-studies`,
        ogImage: `${baseUrl}/images/casstudymain.png`,
        ogLocale: "en_US",
        language: "English",
      },
      "/design-system-case-study": {
        title: "Enterprise Design System Case Study | Omar Mokhtar",
        description:
          "How Omar Mokhtar built and governs an enterprise design system for a government platform of 14 systems: tokens, SCSS components, bilingual documentation, and vendor governance.",
        keywords:
          "Design System Case Study, DesignOps Case Study, Design Governance, Design Tokens, Enterprise UX, Vendor Design Governance, Omar Mokhtar",
        canonical: `${baseUrl}/design-system-case-study`,
        ogImage: `${baseUrl}/images/ds-2.png`,
        ogLocale: "en_US",
        language: "English",
      },
      "/casestudy": {
        title:
          "Majmaah University Student Portal — UX Case Study | Omar Mokhtar Ayed",
        description:
          "UX case study: consolidating 7 university systems into a single RTL-first student portal for Majmaah University. Covers the problem, design decisions, RTL, and single sign-on through Nafath.",
        keywords:
          "Majmaah University Portal UX Case Study, University Portal Design Saudi Arabia, RTL UX Design, Student Dashboard Design, Arabic UX Design, Government Education UX, Design Systems Saudi Arabia, مصمم تجربة مستخدم السعودية, نظام تصميم مؤسسي, تصميم الأنظمة الحكومية",
        canonical: `${baseUrl}/casestudy`,
        ogImage: `${baseUrl}/images/casstudymain.png`,
        ogLocale: "en_US",
        language: "English",
      },
      "/ux-lead": {
        title:
          "UX Design Lead Saudi Arabia — Omar Mokhtar Ayed | UX Strategy & Delivery",
        description:
          "Omar Mokhtar Ayed's background spans UX/UI design and front-end implementation. His current focus is UX leadership, design systems, and DesignOps in Saudi Arabia.",
        keywords:
          "Omar Mokhtar Ayed UX Lead, UX Design Lead Saudi Arabia, Omar Mokhtar Ayed UX Leadership Experience, UX Strategy Saudi Arabia, Design Governance, Arabic UX Design, Government UX Saudi Arabia, مصمم تجربة مستخدم السعودية, خبير UX حكومي, قائد DesignOps الخليج",
        canonical: `${baseUrl}/ux-lead`,
        ogImage: `${baseUrl}/images/omar.png`,
        ogLocale: "en_US",
        language: "English",
      },
      "/designops": {
        title:
          "DesignOps Specialist Saudi Arabia — Omar Mokhtar Ayed | Design Operations",
        description:
          "Design operations, governance, and scalable processes for enterprise teams. Omar Mokhtar Ayed builds DesignOps frameworks that connect design intent to production-quality delivery in Saudi Arabia.",
        keywords:
          "Omar Mokhtar Ayed DesignOps, DesignOps Saudi Arabia, DesignOps Practitioner Saudi Arabia, Design Operations Specialist, Design System Operations, Design Systems Saudi Arabia, قائد DesignOps الخليج, نظام تصميم مؤسسي, تحول رقمي رؤية 2030, مصمم تجربة مستخدم السعودية",
        canonical: `${baseUrl}/designops`,
        ogImage: `${baseUrl}/images/omar.png`,
        ogLocale: "en_US",
        language: "English",
      },
      "/government-ux": {
        title:
          "Government UX Expert Saudi Arabia — Omar Mokhtar Ayed | Digital Transformation",
        description:
          "Specialist in Saudi Arabia government digital experience design. Omar Mokhtar Ayed has led UX for government platforms including HRC, NHC, and national-scale enterprise systems aligned with Vision 2030.",
        keywords:
          "Omar Mokhtar Ayed Government UX, Government UX Saudi Arabia, Saudi Vision 2030 UX, Government Digital Transformation UX, Public Sector UX Design, Arabic UX Design, Design Systems Saudi Arabia, خبير UX حكومي, تحول رقمي رؤية 2030, تجربة المستخدم الحكومية, تصميم الأنظمة الحكومية, مصمم تجربة مستخدم السعودية",
        canonical: `${baseUrl}/government-ux`,
        ogImage: `${baseUrl}/images/omar.png`,
        ogLocale: "en_US",
        language: "English",
      },
      "/design-system": {
        title: "Design System Showcase | Omar Mokhtar Ayed",
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
        title: "Omar Mokhtar Ayed — UX Design Lead & DesignOps Specialist",
        description:
          "19+ years of professional experience in UX/UI design and front-end implementation. Current focus: UX leadership, design systems, and DesignOps in Saudi Arabia.",
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
        governmentUx: "تجربة المستخدم الحكومية",
        designopsNav: "عمليات التصميم",
        uxLead: "قيادة UX",
      },
      more: "المزيد",
      moreMenuAria: "افتح روابط تنقل إضافية",
      moreSheetTitle: "المزيد",
      moreSheetClose: "أغلق قائمة المزيد",
      bottomNavLabel: "التنقل الرئيسي",
      utilitiesLabel: "المزيد من الخيارات",
      languageLabel: "اللغة",
      themeLabel: "المظهر",
      themeLight: "الوضع الفاتح",
      themeDark: "الوضع الداكن",
      brand: "قائد تجربة المستخدم وعمليات التصميم",
      logoAlt: "شعار عمر مختار عايد الشخصي",
      languageToggleButton: "English",
      languageToggleAria: "التبديل إلى اللغة الإنجليزية",
      themeToggle: {
        switchToDark: "التبديل إلى الوضع الداكن",
        switchToLight: "التبديل إلى الوضع الفاتح",
      },
      mobileMenu: {
        label: "القائمة الرئيسية",
        open: "افتح القائمة",
        close: "أغلق القائمة",
        buttonOpen: "القائمة",
        buttonClose: "إغلاق",
      },
    },
    footer: {
      name: "عمر مختار عايد",
      nameAriaLabel: "عمر مختار عايد — الصفحة الرئيسية",
      subtitle: "قائد تصميم تجربة وواجهة المستخدم · أنظمة التصميم · عمليات التصميم",
      navAriaLabel: "روابط أسفل الصفحة",
      links: {
        caseStudies: "دراسات الحالة",
        certifications: "الشهادات",
        blog: "المدونة",
        recommendations: "التوصيات",
        governmentUx: "تجربة المستخدم الحكومية",
        designOps: "عمليات التصميم",
        uxLeadership: "قيادة UX",
      },
      socialAriaLabel: "روابط التواصل الاجتماعي",
      social: {
        linkedinAria: "حساب LinkedIn",
        behanceAria: "حساب Behance",
        githubAria: "حساب GitHub",
        emailAria: "إرسال بريد إلكتروني إلى عمر مختار عايد",
        emailText: "البريد الإلكتروني",
      },
      copyright: "© 2026 عمر مختار عايد. جميع الحقوق محفوظة.",
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
      cardTitle: "🎙️ نبذة صوتية عن عمر مختار عايد",
      cardDesc:
        "استمع إلى مقدمة قصيرة أشارك فيها خبرتي في قيادة تجربة المستخدم، وأنظمة التصميم، وعمليات التصميم، والعمل على المنتجات والمنصات الرقمية.",
      collapseLabel: "تصغير مشغل الصوت",
      expandLabel: "توسيع مشغل الصوت",
    },
    home: {
      hero: {
        name: "عمر مختار عايد",
        role: "قائد تجربة المستخدم وعمليات التصميم",
        certificationBadge:
          "حاصل على شهادة جوجل المهنية في تصميم تجربة المستخدم",
        certificationTitle: "شهادة جوجل في تصميم تجربة المستخدم",
        certVerified: "موثّق",
        downloadButton: "تحميل السيرة الذاتية",
        downloadTitle: "تحميل سيرة عمر مختار عايد الذاتية",
        resumeSubtext: "متاحة بصيغتي PDF و Word",
        resumeOptionPdf: "تحميل السيرة الذاتية PDF",
        resumeOptionDocx: "تحميل السيرة الذاتية Word (.docx)",
      },
      paragraphs: [
        {
          text: "قائد تجربة المستخدم وعمليات التصميم بخبرة تتجاوز 19 عامًا، بدأت بتصميم الويب عام 2007 ووصلت إلى قيادة تجربة المستخدم للمنصات المؤسسية والحكومية. أقود فريق تصميم متعدد التخصصات، وأبني أنظمة التصميم وأحوكمها، وأوجّه أعمال التصميم عبر الفرق الداخلية والخارجية. وكثيرًا ما أبدأ مبكرًا في اجتماعات مع أصحاب المصلحة وفرق الأعمال لبلورة فكرة الخدمة قبل اكتمال متطلباتها، ثم أواصل معها حتى التصميم النهائي.",
          tooltip:
            "قائد تجربة المستخدم وعمليات التصميم بخبرة تتجاوز 19 عامًا، بدأت بتصميم الويب عام 2007 ووصلت إلى قيادة تجربة المستخدم للمنصات المؤسسية والحكومية. أقود فريق تصميم متعدد التخصصات، وأبني أنظمة التصميم وأحوكمها، وأوجّه أعمال التصميم عبر الفرق الداخلية والخارجية. وكثيرًا ما أبدأ مبكرًا في اجتماعات مع أصحاب المصلحة وفرق الأعمال لبلورة فكرة الخدمة قبل اكتمال متطلباتها، ثم أواصل معها حتى التصميم النهائي.",
        },
        {
          text: "وأبني ما أصممه أيضًا: أكتب HTML وCSS وSCSS وJavaScript للمكونات التي أضع مواصفاتها، فيصبح الربط بين التصميم والهندسة جزءًا من عملي اليومي لا مجرد مرحلة تسليم.",
          tooltip:
            "وأبني ما أصممه أيضًا: أكتب HTML وCSS وSCSS وJavaScript للمكونات التي أضع مواصفاتها، فيصبح الربط بين التصميم والهندسة جزءًا من عملي اليومي لا مجرد مرحلة تسليم.",
        },
      ],
      focusAreas: [
        "هندسة أنظمة التصميم",
        "تجربة المستخدم المؤسسية",
        "تطوير الواجهة الأمامية",
      ],
      stats: [
        { icon: "calendar", value: "19+", label: "سنة خبرة" },
        { icon: "building", value: "حكومي", label: "متخصص UX" },
        { icon: "impact", value: "14", label: "نظامًا على نظام تصميم واحد" },
        { icon: "layers", value: "نظام التصميم", label: "قيادة" },
      ],
      social: {
        behance: "زيارة عمر مختار عايد على Behance",
        github: "زيارة عمر مختار عايد على GitHub",
        linkedin: "زيارة عمر مختار عايد على LinkedIn",
        email: "إرسال بريد إلكتروني إلى عمر مختار عايد",
      },
      imageAlt: "صورة عمر مختار عايد",
    },
    about: {
      title: "من أنا",
      downloadButton: "تحميل السيرة الذاتية",
      downloadTitle: "تحميل سيرة عمر مختار عايد الذاتية",
      modalTitle: "احصل على سيرتي الذاتية",
      modalText: "اختر طريقة فتحها.",
      modalWord: "تحميل ملف Word",
      modalWordMeta: "ملف .docx قابل للتعديل",
      modalPdf: "عرض ملف PDF",
      modalPdfMeta: "يفتح في تبويب جديد",
      modalClose: "إغلاق",
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
      byLine: "بقلم عمر مختار عايد",
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
      designSystemCaseStudy: {
        title: "نظام تصميم مؤسسي وحوكمته",
        intro:
          "كيف أنشأت نظام تصميم لمنصة حكومية تضم 14 نظامًا، ووضعت القواعد التي تجعل الفرق الداخلية والشركات المنفذة تبني من مصدر واحد.",
        tooltip:
          "دراسة حالة قيادية عن هندسة أنظمة التصميم وعمليات التصميم وحوكمة الشركات المنفذة.",
        features: [
          "236 متغيرًا في SCSS تطابق الـ Tokens في Figma",
          "أكثر من 30 ملفًا للمكونات مبنية على Bootstrap",
          "38 صفحة توثيق ثنائي اللغة",
          "مسار من 8 مراحل للشركات المنفذة",
        ],
        closing: "حُذفت الأسماء والتفاصيل الداخلية حفاظًا على السرية.",
        button: "اقرأ دراسة الحالة",
        buttonAria: "قراءة دراسة حالة نظام التصميم",
        coverAlt: "صفحة مكوّن من توثيق نظام التصميم",
      },
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
        aria: "زيارة حساب عمر مختار عايد على لينكدإن لمزيد من المشاريع",
      },
      projectCtaLabel: "عرض تفاصيل المشروع",
      projectTagsAria: "وسوم المشروع {{project}}",
      projectLinkAria: "فتح تفاصيل مشروع {{project}} في علامة تبويب جديدة",
    },
    caseStudyPage: {
      iframeTitle: "دراسة حالة في فيجما",
      back: "كل دراسات الحالة",
      backAria: "العودة إلى كل دراسات الحالة",
      checkWebsite: "جرّب النموذج التفاعلي",
      checkWebsiteAria: "فتح النموذج التفاعلي لبوابة الطلاب في تبويب جديد",
      hero: {
        title: "بوابة طلاب جامعة المجمعة",
        subtitle:
          "بوابة أكاديمية موحدة باللغة العربية — تجمع الخدمات الطلابية والجدول الدراسي وأنظمة الجامعة في لوحة تحكم واحدة للاستخدام اليومي.",
        tags: ["دراسة حالة UX", "بوابة جامعية", "RTL"],
        meta: [
          { label: "الدور", value: "مصمم ويب" },
          { label: "المدة", value: "2016 – 2019، أثناء عملي في الجامعة" },
          { label: "الحالة", value: "نُفّذ فعليًا، واستُبدل بعد انتهاء عملي" },
          {
            label: "الجامعة",
            value: "جامعة المجمعة، المملكة العربية السعودية",
          },
          { label: "المنصة", value: "ويب · عربي RTL" },
        ],
        imageAlt: "لوحة تحكم بوابة طلاب جامعة المجمعة",
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
      whatsappAria: "افتح محادثة واتساب مع عمر مختار عايد",
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
        serverError:
          "الدخول إلى نظام التصميم غير متاح بسبب مشكلة في إعدادات السيرفر. يرجى التواصل مع مسؤول الموقع.",
        networkError:
          "تعذّر الاتصال بالسيرفر. تحقق من اتصالك وحاول مرة أخرى.",
        requestError:
          "تعذّر تسجيل الدخول حاليًا. يرجى المحاولة لاحقًا.",
      },
    },
    meta: {
      "/": {
        title:
          "عمر مختار | قائد تجربة المستخدم وعمليات التصميم",
        description:
          "قائد تجربة المستخدم وعمليات التصميم في الرياض بخبرة تتجاوز 19 عامًا في قيادة تجربة المستخدم وأنظمة التصميم وعمليات التصميم وتجربة المستخدم المؤسسية، مع تطوير عملي للواجهة الأمامية بـ HTML وCSS وSCSS وJavaScript.",
        keywords:
          "قائد تجربة المستخدم وعمليات التصميم, قيادة تجربة المستخدم, أنظمة التصميم, عمليات التصميم, تجربة المستخدم المؤسسية, تطوير الواجهة الأمامية, HTML, CSS, SCSS, JavaScript, مصمم تجربة مستخدم الرياض, خبير UX حكومي, قائد عمليات التصميم في الخليج, تحول رقمي رؤية 2030, نظام تصميم مؤسسي, تجربة المستخدم الحكومية, تصميم الأنظمة الحكومية, UX السعودية, UX الخليج, Government UX Saudi Arabia, Arabic UX Design, أنظمة التصميم في السعودية, قائد تصميم تجربة المستخدم السعودية, التحويل الرقمي الحكومي, عمر مختار عايد",
        canonical: baseUrl,
        ogImage: `${baseUrl}/images/omar.png`,
        ogLocale: "ar_SA",
        language: "Arabic",
        structuredData: {
          "@context": "https://schema.org",
          "@type": "Person",
          name: "عمر مختار عايد",
          alternateName: ["Omar Mokhtar Ayed", "Omar M. Mokhtar", "عمر مختار عايد"],
          jobTitle: "قائد تصميم تجربة المستخدم وعمليات التصميم",
          description:
            "أكثر من 19 عامًا من الخبرة المهنية في تصميم تجربة المستخدم والواجهات وتنفيذ الواجهات الأمامية. التركيز الحالي: قيادة تجربة المستخدم وأنظمة التصميم وعمليات التصميم في السعودية.",
          url: baseUrl,
          image: `${baseUrl}/images/omar.png`,
          hasOccupation: [
            { "@type": "Occupation", name: "قائد تصميم تجربة وواجهة المستخدم وعمليات التصميم" },
            { "@type": "Occupation", name: "متخصص أنظمة التصميم" },
            { "@type": "Occupation", name: "ممارس عمليات التصميم" },
            { "@type": "Occupation", name: "متخصص تجربة المستخدم الحكومية" },
          ],
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
        title: "عن عمر مختار | قائد تجربة المستخدم وعمليات التصميم",
        description:
          "قائد تجربة المستخدم وعمليات التصميم في الرياض بخبرة تتجاوز 19 عامًا في التصميم الرقمي. يقود فريق تصميم متعدد التخصصات، ويبني أنظمة تصميم مؤسسية ويحوكمها، ويكتب HTML وCSS وSCSS وJavaScript الخاصة بها.",
        keywords:
          "عمر مختار, عمر مختار عايد, قائد تصميم تجربة المستخدم, قيادة تجربة المستخدم, أنظمة التصميم, مهندس أنظمة التصميم, عمليات التصميم, DesignOps, تجربة المستخدم المؤسسية, تطوير الواجهة الأمامية, HTML, CSS, SCSS, JavaScript, الرياض",
        canonical: `${baseUrl}/about`,
        ogImage: `${baseUrl}/images/omar.png`,
        ogLocale: "ar_SA",
        language: "Arabic",
      },
      "/blog": {
        title: "رؤى تصميم UX — عمر مختار عايد | مقالات ومدونة التصميم",
        description:
          "رؤى وأفكار في تصميم UX/UI من عمر مختار عايد — التفكير التصميمي، التعاطف مع المستخدم، تطوير الويب SVG، وأفضل ممارسات تطوير الواجهة الأمامية.",
        keywords:
          "مدونة UX السعودية, مقالات تصميم تجربة المستخدم, التفكير التصميمي, تعاطف UX, SVG ويب, رؤى التصميم",
        canonical: `${baseUrl}/blog`,
        ogImage: `${baseUrl}/images/blog-hero.jpg`,
        ogLocale: "ar_SA",
        language: "Arabic",
      },
      "/projects": {
        title: "محفظة UX — عمر مختار عايد | دراسات حالة حكومية ومؤسسية",
        description:
          "محفظة دراسات حالة UX لعمر مختار عايد — المنصات الحكومية وأنظمة التصميم والبوابات الجامعية وتصميم المنتجات المؤسسية في المملكة العربية السعودية.",
        keywords:
          "عمر مختار عايد UX, مشاريع تجربة المستخدم الحكومية, دراسات حالة UX السعودية, عمر مختار عايد تصميم تجربة المستخدم, نظام تصميم مؤسسي, تصميم الأنظمة الحكومية, مصمم تجربة مستخدم السعودية, خبير UX حكومي, تحول رقمي رؤية 2030",
        canonical: `${baseUrl}/projects`,
        ogImage: `${baseUrl}/images/projects-hero.jpg`,
        ogLocale: "ar_SA",
        language: "Arabic",
      },
      "/contact": {
        title: "تواصل مع عمر مختار عايد — قائد UX ومستشار عمليات التصميم | السعودية",
        description:
          "تواصل مع عمر مختار عايد للتعاون في مشاريع UX، استشارات نظام التصميم، مشاريع التجربة الرقمية الحكومية، أو استفسارات تصميم المنتجات المؤسسية.",
        keywords:
          "تواصل قائد UX السعودية, استشارات التصميم السعودية, مستشار UX حكومي, خدمات عمليات التصميم, توظيف مصمم UX السعودية",
        canonical: `${baseUrl}/contact`,
        ogImage: `${baseUrl}/images/omar.png`,
        ogLocale: "ar_SA",
        language: "Arabic",
      },
      "/recommendations": {
        title: "التوصيات المهنية | عمر مختار عايد",
        description:
          "توصيات وشهادات مهنية لعمر مختار عايد في قيادة تجربة المستخدم وعمليات التصميم.",
        keywords:
          "توصيات عمر مختار عايد, شهادات مهنية UX, توصيات لينكدإن, توصيات عمليات التصميم",
        canonical: `${baseUrl}/recommendations`,
        ogImage: `${baseUrl}/images/omar.png`,
        ogLocale: "ar_SA",
        language: "Arabic",
      },
      "/certifications": {
        title: "الشهادات المهنية | عمر مختار عايد",
        description:
          "شهادات مهنية مختارة في تصميم تجربة المستخدم، وأنظمة التصميم، وعمليات التصميم، وأبحاث المستخدم، وتصميم المنتجات الرقمية لدى عمر مختار عايد.",
        keywords:
          "شهادات عمر مختار عايد المهنية, عمر مختار عايد UX, معسكر نظام التصميم, شهادة جوجل المهنية في تصميم تجربة المستخدم, عمر مختار عايد أنظمة التصميم",
        canonical: `${baseUrl}/certifications`,
        ogImage: `${baseUrl}/images/omar.png`,
        ogLocale: "ar_SA",
        language: "Arabic",
      },
      "/design-system": {
        title: "عرض نظام التصميم | عمر مختار عايد",
        description: "صفحة وصول خاصة لطلب استعراض نظام التصميم بشكل انتقائي.",
        keywords: "عرض خاص, طلب وصول, قيادة UX، عمليات التصميم",
        canonical: `${baseUrl}/design-system`,
        ogImage: `${baseUrl}/images/omar.png`,
        ogLocale: "ar_SA",
        language: "Arabic",
        robots:
          "noindex, nofollow, noarchive, nosnippet, noimageindex, max-snippet:0, max-image-preview:none, max-video-preview:0",
        googlebot: "noindex, nofollow",
      },
      "/case-studies": {
        title: "دراسات الحالة | عمر مختار",
        description:
          "دراسات حالة لعمر مختار عن قيادة نظام تصميم مؤسسي، وعن تصميم وتنفيذ بوابة طلابية بالعربية.",
        keywords:
          "دراسات حالة تجربة المستخدم, دراسة حالة نظام تصميم, عمليات التصميم, تجربة المستخدم المؤسسية, عمر مختار",
        canonical: `${baseUrl}/case-studies`,
        ogImage: `${baseUrl}/images/casstudymain.png`,
        ogLocale: "ar_SA",
        language: "Arabic",
      },
      "/design-system-case-study": {
        title: "دراسة حالة نظام تصميم مؤسسي | عمر مختار",
        description:
          "كيف بنى عمر مختار نظام تصميم مؤسسي لمنصة حكومية تضم 14 نظامًا ويحوكمه: الـ Tokens ومكونات SCSS والتوثيق ثنائي اللغة وحوكمة الشركات المنفذة.",
        keywords:
          "دراسة حالة نظام تصميم, عمليات التصميم, حوكمة التصميم, Design Tokens, تجربة المستخدم المؤسسية, عمر مختار",
        canonical: `${baseUrl}/design-system-case-study`,
        ogImage: `${baseUrl}/images/ds-2.png`,
        ogLocale: "ar_SA",
        language: "Arabic",
      },
      "/casestudy": {
        title: "بوابة طلاب جامعة المجمعة — دراسة حالة UX | عمر مختار عايد",
        description:
          "دراسة حالة UX: توحيد 7 أنظمة جامعية في بوابة طلابية واحدة بدعم RTL أصلي لجامعة المجمعة. تشمل المشكلة وقرارات التصميم وRTL والدخول الموحد عبر نفاذ.",
        keywords:
          "دراسة حالة بوابة جامعة المجمعة, تصميم بوابة جامعية السعودية, تصميم RTL UX, تصميم لوحة الطالب, تصميم UX بالعربية, UX التعليم الحكومي, مصمم تجربة مستخدم السعودية, نظام تصميم مؤسسي, تصميم الأنظمة الحكومية, تحول رقمي رؤية 2030",
        canonical: `${baseUrl}/casestudy`,
        ogImage: `${baseUrl}/images/casstudymain.png`,
        ogLocale: "ar_SA",
        language: "Arabic",
      },
      "/ux-lead": {
        title:
          "قائد تصميم تجربة المستخدم في السعودية — عمر مختار عايد | استراتيجية وتسليم UX",
        description:
          "تمتد خلفية عمر مختار عايد عبر تصميم تجربة المستخدم والواجهات وتنفيذ الواجهات الأمامية. يركز حاليًا على قيادة تجربة المستخدم وأنظمة التصميم وعمليات التصميم في السعودية.",
        keywords:
          "عمر مختار عايد قائد تجربة المستخدم, قائد UX السعودية, استراتيجية UX السعودية, قيادة UX حكومي, حوكمة التصميم, مصمم تجربة مستخدم السعودية, خبير UX حكومي, قائد عمليات التصميم في الخليج, نظام تصميم مؤسسي",
        canonical: `${baseUrl}/ux-lead`,
        ogImage: `${baseUrl}/images/omar.png`,
        ogLocale: "ar_SA",
        language: "Arabic",
      },
      "/designops": {
        title: "متخصص عمليات التصميم في السعودية — عمر مختار عايد | عمليات التصميم",
        description:
          "عمليات التصميم والحوكمة والعمليات القابلة للتوسع للفرق المؤسسية. عمر مختار عايد يبني أطر عمليات التصميم التي تربط نية التصميم بالتسليم الإنتاجي في المملكة العربية السعودية.",
        keywords:
          "عمر مختار عايد عمليات التصميم, عمليات التصميم في السعودية, متخصص عمليات التصميم, عمليات نظام التصميم, ممارس عمليات التصميم في السعودية, قائد عمليات التصميم في الخليج, نظام تصميم مؤسسي, تحول رقمي رؤية 2030, مصمم تجربة مستخدم السعودية",
        canonical: `${baseUrl}/designops`,
        ogImage: `${baseUrl}/images/omar.png`,
        ogLocale: "ar_SA",
        language: "Arabic",
      },
      "/government-ux": {
        title: "خبير UX الحكومي السعودي — عمر مختار عايد | التحويل الرقمي",
        description:
          "متخصص في تصميم التجربة الرقمية الحكومية السعودية. قاد عمر مختار عايد UX لمنصات حكومية تشمل هيئة حقوق الإنسان والشركة الوطنية للإسكان وأنظمة مؤسسية كبيرة متوافقة مع رؤية 2030.",
        keywords:
          "عمر مختار عايد تجربة المستخدم الحكومية, UX حكومي السعودية, رؤية 2030 UX, التحويل الرقمي الحكومي UX, خبير UX حكومي, تحول رقمي رؤية 2030, تجربة المستخدم الحكومية, تصميم الأنظمة الحكومية, مصمم تجربة مستخدم السعودية, عمر مختار عايد السعودية",
        canonical: `${baseUrl}/government-ux`,
        ogImage: `${baseUrl}/images/omar.png`,
        ogLocale: "ar_SA",
        language: "Arabic",
      },
      default: {
        title: "عمر مختار عايد — قائد تصميم تجربة المستخدم وعمليات التصميم",
        description:
          "أكثر من 19 عامًا من الخبرة المهنية في تصميم تجربة المستخدم والواجهات وتنفيذ الواجهات الأمامية. التركيز الحالي: قيادة تجربة المستخدم وأنظمة التصميم وعمليات التصميم في السعودية.",
        keywords:
          "مصمم UX السعودية, مصمم واجهات المستخدم, تجربة المستخدم، عمليات التصميم",
        canonical: baseUrl,
        ogImage: `${baseUrl}/images/omar.png`,
        ogLocale: "ar_SA",
        language: "Arabic",
      },
    },
    data: localizedData.ar,
  },
};
