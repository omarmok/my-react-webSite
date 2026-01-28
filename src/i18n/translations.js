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
      info: "Human Rights In Saudia Arabia (HRC) -Under Development",
      Issued: "Aug 2021 - Present",
    },
    2: {
      info: "Deanship of Information Technology",
      Issued: "Oct 2017 - Sep 2018",
    },
    3: { info: "Mullak", Issued: "Mar 2019 - Present" },
    4: { info: "Idlelands", Issued: "Mar 2019 - Present" },
    5: { info: "Majmaah University Portal", Issued: "Aug 2019 - Sep 2020" },
    6: { info: "Majmaah Charity", Issued: "May 2020 - Sep 2020" },
    7: { info: "MU Greetings Card", Issued: "Jun 2016 - Sep 2017" },
  },
  ar: {
    1: {
      info: "هيئة حقوق الإنسان في السعودية (HRC) - قيد التطوير",
      Issued: "أغسطس 2021 – الآن",
    },
    2: {
      info: "عمادة تقنية المعلومات",
      Issued: "أكتوبر 2017 – سبتمبر 2018",
    },
    3: { info: "مولّاك", Issued: "مارس 2019 – الآن" },
    4: { info: "أيديلاندز", Issued: "مارس 2019 – الآن" },
    5: {
      info: "بوابة جامعة المجمعة",
      Issued: "أغسطس 2019 – سبتمبر 2020",
    },
    6: {
      info: "جمعية المجمعة الخيرية",
      Issued: "مايو 2020 – سبتمبر 2020",
    },
    7: {
      info: "بطاقة تهاني جامعة المجمعة",
      Issued: "يونيو 2016 – سبتمبر 2017",
    },
  },
};

const experienceTranslations = {
  en: {
    1: {
      date: "Sep 2025 - Present",
      jobtitle: "UX & DesignOps Lead",
      companyname: "Confidential Government",
      role: `As a UX & DesignOps Lead, I drive and optimize the end-to-end user experience across enterprise platforms and mobile applications by defining UX processes, standards, and design governance. I lead the creation and evolution of a scalable Design System, ensuring consistency, accessibility, and alignment across all digital products.

I work closely with business analysts, product owners, developers, and QA teams to translate complex requirements into clear, executable design artifacts and specifications. I actively support the delivery lifecycle through design reviews, development handoff, UX quality assurance, and UAT validation to ensure accurate implementation aligned with UX intent.

Additionally, I collaborate with the development team in rebuilding and optimizing platform interfaces using HTML, CSS, and JavaScript, ensuring technical feasibility, design fidelity, and high-quality production delivery.`,
    },
    2: {
      date: "Jan 2025 - Sep 2025",
      jobtitle: "UX Design Lead",
      companyname: "Confidential Government",
      role: `As a UI/UX Design Lead, I worked to improve the user experience process for both the platforms and mobile app. I contributed to building the Design System for these platforms and worked closely with business analysts, developers, and QA testers to ensure the product was developed according to UX and UI specifications.

Additionally, I collaborated with the development team in rebuilding key pages using HTML, CSS, and JavaScript to ensure design fidelity and implementation quality.`,
    },
    3: {
      date: "Feb 2019 - Dec 2022",
      jobtitle: "UI/UX Designer",
      companyname: "National Housing Company (NHC)",
      role: "UI/UX Designer focused on wireframing, prototyping, and front-end web development (HTML, CSS, JavaScript, Vue.js). Built UI kits and design solutions for web platforms, and collaborated closely with analysts, developers, and QA testers to ensure the product was developed according to UX and UI specifications.",
    },
    4: {
      date: "2021 - 2022",
      jobtitle: "UI/UX Designer",
      companyname: "Human Rights In Saudia Arabia (HRC) Freelancer",
      role: `Led UX/UI efforts within a team of 4 to deliver the project over 5 months. Responsible for redesigning layouts and improving overall user experience using sketching, wireframing, and prototyping.

Collaborated with the development team to rebuild pages using HTML, Vue.js, and JavaScript.`,
    },
    5: {
      date: "Mar 2016 - Feb 2019",
      jobtitle: "UI/UX Engineer",
      companyname: "Al-Majma’ah University",
      role: "UI/UX Designer with front-end web development experience (HTML, CSS, JavaScript) and graphic design for the e-portal unit. Translated student and employee needs into digital solutions, collaborated with analysts, developers, and QA testers, and communicated daily with stakeholders (e.g., deans) on new product ideas and continuous improvement of existing systems.",
    },
    6: {
      date: "Nov 2013 - Feb 2016",
      jobtitle: "UI Designer",
      companyname: "SURE International Technology - SURE",
      role: "Interface Designer (HTML, CSS). Worked within the design team to deliver solutions for government agencies and universities, including the National Guard, Shaqra University, and the Food and Drug Authority.",
    },
    7: {
      date: "May 2012 - 2013",
      jobtitle: "UI/UX Designer-Developer",
      companyname: "Jazan University",
      role: "UI/UX Designer with wireframing and front-end web development (HTML, CSS, JavaScript) and graphic design for the e-portal unit. Identified student and employee needs, collaborated with analysts, developers, and QA testers to ensure requirements were met, and communicated with stakeholders on product enhancements and new ideas.",
    },
  },
  ar: {
    1: {
      date: "سبتمبر 2025 – الآن",
      jobtitle: "قائد تجربة المستخدم وعمليات التصميم",
      companyname: "جهة حكومية",
      role: `بصفتي قائد تجربة المستخدم وعمليات التصميم، أقود تحسين تجربة المستخدم الشاملة عبر المنصات المؤسسية وتطبيقات الجوال من خلال وضع عمليات، معايير، وحوكمة UX. أقود إنشاء وتطوير نظام تصميم قابل للتوسع يضمن الاتساق وقابلية الوصول والتوافق عبر جميع المنتجات الرقمية.

أتعاون عن قرب مع محللي الأعمال ومالكي المنتجات والمطورين وفرق ضمان الجودة لتحويل المتطلبات المعقدة إلى مخرجات تصميمية واضحة وقابلة للتنفيذ. أدعم دورة التسليم عبر مراجعات التصميم، وتسليم التطوير، وضمان جودة UX، واختبارات القبول للتأكد من تنفيذ دقيق يتماشى مع نية التصميم.

كما أتعاون مع فريق التطوير في إعادة بناء وتحسين واجهات المنصة باستخدام HTML وCSS وJavaScript لضمان الجدوى التقنية، ودقة التصميم، وجودة التسليم.`,
    },
    2: {
      date: "يناير 2025 – سبتمبر 2025",
      jobtitle: "قائد تصميم تجربة المستخدم",
      companyname: "جهة حكومية",
      role: `بصفتي قائد تصميم تجربة المستخدم، عملت على تحسين عملية UX للمنصة والتطبيق. شاركت في بناء نظام التصميم وعملت مع محللي الأعمال والمطورين وضمان الجودة لضمان تطوير المنتج وفق مواصفات تجربة وواجهة المستخدم.

كما تعاونت مع فريق التطوير في إعادة بناء الصفحات الأساسية باستخدام HTML وCSS وJavaScript لضمان تطابق التصميم وجودة التنفيذ.`,
    },
    3: {
      date: "فبراير 2019 – ديسمبر 2022",
      jobtitle: "مصمم واجهات وتجربة المستخدم",
      companyname: "الشركة الوطنية للإسكان (NHC)",
      role: "مصمم واجهات وتجربة المستخدم يركز على رسم الهياكل السلكية، النمذجة الأولية، وتطوير الواجهة الأمامية (HTML، CSS، JavaScript، Vue.js). أنشأت مجموعات واجهات وحلول تصميمية للمنصات، وتعاونت بشكل وثيق مع المحللين والمطورين وضمان الجودة لضمان التطوير وفق مواصفات UX وUI.",
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
      role: "مصمم واجهات وتجربة المستخدم مع خبرة في تطوير الواجهة الأمامية (HTML، CSS، JavaScript) وتصميم الجرافيك لوحدة البوابة الإلكترونية. ترجمت احتياجات الطلاب والموظفين إلى حلول رقمية، وتعاونت مع المحللين والمطورين وضمان الجودة، وتواصلت يوميًا مع أصحاب المصلحة (مثل العمداء) حول الأفكار الجديدة والتحسين المستمر للأنظمة.",
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
      role: "مصمم ومطور واجهات وتجربة المستخدم يعمل على رسم الهياكل السلكية وتطوير الواجهة الأمامية (HTML، CSS، JavaScript) وتصميم الجرافيك لوحدة البوابة الإلكترونية. حددت احتياجات الطلاب والموظفين، وتعاونت مع المحللين والمطورين وضمان الجودة لضمان تلبية المتطلبات، وتواصلت مع أصحاب المصلحة لتحسين المنتجات والأفكار الجديدة.",
    },
  },
};

const certificationTranslations = {
  en: {
    1: {
      info: "Design System Bootcamp",
      Issued: "Issued Aug 8, 2025 · No Expiration Date",
    },
    2: {
      info: "Google UX Design Professional Certificate",
      Issued: "Issued Aug 2022 · No Expiration Date",
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
    },
    2: {
      info: "شهادة جوجل المهنية في تصميم تجربة المستخدم",
      Issued: "صادرة في أغسطس 2022 · بدون تاريخ انتهاء",
    },
    3: { info: "شهادة PMI-ACP", Issued: "صادرة في سبتمبر 2022 · بدون تاريخ انتهاء" },
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
      certificationTranslations.en
    ),
  },
  ar: {
    projects: localizeCollection(sourceProjects, projectTranslations.ar),
    experience: localizeCollection(sourceExperience, experienceTranslations.ar),
    certifications: localizeCollection(
      sourceCertifications,
      certificationTranslations.ar
    ),
  },
};

export const translations = {
  en: {
    nav: {
      links: {
        home: "Home",
        about: "About",
        work: "Work",
        blog: "Blog",
        contact: "Contact",
      },
      brand: "UI/UX Designer",
      logoAlt: "Omar Mokhtar personal logo",
      languageToggleButton: "العربية",
      languageToggleAria: "Switch language to Arabic",
    },
    footer: {
      madeWithLove: "Made with ❤️ from scratch by © OMAR MOKHTAR",
      ariaLabel: "Visit Omar Mokhtar personal website",
    },
    loader: {
      loading: "Loading…",
    },
    audio: {
      playLabel: "Play summary audio description",
      pauseLabel: "Pause summary audio playback",
      playButton: "Listen to My Summary",
      pauseButton: "Stop",
      fallbackText: "Your browser does not support audio playback.",
    },
    home: {
      hero: {
        role: "UX & DesignOps Lead @ Confidential Government!",
        certificationBadge: "Google Professional UX Certified",
        certificationTitle: "Google UX Design Professional Certificate",
        downloadButton: "Download Resume",
        downloadTitle: "Download Omar Mokhtar resume from Google Drive",
      },
      paragraphs: [
        {
          text: "With over 17 years of experience as a UI/UX designer, I specialize in digital experiences, mobile interfaces, and dynamic web dashboards.",
          tooltip:
            "With over 17 years of experience as a UI/UX designer, I specialize in digital experiences, mobile interfaces, and dynamic web dashboards.",
        },
        {
          text: "Throughout my career, I have worked in sectors including renowned organizations, government ministries, and prestigious academic institutions.",
          tooltip:
            "Throughout my career, I have worked in sectors including renowned organizations, government ministries, and prestigious academic institutions.",
        },
        {
          text: "I take the helm in leading comprehensive redesign initiatives, transforming user experiences by seamlessly translating ideas into tangible solutions. From initial ideation to the final execution, my process involves meticulous sketching, precise wireframing, and crafting high-fidelity prototypes.",
          tooltip:
            "I take the helm in leading comprehensive redesign initiatives, transforming user experiences by seamlessly translating ideas into tangible solutions. From initial ideation to the final execution, my process involves meticulous sketching, precise wireframing, and crafting high-fidelity prototypes.",
        },
        {
          text: "I work closely with analysts, developers, and QA testers to ensure our designs smoothly become user-friendly products that match project goals perfectly.",
          tooltip:
            "I work closely with analysts, developers, and QA testers to ensure our designs smoothly become user-friendly products that match project goals perfectly.",
        },
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
      downloadTitle: "Download Omar Mokhtar resume from Google Drive",
      videoLink: "You can find more about me in this video",
      emptyExperience: "Experience data is currently unavailable.",
    },
    certifications: {
      title: "Certifications",
      description:
        "I usually prefer investing in self-learning to improve my experiences.",
      showCredential: "Show credential",
      showCredentialTitle: "Show credential",
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
      negativeLabel: "Defects:",
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
            'As the talk goes, "hand-shifting" is the most powerful form of work. In UX, empathy is what enables designers to deliver the best possible experience because it drives them to truly understand the user\'s needs and fix problems at their root.',
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
      title: "Work",
      description: [
        "I'm always excited about learning new techniques and expanding my skills.",
        "Every project I've worked on, whether alone or with others, has taught me something valuable.",
        "Sometimes, I've used these lessons directly in my work. Other times, the technologies used in the workplace limited what I could apply.",
        "Adapting to these tools influenced how I worked, but it also motivated me to explore more beyond those limits.",
      ],
      descriptionTooltip:
        "I'm always excited about learning new techniques and expanding my skills. Every project I've worked on, whether alone or with others, has taught me something valuable. Sometimes, I've used these lessons directly in my work. Other times, the technologies used in the workplace limited what I could apply. Adapting to these tools influenced how I worked, but it also motivated me to explore more beyond those limits.",
      caseStudy: {
        title: "Student Internal Portal",
        intro:
          "Portals have become an urgent necessity in the field of education and higher education: From this standpoint, MAJMAAH UNIVERSITY suggested establishing an internal portal for students, characterized by the following:",
        tooltip:
          "Portals have become an urgent necessity in the field of education and higher education: From this standpoint, MAJMAAH UNIVERSITY suggested establishing an internal portal for students, characterized by the following:",
        features: [
          "Single sign-on",
          "Providing more than 15 services",
          "View the news and events announced by the university",
          "Quick access: Submit applications across the various systems of the university and collect them in one place.",
          "Review their classes and exam schedules.",
        ],
        closing:
          "The portal centralizes critical student services so requests, announcements, and schedules are easy to reach from a single place.",
        button: "Case Study",
        buttonAria: "Read the full case study for the student internal portal",
        coverAlt: "Case study cover",
      },
      caseStudyExternal: {
        text: "View live prototype",
        aria: "Open the student portal live prototype in a new tab",
      },
      moreProjectsTitle: "More Projects",
      linkedInButton: {
        text: "View more on LinkedIn",
        aria: "Open Omar Mokhtar LinkedIn profile for additional projects",
      },
      projectLinkAria: "Open {{project}} project details in new tab",
    },
    caseStudyPage: {
      iframeTitle: "Figma case study",
      back: "Back to Projects",
      backAria: "Back to the projects page",
      checkWebsite: "Check website",
      checkWebsiteAria: "View the student portal live prototype",
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
      whatsapp: "Contact me via WhatsApp",
      whatsappAria: "Open WhatsApp chat with Omar Mokhtar",
      successAlert: "✅ Message sent successfully!",
      failureAlert:
        "❌ Failed to send the message, please reconnect Gmail or check the settings.",
    },
    meta: {
      "/": {
        title: "Omar Mokhtar - UX Design Lead | 17+ Years Experience",
        description:
          "Omar Mokhtar is a UX Design Lead with 17+ years of experience in digital experiences, mobile interfaces, and web dashboards. Google Professional UX Certified.",
        keywords:
          "UX Designer, UI Designer, User Experience, Mobile Design, Web Dashboards, Saudi Arabia, Government Projects",
        canonical: baseUrl,
        ogImage: `${baseUrl}/images/omar.png`,
        ogLocale: "en_US",
        language: "English",
        structuredData: {
          "@context": "https://schema.org",
          "@type": "Person",
          name: "عمر مختار",
          jobTitle: "UX Design Lead",
          description:
            "UX Design Lead with 17+ years of experience in digital experiences, mobile interfaces, and web dashboards",
          url: baseUrl,
          image: `${baseUrl}/images/omar.png`,
          sameAs: [
            "https://www.linkedin.com/in/omarmokhtar22/",
            "https://www.behance.net/Omar_Mokhtar",
            "https://github.com/omarmok",
          ],
          worksFor: {
            "@type": "Organization",
            name: "Confidential Government",
          },
          hasCredential: {
            "@type": "EducationalOccupationalCredential",
            name: "Google Professional UX Certificate",
          },
        },
      },
      "/About": {
        title: "Experience & Career - Omar Mokhtar | UX Design Lead",
        description:
          "Professional experience and career journey of Omar Mokhtar, UX Design Lead. View certifications, skills, and 17+ years of design expertise.",
        keywords:
          "UX Designer Experience, Career Journey, Design Certifications, UI/UX Skills, Professional Portfolio",
        canonical: `${baseUrl}/About`,
        ogImage: `${baseUrl}/images/omar.png`,
        ogLocale: "en_US",
        language: "English",
      },
      "/Blog": {
        title: "UI/UX Design Blog - Omar Mokhtar | Design Insights & Tips",
        description:
          "Latest insights and thoughts on UI/UX design, web development, and user experience. Expert articles on design thinking, empathy, and SVG optimization.",
        keywords:
          "UX Design Blog, UI/UX Articles, Design Thinking, User Experience Tips, SVG Optimization, Design Empathy",
        canonical: `${baseUrl}/Blog`,
        ogImage: `${baseUrl}/images/blog-hero.jpg`,
        ogLocale: "en_US",
        language: "English",
      },
      "/Projects": {
        title:
          "UX/UI Design Portfolio - Omar Mokhtar | Case Studies & Projects",
        description:
          "Portfolio of UI/UX design projects and case studies by Omar Mokhtar. Government projects, web applications, and mobile interfaces.",
        keywords:
          "UX Portfolio, UI Design Projects, Case Studies, Government Projects, Web Applications, Mobile Design",
        canonical: `${baseUrl}/Projects`,
        ogImage: `${baseUrl}/images/projects-hero.jpg`,
        ogLocale: "en_US",
        language: "English",
      },
      "/ContactForm": {
        title: "Contact Omar Mokhtar | UX Design Lead | Get In Touch",
        description:
          "Get in touch with Omar Mokhtar, UX Design Lead for collaboration, consultation, and design inquiries. Available for freelance and project work.",
        keywords:
          "Contact UX Designer, Design Consultation, Freelance UX Designer, Design Services, Collaboration",
        canonical: `${baseUrl}/ContactForm`,
        ogImage: `${baseUrl}/images/omar.png`,
        ogLocale: "en_US",
        language: "English",
      },
      "/CaseStudy": {
        title: "Student Internal Portal Case Study | Omar Mokhtar",
        description:
          "Detailed case study of the Student Internal Portal built for Majmaah University with Figma prototypes and user research.",
        keywords:
          "Student Portal Case Study, Majmaah University, UX Case Study, Figma Showcase",
        canonical: `${baseUrl}/CaseStudy`,
        ogImage: `${baseUrl}/images/casstudymain.png`,
        ogLocale: "en_US",
        language: "English",
      },
      default: {
        title: "Omar Mokhtar - UX Design Lead",
        description:
          "UI/UX Designer with 17+ years of experience in digital experiences and mobile interfaces",
        keywords: "UX Designer, UI Designer, User Experience",
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
        work: "الأعمال",
        blog: "المدونة",
        contact: "تواصل",
      },
      brand: "UI/UX Designer",
      logoAlt: "شعار عمر مختار الشخصي",
      languageToggleButton: "English",
      languageToggleAria: "التبديل إلى اللغة الإنجليزية",
    },
    footer: {
      madeWithLove: "صُنع بحب من الصفر بواسطة © عمر مختار",
      ariaLabel: "زيارة موقع عمر مختار الشخصي",
    },
    loader: {
      loading: "جاري التحميل…",
    },
    audio: {
      playLabel: "تشغيل وصف ملخص صوتي",
      pauseLabel: "إيقاف تشغيل الوصف الصوتي المختصر",
      playButton: "استمع إلى ملخصي",
      pauseButton: "إيقاف",
      fallbackText: "المتصفح لا يدعم تشغيل الصوت.",
    },
    home: {
      hero: {
        role: "قائد تجربة المستخدم وعمليات التصميم في جهة حكومية",
        certificationBadge: "معتمد من جوجل في تصميم تجربة المستخدم",
        certificationTitle: "شهادة جوجل في تصميم تجربة المستخدم",
        downloadButton: "تحميل السيرة الذاتية",
        downloadTitle: "تحميل سيرة عمر مختار الذاتية من Google Drive",
      },
      paragraphs: [
        {
          text: "أمتلك أكثر من 17 عامًا من الخبرة كمصمم واجهات وتجربة مستخدم، أتخصص في التجارب الرقمية والواجهات المحمولة ولوحات المعلومات الديناميكية.",
          tooltip:
            "أمتلك أكثر من 17 عامًا من الخبرة كمصمم واجهات وتجربة مستخدم، أتخصص في التجارب الرقمية والواجهات المحمولة ولوحات المعلومات الديناميكية.",
        },
        {
          text: "طوال مسيرتي المهنية، عملت مع مؤسسات مشهورة ووزارات حكومية ومؤسسات أكاديمية مرموقة.",
          tooltip:
            "طوال مسيرتي المهنية، عملت مع مؤسسات مشهورة ووزارات حكومية ومؤسسات أكاديمية مرموقة.",
        },
        {
          text: "أتولى قيادة مبادرات إعادة تصميم شاملة، وأحوّل الأفكار إلى حلول ملموسة بدءًا من التفكير الأولي وحتى التنفيذ، مع الاعتماد على الرسم السريع والهياكل السلكية الدقيقة والنماذج الأولية عالية الجودة.",
          tooltip:
            "أتولى قيادة مبادرات إعادة تصميم شاملة، وأحوّل الأفكار إلى حلول ملموسة بدءًا من التفكير الأولي وحتى التنفيذ، مع الاعتماد على الرسم السريع والهياكل السلكية الدقيقة والنماذج الأولية عالية الجودة.",
        },
        {
          text: "أتعاون مع المحللين والمطورين ومختبري ضمان الجودة لضمان أن تتحول تصميماتنا إلى منتجات سهلة الاستخدام ومتوافقة تمامًا مع أهداف المشروع.",
          tooltip:
            "أتعاون مع المحللين والمطورين ومختبري ضمان الجودة لضمان أن تتحول تصميماتنا إلى منتجات سهلة الاستخدام ومتوافقة تمامًا مع أهداف المشروع.",
        },
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
      downloadTitle: "تحميل سيرة عمر مختار الذاتية من Google Drive",
      videoLink: "يمكنك معرفة المزيد عني من خلال هذا الفيديو",
      emptyExperience: "بيانات الخبرة غير متوفرة حاليًا.",
    },
    certifications: {
      title: "الشهادات",
      description: "أفضل الاستثمار في التعلم الذاتي لتعزيز خبراتي.",
      showCredential: "عرض الشهادة",
      showCredentialTitle: "عرض الشهادة",
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
            "صلي الله عليه وسلم",
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
      title: "الأعمال",
      description: [
        "أنا متحمس دائمًا لتعلم تقنيات جديدة وتوسيع مهاراتي.",
        "كل مشروع عملت عليه، سواء منفردًا أو مع فرق، علمني شيئًا ذا قيمة.",
        "أحيانًا أطبق هذه الدروس مباشرة، وأحيانًا تقيّدني التقنيات المستخدمة في بيئة العمل.",
        "تأثر أسلوبي بهذه الأدوات، لكنه شجعني أيضًا على استكشاف ما هو أبعد من تلك الحدود.",
      ],
      descriptionTooltip:
        "أنا متحمس دائمًا لتعلم تقنيات جديدة وتوسيع مهاراتي. كل مشروع عملت عليه، سواء منفردًا أو مع فرق، علمني شيئًا ذا قيمة. أحيانًا أطبق هذه الدروس مباشرة، وأحيانًا تقيّدني التقنيات المستخدمة في بيئة العمل. تأثر أسلوبي بهذه الأدوات، لكنه شجعني أيضًا على استكشاف ما هو أبعد من تلك الحدود.",
      caseStudy: {
        title: "بوابة الطالب الداخلية",
        intro:
          "أصبحت البوابات الرقمية ضرورة ملحة في التعليم العالي. من هذا المنطلق، اقترحت جامعة المجمعة إنشاء بوابة داخلية للطلاب تتميز بما يلي:",
        tooltip:
          "أصبحت البوابات الإلكترونية ضرورة ملحة في مجال التعليم والتعليم العالي: ومن هذا المنطلق اقترحت جامعة المجمعة إنشاء بوابة داخلية للطلاب تتميز بما يلي: الدخول الموحد تقديم أكثر من 15 خدمة الاطلاع على الأخبار والفعاليات التي أعلن عنها الوصول السريع للجامعة: تقديم الطلبات عبر أنظمة الجامعة المختلفة وجمعها في مكان واحد. مراجعة دروسهم وجداول الامتحانات.",
        features: [
          "دخول موحد",
          "توفير أكثر من 15 خدمة",
          "عرض الأخبار والفعاليات المعلنة",
          "وصول سريع: تقديم الطلبات عبر أنظمة الجامعة المختلفة وجمعها في مكان واحد.",
          "مراجعة الدروس وجداول الامتحانات.",
        ],
        closing:
          "تجمع البوابة الخدمات المهمة للطلاب في مكان واحد حتى يسهل عليهم متابعة الطلبات والإعلانات والجداول.",
        button: "دراسة حالة",
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
      projectLinkAria: "فتح تفاصيل مشروع {{project}} في علامة تبويب جديدة",
    },
    caseStudyPage: {
      iframeTitle: "دراسة حالة في فيجما",
      back: "العودة إلى المشاريع",
      backAria: "الرجوع إلى صفحة المشاريع",
      checkWebsite: "تفقّد الموقع",
      checkWebsiteAria: "عرض النموذج الحي لبوابة الطالب الداخلية",
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
      whatsapp: "تواصل معي عبر واتساب",
      whatsappAria: "افتح محادثة واتساب مع عمر مختار",
      successAlert: "✅ تم إرسال الرسالة بنجاح!",
      failureAlert:
        "❌ فشل إرسال الرسالة، يرجى إعادة توصيل Gmail أو التحقق من الإعدادات.",
    },
    meta: {
      "/": {
        title: "عمر مختار - قائد تصميم تجربة المستخدم | خبرة أكثر من 17 عامًا",
        description:
          "عمر مختار قائد تصميم تجربة المستخدم بخبرة تزيد عن 17 عامًا في التجارب الرقمية والواجهات المحمولة ولوحات المعلومات. معتمد من جوجل في تصميم تجربة المستخدم.",
        keywords:
          "مصمم تجربة المستخدم, مصمم واجهات المستخدم, تجربة المستخدم, تصميم المحمول, لوحات المعلومات, السعودية, مشاريع حكومية",
        canonical: baseUrl,
        ogImage: `${baseUrl}/images/omar.png`,
        ogLocale: "ar_SA",
        language: "Arabic",
        structuredData: {
          "@context": "https://schema.org",
          "@type": "Person",
          name: "عمر مختار",
          jobTitle: "UX Design Lead",
          description:
            "قائد تصميم تجربة المستخدم بخبرة أكثر من 17 عامًا في التجارب الرقمية والواجهات المحمولة ولوحات المعلومات",
          url: baseUrl,
          image: `${baseUrl}/images/omar.png`,
          sameAs: [
            "https://www.linkedin.com/in/omarmokhtar22/",
            "https://www.behance.net/Omar_Mokhtar",
            "https://github.com/omarmok",
          ],
          worksFor: {
            "@type": "Organization",
            name: "Confidential Government",
          },
          hasCredential: {
            "@type": "EducationalOccupationalCredential",
            name: "Google Professional UX Certificate",
          },
        },
      },
      "/About": {
        title: "الخبرة والمسار المهني - عمر مختار | قائد تصميم تجربة المستخدم",
        description:
          "مسار الخبرة المهنية لعمر مختار، قائد تصميم تجربة المستخدم. اكتشف الشهادات والمهارات وتجربة التصميم التي تمتد لأكثر من 17 عامًا.",
        keywords:
          "خبرة مصمم UX, المسار المهني, شهادات التصميم, مهارات UI/UX, الملف المهني",
        canonical: `${baseUrl}/About`,
        ogImage: `${baseUrl}/images/omar.png`,
        ogLocale: "ar_SA",
        language: "Arabic",
      },
      "/Blog": {
        title: "مدونة تصميم UX/UI - عمر مختار | رؤى ونصائح",
        description:
          "أحدث الرؤى والأفكار حول تصميم UX/UI، وتطوير الويب، وتجربة المستخدم. مقالات تخصصية في التفكير التصميمي، التعاطف، وتحسين SVG.",
        keywords:
          "مدونة UX, مقالات تجربة المستخدم, التفكير التصميمي, تحسين SVG, التعاطف",
        canonical: `${baseUrl}/Blog`,
        ogImage: `${baseUrl}/images/blog-hero.jpg`,
        ogLocale: "ar_SA",
        language: "Arabic",
      },
      "/Projects": {
        title: "محفظة تصميم UX/UI - عمر مختار | دراسات حالة ومشاريع",
        description:
          "محفظة مشاريع تصميم UX/UI ودراسات حالة لعمر مختار. مشاريع حكومية، تطبيقات الويب، وواجهات الجوال.",
        keywords:
          "محفظة تصميم, مشاريع واجهات المستخدم, دراسات حالة, مشاريع حكومية, تطبيقات الويب, تصميم الجوال",
        canonical: `${baseUrl}/Projects`,
        ogImage: `${baseUrl}/images/projects-hero.jpg`,
        ogLocale: "ar_SA",
        language: "Arabic",
      },
      "/ContactForm": {
        title: "تواصل مع عمر مختار | قائد تصميم تجربة المستخدم",
        description:
          "تواصل مع عمر مختار للتعاون أو الاستشارات أو مشروعات التصميم. متاح للعمل الحر والاستشارات.",
        keywords:
          "تواصل مع مصمم UX, استشارات التصميم, مصمم UX حر, خدمات التصميم, تعاون",
        canonical: `${baseUrl}/ContactForm`,
        ogImage: `${baseUrl}/images/omar.png`,
        ogLocale: "ar_SA",
        language: "Arabic",
      },
      "/CaseStudy": {
        title: "دراسة حالة بوابة الطالب الداخلية | عمر مختار",
        description:
          "دراسة حالة مفصلة لبوابة الطالب الداخلية بجامعة المجمعة مع نماذج فيجما وأبحاث المستخدم.",
        keywords:
          "دراسة حالة بوابة الطالب, جامعة المجمعة, UX Case Study, فيجما",
        canonical: `${baseUrl}/CaseStudy`,
        ogImage: `${baseUrl}/images/casstudymain.png`,
        ogLocale: "ar_SA",
        language: "Arabic",
      },
      default: {
        title: "عمر مختار - قائد تصميم تجربة المستخدم",
        description:
          "مصمم واجهات وتجربة المستخدم بخبرة أكثر من 17 عامًا في التجارب الرقمية والواجهات المحمولة.",
        keywords: "مصمم UX, مصمم واجهات المستخدم, تجربة المستخدم",
        canonical: baseUrl,
        ogImage: `${baseUrl}/images/omar.png`,
        ogLocale: "ar_SA",
        language: "Arabic",
      },
    },
    data: localizedData.ar,
  },
};
